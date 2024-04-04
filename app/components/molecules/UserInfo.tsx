import React from 'react';
import Input from '../atoms/Input';


const UserInfo = ({}) => {
    return(
        <div className='flex flex-col gap-[5px]'>
             <p className="text-gray-500 text-sm mt-[8px]">Email Adress</p>
            <Input/>
            <p className="text-gray-500 text-sm mt-[8px]">Phone Number</p>
            <Input/>
            <p className="text-gray-500 text-sm mt-[8px]">Choose Language</p>
            <Input/>
        </div> 
    )
}



export default UserInfo;