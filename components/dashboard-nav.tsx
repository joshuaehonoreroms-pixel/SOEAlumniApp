import Link from "next/link"
import { Home, User, Users, Briefcase, GraduationCap, MessageSquare, Calendar, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Home, label: "Home Feed", href: "/dashboard" },
  { icon: User, label: "My Profile", href: "/profile" },
  { icon: Users, label: "Alumni Directory", href: "/alumni" },
  { icon: Briefcase, label: "Opportunities", href: "/opportunities" },
  { icon: GraduationCap, label: "Learning Roadmaps", href: "/learning" },
  { icon: MessageSquare, label: "Messages", href: "/messages" },
  { icon: Calendar, label: "Events", href: "/events" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function DashboardNav() {
  return (
    <nav className="sticky top-16 h-[calc(100vh-4rem)] w-64 flex-shrink-0 border-r border-border bg-card p-4">
      <div className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
