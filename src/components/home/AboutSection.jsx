import React from 'react';
import { Link } from 'react-router-dom';
import { History, Shield, GraduationCap, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import buildingPhoto from '../../assets/images/school.png';

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F8FAFC] relative overflow-hidden select-none">
      
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      
      {/* 1. Subtle faded campus architecture (desktop/tablet only to avoid mobile clutter) */}
      <div className="hidden sm:block absolute top-0 right-0 w-[65%] lg:w-[50%] h-[360px] sm:h-[450px] lg:h-[500px] pointer-events-none overflow-hidden opacity-[0.14] mix-blend-multiply">
        <img 
          src={buildingPhoto} 
          alt="Stracey Memorial Heritage Silhouette" 
          className="w-full h-full object-cover object-top filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#F8FAFC]/60 to-[#F8FAFC]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8FAFC]" />
      </div>

      {/* 2. Top-left soft natural foliage / leaf detail near corner */}
      <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-32 sm:w-56 h-32 sm:h-56 pointer-events-none opacity-30 sm:opacity-40">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path d="M0,0 Q60,20 80,60 Q100,100 40,120 Q0,100 0,0 Z" fill="#2E6F40" fillOpacity="0.4" />
          <path d="M20,0 Q90,40 100,90 Q90,140 30,130 Q10,80 20,0 Z" fill="#408253" fillOpacity="0.3" />
        </svg>
      </div>

      {/* 3. Soft ambient light gradients */}
      <div className="absolute top-1/4 -right-16 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-gradient-to-br from-[#E7C47A]/10 via-[#F8FAFC]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-gradient-to-tr from-[#16324F]/6 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 4. Subtle decorative curved organic shape */}
      <div className="absolute -bottom-16 -right-16 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-gradient-to-tl from-[#C99A3D]/10 via-transparent to-transparent blur-2xl pointer-events-none" />

      <Container className="max-w-[1240px] relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: Image with History Badge & Bottom Overlay */}
          <div className="lg:col-span-5 relative pt-4 sm:pt-7 lg:pt-9 w-full max-w-[480px] mx-auto lg:max-w-none">
            
            {/* FLOATING HISTORY CARD: On mobile, gracefully docked with non-overflowing positioning */}
            <div className="absolute top-0 left-0 sm:left-0 z-20 w-[165px] xs:w-[185px] sm:w-[215px] bg-[#17344E] text-white p-3.5 sm:p-5 rounded-[14px] sm:rounded-[18px] shadow-lg sm:shadow-xl border border-white/10 select-none">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center text-[#C9A66B] mb-2 sm:mb-2.5">
                <History className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
              </div>
              <h4 className="font-serif text-base sm:text-lg lg:text-[19px] font-bold leading-tight text-white">
                July 1964
              </h4>
              <p className="text-[10.5px] sm:text-[12px] text-gray-300 mt-1 sm:mt-1.5 leading-snug font-normal">
                Starting with 1 pupil, evolving to thousands.
              </p>
            </div>

            {/* MAIN IMAGE CONTAINER: Responsive aspect ratio (aspect-[4/5] on sm+, aspect-[4/4.8] on mobile) */}
            <div className="relative w-full aspect-[4/4.8] sm:aspect-[4/5] rounded-[18px] sm:rounded-[22px] overflow-hidden shadow-xl sm:shadow-2xl border border-gray-100 group mt-4 sm:mt-0">
              <img
                src={buildingPhoto}
                alt="Stracey Memorial Historic Heritage Building"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />

              {/* Natural Dark Gradient Overlay at Bottom */}
              <div className="absolute inset-x-0 bottom-0 h-[52%] sm:h-[48%] bg-gradient-to-t from-[#17344E]/95 via-[#17344E]/75 to-transparent pointer-events-none" />

              {/* IMAGE BOTTOM OVERLAY CONTENT */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 text-white z-10 space-y-1 sm:space-y-1.5">
                {/* Gold Eyebrow Label with divider line */}
                <div className="flex items-center gap-2">
                  <span className="text-[#C9A66B] text-[10px] sm:text-[11.5px] font-extrabold uppercase tracking-[0.14em]">
                    FILIAL TRIBUTE
                  </span>
                  <span className="w-6 sm:w-7 h-[1.5px] bg-[#C9A66B] inline-block opacity-80" />
                </div>

                {/* Main Serif Quote */}
                <p className="font-serif text-[14px] sm:text-[17.5px] font-bold leading-snug text-white">
                  "Built with devotion to honor parents Daniel Augustine & Ethel Henrietta Stracey"
                </p>

                {/* Supporting Text */}
                <p className="text-[10.5px] sm:text-[12px] text-gray-300 font-normal pt-0.5">
                  Founded July 1964 by Ralph Stracey, ICS (Retd.)
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Editorial Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6 pt-1 lg:pt-4 w-full min-w-0">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#EBF2F8] border border-[#234E78]/15 text-[#17344E] text-[10px] sm:text-[11px] font-bold tracking-[0.08em] uppercase select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#234E78]" />
              <span>OUR INSTITUTIONAL HERITAGE</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="font-serif text-[clamp(30px,3.8vw,50px)] font-bold leading-[1.1] tracking-tight">
                <span className="text-[#153653]">More Than Six Decades of</span>
                <br className="hidden sm:inline" />
                <span className="text-[#C9A55D]">Learning, Character and Growth</span>
              </h2>
              {/* Gold decorative accent bar */}
              <div className="w-10 sm:w-12 h-[3px] sm:h-[3.5px] bg-[#C9A66B] rounded-full" />
            </div>

            {/* Introductory Paragraph */}
            <p className="text-[#17344E] text-[14px] sm:text-[16px] lg:text-[16.5px] font-semibold leading-relaxed">
              From an English feeder school in 1964 to a comprehensive institution guiding pupils from early childhood to university entrance.
            </p>

            {/* Historical Narrative Paragraphs */}
            <div className="space-y-3 text-[#52677D] text-[13px] sm:text-[14px] leading-[1.65]">
              <p>
                Stracey Memorial was born out of profound filial gratitude when retired Indian Civil Service officer <strong className="text-[#17344E] font-semibold">Mr. Ralph Stracey</strong> founded the institution in July 1964 in memory of his parents, who had made selfless sacrifices for their children's education.
              </p>
              <p>
                Initially started as the Stracey English School with a single pupil to serve Anglo-Indian and minority communities, the institution adopted the Karnataka State SSLC and Pre-University curriculum in 1972. Renamed <strong className="text-[#17344E] font-semibold">Stracey Memorial High School</strong> following the demise of the founder's mother in 1971, it has matured into a revered educational beacon on St. Mark's Road.
              </p>
            </div>

            {/* FEATURE CARDS: Stack cleanly on mobile, side-by-side on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
              
              {/* Card 1: Discipline & Attendance */}
              <div className="flex items-start gap-3 p-3.5 sm:p-4.5 rounded-[12px] sm:rounded-[14px] bg-[#F6F7F7] border border-[#E5E9ED] transition-colors hover:border-[#234E78]/30">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#C9A66B]/15 text-[#C9A66B] flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 fill-[#C9A66B]/20 stroke-[2.2]" />
                </div>
                <div className="space-y-0.5 sm:space-y-1 min-w-0">
                  <h4 className="font-bold text-[#17344E] text-[13.5px] sm:text-[14px]">
                    Discipline & Attendance
                  </h4>
                  <p className="text-[#52677D] text-[11.5px] sm:text-[12px] leading-snug">
                    Minimum 75% attendance rule and personalized student character tracking.
                  </p>
                </div>
              </div>

              {/* Card 2: Moderate & Open Fee Policy */}
              <div className="flex items-start gap-3 p-3.5 sm:p-4.5 rounded-[12px] sm:rounded-[14px] bg-[#F6F7F7] border border-[#E5E9ED] transition-colors hover:border-[#234E78]/30">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#C9A66B]/15 text-[#C9A66B] flex items-center justify-center shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                </div>
                <div className="space-y-0.5 sm:space-y-1 min-w-0">
                  <h4 className="font-bold text-[#17344E] text-[13.5px] sm:text-[14px]">
                    Moderate & Open Fee Policy
                  </h4>
                  <p className="text-[#52677D] text-[11.5px] sm:text-[12px] leading-snug">
                    High quality education accessible to every hardworking student without heavy barriers.
                  </p>
                </div>
              </div>

            </div>

            {/* BUTTONS: Full-width stacked on mobile (<640px), horizontal on sm+ */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-2">
              <Link
                to="/about#history"
                className="inline-flex items-center justify-center gap-2 h-[42px] px-6 rounded-[8px] text-[13.5px] font-bold text-white bg-[#17344E] hover:bg-[#234E78] transition-colors shadow-sm cursor-pointer group w-full sm:w-auto"
              >
                <span>Explore Full History</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.2]" />
              </Link>

              <Link
                to="/about#vision-mission"
                className="inline-flex items-center justify-center h-[42px] px-6 rounded-[8px] text-[13.5px] font-bold text-[#17344E] bg-white border border-[#17344E] hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer w-full sm:w-auto"
              >
                <span>Vision & Mission</span>
              </Link>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
