export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header - Logo Only */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white px-4 sm:px-6 lg:px-8 py-4 border-b border-[#2f2e0c]/10">
        <div className="max-w-7xl mx-auto">
          <a href="/" className="text-2xl sm:text-3xl font-bold text-[#2f2e0c]">
            FastHirely
          </a>
        </div>
      </header>

      {/* First Section - Hero + Partners (100vh) */}
      <section className="min-h-screen flex flex-col pt-20">
        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center space-y-6 sm:space-y-8">
              {/* Badge */}
              {/* <div className="inline-block px-4 py-2 rounded-full bg-[#aeff6e] text-[#2f2e0c] text-sm sm:text-base font-semibold">
                India's First Premium Job Platform
              </div> */}

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2f2e0c] leading-tight">
                Get Job Faster
                <br />
                <span className="text-[#aeff6e]">Hire Faster</span>
          </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl md:text-2xl text-[#2f2e0c]/80 max-w-3xl mx-auto leading-relaxed">
                How can you hire faster? Shortlist more time and hire{" "}
                <span className="font-bold text-[#2f2e0c]">1x, 2x, 3x faster</span>
              </p>

              {/* Value Proposition */}
              <div className="pt-4 space-y-3">
                <p className="text-base sm:text-lg text-[#2f2e0c]/70 max-w-2xl mx-auto">
                  FastHirely helps you hire fast and invest smart. Starting at just{" "}
                  <span className="font-bold text-[#2f2e0c]">₹199</span>
                </p>
                <p className="text-sm sm:text-base text-[#2f2e0c]/60 italic max-w-2xl mx-auto">
                  Not for everyone. Only for those who hire fast.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                {/* <button className="bg-[#2f2e0c] text-[#aeff6e] px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold hover:bg-[#2f2e0c]/90 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get Started - ₹199
                </button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Trusted Partners Section */}
        <div className="py-8 sm:py-12 bg-[#2f2e0c]/5 border-t border-[#2f2e0c]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm sm:text-base text-[#2f2e0c]/60 mb-6 font-medium">
              Trusted Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 overflow-x-auto pb-4">
              {/* Partner Logos */}
              {["Google", "Amazon", "TCS", "Capgemini", "Flipkart", "Microsoft", "Infosys", "Wipro"].map((company) => (
                <div key={company} className="flex-shrink-0 h-8 sm:h-10 lg:h-12 w-auto">
                  <div className="h-full w-32 sm:w-40 lg:w-48 bg-[#2f2e0c]/10 rounded flex items-center justify-center text-[#2f2e0c] text-xs sm:text-sm font-semibold">
                    {company}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Reviews Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2f2e0c] text-center mb-12 sm:mb-16">
            Trusted Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Review Cards */}
            {[
              {
                name: "Rajesh Kumar",
                review: "FastHirely transformed our hiring process. We now hire 3x faster with better candidates. Worth every rupee!",
                initial: "RK"
              },
              {
                name: "Priya Sharma",
                review: "Best investment we made this year! Reduced our time-to-hire from 3 weeks to just 1 week. Amazing platform!",
                initial: "PS"
              },
              {
                name: "Amit Patel",
                review: "The quality of candidates we get through FastHirely is exceptional. Highly recommended for fast-growing companies!",
                initial: "AP"
              }
            ].map((review, index) => (
              <div
                key={index}
                className="bg-[#2f2e0c]/5 p-6 sm:p-8 rounded-2xl border border-[#2f2e0c]/10 hover:border-[#aeff6e] transition-all duration-200"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-[#aeff6e]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#2f2e0c]/80 mb-4 text-sm sm:text-base leading-relaxed">
                  "{review.review}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#aeff6e] flex items-center justify-center text-[#2f2e0c] font-bold text-sm">
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-[#2f2e0c] text-sm sm:text-base">{review.name}</p>
                    <p className="text-xs sm:text-sm text-[#2f2e0c]/60">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose FastHirely Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#aeff6e]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2f2e0c] text-center mb-12 sm:mb-16">
            Why FastHirely?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-white border border-[#2f2e0c]/10">
              <div className="text-5xl sm:text-6xl font-bold text-[#aeff6e] mb-4">1x</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#2f2e0c] mb-3">Faster Shortlisting</h3>
              <p className="text-[#2f2e0c]/70 text-sm sm:text-base">
                Streamlined process to find the right candidates quickly
              </p>
            </div>
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-white border border-[#2f2e0c]/10">
              <div className="text-5xl sm:text-6xl font-bold text-[#aeff6e] mb-4">2x</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#2f2e0c] mb-3">Faster Interviews</h3>
              <p className="text-[#2f2e0c]/70 text-sm sm:text-base">
                Connect with candidates faster and schedule interviews seamlessly
              </p>
            </div>
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-white border border-[#2f2e0c]/10">
              <div className="text-5xl sm:text-6xl font-bold text-[#aeff6e] mb-4">3x</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#2f2e0c] mb-3">Faster Hiring</h3>
              <p className="text-[#2f2e0c]/70 text-sm sm:text-base">
                Complete your hiring process in record time with quality candidates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#2f2e0c] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#aeff6e] mb-6">
            Ready to Hire Faster?
          </h2>
          <p className="text-lg sm:text-xl text-[#aeff6e]/90 mb-8 max-w-2xl mx-auto">
            Join FastHirely today and experience the future of hiring. Starting at just ₹199.
          </p>
          <button className="bg-[#aeff6e] text-[#2f2e0c] px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold hover:bg-[#aeff6e]/90 transition-all duration-200 shadow-lg hover:shadow-xl">
            Get Started Now
          </button>
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
