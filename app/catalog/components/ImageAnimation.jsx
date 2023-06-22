'use client';
import './styles/imageAnimation.scss';

const ImageAnimation = ({ isActive, images }) => {
  const isAciveStyle = {
    opacity: '1',
  };
  const isInactiveStyle = {
    opacity: '0',
  };
  const handleImagesCount = () => {
    if (images.length >= 2) return !isActive ? isAciveStyle : isInactiveStyle;
    return isAciveStyle;
  };
  handleImagesCount();
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
