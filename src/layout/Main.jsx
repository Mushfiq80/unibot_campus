import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;