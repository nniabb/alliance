import UserInfoBox from "./components/organism/UserInfoBox";
import PasswordInfoBox from "./components/organism/PasswordInfoBox";
import WarningBox from "./components/organism/WarningBox";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-[10px]">
    <UserInfoBox/>
    <PasswordInfoBox/>
    {/* <WarningBox/> */}
    </div>
  );
}
