import React from "react";

interface GotItButtonProps {
  onClick: () => void;
  className?: string
}

const GotItButton: React.FC<GotItButtonProps> = ({ onClick, className }) => {
  return (
    <button
      className={`border bg-gray-800 text-white h-[30px] w-[90px] rounded-[10px] ${className}`}
      onClick={onClick}>Got It</button>
  )
}


export default GotItButton;
