import React from 'react';
import './Home.css';
import bot from "../../assets/orange_robot_1 1.png";
import star from "../../assets/star.png";
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";
import { Link } from 'react-router-dom';
import StarRating from './starRating';

const Home = () => {
    const openModal = (event) => {
        event.preventDefault();
        document.getElementById('my_modal_4').showModal();
    };

    const closeModal = (event) => {
        event.preventDefault();
        document.getElementById('my_modal_4').close();
    }; 
    return (
        <div className="relative font-['Inter']">
            <div className='flex flex-col md:flex-row justify-between items-center px-6 md:px-20 gradient-background pt-16 md:pt-32'>
                <div className='text-center md:text-left mb-6 md:mb-0'>
                    <h2 className='text-3xl md:text-6xl text-white font-semibold'>Connect with your <br />
                        Campus through</h2>
                    <h2 className='text-3xl md:text-6xl text-yellow-400 font-semibold' >UniBot</h2>

                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-3xl bg-white text-black mt-6 md:mt-10 border-none hover:text-white" onClick={openModal}>Start Chat</button>

                </div>
                <img src={bot} alt="bot" className="w-64 md:w-auto" />
            </div>
            {/* 
            
                lower part 
            
            */}
            <div className='px-6 md:px-20 text-black py-16 md:py-32' style={{ backgroundColor: '#EEF5FF' }}>
                <h2 className="text-stone-900 text-3xl md:text-5xl font-bold font-['Inter'] leading-tight mb-10">What Students Say</h2>
                {/*   card parent div  */}
                <div className='flex flex-col md:flex-row justify-between gap-8'>

                    {/* card 1 */}
                    <div className="card rounded-lg bg-white shadow-xl px-4">
                        <div className="card-body">
                            <h2 className="card-title"><StarRating rating={5}/></h2>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className='flex gap-5'>
                                <div className="avatar">
                                    <div className="w-16 h-16 rounded-full overflow-hidden">
                                        <img src={t1} alt="avatar" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold leading-tight">Janusz Mokrzycki</h2>
                                    <p className="text-neutral-400 text-base font-normal">Brand Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="card rounded-lg bg-white shadow-xl px-4">
                        <div className="card-body">
                            <h2 className="card-title"><StarRating rating={4}/></h2>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className='flex gap-5'>
                                <div className="avatar">
                                    <div className="w-16 h-16 rounded-full overflow-hidden">
                                        <img src={t2} alt="avatar" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold leading-tight">Janusz Mokrzycki</h2>
                                    <p className="text-neutral-400 text-base font-normal">Brand Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className="card rounded-lg bg-white shadow-xl px-4">
                        <div className="card-body">
                            <h2 className="card-title"><StarRating rating={3} /></h2>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                            <div className='flex gap-5'>
                                <div className="avatar">
                                    <div className="w-16 h-16 rounded-full overflow-hidden">
                                        <img src={t3} alt="avatar" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold leading-tight">Janusz Mokrzycki</h2>
                                    <p className="text-neutral-400 text-base font-normal">Brand Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-1/2 md:w-96 max-w-5xl text-stone-800 bg-slate-100 text-center">
                        <h3 className="font-bold text-lg">You are not Logged in!</h3>
                        <p className="py-4">Please Log In to access the chat</p>
                        <div className="modal-action flex justify-center">
                            <form>
                                {/* Add event listener to the button */}
                                <button className="btn max-w-5xl w-full bg-cyan-800 text-white text rounded-xl" onClick={closeModal}><Link to="login">Log In</Link></button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>

    );
};

export default Home;
