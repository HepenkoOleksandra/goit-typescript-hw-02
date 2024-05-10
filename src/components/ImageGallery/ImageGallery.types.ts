import { Image } from "../../App";

export interface ImageGalleryProps {
  images: Image[];
  getImageCard: (card: Image) => void;
  openModal: () => void;
}