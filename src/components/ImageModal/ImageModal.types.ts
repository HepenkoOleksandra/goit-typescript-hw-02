import { Image } from '../../App';

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  card: Image; 
}