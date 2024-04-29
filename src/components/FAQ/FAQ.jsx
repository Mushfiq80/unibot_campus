import React from 'react';
import Accordion from './Accordion';

const FAQ = () => {
    return (
        <div className="bg-white py-20 px-10 md:px-20 text-stone-900 font-['Heebo']">
            <div className='mx-auto md:w-1/2 text-center'>
                <h2 className="text-3xl md:text-5xl font-bold leading-[42px] md:leading-[67.20px]">Frequently Asked Questions <br />(FAQ) on Unichat</h2>
                <p className="text-neutral-600 text-base md:text-xl font-normal leading-relaxed mb-4 md:mb-8">Find quick answers to common university-related questions, including academic advice, campus resources, and student services</p>
            </div>
            <Accordion></Accordion>
        </div>
    );
};

export default FAQ;
