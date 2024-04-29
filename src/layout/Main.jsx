import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    const location = useLocation();

    const renderHeader = !['/login', '/signup','/dashboard'].includes(location.pathname);
    return (
        <div>
            <div className='container mx-auto'>
                {renderHeader && <Header />}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;