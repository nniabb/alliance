import React from 'react';
import PasswordInfo from '../molecules/PasswordInfo';
import ButtonEdit from '../atoms/Button';


const PasswordInfoBox = ({}) => {
    return (
        <div className='w-full h-[400px] bg-white rounded-[20px] p-[3%]'>
              <div className='flex justify-between mb-[50px]'>
                <p className='text-black text-2xl font-bold'>Password</p>
                <ButtonEdit title='Change'/>
            </div>
            <PasswordInfo/>
        </div>
    )
}

export default PasswordInfoBox; 