import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';
import { ImageGalleryProps } from "./ImageGallery.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({images, getImageCard, openModal}) => {
  return (
      <ul className={css.galleryList}>
      
        {Array.isArray(images) && images.map((image) => {
          return (
            <li key={image.id} >
              <ImageCard image={image} getImageCard={getImageCard} openModal={openModal} />
           </li>)
        })}
       
      </ul>
  )
}

export default ImageGallery