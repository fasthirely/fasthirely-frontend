'use client';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import Select from 'react-select';

// Validation schema
const searchSchema = Yup.object().shape({
  keyword: Yup.string().required('Please enter a job title or keyword'),
  location: Yup.object().nullable().notRequired(),
  jobType: Yup.object().nullable().notRequired(),
});

interface SearchFormValues {
  keyword: string;
  location: { value: string; label: string } | null;
  jobType: { value: string; label: string } | null;
}

const locationOptions = [
  { value: 'mumbai', label: 'Mumbai, India' },
  { value: 'delhi', label: 'Delhi, India' },
  { value: 'bangalore', label: 'Bangalore, India' },
  { value: 'hyderabad', label: 'Hyderabad, India' },
  { value: 'chennai', label: 'Chennai, India' },
  { value: 'pune', label: 'Pune, India' },
  { value: 'kolkata', label: 'Kolkata, India' },
  { value: 'ahmedabad', label: 'Ahmedabad, India' },
  { value: 'remote', label: 'Remote' },
];

const jobTypeOptions = [
  { value: 'full-time', label: 'Full-time' },
  { value: 'part-time', label: 'Part-time' },
  { value: 'contract', label: 'Contract' },
  { value: 'internship', label: 'Internship' },
  { value: 'freelance', label: 'Freelance' },
];

export default function SearchBar() {
  const router = useRouter();

  const initialValues: SearchFormValues = {
    keyword: '',
    location: null,
    jobType: null,
  };

  const handleSubmit = async (values: SearchFormValues) => {
    try {
      // Build query parameters
      const params = new URLSearchParams();
      params.set('keyword', values.keyword);
      
      if (values.location) {
        params.set('location', values.location.value);
      }
      
      if (values.jobType) {
        params.set('jobType', values.jobType.value);
      }

      // Navigate to jobs page with search params
      router.push(`/seeker/jobs?${params.toString()}`);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  const customSelectStyles = {
    control: (base: any, state: any) => ({
      ...base,
      borderColor: state.isFocused ? '#c4e729' : '#e5e7eb',
      boxShadow: state.isFocused ? '0 0 0 1px #c4e729' : 'none',
      '&:hover': {
        borderColor: '#c4e729',
      },
      borderRadius: '0.5rem',
      borderWidth: '1px',
      minHeight: '48px',
      backgroundColor: 'white',
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isSelected
        ? '#c4e729'
        : state.isFocused
        ? '#e8f5c4'
        : 'white',
      color: state.isSelected ? '#1a5f3f' : '#333',
      '&:hover': {
        backgroundColor: state.isSelected ? '#c4e729' : '#e8f5c4',
      },
    }),
    placeholder: (base: any) => ({
      ...base,
      color: '#9ca3af',
    }),
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-4 md:p-6">
      <Formik
        initialValues={initialValues}
        validationSchema={searchSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, errors, touched, isSubmitting }) => (
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Keyword Input */}
              <div className="md:col-span-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
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
                  </div>
                  <Field
                    type="text"
                    name="keyword"
                    placeholder="Job title, keywords, or company"
                    className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4e729] focus:border-transparent ${
                      errors.keyword && touched.keyword ? 'border-red-500' : 'border-gray-300'
                    }`}
                    style={{ color: '#2f2e0c' }}
                  />
                </div>
                {errors.keyword && touched.keyword && (
                  <div className="mt-1 text-sm text-red-500">{errors.keyword as string}</div>
                )}
              </div>

              {/* Location Dropdown */}
              <div className="md:col-span-3">
                <Select
                  name="location"
                  options={locationOptions}
                  value={values.location}
                  onChange={(selectedOption) => setFieldValue('location', selectedOption)}
                  placeholder="Location"
                  isClearable
                  isSearchable
                  styles={customSelectStyles}
                />
              </div>

              {/* Job Type Dropdown */}
              <div className="md:col-span-3">
                <Select
                  name="jobType"
                  options={jobTypeOptions}
                  value={values.jobType}
                  onChange={(selectedOption) => setFieldValue('jobType', selectedOption)}
                  placeholder="Job Type"
                  isClearable
                  isSearchable={false}
                  styles={customSelectStyles}
                />
              </div>

              {/* Search Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-[#c4e729] text-gray-800 font-semibold rounded-lg hover:bg-[#b0d126] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Searching...</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="h-5 w-5"
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
                      <span>Search</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

