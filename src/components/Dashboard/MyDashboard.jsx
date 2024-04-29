
import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { MdNorthEast } from "react-icons/md";
import miniGraph from '../../assets/Mini Graph.png';
import progress from '../../assets/trending_up.png'
import { IconBase } from 'react-icons';
import iconFeed from '../../assets/Frame.png'
import ChartStudentUse from '../charts/ChartStudentUse';

const MyDashboard = () => {
    return (
        <div className='bg-gray-100 p-5 rounded-md'>
            <h2>My Dashboard</h2>
            {/* Upper 2 filed  */}
            <div className='flex gap-8'>
                <div className='flex items-center shadow-lg rounded-lg bg-white  pr-4'>
                    <div className="stat max-w-xs "> {/* Add margin-right class */}

                        <div className="stat-title text-stone-800">Total no. of student using unibot</div>
                        <div className="stat-desc flex text-stone-700"><img src={progress} alt="" /> +2.4%</div>
                        <div className="stat-value">7,890</div></div>

                    <img className='' src={miniGraph} alt="" />
                </div>

                <div className='bg-white w-3/4 p-2 text-xs rounded-md '>
                    <h2>Line Chart of student using unibot</h2>
                    <ChartStudentUse></ChartStudentUse>
                    <h3>Total no.</h3>
                </div>
            </div>
            {/* upper 2 filed end */}
            {/* Feedback part  */}
            <div className='my-10'>
                <h2 className='mt-10 flex gap-2'><img src={iconFeed} /> Feedback Data</h2>
                <p className='opacity-50 text-xs'>Access and analyze insightful feedback data from users</p>
                <div className='bg-white pl-10 py-2 rounded-md'>
                    <div className='flex justify-start py-2 font-bold shadow-lg'>
                        <h2 className='w-1/4'>Email</h2>
                        <h2>Comments</h2>
                    </div>
                    <span className='py-2 flex bg-stone-100'>
                        <h3 className='w-1/4'>trungkienspktnd@gamail.com</h3>
                        <p>Streamlined interface greatly improved my chatting experience. Keep up the good work!</p>
                    </span>
                    <span className='py-2 flex'>
                        <h3 className='w-1/4'>tranthuy.nute@gmail.com</h3>
                        <p>It simplifies university processes and provides timely assistance tailored to student needs.</p>
                    </span>
                    <span className='py-2 flex bg-stone-100'>
                        <h3 className='w-1/4'>binhan628@gmail.com</h3>
                        <p>it efficiently addresses queries and offers relevant assistance, showcasing the creator's
                            skills and dedication.</p>
                    </span>
                </div>
            </div>
            <div className='bg-white shadow-md rounded p-5'>
                <div className='flex justify-between items-center'>
                    <span className='flex gap-16'>
                        <h2>Weekly Feedback Data</h2>
                        <p>current Week 35,211</p>
                    </span>
                    <span className='flex items-center gap-4'>
                        <h2>Filter Data</h2>
                        <details className="dropdown opacity-80">
                            <summary className="btn btn-ghost border border-gray-900 italic">Weekly <IoMdArrowDropdown className='text-2xl text-cyan-700' /></summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </details>
                    </span>
                </div>
                <div>
                    <span className='flex gap-6'>
                        <ul className='flex flex-col gap-2'>
                            <li>36k</li>
                            <li>27k</li>
                            <li>18k</li>
                            <li>9k</li>
                            <li>0</li>
                        </ul>
                        <img src="" alt="graph" />
                    </span>
                    <div>
                        <ul className='flex justify-around'>
                            <li>Mon</li>
                            <li>Tue</li>
                            <li>Wed</li>
                            <li>Thu</li>
                            <li>Fri</li>
                            <li>Sat</li>
                            <li>Sun</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyDashboard;