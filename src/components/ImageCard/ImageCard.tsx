import React from 'react';
import css from './ImageCard.module.css';
import { ImageCardProps } from './ImageCacd.types';

 const ImageCard: React.FC<ImageCardProps> = ({image, getImageCard, openModal}) => {
  return (
    <div>
      <img
        className={css.img}
        src={image.urls.small}
        alt={image.description}
        onClick={() => {
          getImageCard(image);
          openModal();
        }} />
    </div>
  )
}

export default ImageCard