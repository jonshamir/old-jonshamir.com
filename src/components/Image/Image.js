import React, { useState, useEffect, useRef } from "react";
import "./Image.scss";

const Image = ({
  alt,
  aspectRatio = "1:1",
  onLoad = () => null,
  style = {},
  className = "",
  ...rest
}) => {
  const [hasImageLoaded, setHasImageLoaded] = useState(false);
  const [containerHeight, setContainerHeight] = useState(null);
  const containerRef = useRef(null);

  const onImageLoaded = (event) => {
    setHasImageLoaded(true);
    onLoad(event);
  };

  useEffect(() => {
    if (containerRef.current) {
      const [ratioWidth, ratioHeight] = aspectRatio.split(":");
      const height =
        (containerRef.current.offsetWidth / ratioWidth) * ratioHeight;
      setContainerHeight(height);
    }
  }, [containerRef, aspectRatio]);

  return (
    <div
      className={"image-wrapper " + className}
      ref={containerRef}
      style={style}
    >
      <img
        {...rest}
        onLoad={onImageLoaded}
        className={hasImageLoaded ? "image loaded" : "image"}
        alt={alt}
      />
    </div>
  );
};

export default Image;