import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const CarDetailsImages = ({ images, make, model }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = (index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div className="grid gap-2 w-full md:w-[700px] ">
      <p className="text-3xl py-2 text-center 1100:hidden">
        {make + " " + model}
      </p>

      <img
        src={images[0]}
        alt={make}
        className=" w-full md:w-[700px] cursor-pointer hover:scale-105 transition-all duration-500"
        onClick={() => openImageViewer(0)}
      />
      <div className="grid md:flex gap-2 w-full md:w-[700px]">
        <img
          src={images[1]}
          alt={make}
          className="w-full  md:w-[228px] cursor-pointer hover:scale-105 transition-all duration-500"
          onClick={() => openImageViewer(1)}
        />
        <img
          src={images[2]}
          alt={make}
          className="w-full  md:w-[228px] cursor-pointer hover:scale-105 transition-all duration-500"
          onClick={() => openImageViewer(2)}
        />
        <img
          src={images[3]}
          alt={make}
          className="w-full  md:w-[228px] cursor-pointer hover:scale-105 transition-all duration-500"
          onClick={() => openImageViewer(3)}
        />
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={true}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default CarDetailsImages;
