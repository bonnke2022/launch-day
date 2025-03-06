"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import X from "@/app/assets/x-twitter-brands.svg";
import Linkedin from "@/app/assets/linkedin-brands (1).svg";
import Facebook from "@/app/assets/facebook-brands (1).svg";
import Instagram from "@/app/assets/instagram-brands-solid.svg";
import { createSelmSchema, CreateSelmType } from "@/lib/types";
import { useMutation } from "@tanstack/react-query";
import { createTask } from "@/lib/action";
import { toast } from "sonner";

const Contact = () => {
  const { mutate } = useMutation({
    mutationFn: (values: CreateSelmType) => createTask(values),
    onSuccess: (data) => {
      if (!data) {
        toast("There was an error", {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
        return;
      }
      toast("You will get notified soon!!");
    },
  });
  function onSubmit(values: CreateSelmType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    mutate(values);
    form.reset();
  }

  const form = useForm<CreateSelmType>({
    resolver: zodResolver(createSelmSchema),
    defaultValues: {
      email: "",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email address"
                  {...field}
                  className="bg-gray-500 text-white py-5 px-4 rounded-l-sm rounded-r-none focus:outline-none focus:ring-0 focus:border-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="default"
          className="cursor-pointer bg-white text-[#333] hover:bg-purple-900 hover:border-purple-900 hover:text-white font-bold rounded-l-none rounded-r-sm py-5 border-y-2 border-white px-4"
        >
          Get notified
        </Button>
      </form>
      <div className="flex items-center gap-4 mt-[-1rem]">
        <Link href="">
          <Image
            src={X}
            alt="twitter"
            width={10}
            height={10}
            className="w-6 h-6"
            unoptimized
            priority
          />
        </Link>
        <Link href="">
          {" "}
          <Image
            src={Linkedin}
            alt="linkedin"
            width={10}
            height={10}
            className="w-6 h-6"
            unoptimized
            priority
          />
        </Link>
        <Link href="">
          {" "}
          <Image
            src={Facebook}
            alt="facebook"
            width={10}
            height={10}
            className="w-6 h-6"
            unoptimized
            priority
          />
        </Link>
        <Link href="">
          {" "}
          <Image
            src={Instagram}
            alt="instagram"
            width={10}
            height={10}
            className="w-6 h-6"
            unoptimized
            priority
          />
        </Link>
      </div>
    </Form>
  );
};

export default Contact;
