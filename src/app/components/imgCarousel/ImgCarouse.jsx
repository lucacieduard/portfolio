"use client";

import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ImgCarouse = (props) => {
  return (
    <Carousel swipeable={true} showThumbs={false}>
      {props.images.map((image, index) => (
        <div
          style={{
            minHeight: "200px",
            position: "relative",
          }}
          key={index}
        >
          <Image
            src={image}
            alt=""
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImgCarouse;
