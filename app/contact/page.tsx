export default function ContactUs() {
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
            Contact Us
          </h1>
          
          <div className="space-y-8">
            <div className="bg-[#2f2e0c]/5 p-6 sm:p-8 rounded-2xl border border-[#2f2e0c]/10">
              <h2 className="text-2xl font-bold text-[#2f2e0c] mb-4">Get in Touch</h2>
              <div className="space-y-4 text-[#2f2e0c]/80">
                <p>
                  <strong className="text-[#2f2e0c]">Email:</strong> contact@fasthirely.com
                </p>
                <p>
                  <strong className="text-[#2f2e0c]">Phone:</strong> +91 XXX XXX XXXX
                </p>
                <p>
                  <strong className="text-[#2f2e0c]">Address:</strong> India
                </p>
              </div>
            </div>

            <div className="bg-[#aeff6e]/10 p-6 sm:p-8 rounded-2xl border border-[#aeff6e]/30">
              <h2 className="text-2xl font-bold text-[#2f2e0c] mb-4">Business Hours</h2>
              <p className="text-[#2f2e0c]/80">
                Monday - Friday: 9:00 AM - 6:00 PM IST
              </p>
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

