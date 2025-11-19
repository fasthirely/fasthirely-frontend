'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

const recruiterSchema = Yup.object().shape({
  linkedinUrl: Yup.string()
    .url('Please enter a valid URL')
    .matches(/linkedin\.com\/in\//i, 'Enter your public LinkedIn profile URL')
    .required('LinkedIn URL is required'),
  fullName: Yup.string()
    .min(2, 'Full name must be at least 2 characters')
    .required('Full name is required'),
  workingIn: Yup.mixed<'company' | 'agency'>()
    .oneOf(['company', 'agency'], 'Please choose one')
    .required('Please choose one'),
});

interface RecruiterFormValues {
  linkedinUrl: string;
  fullName: string;
  workingIn: 'company' | 'agency';
}

export default function BasicInfo() {
  const router = useRouter();

  const initialValues: RecruiterFormValues = {
    linkedinUrl: '',
    fullName: 'John Doe',
    workingIn: 'company',
  };

  const handleSubmit = async (values: RecruiterFormValues) => {
    try {
      // TODO: send values to API to create recruiter profile
      console.log('Create recruiter profile:', values);
      router.push('/recruiter/dashboard');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-[calc(100vh-0px)] bg-[#f6f3ff] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-[#2f2e0c]">Complete Your Profile</h1>
            <p className="text-gray-500 text-sm mt-2">Help us understand your recruiting needs</p>
          </div>

          <Formik initialValues={initialValues} validationSchema={recruiterSchema} onSubmit={handleSubmit}>
            {({ values, setFieldValue, isSubmitting, errors, touched }) => (
              <Form className="space-y-4">
                {/* LinkedIn URL */}
                <div>
                  <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    LinkedIn Public Profile URL
                  </label>
                  <Field
                    id="linkedinUrl"
                    name="linkedinUrl"
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#c4e729] focus:border-transparent placeholder-gray-400 ${
                      errors.linkedinUrl && touched.linkedinUrl ? 'border-red-400' : 'border-gray-300'
                    }`}
                  />
                  <ErrorMessage name="linkedinUrl" component="div" className="mt-1 text-sm text-red-500" />
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Field
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#c4e729] focus:border-transparent ${
                      errors.fullName && touched.fullName ? 'border-red-400' : 'border-gray-300'
                    }`}
                  />
                  <ErrorMessage name="fullName" component="div" className="mt-1 text-sm text-red-500" />
                </div>

                {/* Working In */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Working in</label>
                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => setFieldValue('workingIn', 'company')}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border transition ${
                        values.workingIn === 'company'
                          ? 'border-[#c4e729] bg-[#f1f9d6]'
                          : 'border-gray-300 bg-white hover:border-[#c4e729]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-2.5 h-2.5 rounded-full ${values.workingIn === 'company' ? 'bg-[#8cd21a]' : 'bg-gray-300'}`}></span>
                        <span className="text-gray-800">Company</span>
                      </div>
                      <span className={`w-5 h-5 rounded-full border ${values.workingIn === 'company' ? 'border-[#8cd21a]' : 'border-gray-300'}`}></span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFieldValue('workingIn', 'agency')}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border transition ${
                        values.workingIn === 'agency'
                          ? 'border-[#c4e729] bg-[#f1f9d6]'
                          : 'border-gray-300 bg-white hover:border-[#c4e729]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-2.5 h-2.5 rounded-full ${values.workingIn === 'agency' ? 'bg-[#8cd21a]' : 'bg-gray-300'}`}></span>
                        <span className="text-gray-800">Agency</span>
                      </div>
                      <span className={`w-5 h-5 rounded-full border ${values.workingIn === 'agency' ? 'border-[#8cd21a]' : 'border-gray-300'}`}></span>
                    </button>
                  </div>
                  <ErrorMessage name="workingIn" component="div" className="mt-1 text-sm text-red-500" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 bg-[#c4e729] hover:bg-[#b8db1f] text-[#2f2e0c] font-semibold py-3 rounded-lg shadow-sm transition disabled:opacity-60"
                >
                  {isSubmitting ? 'Creating...' : 'Create Profile'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}