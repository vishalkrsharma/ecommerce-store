import prismadb from '@/lib/prismadb';
import { EventData } from '@/types';
import { IncomingHttpHeaders } from 'http';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { Webhook, WebhookRequiredHeaders } from 'svix';

type EventType = 'user.created' | 'user.updated' | '*';

type Event = {
  data: EventData;
  object: 'event';
  type: EventType;
};

const webhookSecret = process.env.WEBHOOK_SECRET || '';

async function handler(request: Request) {
  const payload = await request.json();
  const headersList = headers();
  const heads = {
    'svix-id': headersList.get('svix-id'),
    'svix-timestamp': headersList.get('svix-timestamp'),
    'svix-signature': headersList.get('svix-signature'),
  };
  const wh = new Webhook(webhookSecret);
  let event: Event | null = null;

  try {
    event = wh.verify(JSON.stringify(payload), heads as IncomingHttpHeaders & WebhookRequiredHeaders) as Event;
  } catch (error) {
    console.log('[WEBHOOK]', error);
    return new NextResponse('Internal Error', { status: 400 });
  }

  const eventType: EventType = event.type;
  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { id, first_name, last_name, image_url } = event.data;
    const { email_address } = event.data.email_addresses[0];

    await prismadb.user.upsert({
      where: { externalId: id as string },
      create: {
        externalId: id as string,
        first_name: String(first_name),
        last_name: String(last_name),
        image_url: String(image_url),
        email: email_address,
      },
      update: {
        first_name: String(first_name),
        last_name: String(last_name),
        image_url: String(image_url),
        email: email_address,
      },
    });
  }

  return new NextResponse('[WEBHOOK]: DB UPDATED', { status: 200 });
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
