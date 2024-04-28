import React from 'react';
import './Home.css';
import bot from "../../assets/orange_robot_1 1.png";
import star from "../../assets/star.png";
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";

const Home = () => {
    return (
        <div className="relative font-['Inter']">
            <div className='flex justify-between items-center px-20 gradient-background pt-32'>
                <div>
                    <h2 className='text-6xl text-white font-semibold'>Connect with your <br/>
                    Campus through</h2>
                    <h2 className='text-6xl text-yellow-400 font-semibold' >UniBot</h2>

                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-3xl bg-white text-black mt-16 border-none hover:text-white">Start Chat</button>

                </div>
                <img src={bot} alt="bot" />


            </div>
            {/* 
            
                lower part 
            
            */}
            <div className='px-20 text-black py-32' style={{ backgroundColor: '#EEF5FF' }}>
                <h2 className="text-stone-900 text-[64px] font-bold font-['Inter'] leading-[76.80px] mb-10">What Students Say</h2>
                {/*   card parent div  */}
                <div className='flex justify-between gap-8'>

                    {/* card 1 */}
                    <div className="card rounded-lg w-96 bg-white shadow-xl px-4">
                        <div className="card-body">
                            <h2 className="card-title ">Stars Later</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className='flex gap-5 mt-4'>
                                <div className="avatar">
                                    <div className="w-16 h-16 rounded-full">
                                        <img src={t1} />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold  leading-loose">Janusz Mokrzycki</h2>
                                    <p className="text-neutral-400 text-base font-normal font-['Inter'] leading-[4px]">Brand Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="card rounded-lg w-96 bg-white shadow-xl px-4">
                        <div className="card-body">
                            <h2 className="card-title">Stars Later</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className='flex gap-5 mt-4'>
                                <div className="avatar">
                                    <div className="w-16 h-16 rounded-full">
                                        <img src={t2} />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold font-['Inter'] leading-loose">Janusz Mokrzycki</h2>
                                    <p className="text-neutral-400 text-base font-normal font-['Inter'] leading-[4px]">Brand Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className="card rounded-lg w-96 bg-white  shadow-xl px-4">
                        <div className="card-body">
                            <h2 className="card-title">Stars Later</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                            <div className='flex gap-5 mt-4'>
                                <div className="avatar">
                                    <div className="w-16 h-16 rounded-full">
                                        <img src={t3} />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold font-['Inter'] leading-loose">Janusz Mokrzycki</h2>
                                    <p className="text-neutral-400 text-base font-normal font-['Inter'] leading-[4px]">Brand Manager</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;