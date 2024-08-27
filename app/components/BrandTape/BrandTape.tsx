import React from "react";
import "./brandtape.css";
const brands = [
  {
    name: "Mark Weins",
    image: "/brands/brands1.png",
  },
  {
    name: "The Chosen",
    image: "/brands/brands2.png",
  },
  {
    name: "Strange Parts",
    image: "/brands/brands3.png",
  },
  {
    name: "Slapped Ham Mysteries",
    image: "/brands/brands4.png",
  },
  {
    name: "Mark Abroad",
    image: "/brands/brands5.png",
  },
  {
    name: "Retired Working For You",
    image: "/brands/brands6.png",
  },
  {
    name: "Sprount",
    image: "/brands/brands7.png",
  },
  {
    name: "National Geographic",
    image: "/brands/brands8.png",
  },
  {
    name: "Keshet",
    image: "/brands/brands9.png",
  },
  {
    name: "",
    image: "/brands/brands10.png",
  },
  {
    name: "",
    image: "/brands/brands11.png",
  },
  {
    name: "",
    image: "/brands/brands12.png", // VIZIO (no name in screenshot)
  },
  {
    name: "Mark Weins",
    image: "/brands/brands1.png",
  },
  {
    name: "The Chosen",
    image: "/brands/brands2.png",
  },
  {
    name: "Strange Parts",
    image: "/brands/brands3.png",
  },
  {
    name: "Slapped Ham Mysteries",
    image: "/brands/brands4.png",
  },
  {
    name: "Mark Abroad",
    image: "/brands/brands5.png",
  },
  {
    name: "Retired Working For You",
    image: "/brands/brands6.png",
  },
  {
    name: "Sprount",
    image: "/brands/brands7.png",
  },
  {
    name: "National Geographic",
    image: "/brands/brands8.png",
  },
  {
    name: "Keshet",
    image: "/brands/brands9.png",
  },
  {
    name: "",
    image: "/brands/brands10.png",
  },
  {
    name: "",
    image: "/brands/brands11.png",
  },
  {
    name: "",
    image: "/brands/brands12.png", // VIZIO (no name in screenshot)
  },
  {
    name: "Mark Weins",
    image: "/brands/brands1.png",
  },
  {
    name: "The Chosen",
    image: "/brands/brands2.png",
  },
  {
    name: "Strange Parts",
    image: "/brands/brands3.png",
  },
  {
    name: "Slapped Ham Mysteries",
    image: "/brands/brands4.png",
  },
  {
    name: "Mark Abroad",
    image: "/brands/brands5.png",
  },
  {
    name: "Retired Working For You",
    image: "/brands/brands6.png",
  },
  {
    name: "Sprount",
    image: "/brands/brands7.png",
  },
  {
    name: "National Geographic",
    image: "/brands/brands8.png",
  },
  {
    name: "Keshet",
    image: "/brands/brands9.png",
  },
  {
    name: "",
    image: "/brands/brands10.png",
  },
  {
    name: "",
    image: "/brands/brands11.png",
  },
  {
    name: "",
    image: "/brands/brands12.png", // VIZIO (no name in screenshot)
  },
  {
    name: "Mark Weins",
    image: "/brands/brands1.png",
  },
  {
    name: "The Chosen",
    image: "/brands/brands2.png",
  },
  {
    name: "Strange Parts",
    image: "/brands/brands3.png",
  },
  {
    name: "Slapped Ham Mysteries",
    image: "/brands/brands4.png",
  },
  {
    name: "Mark Abroad",
    image: "/brands/brands5.png",
  },
  {
    name: "Retired Working For You",
    image: "/brands/brands6.png",
  },
  {
    name: "Sprount",
    image: "/brands/brands7.png",
  },
  {
    name: "National Geographic",
    image: "/brands/brands8.png",
  },
  {
    name: "Keshet",
    image: "/brands/brands9.png",
  },
  {
    name: "",
    image: "/brands/brands10.png",
  },
  {
    name: "",
    image: "/brands/brands11.png",
  },
  {
    name: "",
    image: "/brands/brands12.png", // VIZIO (no name in screenshot)
  },
  {
    name: "Mark Weins",
    image: "/brands/brands1.png",
  },
  {
    name: "The Chosen",
    image: "/brands/brands2.png",
  },
  {
    name: "Strange Parts",
    image: "/brands/brands3.png",
  },
  {
    name: "Slapped Ham Mysteries",
    image: "/brands/brands4.png",
  },
  {
    name: "Mark Abroad",
    image: "/brands/brands5.png",
  },
  {
    name: "Retired Working For You",
    image: "/brands/brands6.png",
  },
  {
    name: "Sprount",
    image: "/brands/brands7.png",
  },
  {
    name: "National Geographic",
    image: "/brands/brands8.png",
  },
  {
    name: "Keshet",
    image: "/brands/brands9.png",
  },
  {
    name: "",
    image: "/brands/brands10.png",
  },
  {
    name: "",
    image: "/brands/brands11.png",
  },
  {
    name: "",
    image: "/brands/brands12.png", // VIZIO (no name in screenshot)
  },
  {
    name: "Mark Weins",
    image: "/brands/brands1.png",
  },
  {
    name: "The Chosen",
    image: "/brands/brands2.png",
  },
  {
    name: "Strange Parts",
    image: "/brands/brands3.png",
  },
  {
    name: "Slapped Ham Mysteries",
    image: "/brands/brands4.png",
  },
  {
    name: "Mark Abroad",
    image: "/brands/brands5.png",
  },
  {
    name: "Retired Working For You",
    image: "/brands/brands6.png",
  },
  {
    name: "Sprount",
    image: "/brands/brands7.png",
  },
  {
    name: "National Geographic",
    image: "/brands/brands8.png",
  },
  {
    name: "Keshet",
    image: "/brands/brands9.png",
  },
  {
    name: "",
    image: "/brands/brands10.png",
  },
  {
    name: "",
    image: "/brands/brands11.png",
  },
  {
    name: "",
    image: "/brands/brands12.png", // VIZIO (no name in screenshot)
  },
];

const BrandTape = () => {
  return (
    <div className="carousel h-32">
      <div className="carousel-track">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="carousel-item flex flex-col items-center text-sm"
          >
            <img src={brand.image} alt={brand.name || "Brand"} />
            {brand.name && <p>{brand.name}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandTape;
