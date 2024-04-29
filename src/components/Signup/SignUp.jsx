import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import mobBot from "../../assets/mobilebot1.png";
import GroupSvg from '../../assets/Group.svg';
import bubbleSvg from '../../assets/Bubble.svg';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);

    };
    const openModal = (event) => {
        event.preventDefault();
        document.getElementById('my_modal_4').showModal();
    };

    const closeModal = (event) => {
        event.preventDefault();
        document.getElementById('my_modal_4').close();
    };
    return (
        <div className="bg-white  px-32 text-stone-900 font-['Inter'] flex justify-between items-center">
            <div className='mx-auto w-1/2'>
                <div>
                    <h2 className="text-[32px] font-medium">Sign Up for unibot</h2>
                    <p className="text-base font-normal">Create a free account or <span className='text-cyan-500'><Link to='/login'>log in </Link></span> </p>
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
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="confirmPassword">Confirm Password</label>
                        <div className="relative">
                            <input className="border bg-white border-black w-full py-2 px-3 rounded-md" type={showPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" />
                            <button className="absolute inset-y-0 right-0 px-3 py-2 text-gray-700" onClick={togglePasswordVisibility}>{showPassword ? "Hide" : "Show"}</button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox text-cyan-700" />
                            <span className="ml-2 text-gray-700">I agree to the <a href="#" className="text-cyan-700">terms and conditions</a></span>
                        </label>
                    </div>
                    <button className="w-full mt-4 bg-cyan-700 text-white py-2 px-4 rounded-3xl hover:bg-cyan-600 transition duration-200" onClick={openModal}>Register</button>
                </form>
            </div>
            <div>
                <img src={mobBot} alt="" style={{ zIndex: 10 }} />
            </div>
            <div>
                <img src={GroupSvg} alt="" className="absolute -bottom-10 -right-10 mr-10 mb-10 opacity-40" style={{ zIndex: 0 }} />
                <img src={bubbleSvg} alt="" className="absolute bottom-0 right-0 mr-5 mb-5" style={{ zIndex: 0 }} />

            </div>


            <div>
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-2/4 max-w-5xl bg-slate-100 text-center">
                        <h3 className="font-bold text-lg">Great, now please verify your email</h3>
                        <p className="py-4">We’ve sent a message to abc@test.com with a link to activate your account.</p>
                        <p><small>Didn’t receive an email? Check your spam folder or resend email.</small></p>
                        <div className="modal-action">
                            <form>
                                {/* Add event listener to the button */}
                                <button className="btn" onClick={closeModal}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>

            </div>
        </div>
    );
};

export default SignUp;