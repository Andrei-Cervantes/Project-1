import React, { useState, useEffect } from "react";

function FeaturedProductsCard({ imageSources, width, height }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * imageSources.length);

    // Set the random index as the initial value for currentIndex and isHovered
    setCurrentIndex(randomIndex);
    setIsHovered(false);

    let interval;

    if (isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
      }, 1250); // Change image every 1.25 seconds (adjust as needed)
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isHovered, imageSources]);

  const cardStyle = {
    width: width + "px",
    height: height + "px",
    border: "1px solid #ccc",
    position: "relative",
    overflow: "hidden",
  };

  const containerStyle = {
    width: `${imageSources.length * 100}%`,
    display: "flex",
    transition: "transform 0.3s ease",
    transform: `translateX(-${(currentIndex / imageSources.length) * 100}%)`,
  };

  const imageStyle = {
    width: 100 / imageSources.length + "%",
    height: "100%",
    objectFit: "contain",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="product-card"
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={containerStyle}>
        {imageSources.map((imageSource, index) => (
          <img key={index} src={imageSource} alt="Product" style={imageStyle} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProductsCard;
