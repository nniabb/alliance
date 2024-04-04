import React from "react";
import GotItButton from "../atoms/GotItButton";


const WarningBox = ({}) => {
    return(
        <div className="border border-gray-50 flex flex-col items-center w-[380px] p-[20px] gap-[25px] bg-white rounded-[15px]">
            <h2 className="text-black text-xl font-bold">Lorem ipsum</h2>
            <p className="text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia excepturi quos ipsa voluptates
             error temporibus magnam consequuntur cupiditate fuga illo modi velit vitae illum repellendus possimus, aliquam vel eum. Ex.
            </p>
            <GotItButton/>
        </div>
    )
}

export default WarningBox;