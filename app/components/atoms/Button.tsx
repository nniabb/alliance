import React from 'react';

interface ButtonProps {
    title: string;
}

const ButtonEdit: React.FC<ButtonProps>  = ({title}) => {
    return (
        <button className="border border-gray-500 text-gray-500 h-[30px] w-[100px] rounded-[10px] hover:bg-gray-700 hover:text-white">{title}</button>
    );
}


export default ButtonEdit;