'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

interface JobRow {
  id: number;
  title: string;
  company: string;
  postDate: string; // ISO or display
  status: 'Active' | 'Paused' | 'Closed';
  applicants: number;
  urgent?: boolean;
}

export default function JobsListPage() {
  const router = useRouter();

  // Mock data – replace with API data
  const allJobs: JobRow[] = useMemo(
    () => [
      { id: 1, title: 'Senior Frontend Developer', company: 'TechCorp Inc.', postDate: 'Oct 15, 2025', status: 'Active', applicants: 12, urgent: true },
      { id: 2, title: 'Product Manager', company: 'Innovation Labs', postDate: 'Oct 20, 2025', status: 'Active', applicants: 8 },
      { id: 3, title: 'Backend Engineer', company: 'Acme Co', postDate: 'Oct 10, 2025', status: 'Paused', applicants: 3 },
      { id: 4, title: 'QA Automation', company: 'QualityWorks', postDate: 'Oct 11, 2025', status: 'Active', applicants: 4 },
      { id: 5, title: 'Data Analyst', company: 'Datafy', postDate: 'Oct 08, 2025', status: 'Closed', applicants: 20 },
      { id: 6, title: 'UI/UX Designer', company: 'Pixel House', postDate: 'Oct 05, 2025', status: 'Active', applicants: 6 },
      { id: 7, title: 'DevOps Engineer', company: 'CloudOps', postDate: 'Oct 01, 2025', status: 'Active', applicants: 5 },
      { id: 8, title: 'Mobile Developer', company: 'AppNation', postDate: 'Sep 29, 2025', status: 'Paused', applicants: 2 },
    ],
    []
  );

  // Pagination state
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const totalPages = Math.max(1, Math.ceil(allJobs.length / pageSize));
  const pageData = allJobs.slice((page - 1) * pageSize, page * pageSize);

  const goTo = (p: number) => setPage(Math.min(Math.max(1, p), totalPages));

  const StatusPill = ({ status }: { status: JobRow['status'] }) => (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
        status === 'Active'
          ? 'bg-[#e7f7c8] text-[#2f6b00]'
          : status === 'Paused'
          ? 'bg-yellow-100 text-yellow-700'
          : 'bg-red-100 text-red-700'
      }`}
    >
      {status}
    </span>
  );

  return (
    <div className="pt-2 sm:pt-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2f2e0c]">Job Listings</h1>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">Manage all your job postings</p>
        </div>
        <button
          onClick={() => router.push('/recruiter/jobs/add')}
          className="inline-flex items-center gap-2 bg-[#c4e729] hover:bg-[#b8db1f] text-[#2f2e0c] font-semibold px-4 py-2 rounded-lg shadow-sm transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Job
        </button>
      </div>

      {/* Table card */}
      <div className="rounded-xl bg-white border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 text-gray-800 font-semibold">
          All Jobs <span className="text-gray-500">({allJobs.length})</span>
        </div>

        {/* Responsive table wrapper */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Job ID</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Job Title</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Post Date</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Applicants</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {pageData.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50/60">
                  <td className="px-4 py-4 text-sm text-gray-700 font-medium">#{job.id}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3 min-w-[220px]">
                      <div>
                        <div className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                          {job.title}
                          {job.urgent && (
                            <span className="px-2 py-0.5 rounded-full text-xs bg-red-100 text-red-600">Urgent</span>
                          )}
                        </div>
                        <div className="text-xs text-gray-500">{job.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">{job.postDate}</td>
                  <td className="px-4 py-4"><StatusPill status={job.status} /></td>
                  <td className="px-4 py-4 text-sm text-gray-700">{job.applicants}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-end gap-3 text-gray-700">
                      <button className="hover:text-[#592c93]" title="View" onClick={() => router.push(`/recruiter/jobs/${job.id}`)}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="hover:text-[#592c93]" title="Edit" onClick={() => router.push(`/recruiter/jobs/edit/${job.id}`)}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5h2m-1 0v14m7-7H5" />
                        </svg>
                      </button>
                      <button className="hover:text-[#592c93]" title="Applicants" onClick={() => router.push(`/recruiter/jobs/applicants/${job.id}`)}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                      <button className="hover:text-red-600" title="Delete" onClick={() => alert('Delete stub')}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m-7 0V5a2 2 0 012-2h2a2 2 0 012 2v2" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-4 border-t border-gray-100">
          <div className="text-xs sm:text-sm text-gray-600">
            Showing {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, allJobs.length)} of {allJobs.length}
          </div>
          <div className="inline-flex items-center gap-1">
            <button
              onClick={() => goTo(1)}
              disabled={page === 1}
              className="px-3 py-2 border rounded-lg text-sm disabled:opacity-40 hover:border-[#c4e729]"
              aria-label="First page"
            >
              «
            </button>
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              className="px-3 py-2 border rounded-lg text-sm disabled:opacity-40 hover:border-[#c4e729]"
              aria-label="Previous page"
            >
              Prev
            </button>
            <span className="px-3 py-2 text-sm">Page {page} of {totalPages}</span>
            <button
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              className="px-3 py-2 border rounded-lg text-sm disabled:opacity-40 hover:border-[#c4e729]"
              aria-label="Next page"
            >
              Next
            </button>
            <button
              onClick={() => goTo(totalPages)}
              disabled={page === totalPages}
              className="px-3 py-2 border rounded-lg text-sm disabled:opacity-40 hover:border-[#c4e729]"
              aria-label="Last page"
            >
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
