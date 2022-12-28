import React from 'react';

import HeaderMenu from '@Components/Header/HeaderMenu';
import TablePage from '@Components/TablePage/TablePage';
import Footer from '@Components/Footer/Footer';

const Main = () => (
    <div className="main-page">
        <HeaderMenu/>
        <TablePage/>
        <Footer/>
    </div>
);

export default Main;
