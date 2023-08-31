import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

import "./Carousel.scss";
import {
  CAROUSEL322,
  CAROUSEL395,
  CAROUSEL893,
  CAROUSEL945,
  CAROUSEL257,
} from "../../../Constanst/Constanst.Const";

function Carousel() {
  // original: cLogo,
  // thumbnail: cLogo,
  // renderItem: () => (<></>)
  const imagesList = [
    {
      original: CAROUSEL257,
    },
    {
      original: CAROUSEL322,
    },
    {
      original: CAROUSEL395,
    },
    {
      original: CAROUSEL893,
    },
    {
      original: CAROUSEL945,
    },
  ];
  return (
    <div className="be-carousel">
      <ImageGallery
        items={imagesList}
        showFullscreenButton={false}
        isRTL={true}
        showBullets={true}
        showIndex={false}
        showThumbnails={true}
        lazyLoad={true}
        showNav={true}
        showPlayButton={false}
        autoPlay={true}
        slideInterval={5000}
        preventDefaultTouchmoveEvent={true}
        autoSize={true}
      />
    </div>
  );
}

export default Carousel;
