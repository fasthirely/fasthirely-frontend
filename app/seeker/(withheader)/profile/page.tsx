'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Validation schema
const profileSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Full name must be at least 2 characters')
    .required('Full name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  mobileNumber: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid mobile number'),
  location: Yup.string()
    .min(2, 'Location must be at least 2 characters'),
});

interface ProfileFormValues {
  fullName: string;
  email: string;
  mobileNumber: string;
  location: string;
}

export default function Profile() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [uploadedResume, setUploadedResume] = useState<string | null>(
    'Codzup - Company Profile & Service Prosal.pdf'
  );

  // Mock initial values - Replace with actual API call
  const initialValues: ProfileFormValues = {
    fullName: 'John Doe',
    email: 'testquote@yopmail.com',
    mobileNumber: '',
    location: '',
  };

  const handleSubmit = async (values: ProfileFormValues) => {
    try {
      // TODO: Implement API call to update profile
      console.log('Updating profile:', values);
      setIsEditing(false);
      // Show success message
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setResumeFile(file);
      setUploadedResume(file.name);
      // TODO: Implement API call to upload resume
      console.log('Uploading resume:', file.name);
    }
  };

  const handleUpgradePlan = () => {
    router.push('/seeker/profile/upgrade-plan');
  };

  const appliedJobs = [
    {
      id: 1,
      title: 'Job Application #1',
      appliedDate: 'Oct 15, 2025',
    },
    // Add more jobs as needed
  ];

  return (
    <div className="pt-[102px] pb-[100px] bg-gradient-to-br from-[#e8f5c4] via-[#f0f8dc] to-[#e8f5c4] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2f2e0c] mb-2">
            My Profile
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Manage your account information
          </p>
        </div>

        {/* Personal Information Card */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2f2e0c] mb-4 sm:mb-0">
              Personal Information
            </h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors text-sm sm:text-base"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={profileSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ values, errors, touched, isSubmitting }) => (
              <Form>
                <div className="space-y-4 sm:space-y-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <Field
                      type="text"
                      id="fullName"
                      name="fullName"
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4e729] focus:border-transparent transition-colors ${
                        isEditing
                          ? errors.fullName && touched.fullName
                            ? 'border-red-500 bg-white'
                            : 'border-gray-300 bg-white'
                          : 'border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed'
                      }`}
                      placeholder="Enter your full name"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4e729] focus:border-transparent transition-colors ${
                        isEditing
                          ? errors.email && touched.email
                            ? 'border-red-500 bg-white'
                            : 'border-gray-300 bg-white'
                          : 'border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed'
                      }`}
                      placeholder="Enter your email address"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label
                      htmlFor="mobileNumber"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mobile Number
                    </label>
                    <Field
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4e729] focus:border-transparent transition-colors ${
                        isEditing
                          ? errors.mobileNumber && touched.mobileNumber
                            ? 'border-red-500 bg-white'
                            : 'border-gray-300 bg-white'
                          : 'border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed'
                      }`}
                      placeholder="Enter your mobile number"
                    />
                    <ErrorMessage
                      name="mobileNumber"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Location
                    </label>
                    <Field
                      type="text"
                      id="location"
                      name="location"
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4e729] focus:border-transparent transition-colors ${
                        isEditing
                          ? errors.location && touched.location
                            ? 'border-red-500 bg-white'
                            : 'border-gray-300 bg-white'
                          : 'border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed'
                      }`}
                      placeholder="Enter your location"
                    />
                    <ErrorMessage
                      name="location"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  {/* Save Button - Only show when editing */}
                  {isEditing && (
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-6 py-3 bg-[#592c93] hover:bg-[#4a2578] text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Saving...' : 'Save Changes'}
                      </button>
                    </div>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* Current Plan Card */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-[#2f2e0c] mb-3">
                Current Plan
              </h2>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 bg-[#c4e729] text-[#592c93] text-xs sm:text-sm font-semibold rounded-full">
                  Active Plan
                </span>
                <span className="text-lg sm:text-xl font-bold text-[#2f2e0c]">
                  2x Faster
                </span>
              </div>
            </div>
            <button
              onClick={handleUpgradePlan}
              className="px-6 py-3 bg-[#c4e729] hover:bg-[#b8db1f] text-[#592c93] font-semibold rounded-lg transition-colors text-sm sm:text-base"
            >
              Upgrade Plan
            </button>
          </div>
        </div>

        {/* Resume Card */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#2f2e0c] mb-2">
            Resume
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Upload or update your resume.
          </p>

          {uploadedResume ? (
            <div className="mb-4">
              <div className="bg-[#e8f5c4] rounded-lg p-4 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-[#592c93]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#2f2e0c] font-medium text-sm sm:text-base truncate">
                    {uploadedResume}
                  </p>
                  <p className="text-[#592c93] text-xs sm:text-sm mt-1">
                    Uploaded resume.
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          <label className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 hover:border-[#c4e729] text-gray-700 rounded-lg font-medium cursor-pointer transition-colors text-sm sm:text-base">
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
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            Upload New Resume
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* Applied Jobs History Card */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#2f2e0c] mb-2">
            Applied Jobs History
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            View all your job applications.
          </p>

          {appliedJobs.length > 0 ? (
            <div className="space-y-4">
              {appliedJobs.map((job) => (
                <div
                  key={job.id}
                  className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:border-[#c4e729] transition-colors"
                >
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-[#592c93]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#2f2e0c] font-semibold text-sm sm:text-base mb-1">
                      {job.title}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Applied on {job.appliedDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm sm:text-base">
                No job applications yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
