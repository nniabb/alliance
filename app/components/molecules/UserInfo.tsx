import React, { useState } from 'react';
import Input from '../atoms/Input';
import PhoneNumberSelect from '../atoms/Select';
import ButtonEdit from '../atoms/Button';

interface UserInfoProps {}

const UserInfo: React.FC<UserInfoProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('+995')
  const [language, setLanguage] = useState<string>('')

  const allInputsFilled = () => {
    return email.trim() !== '' && phoneNumber.trim() !== '' && language.trim() !== '';
  };

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(selectedCountryCode + value)
  };

  return (
    <div className="flex flex-col gap-[5px]">
      <form className="flex flex-col gap-[5px]">
        <label className="text-gray-500 text-sm mt-[8px]">Email Address</label>
        <Input type='email' placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
        <label className="text-gray-500 text-sm mt-[8px]">Phone Number</label>
        <div className="flex gap-2">
          <PhoneNumberSelect onChange={(value) => setSelectedCountryCode(value)} />
          <Input type='number' placeholder="Enter Number" onChange={(e) => handlePhoneNumberChange(e.target.value)} />
        </div>
        <label className="text-gray-500 text-sm mt-[8px]">Choose Language</label>
        <Input type='text' placeholder="Choose Language" onChange={(e) => setLanguage(e.target.value)} />

        {allInputsFilled() && (
          <div className='flex mt-[20px] ml-[85%]'>
            <ButtonEdit title='save' />
          </div>
        )}
      </form>
    </div>
  );
};

export default UserInfo;

