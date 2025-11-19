"use client";

import { useRouter } from "next/navigation";

export interface NavItem {
  label: string;
  href?: string;
  icon: React.ReactNode;
  disabled?: boolean;
}

export default function Sidebar({
  activePath,
  onLogout,
}: {
  activePath: string | null;
  onLogout?: () => void;
}) {
  const router = useRouter();

  const navItems: NavItem[] = [
    {
      label: "Dashboard",
      href: "/recruiter/dashboard",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 13h6V7H4v6zm10 0h6V3h-6v10zM4 21h6v-6H4v6zm10 0h6v-8h-6v8z" />
        </svg>
      ),
    },
    {
      label: "Jobs",
      href: "/recruiter/jobs",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
        </svg>
      ),
    },
    {
      label: "Applicants",
      href: "/recruiter/jobs",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      label: "Coupons",
      href: "/recruiter/coupons",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6M15 14l-6-6M4 7h16v10H4z" />
        </svg>
      ),
    },
    {
      label: "Profile",
      href: "/recruiter/basic-info",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A7 7 0 1118.88 6.196 7 7 0 015.12 17.804z" />
        </svg>
      ),
    },
  ];

  const isActive = (href?: string) => href && activePath?.startsWith(href);

  return (
    <aside className="w-72 shrink-0 h-full border-r border-gray-200 bg-white">
      <div className="p-5">
        <div className="px-2 py-3 text-lg font-bold text-[#2f2e0c]">HR Recruiter</div>
        <div className="flex flex-col gap-3 mt-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => item.href && router.push(item.href)}
              disabled={!item.href}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition border ${
                isActive(item.href)
                  ? 'bg-[#c4e729] text-[#2f2e0c] border-[#b8db1f]'
                  : 'bg-white text-gray-800 border-gray-200 hover:border-[#c4e729]'
              } ${item.disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              <span className="text-gray-700">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
              {item.label === 'Coupons' && (
                <span className="ml-auto text-xs text-gray-400">Soon</span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-auto p-5">
        <button
          className="flex items-center gap-2 text-red-500 hover:text-red-600"
          onClick={() => (onLogout ? onLogout() : router.push('/main'))}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
          </svg>
          Logout
        </button>
      </div>
    </aside>
  );
}
