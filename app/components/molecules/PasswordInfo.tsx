import React from "react";
import InputPassword from "../atoms/InputPassword";

const PasswordInfo: React.FC = () => {
    return (
        <div className="flex flex-col">
           <InputPassword placeholder="Current Password"/>
           <InputPassword placeholder="New Password"/>
           <InputPassword placeholder="Repeat New Password"/>
        </div>
    )
}


export default PasswordInfo;