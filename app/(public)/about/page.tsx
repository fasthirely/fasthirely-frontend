'use client';

import { setUserData, getUserData, clearUserData } from '@/lib/crypto';

export default function AboutUs() {
  setUserData({
    token: '8743374',
    role: 'seeker', // 'seeker' or 'recruiter'
    userId: '8743374',
    email: 'test@test.com',
    name: 'Test User',
    // ... any other user data you need
  });
  setTimeout(() => {
    console.log(getUserData());
  }, 3000);
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2f2e0c] mb-8 text-center">
            About Us
          </h1>
          
          <div className="space-y-6 text-[#2f2e0c]/80 text-base sm:text-lg leading-relaxed">
            <p>
              FastHirely is India's first premium job platform designed to revolutionize the hiring process. We believe that time is the most valuable resource in recruitment, and our mission is to help companies hire faster without compromising on quality.
            </p>
            
            <p>
              Founded with the vision of making hiring efficient and affordable, FastHirely connects employers with top talent in record time. Our platform is specifically designed for companies that value speed and quality in their hiring process.
            </p>
            
            <p>
              Starting at just ₹199, FastHirely provides premium hiring solutions that help you shortlist, interview, and hire candidates 1x, 2x, and 3x faster than traditional methods.
            </p>
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

