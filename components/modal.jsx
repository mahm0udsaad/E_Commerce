import React ,{useState } from "react";
import './style/modal.css'
const Modal = ({isOpen , children , onClose}) => {
 const modalClassName = isOpen ? 'modal-container active':'modal-container'
    
 return ( 
        <div className={modalClassName}>
            <div className="modal-content">
                {children}
                <button onClick={onClose}> Close</button>
            </div>
        </div>
     );
}
 
export default Modal;