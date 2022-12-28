import React from 'react';
import modalStyles from '../../components/ModalWindow/forModal.css';

const Modal = ({ children }) => (
    <div modalStyles={modalStyles} className="modal active">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
);
export default Modal;
