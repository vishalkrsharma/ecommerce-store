'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import axios from 'axios';
import { redirect, useParams, useRouter } from 'next/navigation';

const formSchema = z.object({
  content: z.string().min(1),
  sentiment: z.enum(['GOOD', 'BAD']),
});

type ReviewFormValues = z.infer<typeof formSchema>;

const ReviewForm = ({ userId }: { userId: string | null }) => {
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
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products/${params.productId}/reviews`, { ...data, userId });
      router.refresh();
      form.reset();
      toast.success('Review submitted.');
    } catch (error) {
      toast.error('Something went wrong.');
    } finally {
      router.refresh();
      setLoading(false);
    }
  };

  return (
    <div className='md:w-1/2'>
      <h3 className='font-bold text-3xl'>Write a review</h3>
      <Form {...form}>
        <form
          className='space-y-4 w-full'
          onSubmit={form.handleSubmit(onSubmit)}
        >
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

export default ReviewForm;
