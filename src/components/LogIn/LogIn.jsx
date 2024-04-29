import React, { useState, useEffect } from 'react';
import mobBot from "../../assets/mobilebot1.png";
import { Link } from 'react-router-dom';
import GroupSvg from '../../assets/Group.svg';
import bubbleSvg from '../../assets/Bubble.svg';

const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        // Prevent scrolling when component mounts
        document.body.style.overflow = 'hidden';

        // Re-enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white px-8 sm:px-16 md:px-20 text-stone-900 font-['Inter'] flex flex-col md:flex-row justify-between items-center overflow-auto">
            <div className='mx-auto md:w-1/2 mb-8 md:mb-0'>
                <div>
                    <h2 className="text-2xl sm:text-3xl font-medium">Log in for unibot</h2>
                    <p className="text-base font-normal">Enter your details to login or <span className='text-cyan-500'><Link to='/signup'>sign up </Link></span></p>
                </div>
                <form className='mt-6'>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                        <input className="border bg-white border-black w-full py-2 px-3 rounded-md" type="email" id="email" name="email" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
                        <div className="relative">
                            <input className="border bg-white border-black w-full py-2 px-3 rounded-md" type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter your password" />
                            <button className="absolute inset-y-0 right-0 px-3 py-2 text-gray-700" onClick={togglePasswordVisibility}>{showPassword ? "Hide" : "Show"}</button>
                        </div>
                    </div>
                    <button className="w-full mt-4 bg-cyan-700 text-white py-2 px-4 rounded-3xl hover:bg-cyan-600 transition duration-200">Log In</button>
                </form>
            </div>
            <img src={mobBot} alt="" className="md:ml-8 z-20" />
            <div className="">
                
                <img src={GroupSvg} alt="" className="absolute -bottom-2 right-0 opacity-40 hidden md:block" style={{ zIndex: 0 }} />
                <img src={bubbleSvg} alt="" className="absolute bottom-0 right-0 mr-5 mb-5 hidden md:block" style={{ zIndex: 0 }} />
            </div>
        </div>
    );
};

export default LogIn;
