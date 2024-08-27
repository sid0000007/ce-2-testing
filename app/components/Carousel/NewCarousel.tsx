"use client";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AutoCarouselProps {
  images: string[];
  links?: string[];
}

const AutoCarousel: React.FC<AutoCarouselProps> = ({ images, links }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoSliding) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [nextSlide, isAutoSliding]);

  const handleNext = () => {
    setIsAutoSliding(false);
    nextSlide();
  };

  const handlePrev = () => {
    setIsAutoSliding(false);
    prevSlide();
  };

  const handleIndicatorClick = (index: number) => {
    setIsAutoSliding(false);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoSliding) {
      const timeout = setTimeout(() => setIsAutoSliding(true), 10000);
      return () => clearTimeout(timeout);
    }
  }, [isAutoSliding]);

  const renderImage = (index: number) => {
    const img = (
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        className="w-full h-full object-cover"
      />
    );

    if (links && links[index]) {
      return (
        <a href={links[index]} target="_blank" rel="noopener noreferrer">
          {img}
        </a>
      );
    }

    return img;
  };

  return (
    <div className="relative w-full mx-auto lg:w-screen  lg:h-[80vh]">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="w-full h-64 rounded-lg overflow-hidden lg:h-full lg:rounded-none"
        >
          {renderImage(currentIndex)}
        </motion.div>
      </AnimatePresence>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`lg:w-3 lg:h-3 w-2 h-2 rounded-full cursor-pointer border border-white ${
              currentIndex === index ? "bg-white" : "bg-transparent"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;

// import { useCallback, useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface AutoCarouselProps {
//   images: string[];
//   links?: string[];
// }

// const AutoCarousel: React.FC<AutoCarouselProps> = ({ images, links }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoSliding, setIsAutoSliding] = useState(true);

//   const nextSlide = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   }, [images.length]);

//   const prevSlide = useCallback(() => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   }, [images.length]);

//   useEffect(() => {
//     let interval: NodeJS.Timeout;
//     if (isAutoSliding) {
//       interval = setInterval(nextSlide, 5000);
//     }
//     return () => clearInterval(interval);
//   }, [nextSlide, isAutoSliding]);

//   const handleNext = () => {
//     setIsAutoSliding(false);
//     nextSlide();
//   };

//   const handlePrev = () => {
//     setIsAutoSliding(false);
//     prevSlide();
//   };

//   const handleIndicatorClick = (index: number) => {
//     setIsAutoSliding(false);
//     setCurrentIndex(index);
//   };

//   useEffect(() => {
//     if (!isAutoSliding) {
//       const timeout = setTimeout(() => setIsAutoSliding(true), 10000);
//       return () => clearTimeout(timeout);
//     }
//   }, [isAutoSliding]);

//   const renderImage = (index: number) => {
//     const img = (
//       <img
//         src={images[index]}
//         alt={`Slide ${index}`}
//         className="w-full h-full md:h-[100px] object-cover"
//       />
//     );

//     if (links && links[index]) {
//       return (
//         <a href={links[index]} target="_blank" rel="noopener noreferrer">
//           {img}
//         </a>
//       );
//     }

//     return img;
//   };

//   return (
//     <div className="relative w-full mx-auto h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] md:mb-32 mb-10">
//       {" "}
//       {/* Added mb-10 for bottom margin */}
//       <AnimatePresence initial={false} mode="wait">
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -100 }}
//           transition={{ duration: 0.3 }}
//           className="w-full h-full rounded-lg overflow-hidden"
//         >
//           {renderImage(currentIndex)}
//         </motion.div>
//       </AnimatePresence>
//       <button
//         onClick={handlePrev}
//         className="absolute top-1/2 transform -translate-y-1/2 left-2 md:left-4 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring"
//       >
//         <ChevronLeft className="h-6 w-6" />
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute top-1/2 transform -translate-y-1/2 right-2 md:right-4 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring"
//       >
//         <ChevronRight className="h-6 w-6" />
//       </button>
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => handleIndicatorClick(index)}
//             className={`lg:w-3 lg:h-3 w-2 h-2 rounded-full cursor-pointer border border-white ${
//               currentIndex === index ? "bg-white" : "bg-transparent"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AutoCarousel;
