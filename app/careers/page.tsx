import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Head from "next/head";
import "./careers.css";
import TeamCarousel1 from "../components/Carousel/TeamCarousel";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Head>
        <title>Careers at Creator Engine</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Creator Engine. Join our team and work on innovative projects. Apply now!"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Careers at Creator Engine" />
        <meta
          property="og:description"
          content="Explore exciting career opportunities at Creator Engine. Join our team and work on innovative projects."
        />
        <meta property="og:image" content="/career1.jpg" />
        <meta property="og:url" content="https://www.yourdomain.com/careers" />
        <meta name="twitter:title" content="Careers at Creator Engine" />
        <meta
          name="twitter:description"
          content="Explore exciting career opportunities at Creator Engine. Join our team and work on innovative projects."
        />
        <meta name="twitter:image" content="/career1.jpg" />
      </Head>
      <main className="  flex flex-col  w-screen overflow-hidden">
        <div className="m-0 p-0">
          <img
            src="/banner/banner4.jpg"
            className=" lg:h-auto h-[155px]"
            alt=""
          />
        </div>
        <div className="min-h-fit w-screen flex flex-col justify-center px-8 lg:px-16 ">
          <span className="self-start text-2xl lg:text-3xl font-bold mt-10 lg:mt-16 mb-4 lg:mb-8 ">
            Join Our Team
          </span>
          <h2 className="self-start  text-xl px-2 text-left">
            At Creator Engine, we are always on the lookout for specialists in
            <span className="text-teal-400">
              {" "}
              video editing, creative production, graphic and motion design,
              color grading, sound design, post supervision, and more
            </span>{" "}
            . Explore our open positions below or send us an email with your
            showreel and cover letter at{" "}
            <span className="text-teal-400 hover:underline">
              <a href="mailto:career@creatorengine.studio">
                {" "}
                career@creatorengine.studio.
              </a>
            </span>
          </h2>
          <div className="py-6 w-full self-end flex flex-col gap-2 items-center  justify-center">
            <Button className="bg-background  hover:scale-110 transition duration-300 text-xl rounded-full  border-2 hover:bg-background border-teal-400">
              <Link href="https://www.linkedin.com/company/creatorengine/jobs/">
                <span className="gradient-text">
                  Click here to see open positions
                </span>
              </Link>{" "}
            </Button>
            <Button className="bg-background hover:scale-110 transition duration-300 text-xl rounded-full  border-2 hover:bg-background border-teal-400">
              <Link href="/culture">
                <span className="gradient-text">
                  Read more about our culture here
                </span>
              </Link>{" "}
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
