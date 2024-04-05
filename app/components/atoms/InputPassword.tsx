import React from 'react';

interface InputPasswordProps {
    placeholder: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({ placeholder }) => {
    return (
        <input 
            placeholder={placeholder}
            className="border border-gray-500 border-solid hover:border-gray-500 outline-none rounded-[12px] mb-10 bg-transparent w-[300px] h-[35px] text-[14px] placeholder-[12px]::placeholder px-4 py-1"
        />    
    )
}

export default InputPassword;