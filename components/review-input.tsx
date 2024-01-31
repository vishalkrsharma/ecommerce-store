'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from './ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form';
import { Input } from './ui/input';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import axios from 'axios';
import { redirect, useParams, useRouter } from 'next/navigation';

const formSchema = z.object({
  content: z.string().min(1),
  sentiment: z.enum(['GOOD', 'BAD']),
});

type ReviewFormValues = z.infer<typeof formSchema>;

const ReviewInput = ({ userId }: { userId: string | null }) => {
  if (!userId) redirect('/sign-in');

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useParams();

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { content: '', sentiment: undefined },
  });

  const onSubmit = async (data: ReviewFormValues) => {
    try {
      setLoading(true);
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/reviews/${params.productId}`, { ...data, userId });
      toast.success('Review submitted.');
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong.');
    } finally {
      router.refresh();
      setLoading(false);
    }
  };

  return (
    <div className='w-1/2'>
      <Form {...form}>
        <form
          className='space-y-8 w-full'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div>
            <FormField
              control={form.control}
              name='sentiment'
              render={({ field }) => (
                <FormItem className='space-y-3'>
                  <FormLabel>Did you like the product</FormLabel>
                  <FormControl>
                    <RadioGroup
                      className='flex flex-col space-y-1'
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='GOOD' />
                        </FormControl>
                        <FormLabel className='font-normal'>Yes</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='BAD' />
                        </FormControl>
                        <FormLabel className='font-normal'>No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='content'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder='Type your review here...'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={loading}
            className='ml-auto'
            type='submit'
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ReviewInput;
