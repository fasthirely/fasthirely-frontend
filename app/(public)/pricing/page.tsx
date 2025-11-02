export default function Pricing() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header - Logo Only */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white px-4 sm:px-6 lg:px-8 py-4 border-b border-[#2f2e0c]/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl sm:text-3xl font-bold text-[#2f2e0c]">
            FastHirely
          </a>
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2f2e0c] mb-4 text-center">
            Pricing
          </h1>
          <p className="text-lg sm:text-xl text-[#2f2e0c]/70 mb-12 text-center max-w-2xl mx-auto">
            Choose the plan that fits your hiring needs. All plans start at ₹199.
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {/* Starter Plan */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#2f2e0c]/10 hover:border-[#aeff6e] transition-all duration-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#2f2e0c] mb-2">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-[#2f2e0c]">₹199</span>
                  <span className="text-[#2f2e0c]/60 ml-2">/month</span>
                </div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#aeff6e] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#2f2e0c]/80">Up to 5 job postings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#aeff6e] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#2f2e0c]/80">Basic candidate search</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#aeff6e] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#2f2e0c]/80">Email support</span>
                  </li>
                </ul>
                <button className="w-full bg-[#2f2e0c] text-[#aeff6e] px-6 py-3 rounded-full font-semibold hover:bg-[#2f2e0c]/90 transition-all duration-200">
                  Get Started
                </button>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="bg-[#aeff6e]/10 p-6 sm:p-8 rounded-2xl border-2 border-[#aeff6e] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#aeff6e] text-[#2f2e0c] px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#2f2e0c] mb-2">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-[#2f2e0c]">₹999</span>
                  <span className="text-[#2f2e0c]/60 ml-2">/month</span>
                </div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#aeff6e] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#2f2e0c]/80">Unlimited job postings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#aeff6e] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#2f2e0c]/80">Advanced candidate search</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#aeff6e] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#2f2e0c]/80">Priority support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#aeff6e] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#2f2e0c]/80">Analytics dashboard</span>
                  </li>
                </ul>
                <button className="w-full bg-[#2f2e0c] text-[#aeff6e] px-6 py-3 rounded-full font-semibold hover:bg-[#2f2e0c]/90 transition-all duration-200">
                  Get Started
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#2f2e0c]/10 hover:border-[#aeff6e] transition-all duration-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#2f2e0c] mb-2">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-[#2f2e0c]">Custom</span>
                </div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#aeff6e] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#2f2e0c]/80">Everything in Professional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#aeff6e] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#2f2e0c]/80">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#aeff6e] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#2f2e0c]/80">Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#aeff6e] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#2f2e0c]/80">24/7 phone support</span>
                  </li>
                </ul>
                <button className="w-full bg-[#2f2e0c] text-[#aeff6e] px-6 py-3 rounded-full font-semibold hover:bg-[#2f2e0c]/90 transition-all duration-200">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2f2e0c] mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-[#2f2e0c]/5 p-6 rounded-2xl border border-[#2f2e0c]/10">
                <h3 className="text-xl font-bold text-[#2f2e0c] mb-2">Can I change my plan later?</h3>
                <p className="text-[#2f2e0c]/70">Yes, you can upgrade or downgrade your plan at any time.</p>
              </div>
              <div className="bg-[#2f2e0c]/5 p-6 rounded-2xl border border-[#2f2e0c]/10">
                <h3 className="text-xl font-bold text-[#2f2e0c] mb-2">Is there a free trial?</h3>
                <p className="text-[#2f2e0c]/70">We offer a 7-day free trial for all new users to explore our platform.</p>
              </div>
              <div className="bg-[#2f2e0c]/5 p-6 rounded-2xl border border-[#2f2e0c]/10">
                <h3 className="text-xl font-bold text-[#2f2e0c] mb-2">What payment methods do you accept?</h3>
                <p className="text-[#2f2e0c]/70">We accept all major credit cards, debit cards, and UPI payments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#2f2e0c] border-t border-[#aeff6e]/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#aeff6e]/80 text-sm sm:text-base">
            © 2025 FastHirely. India's First Premium Job Platform.
          </p>
        </div>
      </footer>
    </div>
  );
}

