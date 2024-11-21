// "use client";

// import ButtonPrimary from "@/components/common/button/buttonPrimary";
// import SectionHeader from "@/components/common/sectionHeader/sectionHeader";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// // import { cn } from "@/lib/utils";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { useForm } from "react-hook-form";
// import { z } from "zod";

// const FormSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   email: z.string().email({
//     message: "Please, provide a valid email.",
//   }),
//   date: z.date({
//     message: "Please, pick a date for book.",
//   }),
// });

// const ContactForm = () => {
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       username: "",
//       email: "",
//       date: undefined,
//     },
//   });

//   function onSubmit(data: z.infer<typeof FormSchema>) {
//     console.log(data);
//   }

//   return (
//     <div className="my-14 md:my-28 container">
//       <div className="flex flex-col md:flex-row justify-center md:justify-between md:items-center gap-6">
//         {/* book form */}
//         <div className="flex-1">
//           <Form {...form}>
//             <form
//               onSubmit={form.handleSubmit(onSubmit)}
//               className="space-y-5 md:space-y-8"
//             >
//               <FormField
//                 control={form.control}
//                 name="username"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Input
//                         placeholder="Your Name*"
//                         {...field}
//                         className="px-5 py-[10px] h-[50px] rounded-[50px] text-base leading-[22px] text-primary-gray"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Input
//                         placeholder="Your Email*"
//                         type="email"
//                         {...field}
//                         className="px-5 py-[10px] h-[50px] rounded-[50px] text-base leading-[22px] text-primary-gray"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <div className="flex justify-center md:justify-start items-center">
//                 <ButtonPrimary text="Book Now" btnType="submit" />
//               </div>
//             </form>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
"use client";

import ButtonPrimary from "@/components/common/button/buttonPrimary";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: "FirstName must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "LastName must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please, provide a valid email.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Please provide a valid phone number.",
  }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      phone: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div className="my-14 md:my-28 container">
      <div className="flex flex-col md:flex-row justify-center md:justify-between md:items-center gap-6">
        <div className="flex-1">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 md:space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Your First Name*"
                          {...field}
                          className="px-5 py-[10px] h-[50px] rounded-[50px] text-base leading-[22px] text-primary-gray"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Your Last Name*"
                          type="search"
                          {...field}
                          className="px-5 py-[10px] h-[50px] rounded-[50px] text-base leading-[22px] text-primary-gray"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Your Email*"
                          type="email"
                          {...field}
                          className="px-5 py-[10px] h-[50px] rounded-[50px] text-base leading-[22px] text-primary-gray"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Your Phone*"
                          type="tel"
                          {...field}
                          className="px-5 py-[10px] h-[50px] rounded-[50px] text-base leading-[22px] text-primary-gray"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Your Message*"
                          {...field}
                          className="px-5 flex   h-[120px]  text-base leading-[22px] text-primary-gray"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-center md:justify-start items-center">
                <ButtonPrimary text="Book Now" btnType="submit" />
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;