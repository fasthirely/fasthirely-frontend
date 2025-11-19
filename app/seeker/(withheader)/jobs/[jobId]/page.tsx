'use client';

import { useRouter } from 'next/navigation';

interface JobDetailProps {
  params: {
    jobId: string;
  };
}

export default function JobDetail({ params }: JobDetailProps) {
  const router = useRouter();

  // Mock data - Replace with actual API call
  const jobData = {
    id: params.jobId,
    title: 'Full Stack Engineer',
    company: 'Innovate Labs',
    location: 'Bangalore, India',
    salary: '15-22 LPA',
    experience: '4-6 years',
    jobType: 'Full-time',
    description: 'Join our team as a Full Stack Engineer and work on cutting-edge projects that impact millions of users. We are looking for someone passionate about building scalable applications.',
    responsibilities: [
      'Design and develop robust, scalable, and secure features',
      'Work across the full stack, building highly scalable distributed solutions',
      'Write clean, maintainable code following best practices',
      'Participate in code reviews and mentor junior developers',
      'Contribute to the architecture and design of new and existing systems',
    ],
    skills: ['Node.js', 'React', 'MongoDB', 'AWS'],
    companySize: '500-1000 employees',
    openings: 5,
    postedDate: '2 days ago',
    logo: null, // You can add logo URL here
  };

  const handleApply = () => {
    // TODO: Implement apply functionality
    console.log('Applying for job:', jobData.id);
    // router.push(`/seeker/jobs/${jobData.id}/apply`);
  };

  return (
    <div className="pt-[102px] pb-[100px] bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Jobs Link */}
        {/* <button
          onClick={() => router.push('/seeker/jobs')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#592c93] transition-colors mb-6 text-sm sm:text-base"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Jobs
        </button> */}

        {/* Main Content Card */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-6">
            {/* Company Logo */}
            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#592c93] to-[#7a3fb8] rounded-lg flex items-center justify-center text-white font-bold text-2xl sm:text-3xl shadow-md">
              {jobData.logo ? (
                <img
                  src={jobData.logo}
                  alt={jobData.company}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                jobData.company.charAt(0).toUpperCase()
              )}
            </div>

            {/* Job Title & Company */}
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2f2e0c] mb-2">
                {jobData.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 font-medium mb-4">
                {jobData.company}
              </p>

              {/* Key Metadata */}
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{jobData.location}</span>
                </div>
                <div className="flex items-center gap-2 text-[#592c93] text-sm sm:text-base font-semibold">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{jobData.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span>{jobData.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{jobData.jobType}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Job Description Section */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2f2e0c] mb-4">
              Job Description
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {jobData.description}
            </p>
          </div>

          {/* Key Responsibilities Section */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2f2e0c] mb-4">
              Key Responsibilities
            </h2>
            <ul className="space-y-3">
              {jobData.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#592c93] rounded-full mt-2"></span>
                  <span className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {responsibility}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Skills Section */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2f2e0c] mb-4">
              Required Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {jobData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-100 text-[#592c93] rounded-full text-sm sm:text-base font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Company Info Footer */}
          <div className="bg-purple-50 rounded-lg p-4 sm:p-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-[#592c93] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <div>
                  <p className="text-gray-600 text-xs sm:text-sm">Company Size</p>
                  <p className="text-[#2f2e0c] font-semibold text-sm sm:text-base">
                    {jobData.companySize}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-[#592c93] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <div>
                  <p className="text-gray-600 text-xs sm:text-sm">Openings</p>
                  <p className="text-[#2f2e0c] font-semibold text-sm sm:text-base">
                    {jobData.openings} positions
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-[#592c93] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="text-gray-600 text-xs sm:text-sm">Posted</p>
                  <p className="text-[#2f2e0c] font-semibold text-sm sm:text-base">
                    {jobData.postedDate}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Apply Now Button */}
          <button
            onClick={handleApply}
            className="w-full bg-[#c4e729] hover:bg-[#b8db1f] text-[#592c93] font-bold py-4 px-6 rounded-lg text-lg sm:text-xl transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

