import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <dialog className="modal__dialog" open={isOpen}>
      {children}
      <button className="modal_button" onClick={onClose}>Close</button>
    </dialog>
  );
};

export default Modal;
