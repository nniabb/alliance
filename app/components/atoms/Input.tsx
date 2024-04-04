import React from 'react';

interface InputProps {
    placeholder: string;
}

const Input: React.FC<InputProps> = ({placeholder}) => {
    return (
        <input 
            placeholder={placeholder}
            className="border-b border-transparent hover:border-gray-500 outline-none w-[250px]" />
    );
}

export default Input; 
