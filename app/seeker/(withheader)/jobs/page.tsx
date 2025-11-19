'use client';

import SearchBar from "@/app/components/seekar/searchbar";
import { useRouter } from 'next/navigation';
import Filters from "@/app/components/seekar/filters";
import JobCard from "@/app/components/seekar/jobcard";
// import JobsList from "@/app/components/seekar/jobs";

export default function Jobs() {
  const router = useRouter();

  const handleMobileSearchClick = () => {
    router.push('/seeker/search');
  };

  return (
    <div className="pt-[102px] pb-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: Full SearchBar */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

        {/* Mobile: Simple Search Input */}
        <div className="md:hidden">
          <div
            onClick={handleMobileSearchClick}
            className="w-full bg-white rounded-lg shadow-md border border-gray-300 p-4 cursor-pointer hover:border-[#c4e729] transition-colors"
          >
            <div className="flex items-center gap-3">
              <svg
                className="h-5 w-5 text-gray-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="text-gray-500 text-sm">Search jobs, companies, or keywords...</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Jobs List Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Side: Filters Sidebar */}
          <div className="lg:col-span-1">
            <Filters />
          </div>

          {/* Right Side: Jobs List */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold text-gray-800">Jobs List</h1>
              <p className="text-gray-600 mb-5">Job listings will appear here</p>
              <JobCard id="1" title="Software Engineer" company="Google" location="San Francisco, CA" jobType="full-time" salary="100,000" postedDate="2021-01-01" experience="3 years" description="We are looking for a software engineer with 3 years of experience in React.js and Node.js." skills={["React.js", "Node.js", "JavaScript", "HTML", "CSS"]} />
              <JobCard id="2" title="Software Engineer" company="Google" location="San Francisco, CA" jobType="full-time" salary="100,000" postedDate="2021-01-01" experience="3 years" description="We are looking for a software engineer with 3 years of experience in React.js and Node.js." skills={["React.js", "Node.js", "JavaScript", "HTML", "CSS"]} />
              <JobCard id="3" title="Software Engineer" company="Google" location="San Francisco, CA" jobType="full-time" salary="100,000" postedDate="2021-01-01" experience="3 years" description="We are looking for a software engineer with 3 years of experience in React.js and Node.js." skills={["React.js", "Node.js", "JavaScript", "HTML", "CSS"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
