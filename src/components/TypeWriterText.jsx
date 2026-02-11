"use client";
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterText = () => {
    return (
        <div className="my-2">
            <h2 className="text-xl lg:text-3xl font-semibold" aria-live="polite">
                <span className="text-primary">
                    <Typewriter
                        words={["Full Stack Developer", "MERN Stack Developer", "React Developer"]}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h2>
        </div>
    );
};

export default TypewriterText;
