'use client';

import Image from "next/image";
import { useState } from "react";
import Header from "@/app/components/shared/header";
import Footer from "@/app/components/shared/footer";

export default function Main() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-[#c4e729]/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-[#c4e729] text-[#592c93] rounded-full text-sm font-semibold animate-pulse">
              🚀 Get Hired Faster with Fasthirely
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Get Hired Faster with
              <br />
              <span className="bg-gradient-to-r from-[#592c93] to-[#7a3fb8] bg-clip-text text-transparent">
                Fasthirely
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              India's trusted platform that boosts your job shortlist chances{" "}
              <span className="font-bold text-[#592c93]">3x faster</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="w-full sm:w-auto bg-[#592c93] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#4a2578] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Find Jobs Now
              </button>
              <button className="w-full sm:w-auto bg-white text-[#592c93] border-2 border-[#592c93] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-all duration-300 shadow-md hover:shadow-lg">
                Post a Job
              </button>
            </div>

            {/* Stats Bubbles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mt-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-[#592c93] mb-2">5,000+</div>
                <div className="text-gray-600 text-sm">Verified Jobs</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-[#592c93] mb-2">200+</div>
                <div className="text-gray-600 text-sm">Trusted Indian Companies</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-[#592c93] mb-2">3x</div>
                <div className="text-gray-600 text-sm">Faster Shortlisting Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Fasthirely Helps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Fasthirely Helps You Get Hired
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to land your dream job faster
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📄",
                title: "Upload Your Resume",
                description: "Create a professional profile and upload your resume in minutes. Our AI-powered system ensures your profile stands out."
              },
              {
                icon: "🎯",
                title: "Get Matched with the Right Companies",
                description: "Our smart matching algorithm connects you with verified Indian companies that match your skills and career goals."
              },
              {
                icon: "📞",
                title: "Receive Interview Calls Faster",
                description: "Get shortlisted 3x faster and receive interview calls from top employers across India. Your next opportunity is just a click away."
              }
            ].map((step, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg border border-purple-100 transition-all duration-300 ${
                  hoveredCard === index
                    ? "transform -translate-y-2 shadow-2xl scale-105"
                    : "hover:transform hover:-translate-y-1 hover:shadow-xl"
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by India's Top Employers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We collaborate with India's most trusted brands to help you grow
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {["TCS", "Infosys", "Wipro", "Zomato", "Paytm", "Flipkart", "Microsoft", "Amazon", "Google", "Capgemini", "Accenture", "HCL"].map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex items-center justify-center min-h-[100px] transform hover:-translate-y-1"
              >
                <span className="text-gray-700 font-semibold text-sm md:text-base">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Fasthirely - Comparison */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Fasthirely?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we compare to other job platforms in India
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#592c93] to-[#7a3fb8] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">Fasthirely</th>
                    <th className="px-6 py-4 text-center font-semibold">Others</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: "Verified Indian Companies", fasthirely: true, others: false },
                    { feature: "3x Shortlist Boost", fasthirely: true, others: false },
                    { feature: "Personalized Match", fasthirely: true, others: "⚠️" },
                    { feature: "24/7 Support", fasthirely: true, others: false },
                    { feature: "Fast Response Time", fasthirely: true, others: false },
                    { feature: "Resume Optimization", fasthirely: true, others: false }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-purple-50 transition">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-2xl">✅</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.others === "⚠️" ? (
                          <span className="text-2xl">⚠️</span>
                        ) : (
                          <span className="text-2xl text-gray-400">❌</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real Stories. Real Hires.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how job seekers across India are getting hired faster
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Software Developer",
                company: "Infosys",
                image: "PS",
                quote: "I got 3 interview calls within a week of uploading my resume on Fasthirely. The matching was spot-on!",
                rating: 5
              },
              {
                name: "Rajesh Kumar",
                role: "Marketing Manager",
                company: "Zomato",
                image: "RK",
                quote: "The personalized matching helped me find the perfect role. Got shortlisted 3x faster than other platforms.",
                rating: 5
              },
              {
                name: "Ananya Patel",
                role: "Data Analyst",
                company: "Paytm",
                image: "AP",
                quote: "Fasthirely's verified companies feature gave me confidence. I knew I was applying to real, trusted employers.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#592c93] to-[#7a3fb8] flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#592c93] via-[#6a359a] to-[#7a3fb8] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Your Next Job is Waiting — Don't Miss Out!
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of job seekers who found their dream job through Fasthirely
          </p>
          <button className="bg-[#c4e729] text-[#592c93] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#d4f739] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Your Job Search Now →
          </button>
        </div>
      </section>

    <Footer />
    </div>
  );
}
