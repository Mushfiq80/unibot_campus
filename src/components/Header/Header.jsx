import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import title from '../../assets/Title_UNIBOT.png';
import title1 from '../../assets/colored_UNIBOT.png';
import logo from '../../assets/logo_main.png';
import logo1 from '../../assets/logo_main_colored.png';

const Header = () => {
    const location = useLocation();
    const [logoImage, setLogoImage] = useState(null);
    const [titleImage, setTitleImage] = useState(null);

    // Preload the images
    const preloadImages = () => {
        const logoImg = new Image();
        logoImg.src = logo;
        logoImg.onload = () => setLogoImage(logoImg);

        const titleImg = new Image();
        titleImg.src = title;
        titleImg.onload = () => setTitleImage(titleImg);
    };

    // Call preloadImages when component mounts
    useEffect(() => {
        preloadImages();
    }, []);
    return (
        <div className={`absolute top-0 left-0 right-0 z-10 mx-16 flex justify-between items-center ${location.pathname === '/' ? 'text-white' : 'text-black'}`}>
            <div className='flex justify-between items-center gap-20'>
                <div>
                    <Link to='/'>{location.pathname === '/' ? <img src={logo} alt="logo" /> : <img src={logo1} alt="logo" />}</Link>
                    <Link to='/'>{location.pathname === '/' ? <img src={title} alt="title" /> : <img src={title1} alt="title" />}</Link>
                </div>
                <div>
                    <ul className='flex gap-8'>
                        <Link to='/'>Home</Link>
                        <Link to='about'>About Us</Link>
                        <Link to='faq'>FAQ</Link>
                    </ul>
                </div>
            </div>
            <div className='flex gap-5'>
                <button className="w-1/2 btn btn-ghost rounded-3xl shadow-lg border-none hover:text-white hover:bg-black">Login</button>
                <button className="w-1/2 btn rounded-3xl bg-white text-black border-none hover:text-white">Sign Up</button>
            </div>
        </div>
    );
};

export default Header;