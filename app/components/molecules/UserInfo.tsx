import React, { useState } from 'react';
import Input from '../atoms/Input';
import PhoneNumberSelect from '../atoms/Select';
import ButtonEdit from '../atoms/Button';

interface UserInfoProps {}

const UserInfo: React.FC<UserInfoProps> = ({}) => {
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('+995');
  const [language, setLanguage] = useState<string>('');

  const allInputsFilled = () => {
    return email.trim() !== '' && phoneNumber.trim() !== '' && language.trim() !== '';
  };

  return (
    <div className="flex flex-col gap-[5px]">
      <p className="text-gray-500 text-sm mt-[8px]">Email Address</p>
      <Input placeholder="enter email" onChange={(e) => setEmail(e.target.value)} />
      <p className="text-gray-500 text-sm mt-[8px]">Phone Number</p>
      <div className="flex">
        <PhoneNumberSelect onChange={(value) => setPhoneNumber(value)} />
        <Input placeholder="enter number" onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <p className="text-gray-500 text-sm mt-[8px]">Choose Language</p>
      <Input placeholder="choose language" onChange={(e) => setLanguage(e.target.value)} />
      
      {allInputsFilled() && (
        <div className='flex mt-[20px] ml-[80%]'>
         <ButtonEdit title='save' />
        </div>
      )}
    </div>
  );
};

export default UserInfo;
