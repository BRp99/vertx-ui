import { MoreVertical } from "lucide-react"
import ProfileBadgeMobile from "./ProfileBadgeMobile"

const MobileHeader = () => {
  return (
    <header className="w-full h-[50px] bg-[#000] flex items-center justify-between px-4 desktop:hidden">
      <div className="flex items-center">
        <ProfileBadgeMobile />
      </div>

      <div className="size-[50px] flex items-center justify-center">
        <img src="mobileH.png" alt="Logo" className="w-8 h-8 rounded-full object-cover" />
      </div>

      <button className="text-white">
        <MoreVertical size={20} />
      </button>
    </header>
  )
}

export default MobileHeader
