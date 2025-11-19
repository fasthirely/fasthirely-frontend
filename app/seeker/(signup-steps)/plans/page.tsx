'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  buttonColor: string;
}

const plans: Plan[] = [
  {
    id: '1x',
    name: '1x Faster',
    price: 499,
    features: [
      'Apply to 10 jobs per day',
      'Basic profile visibility',
      'Email job alerts',
      'Resume download',
    ],
    buttonColor: 'bg-gray-800',
  },
  {
    id: '2x',
    name: '2x Faster',
    price: 999,
    features: [
      'Apply to 25 jobs per day',
      'Priority profile visibility',
      'Instant job alerts',
      'Resume download',
      'Highlighted applications',
      'Recruiter messages',
    ],
    isPopular: true,
    buttonColor: 'bg-[#c4e729]',
  },
  {
    id: '3x',
    name: '3x Faster',
    price: 1499,
    features: [
      'Unlimited job applications',
      'Premium profile badge',
      'Real-time job alerts',
      'Resume download',
      'Featured applications',
      'Priority recruiter access',
      'Interview preparation tips',
      'Dedicated support',
    ],
    buttonColor: 'bg-gray-800',
  },
];

export default function Plans() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSelectPlan = async (planId: string) => {
    // Update selected plan immediately
    setSelectedPlan(planId);
    setIsProcessing(true);
    
    try {
      // TODO: Implement actual API call to save selected plan
      console.log('Selected plan:', planId);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to next step or dashboard
      router.push('/seeker/jobs');
    } catch (error) {
      console.error('Plan selection error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#e8f5c4] via-white to-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            Choose Your Plan
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Select the plan that works best for you
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-lg shadow-lg p-6 md:p-8 relative flex flex-col ${
                plan.isPopular ? 'border-2 border-purple-500 md:-mt-2 md:mb-2' : ''
              }`}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#e8f5c4] text-gray-800 px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1">
                    <span>⚡</span>
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-bold text-gray-800">
                  ₹{plan.price.toLocaleString()}
                </span>
                <span className="text-gray-600 text-lg ml-2">/month</span>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Select Plan Button */}
              <button
                onClick={() => handleSelectPlan(plan.id)}
                disabled={isProcessing && selectedPlan === plan.id}
                className={`w-full py-3 px-4 ${
                  plan.isPopular ? 'bg-[#c4e729] hover:bg-[#b0d126] text-white' : 'bg-gray-800 hover:bg-gray-900 text-white'
                } font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isProcessing && selectedPlan === plan.id
                  ? 'Processing...'
                  : 'Select Plan'}
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            All plans include 7-day money-back guarantee
          </p>
        </div>
      </div>
    </div>
  );
}
