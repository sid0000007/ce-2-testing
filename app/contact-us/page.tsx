import ContactForm from "@/components/example/contact-form";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className=" min-h-fit  my-4 lg:px-2 px-6  w-full flex flex-col justify-center items-center ">
      <ContactForm />
      <div className="w-full lg:mt-4">
        <span className="text-background mt-24">.</span>
      </div>
    </div>
  );
};

export default page;
