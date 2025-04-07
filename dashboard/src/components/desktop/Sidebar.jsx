const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#0d0d0d] border-r border-gray-800 flex flex-col">
      <div className="h-[50px] border-b flex items-center space-x-2 px-3">
        <div className="w-8 h-8 bg-white rounded-full" />
        <span className="text-lg font-semibold">Vertxlabs, Inc</span>
      </div>

      <nav className="flex-1 space-y-2 text-sm mt-4 px-3">
        <NavItem label="Dashboard" />
        <NavItem label="Analytics" active />
        <NavItem label="Connect" />
        <NavItem label="Dealroom" />
        <NavItem label="Profile" />
        <NavItem label="Settings" />
      </nav>
    </aside>
  )
}

const NavItem = ({ icon, label, active }) => (
  <div className={`flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer ${active ? "text-white font-medium" : "text-gray-400"}`}>
    {icon}
    <span>{label}</span>
  </div>
)
export default Sidebar
