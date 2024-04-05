"use client";
import UserInfoBox from "./components/organism/UserInfoBox";
import PasswordInfoBox from "./components/organism/PasswordInfoBox";
import WarningBox from "./components/organism/WarningBox";
import { useEffect, useState } from "react";

interface State {
  prompt1: boolean;
  prompt2: boolean;
}

export default function MainPage() {
    const [appLoaded, setAppLoaded] = useState<boolean>(false);
    const [state, setState] = useState<State>({
      prompt1: false,
      prompt2: false,
    })
    function getWarningModals() {
      let box = null;
      if (!state.prompt1) {
        box = (
          <WarningBox
            title="Update Your Information"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellendus facere, modi rerum quis nobis quaerat eaque iure molestiae possimus."
            handleClick={() => {
              localStorage.setItem("prompt1", "true")
              setState((curr) => ({ ...curr, prompt1: true }))
            }}
          />
        )
      } else if (!state.prompt2) {
        box = (
          <WarningBox
            title="Change Your Password"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellendus facere, modi rerum quis nobis quaerat eaque iure molestiae possimus."
            handleClick={() => {
              localStorage.setItem("prompt2", "true")
              setState((curr) => ({ ...curr, prompt2: true }))
            }}
          />
        )
      }
      return (
        <div className="absolute w-screen h-screen flex items-center justify-center bg-[#e1e1e1c2]">
          {box}
        </div>
      )
    }
    useEffect(() => {
      const prompt1 = !!localStorage.getItem("prompt1")
      const prompt2 = !!localStorage.getItem("prompt2")
      setState({ prompt1, prompt2 })
      setAppLoaded(true)
    }, []);
    if (!appLoaded) return null;
    return (
      <div className="flex flex-col md:flex-row items-center justify-center gap-[10px]">
        <UserInfoBox />
        <PasswordInfoBox />
        {(!state.prompt1 || !state.prompt2) && getWarningModals()}
      </div>
    )
}
