import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Main from '@Pages/Main';
import ModalWindow from '@Components/ModalWindow';
import Auth from '@Components/Auth';

const App = () => {
    const navigate = useNavigate();
    const navigateToAuth = () => {
        navigate('/auth');
    };
    return (
        <body>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route
                    path="/auth"
                    element={
                        <div>
                            {window.screen.width > 420 ? <Main /> : <></>}
                            <ModalWindow>
                                <Auth></Auth>
                            </ModalWindow>
                        </div>
                    }
                />
            </Routes>
        </body>
    );
};

export default App;