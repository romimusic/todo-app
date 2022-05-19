import React from "react";
import ReactDOM from "react-dom";

import '../styles/Modal.css';


function Modal({ children }){
  return ReactDOM.createPortal(
    <div className="moda__container">
      <div className="modal__content">
       { children }
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;