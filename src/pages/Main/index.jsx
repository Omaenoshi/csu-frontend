import React from 'react';

import HeaderMenu from '@Components/Header/headerMenu';
import TablePage from '@Components/Main/Main';
import headerStyles from '../../components/Header/forHeader.css';
import mainStyles from '../../components/Main/forMain.css';
import footerStyles from '../../components/Footer/forFooter.css';
import Footer from '@Components/Footer/Footer';

const Main = () => (
    <div className="main-page">
        <HeaderMenu headerStyles={headerStyles} />
        <TablePage mainStyles={mainStyles} />
        <Footer footerStyles={footerStyles} />
    </div>
);

export default Main;
