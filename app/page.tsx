import UserInfoBox from "./components/organism/UserInfoBox";
import PasswordInfoBox from "./components/organism/PasswordInfoBox";

export default function Home() {
  return (
    <div className="flex gap-[10px] justify-center">
    <UserInfoBox/>
    <PasswordInfoBox/>
    </div>
  );
}
