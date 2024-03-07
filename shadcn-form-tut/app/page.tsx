'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const formSchema = z.object({
  email: z.string().email(),
  accountType: z.enum(["personal", "company"]),
  companyName: z.string().optional(),
  password: z.string().min(3),
  passwordConfirm: z.string(),
}).refine((data) => {
  return data.password === data.passwordConfirm;
}, {
  message: "Passwords do not match!",
  path: ["passwordConfirm"],
}).refine((data) => {
  if (data.accountType === "company") {
    return !!data.companyName;
  }

  return true;
} , {
  message: "Company name is required!",
  path: ["companyName"],
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        companyName: "",
        password: "",
        passwordConfirm: "",
      },
  });

  const accountType = form.watch('accountType');

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='max-w-md w-full flex flex-col gap-4'>
          <FormField control={form.control} name='email' render={({field}) => {
            return (
            <FormItem>
              <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Email'
                    type='email'
                    {...field}/>
                </FormControl>
              <FormMessage />
            </FormItem>)
          }} />
          <FormField control={form.control} name='accountType' render={({field}) => {
            return (
            <FormItem>
              <FormLabel>Account Type:</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select an acount type.' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                  <SelectItem value='personal'>Personal</SelectItem>
                  <SelectItem value='company'>Company</SelectItem>
                  </SelectContent>
                </Select>
              <FormMessage />
            </FormItem>)
          }} />
          {accountType === "company" && (
            <FormField control={form.control} name='companyName' render={({field}) => {
              return (
              <FormItem>
                <FormLabel>Company name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Company name'
                      {...field}/>
                  </FormControl>
                <FormMessage />
              </FormItem>)
            }} />
          )}
          <FormField control={form.control} name='password' render={({field}) => {
            return (
            <FormItem>
              <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Password'
                    type='password'
                    {...field}/>
                </FormControl>
              <FormMessage />
            </FormItem>)
          }} />
          <FormField control={form.control} name='passwordConfirm' render={({field}) => {
            return (
            <FormItem>
              <FormLabel>Password Confirm</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Password confirm'
                    type='password'
                    {...field}/>
                </FormControl>
              <FormMessage />
            </FormItem>)
          }} />
          <Button type='submit' className='full-w'>
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
}
