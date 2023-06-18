'use client';
import './styles/imageAnimation.scss';
import { useEffect } from 'react';

const ImageAnimation = ({ isActive, images }) => {
  const isAciveStyle = {
    top: '0',
    left: '0',
    transform: 'translateX(0px)',
    opacity: '1',
  };
  const isInactiveStyle = {
    top: '0',
    left: '0',
    transform: 'translateX(350px)',
    opacity: '0',
  };
  const handleImagesCount = () => {
    if (images.length >= 2) return !isActive ? isAciveStyle : isInactiveStyle;
    return isAciveStyle;
  };
  useEffect(() => {
    handleImagesCount();
  }, [images]);
  return (
    <div className="product-tile__animation-container">
      <img
        className="product-tile__image"
        src={`${images[0]}`}
        alt="Zdjęcie"
        style={handleImagesCount()}
      />
      {images.length >= 2 && (
        <img
          className="product-tile__image product-tile__image--second"
          src={`${images[1]}`}
          alt="Zdjęcie"
          style={isActive ? isAciveStyle : isInactiveStyle}
        />
      )}
    </div>
  );
};

export default ImageAnimation;
