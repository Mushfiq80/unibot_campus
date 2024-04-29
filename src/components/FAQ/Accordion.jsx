import React from 'react';

const Accordion = () => {
    return (
        <div>
            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    How do I access my class schedule?
                </div>
                <div className="collapse-content w-3/4">
                    <p>You can access your class schedule through the university's online portal known as “SIS”. Log in using your Student ID and password and click on Reports and navigate to your My Course Schedule.</p>
                </div>
            </div>
            <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Where can I find Information about campus events?
                </div>
                <div className="collapse-content w-3/4">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How can I connect with student organization?
                </div>
                <div className="collapse-content w-3/4">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                What should I do if I'm having technical issues?
                </div>
                <div className="collapse-content w-3/4">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;