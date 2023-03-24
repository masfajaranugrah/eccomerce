import React from "react";
import GalleyImg from "./GalleryList";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const GalleryCard = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 960: 4 }}>
      <Masonry gutter='1rem' >
      {GalleyImg.map((item, index) => (
          <img src={item} key={index} alt="imhg" className="w-full block rounded-xl"/>
   
      ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default GalleryCard;
