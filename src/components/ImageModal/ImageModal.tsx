import Modal from 'react-modal';
import css from './ImageModal.module.css';
import React from 'react';
import { ImageModalProps } from './ImageModal.types';

const ImageModal: React.FC<ImageModalProps> = ({isOpen, onClose, card}) => {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      shouldCloseOnEsc={true}
      className={css.modal}
      closeTimeoutMS={50}
      overlayClassName={css.modalOverlay}
      ariaHideApp={false}
    >
      <div className={css.imageModalContainer}>
        <img src={card.urls.regular} alt={card.description} className={css.imageModal} />
        <p>Likes: {card.likes}</p>
        <h2>Author image: {card.user.name}</h2>
      </div>
    </Modal> 
  )
}

export default ImageModal