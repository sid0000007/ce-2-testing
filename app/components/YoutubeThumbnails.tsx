import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AutoCarousel from "./Carousel/NewCarousel";

const thumbnails = [
  "/video1.png",
  "/video2.png",
  "/video3.png",
  "/video4.png",
  "/video5.png",
  "/video6.png",
  "/video7.png",
  "/video8.png",
  "/video9.png",
];

const links = [
  "https://youtu.be/LxjaWhvkgKU?si=UT7amlQprbz_e_gN",
  "https://youtu.be/XfQ5mSaIW1I?si=tFOFmI6RFJ_UTZHH",
  "https://youtu.be/NFw-WizIt50?si=RZ32ysW0mAPVUMzP",
  "https://youtu.be/VZIc5jXss-g?si=GfdWKGcI0rYeSB66",
  "https://youtu.be/bOQ8mdbAXEY?si=KPW9fDiWJHftsCHt",
  "https://youtu.be/tKlWUsLLCow?si=t7n4BzdTGDf__7dQ",
  "https://youtu.be/SCIOOlT3KJI?si=RH36CdOYFx5QbHuI",
  "https://youtu.be/Zq5AEc7WJf4?si=UkMYbC_SteA2iUdS",
  "https://youtu.be/IY46OCJVro4?si=sbl7GD5Ru5sqEbTm",
];

export default function YoutubeThumbnails() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <AutoCarousel images={thumbnails} links={links} />;
  }

  return (
    <div className="flex flex-col w-full  justify-center items-center">
      <div className="grid grid-cols-3 space-x-0 max-w-[1200px]   my-6 gap-10 px-36">
        {thumbnails.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href={links[index]} target="_blank" rel="noopener noreferrer">
              <img
                src={src}
                alt="youtube-thumbnails"
                width={250}
                height={250}
                className="rounded-lg mb-2 "
              />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
