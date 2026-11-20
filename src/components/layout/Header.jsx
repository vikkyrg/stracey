import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Users, 
  Lock, 
  Download 
} from 'lucide-react';
import { navigationLinks } from '../../data/navigation';
import { institutionInfo } from '../../data/institution';
import institutionLogo from '../../assets/images/logo.jpg';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <div className="w-full font-sans sticky top-0 z-50">
      {/* 1. TOP UTILITY BAR: Thin dark navy strip (~32-34px tall) */}
      <div className="bg-[#17344E] text-white text-[11px] sm:text-[12px] h-[34px] border-b border-[#234E78]/50 flex items-center select-none overflow-hidden">
        <div className="max-w-[1440px] w-full mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between min-w-0">
          {/* Left contact & location indicators */}
          <div className="flex items-center space-x-3 sm:space-x-5 text-gray-200 min-w-0 truncate">
            <span className="flex items-center gap-1 font-medium tracking-tight truncate">
              <MapPin className="w-3.5 h-3.5 text-[#4B8BC8] shrink-0" />
              <span className="truncate">Bengaluru<span className="hidden sm:inline">, Karnataka, India</span></span>
            </span>
            <span className="hidden sm:inline-block text-white/20">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#4B8BC8] shrink-0" />
              <a href={`tel:${institutionInfo.phone}`}>{institutionInfo.phone}</a>
            </span>
            <span className="hidden md:inline-block text-white/20">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors truncate">
              <Mail className="w-3.5 h-3.5 text-[#4B8BC8] shrink-0" />
              <a href={`mailto:${institutionInfo.email}`} className="truncate">{institutionInfo.email}</a>
            </span>
          </div>

          {/* Right utility links */}
          <div className="flex items-center space-x-3 sm:space-x-5 text-gray-300 text-[11px] sm:text-[11.5px] shrink-0">
            <Link 
              to="/alumni" 
              className="flex items-center gap-1 hover:text-[#C9A66B] transition-colors"
            >
              <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-300 shrink-0" />
              <span>Alumni</span>
            </Link>
            <span className="text-white/20">|</span>
            <Link 
              to="/contact" 
              className="hidden xs:flex items-center gap-1 hover:text-[#C9A66B] transition-colors"
            >
              <Lock className="w-3 h-3 text-gray-300 shrink-0" />
              <span>Staff Login</span>
            </Link>
            <span className="hidden xs:inline text-white/20">|</span>
            <Link 
              to="/downloads" 
              className="flex items-center gap-1 hover:text-[#C9A66B] transition-colors"
            >
              <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-300 shrink-0" />
              <span>Downloads</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR: crisp white background */}
      <header
        className={`w-full bg-white transition-all duration-300 ${
          isScrolled 
            ? 'shadow-md border-b border-gray-200/90 py-2 sm:py-2.5' 
            : 'border-b border-gray-200 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-[1440px] w-full mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between min-w-0">
          
          {/* LEFT BRAND SECTION */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group py-1 max-w-[270px] sm:max-w-[340px]"
          >
            {/* Logo image badge with subtle border/radius */}
            <div className="w-[42px] h-[42px] sm:w-[50px] sm:h-[50px] rounded-lg bg-white p-0.5 border border-gray-200/90 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-102 transition-transform overflow-hidden">
              <img
                src={institutionLogo}
                alt="Stracey Memorial Logo"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Title & Subtitle */}
            <div className="flex items-center min-w-0">
              <div className="min-w-0">
                <span className="block font-serif text-[16px] sm:text-[19px] lg:text-[20px] font-bold text-[#17344E] leading-tight tracking-tight truncate">
                  STRACEY MEMORIAL
                </span>
                <span className="block text-[8.5px] sm:text-[10px] font-semibold text-[#646B73] tracking-[0.06em] sm:tracking-[0.08em] uppercase mt-0.5 truncate">
                  EDUCATION SOCIETY • BENGALURU
                </span>
              </div>
              <div className="hidden xl:block h-8 w-[1px] bg-gray-200 ml-5 mr-1" />
            </div>
          </Link>

          {/* CENTER NAVIGATION (Single-row, compact desktop nav) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 whitespace-nowrap">
            {navigationLinks.map((link) => {
              const hasDropdown = Boolean(link.dropdown);
              const isActive = location.pathname === link.path || 
                (link.dropdown && link.dropdown.some(d => d.path === location.pathname));

              if (hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`px-3 py-1.5 rounded-full text-[14.5px] font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                        isActive
                          ? 'bg-[#EBF2F8] text-[#17344E] font-semibold'
                          : 'text-[#222831] hover:text-[#17344E] hover:bg-gray-100/70'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-500 stroke-[2.2]" />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-0 pt-2 w-64 z-50 animate-in fade-in duration-150">
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 ring-1 ring-black/5 overflow-hidden">
                          {link.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.label}
                              to={dropItem.path}
                              className={`block px-4 py-2 text-[13.5px] transition-colors ${
                                location.pathname === dropItem.path
                                  ? 'bg-[#EBF2F8] text-[#17344E] font-semibold'
                                  : 'text-gray-700 hover:bg-[#F1F3F0] hover:text-[#17344E]'
                              }`}
                            >
                              {dropItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-full text-[14.5px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#EBF2F8] text-[#17344E] font-semibold'
                      : 'text-[#222831] hover:text-[#17344E] hover:bg-gray-100/70'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT CTA SECTION (Enquiry & Apply Now matching reference image) */}
          <div className="hidden lg:flex items-center space-x-2.5 shrink-0 pl-2">
            {/* Thin vertical separator before CTAs like reference */}
            <div className="h-6 w-[1px] bg-gray-200 mr-2" />

            {/* Enquiry Button: White bg, navy outline, navy text */}
            <Link
              to="/admission-enquiry"
              className="inline-flex items-center justify-center h-[38px] px-4 rounded-[8px] text-[13.5px] font-semibold text-[#17344E] bg-white border border-[#17344E] hover:bg-[#17344E]/5 transition-colors shadow-2xs"
            >
              Enquiry
            </Link>

            {/* Apply Now Button: Navy fill, white text, Chevron icon */}
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-1 h-[38px] px-4.5 rounded-[8px] text-[13.5px] font-semibold text-white bg-[#17344E] hover:bg-[#234E78] transition-colors shadow-sm"
            >
              <span>Apply Now</span>
              <ChevronRight className="w-4 h-4 stroke-[2.2]" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#17344E] hover:bg-gray-100 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-2 shadow-xl max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            {navigationLinks.map((link) => {
              if (link.dropdown) {
                const isOpen = activeDropdown === link.label;
                return (
                  <div key={link.label} className="border-b border-gray-100 pb-1.5">
                    <button
                      type="button"
                      onClick={() => setActiveDropdown(isOpen ? null : link.label)}
                      className="w-full flex items-center justify-between py-2 text-[15px] font-semibold text-[#17344E]"
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="pl-4 py-1 space-y-1 bg-[#F8F9FA] rounded-lg mt-1">
                        {link.dropdown.map((d) => (
                          <Link
                            key={d.label}
                            to={d.path}
                            className="block py-1.5 text-[13.5px] text-[#646B73] hover:text-[#17344E]"
                          >
                            {d.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`block py-2 text-[15px] font-semibold border-b border-gray-100 ${
                    isActive ? 'text-[#17344E]' : 'text-gray-800 hover:text-[#17344E]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile CTAs */}
            <div className="pt-4 grid grid-cols-2 gap-3">
              <Link
                to="/admission-enquiry"
                className="flex items-center justify-center h-[40px] rounded-[8px] text-sm font-semibold text-[#17344E] bg-white border border-[#17344E] text-center"
              >
                Enquiry
              </Link>
              <Link
                to="/admissions"
                className="flex items-center justify-center gap-1 h-[40px] rounded-[8px] text-sm font-semibold text-white bg-[#17344E] text-center"
              >
                <span>Apply Now</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
