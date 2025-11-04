'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const goToLogin = (loginType: string) => {
    // router.push('/login?keyword=developer&location=india');
    router.push(`/login?loginType=${loginType}`);


  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#592c93] to-[#592c93] bg-clip-text text-transparent">
                  Fasthirely
                </span>
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a  className="text-gray-700 hover:text-[#592c93] transition" onClick={() => goToLogin('seeker')}>seekar</a>
              <a href="#companies" className="text-gray-700 hover:text-[#592c93] transition" onClick={() => goToLogin('recruiter')}>HR</a>
              <a href="#about" className="text-gray-700 hover:text-[#592c93] transition">About</a>
              <a href="/contact" className="text-gray-700 hover:text-[#592c93] transition">Contact</a>
              <button className="bg-[#592c93] text-white px-4 py-2 rounded-lg hover:bg-[#4a2578] transition">
                Post a Job
              </button>
            </nav>
          </div>
        </div>
      </header>
  );
}