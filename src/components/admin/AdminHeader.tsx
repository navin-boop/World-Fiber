"use client";

import { useSession } from "next-auth/react";
import { Bell, Menu } from "lucide-react";
import { getInitials } from "@/lib/utils";

interface AdminHeaderProps {
  title: string;
  onMenuClick?: () => void;
}

export default function AdminHeader({ title, onMenuClick }: AdminHeaderProps) {
  const { data: session } = useSession();

  return (
    <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-lg font-bold text-gray-800">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Bell size={18} className="text-gray-500" />
        </button>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#25468F] flex items-center justify-center text-white text-xs font-bold">
            {session?.user?.name ? getInitials(session.user.name) : "A"}
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-medium text-gray-800">{session?.user?.name}</div>
            <div className="text-xs text-gray-400">{session?.user?.role}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
