// src/components/Toast.js
import React from "react";

const Toast = ({ message, type, onClose }) => {
    
  return (
    <div className={`toast toast-${type}`} onClick={onClose}>
      {message}
    </div>
  );
};

export default Toast;
