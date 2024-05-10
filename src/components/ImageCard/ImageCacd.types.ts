import { Image } from "../../App";

export interface ImageCardProps {
  image: Image;
  getImageCard: (card: Image) => void;
  openModal: () => void;
  }