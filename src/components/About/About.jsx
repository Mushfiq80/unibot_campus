import React from 'react';
import './About.css';
import aboutBot from "../../assets/Image.png";

const About = () => {
    return (
        <div className="element py-40 px-20 flex justify-between font-['Inter']">
            <div className="text-stone-900 " >
                <h2 className="py-4 text-5xl font-bold">About Us</h2>
                <p className="max-w-2xl pb-4 text-xl font-normal leading-loose">Welcome to UniBot, your dedicated virtual assistant for all university-related questions. Whether it's class schedules, campus events, or university policies, UniBot provides quick and accurate answers for a seamless student experience. Start chaUng today and simplify your university journey!</p>

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