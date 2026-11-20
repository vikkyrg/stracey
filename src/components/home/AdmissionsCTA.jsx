import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  FlaskConical, 
  Phone, 
  Mail, 
  MapPin, 
  Download, 
  ArrowRight,
  FileEdit,
  CheckCircle2
} from 'lucide-react';
import Container from '../common/Container';
import schoolBuilding from '../../assets/images/school.png';

export default function AdmissionsCTA() {
  const [downloadSuccess, setDownloadSuccess] = useState(null);

  const handleDownloadApp = () => {
    setDownloadSuccess('Admission Application Form 2026-27 downloaded successfully.');
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden select-none">
      
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      {/* 1. Faded authentic campus building image in background (low opacity, top-right/center) */}
      <div className="absolute top-0 right-0 w-full sm:w-[68%] lg:w-[58%] h-[380px] sm:h-[480px] lg:h-[540px] pointer-events-none overflow-hidden opacity-[0.20] mix-blend-multiply">
        <img 
          src={schoolBuilding} 
          alt="Stracey Memorial Campus" 
          className="w-full h-full object-cover object-top filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#F8FAFC]/50 to-[#F8FAFC]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8FAFC]" />
      </div>

      {/* 2. Top-left soft green foliage accent */}
      <div className="absolute -top-8 -left-8 w-44 sm:w-56 h-44 sm:h-56 pointer-events-none opacity-40">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path d="M0,0 Q60,20 80,60 Q100,100 40,120 Q0,100 0,0 Z" fill="#2E6F40" fillOpacity="0.4" />
          <path d="M20,0 Q90,40 100,90 Q90,140 30,130 Q10,80 20,0 Z" fill="#408253" fillOpacity="0.3" />
        </svg>
      </div>

      {/* 3. Subtle ambient gold & blue atmospheric glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-[#E7C47A]/12 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-[#16324F]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 4. Bottom Decorative Waves: Deep Navy (#16324F) and Gold (#C99A3D) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg 
          viewBox="0 0 1440 90" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-12 sm:h-16 lg:h-20 preserve-3d"
        >
          {/* Gold wave ribbon */}
          <path 
            d="M0,60 C380,85 760,25 1140,55 C1280,65 1370,45 1440,50 L1440,90 L0,90 Z" 
            fill="#C99A3D" 
            fillOpacity="0.85"
          />
          {/* Deep Navy main ground wave */}
          <path 
            d="M0,72 C420,95 820,38 1200,68 C1310,75 1390,62 1440,65 L1440,90 L0,90 Z" 
            fill="#16324F" 
          />
        </svg>
      </div>

      <Container className="max-w-[1440px] relative z-10">
        
        {/* Optional Download Feedback Toast */}
        {downloadSuccess && (
          <div className="mb-6 p-3.5 sm:p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center gap-3 shadow-sm animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold">{downloadSuccess}</span>
          </div>
        )}

        {/* ==================== TWO-COLUMN DESKTOP LAYOUT ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* -------------------- LEFT COLUMN: 58–60% (col-span-7) -------------------- */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* 1. Admission Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4E9D0] border border-[#E7C47A] text-[#16324F] text-[11px] sm:text-[11.5px] font-bold tracking-[0.08em] uppercase shadow-2xs">
              <GraduationCap className="w-4 h-4 text-[#16324F] stroke-[2.2]" />
              <span>ADMISSIONS OPEN 2026–27</span>
            </div>

            {/* 2. Large Editorial Serif Heading */}
            <div className="space-y-3">
              <h2 className="font-serif text-[clamp(34px,4.2vw,58px)] font-bold text-[#153653] leading-[1.1] tracking-tight">
                Your Child's Journey of Excellence{' '}
                <span className="text-[#C9A55D]">Starts Here</span>
              </h2>

              {/* Short Gold Decorative Accent Line */}
              <div className="w-14 sm:w-16 h-[3.5px] bg-[#C9A55D] rounded-full" />
            </div>

            {/* 3. Description Narrative */}
            <p className="text-[#52657A] text-[15px] sm:text-[16.5px] leading-[1.7] max-w-[750px] font-normal">
              Join a distinguished learning community that blends six decades of heritage with modern science laboratories, individual academic care, and character-first values.
            </p>

            {/* 4. Educational Program Highlights (Horizontal row with icons) */}
            <div className="pt-1 pb-1 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
              
              {/* Highlight 1: Nursery & Primary */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-[12px] bg-[#F7EED9] flex items-center justify-center text-[#C99A3D] shrink-0 shadow-2xs">
                  <Users className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-bold text-[14px] sm:text-[14.5px] text-[#16324F] leading-tight">
                    Nursery &<br className="hidden sm:inline" /> Primary
                  </h4>
                </div>
              </div>

              {/* Vertical separator */}
              <span className="hidden sm:inline-block w-px h-8 bg-[#E1E7ED]" />

              {/* Highlight 2: High School (SSLC) */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-[12px] bg-[#F7EED9] flex items-center justify-center text-[#C99A3D] shrink-0 shadow-2xs">
                  <BookOpen className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-bold text-[14px] sm:text-[14.5px] text-[#16324F] leading-tight">
                    High School<br className="hidden sm:inline" /> (SSLC)
                  </h4>
                </div>
              </div>

              {/* Vertical separator */}
              <span className="hidden sm:inline-block w-px h-8 bg-[#E1E7ED]" />

              {/* Highlight 3: PUC Science & Commerce */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-[12px] bg-[#F7EED9] flex items-center justify-center text-[#C99A3D] shrink-0 shadow-2xs">
                  <FlaskConical className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-bold text-[14px] sm:text-[14.5px] text-[#16324F] leading-tight">
                    PUC Science &<br className="hidden sm:inline" /> Commerce
                  </h4>
                </div>
              </div>

            </div>

            {/* 5. CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              
              {/* Primary: Online Admission Enquiry */}
              <Link
                to="/admission-enquiry"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-[12px] bg-[#E7C47A] hover:bg-[#C99A3D] text-[#16324F] font-bold text-[14.5px] shadow-[0_4px_16px_-2px_rgba(201,154,61,0.35)] transition-all duration-300 transform active:scale-98 group"
              >
                <FileEdit className="w-4 h-4 stroke-[2.4]" />
                <span>Online Admission Enquiry</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] transform group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary: Admission Procedure & Rules */}
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-[12px] bg-white hover:bg-[#F0F4F8] text-[#16324F] font-bold text-[14.5px] border border-[#16324F] transition-all duration-300 transform active:scale-98"
              >
                <BookOpen className="w-4 h-4 stroke-[2.2]" />
                <span>Admission Procedure & Rules</span>
              </Link>

            </div>

          </div>

          {/* -------------------- RIGHT COLUMN: ~40% (col-span-5) ADMISSIONS DESK CARD -------------------- */}
          <div className="lg:col-span-5">
            
            {/* Card Outer with Gold Bottom-Right Corner Accent */}
            <div className="relative rounded-[26px] bg-[#16324F] text-white p-7 sm:p-9 shadow-[0_18px_40px_-8px_rgba(22,50,79,0.35)] border border-[#1E4568] overflow-hidden group">
              
              {/* Gold swoosh highlight on bottom-right corner matching reference */}
              <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-gradient-to-tl from-[#C99A3D] via-[#E7C47A]/60 to-transparent pointer-events-none opacity-85 group-hover:scale-110 transition-transform duration-500" />
              
              <div className="relative z-10 space-y-6">
                
                {/* Card Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-white/12">
                  <div className="w-12 h-12 rounded-[14px] bg-[#E7C47A] flex items-center justify-center text-[#16324F] shrink-0 shadow-sm">
                    <GraduationCap className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-[21px] sm:text-[23px] font-bold text-white leading-tight">
                      Admissions Desk
                    </h3>
                    <p className="text-[12px] sm:text-[12.5px] text-[#D0DAE5] font-normal mt-0.5">
                      Direct counselling & assistance
                    </p>
                  </div>
                </div>

                {/* Contact Information Rows */}
                <div className="space-y-4">
                  
                  {/* Row 1: Direct Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-[10px] bg-[#1E4568] border border-white/10 flex items-center justify-center text-[#E7C47A] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-bold tracking-wider text-[#C99A3D] uppercase block">
                        DIRECT PHONE
                      </span>
                      <a 
                        href="tel:+918025595235" 
                        className="text-[15px] sm:text-[16px] font-semibold text-white hover:text-[#E7C47A] transition-colors inline-block"
                      >
                        +91 80 2559 5235
                      </a>
                    </div>
                  </div>

                  {/* Subtle divider */}
                  <div className="w-full h-px bg-white/10" />

                  {/* Row 2: Admissions Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-[10px] bg-[#1E4568] border border-white/10 flex items-center justify-center text-[#E7C47A] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="text-[11px] font-bold tracking-wider text-[#C99A3D] uppercase block">
                        ADMISSIONS EMAIL
                      </span>
                      <a 
                        href="mailto:admissions@stracey50.com" 
                        className="text-[14px] sm:text-[14.5px] font-semibold text-white hover:text-[#E7C47A] transition-colors truncate block"
                      >
                        admissions@stracey50.com
                      </a>
                    </div>
                  </div>

                  {/* Subtle divider */}
                  <div className="w-full h-px bg-white/10" />

                  {/* Row 3: Campus Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-[10px] bg-[#1E4568] border border-white/10 flex items-center justify-center text-[#E7C47A] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-bold tracking-wider text-[#C99A3D] uppercase block">
                        CAMPUS ADDRESS
                      </span>
                      <p className="text-[12.5px] sm:text-[13px] text-[#D0DAE5] leading-[1.55] font-normal">
                        #52, St. Mark's Road, Shanthala Nagar, Ashok Nagar, Bengaluru – 560001, Karnataka, India
                      </p>
                    </div>
                  </div>

                </div>

                {/* Bottom: Download Application PDF (Full-width white button) */}
                <div className="pt-2">
                  <button
                    onClick={handleDownloadApp}
                    className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-[12px] bg-white hover:bg-gray-100 text-[#16324F] font-bold text-[14px] shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-all duration-200 active:scale-98 group/btn"
                  >
                    <Download className="w-4 h-4 text-[#16324F] stroke-[2.4] group-hover/btn:translate-y-0.5 transition-transform" />
                    <span>Download Application PDF</span>
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
