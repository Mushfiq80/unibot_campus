import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    const location = useLocation();

    const renderHeader = !['/login', '/signup', '/dashboard'].includes(location.pathname);
    return (
        <div className="px-4 sm:px-0 md:px-0 lg:px-8">
            {renderHeader && <Header />}
            <Outlet />
        </div>
    );
};

export default Main;
