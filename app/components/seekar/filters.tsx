'use client';

import { Formik, Form } from 'formik';

interface FilterFormValues {
  jobPosted: string;
  salaryMin: number;
  salaryMax: number;
  workMode: string[];
  workType: string[];
  workShift: string[];
}

const jobPostedOptions = [
  { value: 'all', label: 'All' },
  { value: 'new', label: 'New' },
  { value: 'last-2-days', label: 'Last 2 days' },
  { value: 'last-24-hours', label: 'last 24 hours' },
  { value: 'last-3-days', label: 'Last 3 days' },
  { value: 'last-7-days', label: 'Last 7 days' },
];

const workModeOptions = [
  { value: 'office', label: 'Office' },
  { value: 'remote', label: 'Remote' },
  { value: 'hybrid', label: 'Hybrid' },
];

const workTypeOptions = [
  { value: 'full-time', label: 'Full-time' },
  { value: 'part-time', label: 'Part-time' },
  { value: 'internship', label: 'Internship' },
];

const workShiftOptions = [
  { value: 'day', label: 'Day' },
  { value: 'night', label: 'Night' },
  { value: 'rotational', label: 'Rotational' },
];

interface FiltersProps {
  onSubmit?: (values: FilterFormValues) => void;
}

export default function Filters({ onSubmit }: FiltersProps) {
  const initialValues: FilterFormValues = {
    jobPosted: 'all',
    salaryMin: 1,
    salaryMax: 20,
    workMode: [],
    workType: [],
    workShift: [],
  };

  const handleSubmit = (values: FilterFormValues) => {
    if (onSubmit) {
      onSubmit(values);
    } else {
      console.log('Filter values:', values);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4 md:p-6">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="space-y-6">
            {/* Filters Header */}
            <h2 className="text-xl font-bold text-gray-800 mb-6">Filters</h2>

            {/* Job Posted */}
            <div>
              <label className="block text-sm font-medium mb-3" style={{ color: '#2f2e0c' }}>
                Job Posted
              </label>
              <div className="grid grid-cols-2 gap-3">
                {jobPostedOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <div className="relative">
                      <input
                        type="radio"
                        name="jobPosted"
                        value={option.value}
                        checked={values.jobPosted === option.value}
                        onChange={(e) => setFieldValue('jobPosted', e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                          values.jobPosted === option.value
                            ? 'bg-[#c4e729] border-2 border-[#c4e729]'
                            : 'bg-white border-2 border-gray-300'
                        }`}
                      >
                        {values.jobPosted === option.value && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-medium" style={{ color: '#2f2e0c' }}>
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Salary Range (LPA) */}
            <div>
              <label className="block text-sm font-medium mb-4" style={{ color: '#2f2e0c' }}>
                Salary Range (LPA)
              </label>
              <div className="space-y-4">
                {/* Range Display */}
                <div className="flex justify-between text-sm font-medium" style={{ color: '#2f2e0c' }}>
                  <span>₹{values.salaryMin} LPA</span>
                  <span>₹{values.salaryMax} LPA</span>
                </div>

                {/* Dual Range Slider */}
                <div className="relative h-2">
                  <div className="absolute h-2 bg-gray-200 rounded-full w-full"></div>
                  
                  {/* Active Range */}
                  <div
                    className="absolute h-2 bg-[#c4e729] rounded-full"
                    style={{
                      left: `${((values.salaryMin - 1) / (20 - 1)) * 100}%`,
                      width: `${((values.salaryMax - values.salaryMin) / (20 - 1)) * 100}%`,
                    }}
                  ></div>

                  {/* Min Handle */}
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={values.salaryMin}
                    onChange={(e) => {
                      const newMin = parseInt(e.target.value);
                      if (newMin <= values.salaryMax) {
                        setFieldValue('salaryMin', newMin);
                      }
                    }}
                    className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer"
                    style={{
                      zIndex: values.salaryMin > values.salaryMax - 1 ? 3 : 2,
                    }}
                  />

                  {/* Max Handle */}
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={values.salaryMax}
                    onChange={(e) => {
                      const newMax = parseInt(e.target.value);
                      if (newMax >= values.salaryMin) {
                        setFieldValue('salaryMax', newMax);
                      }
                    }}
                    className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer"
                    style={{
                      zIndex: values.salaryMax <= values.salaryMin + 1 ? 3 : 2,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Work Mode */}
            <div>
              <label className="block text-sm font-medium mb-3" style={{ color: '#2f2e0c' }}>
                Work Mode
              </label>
              <div className="space-y-3">
                {workModeOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        name="workMode"
                        value={option.value}
                        className="sr-only"
                        checked={values.workMode.includes(option.value)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          if (e.target.checked) {
                            setFieldValue('workMode', [...values.workMode, option.value]);
                          } else {
                            setFieldValue(
                              'workMode',
                              values.workMode.filter((m) => m !== option.value)
                            );
                          }
                        }}
                      />
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                          values.workMode.includes(option.value)
                            ? 'bg-[#c4e729]'
                            : 'bg-white border-2 border-gray-300'
                        }`}
                      >
                        {values.workMode.includes(option.value) && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-medium" style={{ color: '#2f2e0c' }}>
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Work Type */}
            <div>
              <label className="block text-sm font-medium mb-3" style={{ color: '#2f2e0c' }}>
                Work Type
              </label>
              <div className="space-y-3">
                {workTypeOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        name="workType"
                        value={option.value}
                        className="sr-only"
                        checked={values.workType.includes(option.value)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          if (e.target.checked) {
                            setFieldValue('workType', [...values.workType, option.value]);
                          } else {
                            setFieldValue(
                              'workType',
                              values.workType.filter((t) => t !== option.value)
                            );
                          }
                        }}
                      />
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                          values.workType.includes(option.value)
                            ? 'bg-[#c4e729]'
                            : 'bg-white border-2 border-gray-300'
                        }`}
                      >
                        {values.workType.includes(option.value) && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-medium" style={{ color: '#2f2e0c' }}>
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Work Shift */}
            <div>
              <label className="block text-sm font-medium mb-3" style={{ color: '#2f2e0c' }}>
                Work Shift
              </label>
              <div className="space-y-3">
                {workShiftOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        name="workShift"
                        value={option.value}
                        className="sr-only"
                        checked={values.workShift.includes(option.value)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          if (e.target.checked) {
                            setFieldValue('workShift', [...values.workShift, option.value]);
                          } else {
                            setFieldValue(
                              'workShift',
                              values.workShift.filter((s) => s !== option.value)
                            );
                          }
                        }}
                      />
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                          values.workShift.includes(option.value)
                            ? 'bg-[#c4e729]'
                            : 'bg-white border-2 border-gray-300'
                        }`}
                      >
                        {values.workShift.includes(option.value) && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-medium" style={{ color: '#2f2e0c' }}>
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Apply Filters Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#c4e729] text-gray-800 font-semibold rounded-lg hover:bg-[#b0d126] transition-colors"
            >
              Apply Filters
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

