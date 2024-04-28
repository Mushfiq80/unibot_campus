import React from 'react';
import { Link } from 'react-router-dom';
import title from '../../assets/Title_UNIBOT.png';
import logo from '../../assets/logo_main.png';

const Header = () => {
    return (
        <div className= 'absolute top-0 left-0 right-0 z-10 mx-16 flex justify-between items-center'>
            <div className='flex justify-between items-center gap-20'>
                <div>
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                    <Link to='/'><img src={title} alt="title" /></Link>
                </div>
                <div>
                    <ul className='flex gap-5'>
                        <Link to='\'>Home</Link>
                        <Link to='\'>About Us</Link>
                        <Link to='\'>FAQ</Link>
                    </ul>
                </div>
            </div>
            <div className='flex gap-5'>
                <button className="w-1/2 btn btn-ghost rounded-3xl shadow-lg text-white border-none hover:text-white">Login</button>
                <button className="w-1/2 btn rounded-3xl bg-white text-black border-none hover:text-white">Sign Up</button>
            </div>
        </div>
    );
};

export default Header;