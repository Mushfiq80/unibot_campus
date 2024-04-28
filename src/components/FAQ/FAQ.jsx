import React from 'react';
import Accordion from './Accordion';

const FAQ = () => {
    return (
        <div className="bg-white py-40 px-20 text-stone-900 font-['Heebo']">
            <div className='mx-auto w-1/2 text-center mt'>
                <h2 className="text-5xl font-bold leading-[67.20px]">Frequently Asked Questions <br />(FAQ) on Unichat</h2>
                <p className="text-neutral-600 text-xl font-normal leading-relaxed mb-8">Find quick answers to common university-related quesRons, including academic advice, campus resources, and student services </p>
            </div>
            <Accordion></Accordion>
        </div>
    );
};

export default FAQ;