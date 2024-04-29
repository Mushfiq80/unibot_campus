import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import mobBot from "../../assets/mobilebot1.png";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    };
    return (
        <div className="bg-white py-16 px-32 text-stone-900 font-['Inter'] flex justify-between items-center">
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
                    <button className="w-full mt-4 bg-cyan-700 text-white py-2 px-4 rounded-3xl hover:bg-cyan-600 transition duration-200">Register</button>
                </form>
            </div>
            <div>
                <img src={mobBot} alt="" />
            </div>

        </div>
    );
};

export default SignUp;