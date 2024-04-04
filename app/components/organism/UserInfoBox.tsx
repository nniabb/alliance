import React from 'react';
import UserInfo from '../molecules/UserInfo';
import ButtonEdit from '../atoms/ButtonEdit';

const UserInfoBox = ({}) => {
    return(
        <div className='w-[580px] h-[400px] bg-white rounded-[20px] p-[3%] lg:w-[580px]'>
            <div className='flex justify-between mb-[50px]'>
                <p className='text-black text-2xl font-bold'>User Information</p>
                <ButtonEdit/>
            </div>
            <UserInfo/>
        </div>
    )
}

export default UserInfoBox; 
