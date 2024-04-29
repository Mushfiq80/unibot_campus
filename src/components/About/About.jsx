import React from 'react';
import './About.css';
import aboutBot from "../../assets/Image.png";

const About = () => {
    return (
        <div className="element py-10 sm:py-20 md:py-32 px-5 sm:px-10 md:px-20 flex flex-col sm:flex-row justify-between font-['Inter']">
            <div className="text-stone-900 max-w-lg sm:max-w-none sm:pr-10 md:pr-20">
                <h2 className="py-4 text-3xl sm:text-5xl font-bold">About Us</h2>
                <p className="pb-4 text-lg sm:text-xl font-normal leading-relaxed">Welcome to UniBot, your dedicated virtual assistant for all university-related questions. Whether it's class schedules, campus events, or university policies, UniBot provides quick and accurate answers for a seamless student experience. Start chatting today and simplify your university journey!</p>

                <ul className="steps steps-vertical">
                    <li className="step">Academic Advice</li>
                    <li className="step">University's Clubs Information</li>
                    <li className="step">FAQ Assistance</li>
                    <li className="step">Instant Responses</li>
                    <li className="step">Event Updates</li>
                    <li className="step">Campus Navigation</li>
                </ul>
            </div>
            <div>
                <img className='shadow-lg' src={aboutBot} alt="Smiley-Bot" />
            </div>
        </div>
    );
};

export default About;
