"use client"
import React, { useState } from 'react';


const phoneNumberOptions = ['+995', '+34', '+32', '+36']

interface PhoneNumberSelectProps {
  onChange: (value: string) => void
}

const PhoneNumberSelect: React.FC<PhoneNumberSelectProps> = ({ onChange }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('+995')


  return (
    <select className="border border-gray-300 rounded-md px-2 py-1" onChange={(e) => {
      setPhoneNumber(e.target.value);
      onChange(e.target.value);
    }}>
      {phoneNumberOptions.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  )
}


export default PhoneNumberSelect;