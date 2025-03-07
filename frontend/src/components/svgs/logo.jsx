import React from 'react';

const Logo = (props) => (
    <svg
        aria-hidden="true"
        viewBox="0 0 300 100"
        preserveAspectRatio="xMidYMid meet"
        className={`w-full h-auto ${props.className}`}
        {...props}
    >
        <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="Arial"
            fontSize="36" // Match "Join today." text size
            fontWeight="bold"
            fontStyle="italic"
            fill="white"
            textDecoration="underline"
        >
            SleekSpeak
        </text>
    </svg>
);

export default Logo;
