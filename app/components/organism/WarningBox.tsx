import React from "react";
import GotItButton from "../atoms/GotItButton";

interface WarningBoxProps {
  handleClick: () => void;
  title: string;
  description: string;
}

const WarningBox: React.FC<WarningBoxProps> = ({ handleClick, title, description }) => {
  return (
    <div className="border border-gray-50 flex flex-col items-center w-[380px] p-[20px] gap-[25px] bg-white rounded-[15px]">
      <h2 className="text-black text-xl font-bold">{title}</h2>
      <p className="text-left">{description}</p>
      <GotItButton onClick={handleClick} />
    </div>
  );
};

export default WarningBox;
