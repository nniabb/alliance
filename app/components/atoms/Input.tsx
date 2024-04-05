import React from 'react';

interface InputProps {
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const Input: React.FC<InputProps> = ({placeholder, onChange}) => {
    return (
        <input 
            placeholder={placeholder}
            onChange={onChange} 
            className="border-b border-transparent hover:border-gray-500 outline-none w-[250px]" />
    )
}
 
export default Input;
