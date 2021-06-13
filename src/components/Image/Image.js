import React, { useState } from "react";
import { AspectRatio } from "react-aspect-ratio";
import "react-aspect-ratio/aspect-ratio.css";

import "./Image.scss";

const Image = ({ alt, ratio = 1, style = {}, className = "", ...rest }) => {
  const [hasImageLoaded, setHasImageLoaded] = useState(false);

  const onImageLoaded = (event) => {
    setHasImageLoaded(true);
  };

  return (
    <AspectRatio
      className={"imageWrapper " + className}
      ratio={ratio}
      style={style}
    >
      <img
        {...rest}
        onLoad={onImageLoaded}
        className={hasImageLoaded ? "image loaded" : "image"}
        alt={alt}
      />
    </AspectRatio>
  );
};

export default Image;
