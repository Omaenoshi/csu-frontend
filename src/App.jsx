import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '@Pages/Main';
import Auth from '@Components/ModalWindow/Auth';
import Modal from '@Components/ModalWindow/Modal';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route
                path="/auth"
                element={
                    <div>
                        {window.screen.width > 420 ? <Main /> : <></>}
                        <Modal>
                            <Auth></Auth>
                        </Modal>
                    </div>
                }
            />
        </Routes>
    );
};

export default App;
