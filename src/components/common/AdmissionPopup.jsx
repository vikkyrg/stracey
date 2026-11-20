import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import schoolBuilding from '../../assets/images/school.png';
import schoolLogo from '../../assets/images/logo.jpg';

const SESSION_KEY = 'stracey_admission_popup_shown_session';
const DONT_SHOW_KEY = 'stracey_admission_popup_dismiss_until';

export default function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowToday, setDontShowToday] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if dismissed for 24 hours
    const dismissUntil = localStorage.getItem(DONT_SHOW_KEY);
    if (dismissUntil) {
      const expirationTime = parseInt(dismissUntil, 10);
      if (Date.now() < expirationTime) {
        return; // Suppressed for 24h
      } else {
        localStorage.removeItem(DONT_SHOW_KEY); // Expired
      }
    }

    // Check if shown in this browser session
    const shownInSession = sessionStorage.getItem(SESSION_KEY);
    if (shownInSession) {
      return;
    }

    // Trigger after a 1.2s delay for a smooth appearance
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Mark as shown in this session immediately so rapid navigation doesn't re-trigger
      sessionStorage.setItem(SESSION_KEY, 'true');
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Handle escape key & scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    // Lock background scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, dontShowToday]);

  const handleClose = () => {
    if (dontShowToday) {
      // 24 hours from now
      const expires = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem(DONT_SHOW_KEY, expires.toString());
    }
    setIsOpen(false);
  };

  const handleNavigate = (path) => {
    handleClose();
    navigate(path);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-5 md:p-6 select-none animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#071726]/75 backdrop-blur-[4px] transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-[880px] bg-white rounded-[22px] sm:rounded-[26px] shadow-[0_25px_60px_-15px_rgba(7,23,38,0.5)] border border-white/20 overflow-hidden flex flex-col md:flex-row z-10 max-h-[92vh] sm:max-h-[90vh] md:max-h-[85vh] animate-in zoom-in-95 duration-250">
        
        {/* Floating Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close Announcement"
          className="absolute top-3.5 right-3.5 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 md:bg-gray-100 hover:bg-[#153653] text-[#153653] hover:text-white flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
        </button>

        {/* ================= LEFT SIDE: CAMPUS HERO (Desktop 44%, Mobile Header) ================= */}
        <div className="relative md:w-[42%] lg:w-[44%] shrink-0 h-44 sm:h-52 md:h-auto min-h-[170px] md:min-h-full overflow-hidden bg-[#153653] text-white flex flex-col justify-end p-5 sm:p-6 lg:p-7">
          
          {/* School Campus Photo */}
          <img 
            src={schoolBuilding} 
            alt="Stracey Memorial Campus" 
            className="absolute inset-0 w-full h-full object-cover object-center filter contrast-110 brightness-95 scale-105"
          />

          {/* Deep Navy Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#153653] via-[#153653]/75 to-[#153653]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#153653]/60 via-transparent to-[#153653]/60" />

          {/* Left Content */}
          <div className="relative z-10 space-y-2">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C9A55D] text-[#153653] text-[10px] sm:text-[11px] font-bold tracking-widest uppercase shadow-xs">
              <Sparkles className="w-3 h-3 fill-current" />
              <span>ADMISSIONS OPEN • 2026–27</span>
            </div>

            {/* Main Serif Headline */}
            <h2 id="modal-headline" className="font-serif text-lg sm:text-2xl lg:text-[26px] font-bold text-white leading-tight">
              A Brighter Future <br className="hidden sm:inline" />
              <span className="text-[#C9A55D] italic font-serif font-medium">Begins Here</span>
            </h2>

            {/* Short Description */}
            <p className="hidden sm:block text-xs text-gray-200/90 leading-relaxed max-w-xs font-normal">
              Give your child an education built on knowledge, values, discipline, and opportunity.
            </p>
          </div>

          {/* Subtle Bottom Gold Hairline */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A55D] via-[#E7C47A] to-transparent" />
        </div>

        {/* ================= RIGHT SIDE: DETAILS & ACTIONS (Desktop 56%) ================= */}
        <div className="flex-1 p-5 sm:p-7 lg:p-8 flex flex-col justify-between overflow-y-auto bg-white">
          
          <div className="space-y-4 sm:space-y-5">
            {/* Header: Logo & Title */}
            <div className="flex items-center gap-3.5 pr-8">
              <img 
                src={schoolLogo} 
                alt="Stracey Memorial Crest" 
                className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl object-contain border border-gray-100 p-0.5 shadow-xs shrink-0"
              />
              <div>
                <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#153653] leading-snug">
                  Admissions Open 2026–27
                </h3>
                <p className="text-xs sm:text-[13px] text-[#52657A] mt-0.5 font-normal">
                  Join a legacy of over six decades of educational excellence.
                </p>
              </div>
            </div>

            {/* Available Divisions List */}
            <div className="bg-[#FAF8F3] rounded-xl p-3 sm:p-4 border border-[#EAE3D2]">
              <div className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#C9A55D] mb-2 sm:mb-2.5">
                Available Programs &amp; Divisions
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-[#153653] font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A55D] shrink-0" />
                  <span>Nursery &amp; Primary</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A55D] shrink-0" />
                  <span>High School (SSLC)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A55D] shrink-0" />
                  <span>PUC Science (PCMB / PCMC)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A55D] shrink-0" />
                  <span>PUC Commerce (CEBA / HEBA)</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
              {/* Primary Gold Button */}
              <button
                type="button"
                onClick={() => handleNavigate('/admissions')}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-[#C9A55D] hover:bg-[#b8934b] text-[#153653] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </button>

              {/* Secondary Outlined Button */}
              <button
                type="button"
                onClick={() => handleNavigate('/admission-enquiry')}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl border-2 border-[#153653] text-[#153653] hover:bg-[#153653] hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer"
              >
                <span>Admission Enquiry</span>
              </button>
            </div>
          </div>

          {/* Footer Section: Don't show again + Established tag */}
          <div className="pt-4 mt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[#7C8B9B]">
            {/* Checkbox */}
            <label className="flex items-center gap-2 cursor-pointer select-none hover:text-[#153653] transition-colors">
              <input 
                type="checkbox" 
                checked={dontShowToday}
                onChange={(e) => setDontShowToday(e.target.checked)}
                className="w-3.5 h-3.5 rounded border-gray-300 text-[#C9A55D] focus:ring-[#C9A55D] cursor-pointer"
              />
              <span>Don't show again today</span>
            </label>

            {/* Established text */}
            <span className="font-medium tracking-wide">
              Established 1964 • Bengaluru
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
