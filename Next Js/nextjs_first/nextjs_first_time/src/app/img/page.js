import Image from "next/image";
import React from "react";

const ImageComponent = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start mt-20 items-center">
      <h2 className="text-6xl mb-5">Image Optimizations</h2>
      <h2>Practice image here</h2>
      <img src="https://i.ibb.co/mC7PwGh/Banner-img.jpg" alt="" width={500} height={500} />
      <h2 className="my-4">Another Image</h2>
      <Image
        src="https://i.ibb.co/mC7PwGh/Banner-img.jpg"
        width={500}
        height={500}
      />
    </div>
  );
};

export default ImageComponent;
