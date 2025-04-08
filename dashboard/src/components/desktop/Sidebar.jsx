import ProfileBadge from "./layout/ProfileBadge"
import { Plus } from "lucide-react"

const Sidebar = () => {
  return (
    <aside className="w-64 bg-background border-r desktop:flex flex-col h-full hidden ">
      <div className="h-[50px] border-b flex items-center">
        <div className="size-[50px] border-r flex items-center justify-center">
          <img src="favicon.png" alt="Logo" className="w-8 h-8 rounded-full object-cover" />
        </div>
        <span className="text-lg font-bold px-4">Vertxlabs, Inc</span>
      </div>

      <div className="flex flex-1">
        <div className="border-r w-[50px] flex flex-col items-center">
          <ProfileBadge />
        </div>
        <nav className="flex-1 px-6 py-[18px] flex flex-col gap-[30px]">
          <NavItem label="Dashboard" />
          <NavItem label="Analytics" active />
          <NavItem label="Connect" />
          <NavItem label="Dealroom" />
          <NavItem label="Profile" />
          <NavItem label="Settings" />
        </nav>
      </div>

      <div className="h-[50px]  flex items-center">
        <div className="size-[50px] border-t border-r flex items-center justify-center">
          <div>
            <Plus />
          </div>
        </div>
      </div>
    </aside>
  )
}

const NavItem = ({ icon, label, active }) => (
  <button className={`flex items-center font-bold ${active ? "" : "text-secondary hover:text-primary"}`}>
    {icon}
    <span>{label}</span>
  </button>
)
export default Sidebar
