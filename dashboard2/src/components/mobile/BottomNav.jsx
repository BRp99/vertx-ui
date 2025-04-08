import { LayoutDashboard, BarChart2, Share2, Bell, Share } from "lucide-react"

const BottomNav = () => {
  const items = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Analytics", icon: BarChart2 },
    { label: "Connect", icon: Share2 },
    { label: "Activity", icon: Bell },
    { label: "Dealroom", icon: Share },
  ]

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#000101] border-t border-[#111] z-50 desktop:hidden">
      <div className="flex justify-between px-6 py-3">
        {items.map(({ label, icon: Icon }) => (
          <div key={label} className="flex flex-col items-center gap-1 text-primary text-xs font-medium">
            <Icon size={22} strokeWidth={2} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BottomNav
