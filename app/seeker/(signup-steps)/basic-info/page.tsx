'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import Select from 'react-select';

// Validation schema
const basicInfoSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Full name must be at least 2 characters')
    .required('Full name is required'),
  sectors: Yup.array()
    .min(1, 'Please select at least one sector')
    .required('Please select at least one sector'),
  experienceLevel: Yup.string()
    .required('Experience level is required'),
  workType: Yup.string()
    .required('Work type is required'),
  location: Yup.string()
    .min(2, 'Location must be at least 2 characters')
    .required('Location is required'),
  mobileNumber: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid mobile number')
    .required('Mobile number is required'),
});

interface BasicInfoFormValues {
  fullName: string;
  sectors: string[];
  experienceLevel: string;
  workType: string;
  location: string;
  mobileNumber: string;
}

const experienceOptions = [
  { value: 'entry', label: 'Entry Level (0-2 years)' },
  { value: 'mid', label: 'Mid Level (3-5 years)' },
  { value: 'senior', label: 'Senior Level (6-10 years)' },
  { value: 'executive', label: 'Executive Level (10+ years)' },
];

const sectorOptions = [
  { value: 'technology', label: 'Technology' },
  { value: 'finance', label: 'Finance' },
  { value: 'retail', label: 'Retail' },
  { value: 'construction', label: 'Construction' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'education', label: 'Education' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'hospitality', label: 'Hospitality' },
];

const workTypeOptions = [
  { value: 'full-time', label: 'Full-time' },
  { value: 'part-time', label: 'Part-time' },
  { value: 'internship', label: 'Internship' },
];

export default function BasicInfo() {
  const router = useRouter();

  const initialValues: BasicInfoFormValues = {
    fullName: 'John Doe',
    sectors: ['technology'],
    experienceLevel: '',
    workType: '',
    location: 'Mumbai, India',
    mobileNumber: '+91 9876543210',
  };

  const handleSubmit = async (values: BasicInfoFormValues) => {
    try {
      router.push('/seeker/resume');
      // TODO: Implement actual API call to save basic info
      console.log('Basic info values:', values);
      // router.push('/seeker/plans');
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const customSelectStyles = {
    control: (base: any, state: any) => ({
      ...base,
      borderColor: state.isFocused ? '#c4e729' : '#c4e729',
      boxShadow: state.isFocused ? '0 0 0 1px #c4e729' : 'none',
      '&:hover': {
        borderColor: '#c4e729',
      },
      borderRadius: '0.5rem',
      borderWidth: '1px',
      minHeight: '48px',
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8f5c4] via-[#f0f8dc] to-[#e8f5c4] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Complete Your Profile
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Help us find the perfect job for you
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={basicInfoSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue, errors, touched, isSubmitting }) => (
              <Form className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2" style={{ color: '#2f2e0c' }}>
                    Full Name
                  </label>
                  <Field
                    type="text"
                    id="fullName"
                    name="fullName"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4e729] focus:border-transparent ${
                      errors.fullName && touched.fullName ? 'border-red-500' : 'border-[#c4e729]'
                    }`}
                    placeholder="Enter your full name"
                  />
                  <ErrorMessage name="fullName" component="div" className="mt-1 text-sm text-red-500" />
                </div>

                {/* Sectors - Checkboxes */}
                <div>
                  <label className="block text-sm font-medium mb-3" style={{ color: '#2f2e0c' }}>
                    Which sector are you looking for a job?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sectorOptions.map((sector) => (
                      <label
                        key={sector.value}
                        className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                          values.sectors.includes(sector.value)
                            ? 'bg-[#e8f5c4]/30'
                            : 'hover:bg-[#e8f5c4]/20'
                        }`}
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            name="sectors"
                            value={sector.value}
                            className="sr-only"
                            checked={values.sectors.includes(sector.value)}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              if (e.target.checked) {
                                setFieldValue('sectors', [...values.sectors, sector.value]);
                              } else {
                                setFieldValue(
                                  'sectors',
                                  values.sectors.filter((s) => s !== sector.value)
                                );
                              }
                            }}
                          />
                          <div
                            className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                              values.sectors.includes(sector.value)
                                ? 'bg-[#c4e729]'
                                : 'bg-white border-2 border-gray-300'
                            }`}
                          >
                            {values.sectors.includes(sector.value) && (
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-sm" style={{ color: '#2f2e0c' }}>{sector.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.sectors && touched.sectors && (
                    <div className="mt-1 text-sm text-red-500">{errors.sectors as string}</div>
                  )}
                </div>

                {/* Experience Level - React Select */}
                <div>
                  <label htmlFor="experienceLevel" className="block text-sm font-medium mb-2" style={{ color: '#2f2e0c' }}>
                    Experience Level
                  </label>
                  <Select
                    id="experienceLevel"
                    name="experienceLevel"
                    options={experienceOptions}
                    value={experienceOptions.find(option => option.value === values.experienceLevel) || null}
                    onChange={(selectedOption) => setFieldValue('experienceLevel', selectedOption?.value || '')}
                    placeholder="Select experience level"
                    styles={customSelectStyles}
                    isSearchable={false}
                  />
                  {errors.experienceLevel && touched.experienceLevel && (
                    <div className="mt-1 text-sm text-red-500">{errors.experienceLevel as string}</div>
                  )}
                </div>

                {/* Work Type - Radio Buttons */}
                <div>
                  <label className="block text-sm font-medium mb-3" style={{ color: '#2f2e0c' }}>
                    Work Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {workTypeOptions.map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                          values.workType === option.value
                            ? 'bg-[#e8f5c4]/30'
                            : 'hover:bg-[#e8f5c4]/20'
                        }`}
                      >
                        <div className="relative">
                          <input
                            type="radio"
                            name="workType"
                            value={option.value}
                            className="sr-only"
                            checked={values.workType === option.value}
                            onChange={() => setFieldValue('workType', option.value)}
                          />
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                              values.workType === option.value
                                ? 'bg-[#c4e729] border-2 border-[#c4e729]'
                                : 'bg-white border-2 border-gray-300'
                            }`}
                          >
                            {values.workType === option.value && (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            )}
                          </div>
                        </div>
                        <span className="text-sm" style={{ color: '#2f2e0c' }}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                  <ErrorMessage name="workType" component="div" className="mt-1 text-sm text-red-500" />
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium mb-2" style={{ color: '#2f2e0c' }}>
                    Location
                  </label>
                  <Field
                    type="text"
                    id="location"
                    name="location"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4e729] focus:border-transparent ${
                      errors.location && touched.location ? 'border-red-500' : 'border-[#c4e729]'
                    }`}
                    placeholder="Enter your location"
                  />
                  <ErrorMessage name="location" component="div" className="mt-1 text-sm text-red-500" />
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="mobileNumber" className="block text-sm font-medium mb-2" style={{ color: '#2f2e0c' }}>
                    Mobile Number
                  </label>
                  <Field
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4e729] focus:border-transparent ${
                      errors.mobileNumber && touched.mobileNumber ? 'border-red-500' : 'border-[#c4e729]'
                    }`}
                    placeholder="Enter your mobile number"
                  />
                  <ErrorMessage name="mobileNumber" component="div" className="mt-1 text-sm text-red-500" />
                </div>

                {/* Continue Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-[#c4e729] text-gray-800 font-semibold rounded-lg hover:bg-[#b0d126] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                >
                  {isSubmitting ? 'Processing...' : 'Continue'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
