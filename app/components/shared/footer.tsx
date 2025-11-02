export default function Footer() {
  return (
     <footer className="bg-gray-900 text-gray-300 py-12">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
         <div>
           <h3 className="text-2xl font-bold text-white mb-4">Fasthirely</h3>
           <p className="text-sm">
             India's trusted job portal helping you get hired faster.
           </p>
         </div>
         <div>
           <h4 className="font-semibold text-white mb-4">Quick Links</h4>
           <ul className="space-y-2 text-sm">
             <li><a href="#jobs" className="hover:text-white transition">Jobs</a></li>
             <li><a href="#companies" className="hover:text-white transition">Companies</a></li>
             <li><a href="/about" className="hover:text-white transition">About</a></li>
             <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
           </ul>
         </div>
         <div>
           <h4 className="font-semibold text-white mb-4">Legal</h4>
           <ul className="space-y-2 text-sm">
             <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
             <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
             <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
           </ul>
         </div>
         <div>
           <h4 className="font-semibold text-white mb-4">Connect</h4>
           <div className="flex space-x-4">
             <a href="#" className="hover:text-white transition" aria-label="LinkedIn">LinkedIn</a>
             <a href="#" className="hover:text-white transition" aria-label="Instagram">Instagram</a>
             <a href="#" className="hover:text-white transition" aria-label="YouTube">YouTube</a>
           </div>
         </div>
       </div>
       <div className="border-t border-gray-800 pt-8 text-center text-sm">
         <p>© 2025 Fasthirely — Helping India Get Hired Faster.</p>
       </div>
     </div>
   </footer>
  );
}