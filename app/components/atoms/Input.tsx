import React from 'react';

interface InputProps {
    placeholder: string;
    type: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const Input: React.FC<InputProps> = ({placeholder, onChange, type}) => {
    return (
        <input 
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            className="border-b border-transparent hover:border-gray-500 outline-none w-[250px] [&::-webkit-inner-spin-button]:appearance-none" />
    )
}
 

export default Input;

