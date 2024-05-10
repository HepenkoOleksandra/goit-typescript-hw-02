import React from 'react';
import { ErrorMessageProps } from './ErrorMessage.types';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message = "Error" }) => {
  return (
    <div>
      {message}</div>
  )
}

export default ErrorMessage