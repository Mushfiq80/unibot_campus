import { Navbar } from 'flowbite-react';
import React from 'react';
import './DashBoard.css';
import { IoReorderThreeSharp, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import MyDashboard from './MyDashboard';


const DashBoard = () => {
    return (
        <div className="bg-gray-200 shadow-lg text-stone-900 font-['Inter']">
            <div className=" flex justify-between px-8 items-center font-['Inter'] leading-[21px]">
                <div className='flex gap-5 items-center'>
                    <span>
                        <IoReorderThreeSharp className='text-3xl text-black' />
                    </span>
                    <div className="text-stone-900 text-xs font-medium">
                        <h2>Good morning, Mohammed Naeem</h2>
                        <h3 className='opacity-50 text-neutral-800'>Quickly access your recent dashboards</h3>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div>
                        <label className="cursor-pointer grid place-items-center">
                            <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>
                    <AiOutlineQuestionCircle className='text-3xl text-black' />
                    <IoSettingsOutline className='text-3xl text-black' />
                    <button className="btn btn-active btn-sm btn-bg-color text-white rounded border border-transparent">
                        <MdLogout className='text-2xl' />
                        Logout
                    </button>

                </div>
            </div>
            <div className='mx-5 mt-5'>
                <MyDashboard></MyDashboard>
            </div>
        </div>
    );
};

export default DashBoard;