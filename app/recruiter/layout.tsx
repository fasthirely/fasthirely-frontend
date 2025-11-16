'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from '@/app/components/recruiter/Sidebar';

export default function RecruiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isBasicInfo = pathname === '/recruiter/basic-info';

  return (
    <div className="min-h-screen bg-[#f6f3ff]">
      {/* Mobile top bar (hidden on basic-info) */}
      {!isBasicInfo && (
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-3 sm:hidden">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 text-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Menu
            </button>
            <div className="text-base font-semibold text-[#2f2e0c]">HR Recruiter</div>
          </div>
        </div>
      )}

      <div className="mx-auto w-full">
        <div className="flex">
          {/* Desktop sidebar (hidden on basic-info) */}
          {!isBasicInfo && (
            <div className="hidden sm:block sticky top-0 h-[100dvh]">
              <Sidebar activePath={pathname} />
            </div>
          )}

          {/* Mobile drawer */}
          {!isBasicInfo && isOpen && (
            <div className="sm:hidden fixed inset-0 z-50 flex">
              <div className="w-72 h-full bg-white shadow-2xl">
                <Sidebar activePath={pathname} />
              </div>
              <div className="flex-1 bg-black/30" onClick={() => setIsOpen(false)} />
            </div>
          )}

          {/* Content */}
          <main className={`flex-1 min-h-[100dvh] p-4 sm:p-8`}>{children}</main>
        </div>
      </div>
    </div>
  );
}

