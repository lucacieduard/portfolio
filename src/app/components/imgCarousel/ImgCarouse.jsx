"use client";

import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ImgCarouse = () => {
  return (
    <Carousel swipeable={true}>
      <div style={{ minHeight: "200px" }}>
        <Image
          src="/meTeo.png"
          alt=""
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div style={{ minHeight: "200px" }}>
        <Image
          src="/meTeo.png"
          alt=""
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div style={{ minHeight: "200px" }}>
        <Image
          src="/meTeo.png"
          alt=""
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>
    </Carousel>
  );
};

export default ImgCarouse;
