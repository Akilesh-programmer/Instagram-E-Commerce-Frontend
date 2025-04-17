// src/components/ImageSlider.jsx
import React, { useEffect, useState } from "react";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.avif";
import img3 from "../assets/image3.avif";

const images = [img1, img2, img3];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-64 md:h-96 overflow-hidden relative">
      <div
        className="flex transition-transform duration-700 ease-in-out w-full h-full"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${index * (100 / images.length)}%)`,
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`slide-${i}`}
            className="w-auto h-auto object-cover flex-shrink-0"
            style={{ width: `${100 / images.length}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
