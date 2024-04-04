import React from 'react';
import PasswordInfo from '../molecules/PasswordInfo';
import ButtonChange from '../atoms/ButtonChange';


const PasswordInfoBox = ({}) => {
    return (
        <div className='w-[580px] h-[490px] bg-white rounded-[20px] p-[3%]'>
              <div className='flex justify-between mb-[50px]'>
                <p className='text-black text-2xl font-bold'>Password</p>
                <ButtonChange/>
            </div>
            <PasswordInfo/>
        </div>
    )
}

export default PasswordInfoBox;