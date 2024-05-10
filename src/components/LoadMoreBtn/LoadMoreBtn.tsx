import React from 'react';
import css from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({children, onClick, disabled}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={css.loadMoreBtn}>
      {children}
    </button>
  )
}

export default LoadMoreBtn