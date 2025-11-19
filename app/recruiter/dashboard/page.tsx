'use client';

import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  const stats = [
    {
      label: 'Total Jobs Posted',
      primary: '2',
      sub: 'jobs',
      badge: '2 active',
      icon: (
        <svg className="w-5 h-5 text-[#8cd21a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
    },
    {
      label: 'Total Applicants',
      primary: '4',
      sub: 'candidates',
      badge: 'Across all jobs',
      icon: (
        <svg className="w-5 h-5 text-[#8cd21a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      label: 'Total Rewards Earned',
      primary: '$2,500',
      sub: '',
      badge: 'Recruitment incentives',
      icon: (
        <svg className="w-5 h-5 text-[#8cd21a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: 'Avg. Time to Hire',
      primary: '14',
      sub: 'days',
      badge: 'Industry avg: 21 days',
      icon: (
        <svg className="w-5 h-5 text-[#8cd21a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const quickActions = [
    {
      label: 'Add New Job',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      onClick: () => router.push('/recruiter/jobs/add'),
      highlight: true,
    },
    {
      label: 'View All Jobs',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
      onClick: () => router.push('/recruiter/jobs'),
    },
    {
      label: 'View Applicants',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      onClick: () => router.push('/recruiter/jobs'),
    },
  ];

  return (
    <div className="pt-2 sm:pt-0">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#2f2e0c]">Dashboard</h1>
        <p className="text-gray-600 mt-1 text-sm sm:text-base">Welcome back! Here's your recruitment overview</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {stats.map((card, idx) => (
          <div key={idx} className="rounded-xl bg-white border border-gray-200 shadow-sm p-5">
            <div className="flex items-start justify-between">
              <p className="text-gray-700 font-semibold text-sm sm:text-base">{card.label}</p>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#eef9d6]">{card.icon}</span>
            </div>
            <div className="mt-4">
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-bold text-[#2f2e0c]">{card.primary}</span>
                {card.sub && <span className="text-gray-500 text-sm">{card.sub}</span>}
              </div>
              {card.badge && (
                <p className="text-gray-500 text-xs sm:text-sm mt-1">{card.badge}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="mt-6 sm:mt-8 rounded-xl bg-white border border-gray-200 shadow-sm">
        <div className="px-5 py-4 border-b border-gray-100">
          <p className="text-gray-800 font-semibold">Quick Actions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {quickActions.map((a, i) => (
            <button
              key={i}
              onClick={a.onClick}
              className={`${
                a.highlight
                  ? 'bg-[#c4e729] text-[#2f2e0c]'
                  : 'bg-[#f7f7fb] text-gray-800'
              } rounded-xl p-6 flex items-center justify-center gap-3 shadow-sm hover:shadow transition`}
            >
              <span>{a.icon}</span>
              <span className="font-semibold">{a.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

