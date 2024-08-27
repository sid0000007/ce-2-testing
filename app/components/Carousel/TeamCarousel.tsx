"use client";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface CarouselProps {
  images: string[];
}

const TeamCarousel1: React.FC<CarouselProps> = ({ images }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      const newPosition =
        direction === "left"
          ? scrollPosition - scrollAmount
          : scrollPosition + scrollAmount;

      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="relative w-full mx-auto py-8 bg-background overflow-hidden">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/3 flex-shrink-0 snap-start px-2"
          >
            {index === images.length - 1 ? (
              <Link href="/careers" passHref>
                <div className="bg-background p-2 sm:p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 aspect-w-16 aspect-h-9 cursor-pointer">
                  <img
                    src={src}
                    alt="Join Our Team"
                    className="w-full h-full shadow-md object-cover rounded"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm sm:text-xl font-bold">
                      Join Our Team
                    </span>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="bg-background p-2 sm:p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 aspect-w-16 aspect-h-9">
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="w-full h-full shadow-md object-cover rounded"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 bg-white bg-opacity-50 text-gray-800 p-1 sm:p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 bg-white bg-opacity-50 text-gray-800 p-1 sm:p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
    </div>
  );
};

export default TeamCarousel1;

// "use client";
// import { useRef, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Link from "next/link";

// interface CarouselProps {
//   images: string[];
// }

// const TeamCarousel1: React.FC<CarouselProps> = ({ images }) => {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const scroll = (direction: "left" | "right") => {
//     if (carouselRef.current) {
//       const scrollAmount = carouselRef.current.offsetWidth;
//       const newPosition =
//         direction === "left"
//           ? scrollPosition - scrollAmount
//           : scrollPosition + scrollAmount;

//       carouselRef.current.scrollTo({
//         left: newPosition,
//         behavior: "smooth",
//       });
//       setScrollPosition(newPosition);
//     }
//   };

//   return (
//     <div className="relative w-full mx-auto py-8 bg-background overflow-hidden">
//       <div
//         ref={carouselRef}
//         className="flex overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//       >
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className="w-full sm:w-1/3 flex-shrink-0 snap-start px-2"
//           >
//             {index === images.length - 1 ? (
//               <Link href="/careers" passHref>
//                 <div className="bg-background p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 aspect-w-16 aspect-h-9 cursor-pointer">
//                   <img
//                     src={src}
//                     alt="Join Our Team"
//                     className="w-full h-full shadow-md object-cover rounded"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
//                     <span className="text-white text-xl font-bold">
//                       Join Our Team
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             ) : (
//               <div className="bg-background p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 aspect-w-16 aspect-h-9">
//                 <img
//                   src={src}
//                   alt={`Slide ${index}`}
//                   className="w-full h-full shadow-md object-cover rounded"
//                   loading="lazy"
//                 />
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={() => scroll("left")}
//         className="absolute top-1/2 -translate-y-1/2 left-4 bg-white bg-opacity-50 text-gray-800 p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring"
//       >
//         <ChevronLeft className="h-6 w-6" />
//       </button>

//       <button
//         onClick={() => scroll("right")}
//         className="absolute top-1/2 -translate-y-1/2 right-4 bg-white bg-opacity-50 text-gray-800 p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring"
//       >
//         <ChevronRight className="h-6 w-6" />
//       </button>
//     </div>
//   );
// };

// export default TeamCarousel1;
