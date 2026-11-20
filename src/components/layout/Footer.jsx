import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin,
  ShieldCheck
} from 'lucide-react';
import Container from '../common/Container';
import { institutionInfo } from '../../data/institution';
import institutionLogo from '../../assets/images/logo.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#17344E] text-white pt-16 pb-8 border-t-4 border-[#C9A66B]">
      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Institutional Brand & Story */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-13 h-13 rounded-xl bg-white p-1 border border-[#C9A66B]/50 flex items-center justify-center shrink-0 shadow-md overflow-hidden">
                <img
                  src={institutionLogo}
                  alt="Stracey Memorial Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-tight text-white">
                  STRACEY MEMORIAL
                </span>
                <span className="block text-xs font-medium text-[#C9A66B] tracking-wider uppercase">
                  Education Society • Bengaluru (Est. 1964)
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-md pt-2">
              Established in July 1964 by Mr. Ralph Stracey (ICS Retd.) in dedicated memory of his parents. 
              Providing disciplined, values-driven, and accessible education from Nursery to Composite Pre-University in the heart of Bengaluru.
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-2">
                Connect With Us
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href={institutionInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C9A66B] hover:text-[#17344E] flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={institutionInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C9A66B] hover:text-[#17344E] flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={institutionInfo.socialLinks.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C9A66B] hover:text-[#17344E] flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={institutionInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C9A66B] hover:text-[#17344E] flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Academic Divisions */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#C9A66B]/30 pb-2">
              Divisions
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/nursery" className="hover:text-[#C9A66B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C9A66B]" />
                  <span>Nursery School</span>
                </Link>
              </li>
              <li>
                <Link to="/primary" className="hover:text-[#C9A66B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C9A66B]" />
                  <span>Primary School</span>
                </Link>
              </li>
              <li>
                <Link to="/high-school" className="hover:text-[#C9A66B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C9A66B]" />
                  <span>High School (SSLC)</span>
                </Link>
              </li>
              <li>
                <Link to="/pre-university" className="hover:text-[#C9A66B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C9A66B]" />
                  <span>PUC Science (PCMB/PCMC)</span>
                </Link>
              </li>
              <li>
                <Link to="/pre-university" className="hover:text-[#C9A66B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C9A66B]" />
                  <span>PUC Commerce (CEBA/HEBA)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#C9A66B]/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/about#history" className="hover:text-[#C9A66B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C9A66B]" />
                  <span>Our Heritage & History</span>
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-[#C9A66B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C9A66B]" />
                  <span>Admission Procedure</span>
                </Link>
              </li>
              <li>
                <Link to="/fees-structure" className="hover:text-[#C9A66B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C9A66B]" />
                  <span>Fee Structure</span>
                </Link>
              </li>
              <li>
                <Link to="/infrastructure" className="hover:text-[#C9A66B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C9A66B]" />
                  <span>Labs & Campus Facilities</span>
                </Link>
              </li>
              <li>
                <Link to="/staff" className="hover:text-[#C9A66B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C9A66B]" />
                  <span>Faculty & Staff Directory</span>
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#C9A66B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C9A66B]" />
                  <span>Career Opportunities</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Campus Info */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#C9A66B]/30 pb-2">
              Campus Office
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A66B] shrink-0 mt-1" />
                <span>#52, St. Mark's Road, Shanthala Nagar, Ashok Nagar, Bengaluru – 560001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A66B] shrink-0" />
                <a href={`tel:${institutionInfo.phone}`} className="hover:text-white">
                  {institutionInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A66B] shrink-0" />
                <a href={`mailto:${institutionInfo.email}`} className="hover:text-white truncate">
                  {institutionInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-400 pt-1">
                <Clock className="w-4 h-4 text-[#C9A66B] shrink-0 mt-0.5" />
                <span>Mon-Fri: 8:30 AM – 4:00 PM<br/>Sat: 8:30 AM – 1:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} Stracey Memorial Education Society. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1 text-[#C9A66B]">
              <ShieldCheck className="w-4 h-4" />
              Recognized by Govt. of Karnataka
            </span>
            <Link to="/faqs" className="hover:text-white transition-colors">
              FAQs
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
