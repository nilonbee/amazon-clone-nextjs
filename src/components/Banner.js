import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  return (
    <div className="relative">
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20"/>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        className="z-10"
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
