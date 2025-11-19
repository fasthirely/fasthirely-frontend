'use client';

export interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType: 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
  salary?: string;
  postedDate?: string;
  experience?: string;
  description?: string;
  logo?: string;
  isFeatured?: boolean;
  skills?: string[];
}

export default function JobCard({
  id,
  title,
  company,
  location,
  jobType,
  salary,
  postedDate,
  experience,
  description,
  logo,
  isFeatured = false,
  skills = [],
}: JobCardProps) {
  const handleClick = () => {
    window.open(`/seeker/jobs/${id}`, '_blank');
  };

  const formatJobType = (type: string) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return 'Posted today';
    if (diffDays < 7) return `Posted ${diffDays} days ago`;
    if (diffDays < 30) return `Posted ${Math.floor(diffDays / 7)} weeks ago`;
    return `Posted ${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-6 cursor-pointer mb-3 hover:shadow-lg hover:border-[#c4e729] transition-all duration-300 transform hover:-translate-y-1 ${
        isFeatured ? 'ring-2 ring-[#c4e729]' : ''
      }`}
    >
      {/* Header Section - Mobile: Stacked, Desktop: Row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        {/* Left: Company Logo + Info */}
        <div className="flex items-start gap-4 flex-1 min-w-0">
          {/* Company Logo - Hidden on Mobile */}
          <div className="hidden sm:flex flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#592c93] to-[#7a3fb8] rounded-lg items-center justify-center text-white font-bold text-lg sm:text-xl shadow-md">
            {logo ? (
              <img src={logo} alt={company} className="w-full h-full object-cover rounded-lg" />
            ) : (
              company.charAt(0).toUpperCase()
            )}
          </div>

          {/* Job Title & Company */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-2 flex-wrap mb-1">
              <h3 className="text-lg sm:text-xl font-bold text-[#2f2e0c] line-clamp-2 hover:text-[#592c93] transition-colors">
                {title}
              </h3>
              {isFeatured && (
                <span className="flex-shrink-0 px-2 py-1 bg-[#c4e729] text-[#592c93] text-xs font-semibold rounded-full">
                  Featured
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm sm:text-base font-medium mb-2">{company}</p>
            
            {/* Metadata: All info shown - 2 columns on mobile, flex row on desktop */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row sm:items-center gap-3 sm:gap-4 flex-wrap mb-2">
              <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                <svg
                  className="w-4 h-4 flex-shrink-0"
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
                <span className="truncate text-xs sm:text-sm">{location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xs sm:text-sm">{formatJobType(jobType)}</span>
              </div>
              {experience && (
                <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
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
                  <span className="truncate text-xs sm:text-sm">{experience}</span>
                </div>
              )}
              {salary && (
                <div className="flex items-center gap-1.5 text-[#592c93] text-sm font-semibold">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
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
                  <span className="truncate text-xs sm:text-sm">{salary}</span>
                </div>
              )}
            </div>

               {/* Description - Truncated */}
      {description && (
        <p className="text-gray-600 text-sm mt-3 line-clamp-2 sm:line-clamp-3">
          {description}
        </p>
      )}
         {/* Skills Tags */}
         {skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {skills.slice(0, 4).map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
            >
              {skill}
            </span>
          ))}
          {skills.length > 4 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
              +{skills.length - 4} more
            </span>
          )}
        </div>
      )}
          </div>
        </div>

        {/* Right: Salary & Posted Date - Desktop Only */}
        <div className="hidden sm:flex flex-col items-end gap-2 flex-shrink-0">
          {/* {salary && (
            <div className="text-lg font-bold text-[#592c93]">{salary}</div>
          )} */}
          {postedDate && (
            <div className="text-xs text-gray-400">{formatDate(postedDate)}</div>
          )}
        </div>
      </div>

      {/* Footer: Salary & Date on Mobile, Action Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ">
        {/* Mobile: Salary & Date */}
        <div className="flex items-center justify-between sm:hidden">
          {/* {salary && (
            <div className="text-base font-bold text-[#592c93]">{salary}</div>
          )} */}
          {postedDate && (
            <div className="text-xs text-gray-400">{formatDate(postedDate)}</div>
          )}
        </div>

        {/* Action Button */}
        {/* <button
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="w-full sm:w-auto px-6 py-2.5 bg-[#592c93] text-white rounded-lg font-semibold hover:bg-[#4a2578] transition-colors text-sm sm:text-base shadow-md hover:shadow-lg"
        >
          View Details
        </button> */}
      </div>
    </div>
  );
}
