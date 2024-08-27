import ContactForm from "@/components/example/contact-form";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className=" lg:top-16 top-24 relative lg:px-2 px-6  w-full flex flex-col justify-center items-center ">
      <ContactForm />
      <div className="w-[100vw] h-[20vh]">.</div>
    </div>
  );
};

export default page;
