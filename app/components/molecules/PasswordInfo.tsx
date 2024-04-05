import React, { useState } from "react";
import InputPassword from "../atoms/InputPassword";
import ButtonEdit from "../atoms/Button"; 

const PasswordInfo: React.FC = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [repeatNewPassword, setRepeatNewPassword] = useState("");

    const allFieldsFilled = currentPassword !== "" && newPassword !== "" && repeatNewPassword !== "";

    return (
        <div className="flex flex-col">
            <InputPassword 
                placeholder="Current Password"
                onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <InputPassword 
                placeholder="New Password"
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <InputPassword 
                placeholder="Repeat New Password"
                onChange={(e) => setRepeatNewPassword(e.target.value)}
            />
            {allFieldsFilled && (
                <div className='flex mt-[20px] ml-[85%]'>
                    <ButtonEdit title='save' /> 
                </div>
            )}
        </div>
    )
}

export default PasswordInfo;
