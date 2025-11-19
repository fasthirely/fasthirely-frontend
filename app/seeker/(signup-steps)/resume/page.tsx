'use client';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

// Validation schema
const resumeSchema = Yup.object().shape({
  resume: Yup.mixed()
    .required('Resume is required')
    .test('fileType', 'Only PDF, DOC, and DOCX files are allowed', (value: any) => {
      if (!value) return false;
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      return allowedTypes.includes(value.type);
    })
    .test('fileSize', 'File size must be less than 5MB', (value: any) => {
      if (!value) return false;
      return value.size <= 5 * 1024 * 1024; // 5MB in bytes
    }),
});

interface ResumeFormValues {
  resume: File | null;
}

export default function Resume() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const initialValues: ResumeFormValues = {
    resume: null,
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const handleFileSelect = (file: File, setFieldValue: any) => {
    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const allowedExtensions = ['.pdf', '.doc', '.docx'];
    
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    const isValidType = allowedTypes.includes(file.type) || allowedExtensions.includes(fileExtension);

    if (!isValidType) {
      alert('Only PDF, DOC, and DOCX files are allowed');
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    setFieldValue('resume', file);
    setUploadedFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent, setFieldValue: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0], setFieldValue);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: any) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0], setFieldValue);
    }
  };

  const handleRemoveFile = (setFieldValue: any) => {
    setFieldValue('resume', null);
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (values: ResumeFormValues) => {
    try {
      // TODO: Implement actual API call to upload resume
      console.log('Resume file:', values.resume);
      if (values.resume) {
        console.log('File name:', values.resume.name);
        console.log('File size:', formatFileSize(values.resume.size));
        console.log('File type:', values.resume.type);
      }
      router.push('/seeker/plans');
    } catch (error) {
      console.error('Resume upload error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8f5c4] via-[#f0f8dc] to-[#e8f5c4] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Upload Your Resume
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Help employers know more about you
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={resumeSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue, errors, touched, isSubmitting }) => (
              <Form className="space-y-6">
                {/* Upload Area */}
                <div>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, setFieldValue)}
                    className={`border-2 border-dashed rounded-lg p-8 md:p-12 transition-colors ${
                      isDragging
                        ? 'border-[#c4e729] bg-[#e8f5c4]/20'
                        : 'border-[#c4e729] bg-white'
                    }`}
                  >
                    {!uploadedFile ? (
                      <>
                        {/* Upload Icon */}
                        <div className="flex justify-center mb-6">
                          <div className="w-16 h-16 bg-[#e8f5c4] rounded-full flex items-center justify-center">
                            <svg
                              className="w-8 h-8 text-[#c4e729]"
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
                          </div>
                        </div>

                        {/* Instructions */}
                        <div className="text-center mb-2">
                          <p className="text-gray-700 text-sm md:text-base">
                            Drag and drop your resume here, or{' '}
                            <button
                              type="button"
                              onClick={() => fileInputRef.current?.click()}
                              className="font-bold text-gray-800 hover:text-[#c4e729] transition-colors underline"
                            >
                              browse files
                            </button>
                          </p>
                        </div>

                        {/* Supported Formats */}
                        <p className="text-center text-xs text-gray-500">
                          Supported formats: PDF, DOC, DOCX (Max 5MB)
                        </p>

                        {/* Hidden File Input */}
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          className="hidden"
                          onChange={(e) => handleFileInputChange(e, setFieldValue)}
                        />
                      </>
                    ) : (
                      <>
                        {/* Uploaded File Display */}
                        <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4">
                          {/* File Icon */}
                          <div className="flex-shrink-0">
                            <svg
                              className="w-10 h-10 text-purple-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>

                          {/* File Info */}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-800 truncate">
                              {uploadedFile.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {formatFileSize(uploadedFile.size)}
                            </p>
                          </div>

                          {/* Remove Button */}
                          <button
                            type="button"
                            onClick={() => handleRemoveFile(setFieldValue)}
                            className="flex-shrink-0 text-red-500 hover:text-red-700 transition-colors"
                            aria-label="Remove file"
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
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Error Message */}
                  {errors.resume && touched.resume && (
                    <div className="mt-2 text-sm text-red-500">{errors.resume as string}</div>
                  )}
                </div>

                {/* Continue Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !uploadedFile}
                  className="w-full py-3 px-4 bg-[#c4e729] text-gray-800 font-semibold rounded-lg hover:bg-[#b0d126] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                >
                  {isSubmitting ? 'Uploading...' : 'Continue'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
