import React, { useEffect, useState } from 'react';
import './DashBoard.css';
import { IoReorderThreeSharp, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import MyDashboard from './MyDashboard';

const DashBoard = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const handleToggle = (event) => {
        if (event.target.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);
    
    return (
        <div className={`dashboard ${theme}`}>
            <div className="header flex flex-col sm:flex-row justify-between px-4 sm:px-8 items-center shadow-xl">
                <div className='flex items-center sm:gap-5'>
                    <IoReorderThreeSharp className='text-3xl' />
                    <div className={`greeting ${theme}`}>
                        <h2 className="text-lg sm:text-xl">Good morning, Mohammed Naeem</h2>
                        <h3 className="text-sm sm:text-base">Quickly access your recent dashboards</h3>
                    </div>  
                </div>
                <div className='flex gap-5'>
                    <div>
                        <label className="cursor-pointer grid place-items-center">
                            <input type="checkbox" value="synthwave" className="toggle" onChange={handleToggle} />
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                    <AiOutlineQuestionCircle className='text-3xl' />
                    <IoSettingsOutline className='text-3xl' />
                    <button className={`btn btn-active btn-sm btn-bg-color text-white rounded border border-transparent ${theme === 'dim' ? 'dim-mode' : ''}`}>
                        <MdLogout className='text-2xl' />
                        Logout
                    </button>
                </div>
            </div>
            <div className='content shadow-xl m-5'>
                <MyDashboard />
            </div>
        </div>
    );
};

export default DashBoard;
