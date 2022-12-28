import React from 'react';

import modalStyles from './styles.css';

const Modal = ({ children }) => (
    <div modalStyles={modalStyles} className="modal active">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
);
export default Modal;
