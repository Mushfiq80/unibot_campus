import React from 'react';
import successLogo from '../../assets/logo_seccess.png'

const Success = () => {
    return (
        <div className='flex flex-col items-center bg-white pb-10'>
            <img src={successLogo} alt="" />
            <h1 className="text-5xl font-bold">Congratulations!</h1>
            <p>You've successfully created your account. Enjoy the chatbot</p>
            <button className="w-1/4 mt-4 bg-cyan-700 text-white py-2 px-4 rounded-3xl hover:bg-cyan-600 transition duration-200">Let’s get started</button>
        </div>
    );
};

export default Success;