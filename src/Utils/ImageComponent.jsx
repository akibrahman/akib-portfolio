import { useState } from "react";
import { PlaceholderImage } from "./PlaceholderImage";
// import { PlaceholderImage } from "./PlaceholderImage.jsx";

export const ImageComponent = ({ src, alt, classes }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div style={{ position: "relative" }} className={classes}>
      {!isLoaded && <PlaceholderImage classes={classes} />}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{
          display: isLoaded ? "block" : "none",
        }}
        className={`${classes}`}
      />
    </div>
  );
};
