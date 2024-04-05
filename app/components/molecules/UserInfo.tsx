"use client"
import React, { useState } from 'react';
import Input from '../atoms/Input';
import PhoneNumberSelect from '../atoms/Select'; 

interface UserInfoProps {}

const UserInfo: React.FC<UserInfoProps> = ({}) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('+995')

  return (
    <div className='flex flex-col gap-[5px]'>
      <p className="text-gray-500 text-sm mt-[8px]">Email Address</p>
      <Input placeholder="enter email"/>
      <p className="text-gray-500 text-sm mt-[8px]">Phone Number</p>
      <div className='flex'>
        <PhoneNumberSelect onChange={(value) => setPhoneNumber(value)} />
        <Input placeholder="enter number"/>
      </div>
      <p className="text-gray-500 text-sm mt-[8px]">Choose Language</p>
      <Input placeholder="choose language" />
    </div>
  )
}


export default UserInfo;  