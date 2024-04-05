import React from 'react';
import UserInfo from '../molecules/UserInfo';
import ButtonEdit from '../atoms/Button';

const UserInfoBox = ({}) => {
    return(
        <div className='w-full h-[400px] bg-white rounded-[20px] p-[3%]'>
            <div className='flex justify-between mb-[50px]'>
                <p className='text-black text-2xl font-bold'>User Information</p>
                <ButtonEdit title='Edit'/>
            </div>
            <UserInfo/>
        </div>
    )
}

export default UserInfoBox; 
