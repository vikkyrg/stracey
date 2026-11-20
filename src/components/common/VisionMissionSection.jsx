import React from 'react';
import Container from './Container';
import { Target, Compass, GraduationCap } from 'lucide-react';

export default function VisionMissionSection({ className = '' }) {
  return (
    <section 
      id="vision-mission" 
      className={`scroll-mt-24 relative bg-[#FAF8F3] pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-28 lg:pb-36 overflow-hidden select-none ${className}`}
    >
      {/* ================= BACKGROUND DECORATIONS ================= */}

      {/* 1. Subtle Tree / Foliage detail in the upper-left corner */}
      <div className="hidden sm:block absolute -top-8 -left-8 w-48 sm:w-64 h-48 sm:h-64 pointer-events-none opacity-[0.06] text-[#2E6F40]">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
          {/* Gentle botanical branches and leaves */}
          <path d="M0 0 Q60 30 90 90 T140 180" strokeWidth="1.8" />
          <path d="M45 40 Q75 35 85 55 Q70 65 45 40 Z" fill="currentColor" fillOpacity="0.5" />
          <path d="M68 68 Q100 65 110 88 Q90 98 68 68 Z" fill="currentColor" fillOpacity="0.4" />
          <path d="M92 98 Q130 95 138 120 Q118 128 92 98 Z" fill="currentColor" fillOpacity="0.5" />
          <path d="M30 65 Q15 90 35 110 Q50 90 30 65 Z" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>

      {/* 2. Faint campus architectural line illustration in the upper-right background */}
      <div className="hidden lg:block absolute top-6 right-8 w-80 h-80 pointer-events-none opacity-[0.05] text-[#153653]">
        <svg viewBox="0 0 260 260" fill="none" stroke="currentColor" strokeWidth="1.1" className="w-full h-full">
          {/* Classical archways & academic pediment */}
          <path d="M30 220 L230 220 M40 220 L130 140 L220 220 Z" />
          <path d="M60 220 L60 170 Q75 155 90 170 L90 220" />
          <path d="M105 220 L105 170 Q120 155 135 170 L135 220" />
          <path d="M150 220 L150 170 Q165 155 180 170 L180 220" />
          <path d="M195 220 L195 170 Q205 158 215 170 L215 220" />
          <line x1="20" y1="225" x2="240" y2="225" strokeWidth="2" />
          <circle cx="130" cy="170" r="12" strokeWidth="0.8" />
        </svg>
      </div>

      {/* 3. Soft warm center glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#C9A55D]/[0.06] to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* ================= MAIN CONTAINER ================= */}
      <Container className="max-w-[1500px] relative z-10 px-4 sm:px-6 lg:px-10 xl:px-14">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          
          {/* Rounded pill badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFECE3] border border-[#DDD5C3] text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#153653] shadow-xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A55D]" />
            <span>Institutional Ethos</span>
          </div>

          {/* Main heading: "Vision & Mission" (Vision & in navy, Mission in gold) */}
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-bold tracking-tight leading-[1.1]">
            <span className="text-[#153653]">Vision &amp; </span>
            <span className="text-[#C9A55D] italic font-serif font-medium">Mission</span>
          </h2>

          {/* Gold divider below heading with graduation icon in center */}
          <div className="flex items-center justify-center gap-3.5 my-5 sm:my-6">
            <div className="h-[1px] w-14 sm:w-20 bg-gradient-to-r from-transparent to-[#C9A55D]" />
            <div className="w-7 h-7 rounded-full bg-[#F5EEDC] border border-[#C9A55D]/60 flex items-center justify-center text-[#C9A55D] shadow-xs">
              <GraduationCap className="w-4 h-4 stroke-[2]" />
            </div>
            <div className="h-[1px] w-14 sm:w-20 bg-gradient-to-l from-transparent to-[#C9A55D]" />
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-[17px] text-[#52657A] font-normal leading-relaxed max-w-[850px] mx-auto">
            Guiding young minds through ethical clarity, academic diligence, and community responsibility.
          </p>
        </div>

        {/* ================= 2 EQUAL-WIDTH CARDS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-stretch">
          
          {/* ==================== CARD 1: OUR VISION ==================== */}
          <div className="relative bg-[#153653] text-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-10 lg:p-12 xl:p-[56px] border border-white/10 border-r-[3.5px] border-r-[#C9A55D] border-b-[3.5px] border-b-[#C9A55D] shadow-[0_16px_36px_-10px_rgba(21,54,83,0.35)] flex flex-col justify-between overflow-hidden group hover:shadow-[0_20px_42px_-8px_rgba(21,54,83,0.45)] transition-all duration-300">
            
            {/* Subtle geometric navy tonal watermark background */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/[0.03] pointer-events-none" />
            <div className="absolute top-1/3 -left-12 w-48 h-48 rounded-full bg-[#C9A55D]/[0.03] pointer-events-none" />
            
            {/* Subtle decorative laurel illustration in bottom-right corner */}
            <div className="absolute -bottom-6 -right-6 w-44 h-44 pointer-events-none opacity-[0.07] text-[#C9A55D] group-hover:opacity-[0.11] transition-opacity duration-300">
              <svg viewBox="0 0 160 160" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                {/* Classical laurel wreath branch */}
                <path d="M30 140 C50 110 70 80 120 40" strokeWidth="2" />
                <path d="M50 120 C40 110 40 95 55 100 C65 105 60 120 50 120 Z" fill="currentColor" fillOpacity="0.4" />
                <path d="M70 100 C60 90 60 75 75 80 C85 85 80 100 70 100 Z" fill="currentColor" fillOpacity="0.4" />
                <path d="M90 80 C80 70 80 55 95 60 C105 65 100 80 90 80 Z" fill="currentColor" fillOpacity="0.4" />
                <path d="M110 60 C100 50 100 35 115 40 C125 45 120 60 110 60 Z" fill="currentColor" fillOpacity="0.4" />
                <path d="M130 40 C120 30 120 15 135 20 C145 25 140 40 130 40 Z" fill="currentColor" fillOpacity="0.4" />
              </svg>
            </div>

            {/* Content Top */}
            <div className="relative z-10">
              
              {/* Card Header: Square Icon + Category Label */}
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                {/* Square Icon Container with rounded corners */}
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-[#1C4366] border border-white/15 flex items-center justify-center text-white shadow-inner group-hover:scale-105 group-hover:bg-[#204c74] transition-all duration-300">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2] text-[#C9A55D]" />
                </div>
                
                {/* Category Label with Gold Underline */}
                <div>
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-gray-300 block">
                    OUR VISION
                  </span>
                  <div className="w-8 h-[2px] bg-[#C9A55D] mt-1.5 rounded-full" />
                </div>
              </div>

              {/* Heading: White serif font with "Values & Knowledge" in gold */}
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-bold text-white leading-[1.22] tracking-tight">
                Empowering Minds with{' '}
                <span className="text-[#C9A55D]">Values &amp; Knowledge</span>
              </h3>

              {/* Description: Clean sans-serif */}
              <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-[15.5px] text-gray-300 leading-relaxed font-normal">
                To be a benchmark educational institution that nurtures curious, disciplined, and compassionate young citizens capable of achieving academic excellence and contributing meaningfully to Indian and global society.
              </p>
            </div>

            {/* Bottom accent spacing */}
            <div className="pt-6 sm:pt-8" />
          </div>

          {/* ==================== CARD 2: OUR MISSION ==================== */}
          <div className="relative bg-[#153653] text-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-10 lg:p-12 xl:p-[56px] border border-white/10 border-r-[3.5px] border-r-[#C9A55D] border-b-[3.5px] border-b-[#C9A55D] shadow-[0_16px_36px_-10px_rgba(21,54,83,0.35)] flex flex-col justify-between overflow-hidden group hover:shadow-[0_20px_42px_-8px_rgba(21,54,83,0.45)] transition-all duration-300">
            
            {/* Subtle geometric navy tonal watermark background */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/[0.03] pointer-events-none" />
            <div className="absolute top-1/3 -left-12 w-48 h-48 rounded-full bg-[#C9A55D]/[0.03] pointer-events-none" />
            
            {/* Subtle open-book illustration in bottom-right corner */}
            <div className="absolute -bottom-6 -right-6 w-44 h-44 pointer-events-none opacity-[0.07] text-[#C9A55D] group-hover:opacity-[0.11] transition-opacity duration-300">
              <svg viewBox="0 0 160 160" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                {/* Open book drawing */}
                <path d="M20 120 Q50 110 80 125 Q110 110 140 120 L140 50 Q110 40 80 55 Q50 40 20 50 Z" />
                <line x1="80" y1="55" x2="80" y2="125" strokeWidth="2" />
                <path d="M35 68 Q55 60 70 68" strokeDasharray="2 3" />
                <path d="M35 83 Q55 75 70 83" strokeDasharray="2 3" />
                <path d="M35 98 Q55 90 70 98" strokeDasharray="2 3" />
                <path d="M90 68 Q105 60 125 68" strokeDasharray="2 3" />
                <path d="M90 83 Q105 75 125 83" strokeDasharray="2 3" />
                <path d="M90 98 Q105 90 125 98" strokeDasharray="2 3" />
              </svg>
            </div>

            {/* Content Top */}
            <div className="relative z-10">
              
              {/* Card Header: Square Icon + Category Label */}
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                {/* Square Icon Container with rounded corners */}
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-[#1C4366] border border-white/15 flex items-center justify-center text-white shadow-inner group-hover:scale-105 group-hover:bg-[#204c74] transition-all duration-300">
                  <Compass className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2] text-[#C9A55D]" />
                </div>
                
                {/* Category Label with Gold Underline */}
                <div>
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-gray-300 block">
                    OUR MISSION
                  </span>
                  <div className="w-8 h-[2px] bg-[#C9A55D] mt-1.5 rounded-full" />
                </div>
              </div>

              {/* Heading: White serif font with "Holistic Growth" in gold */}
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-bold text-white leading-[1.22] tracking-tight">
                Accessible Excellence &amp;{' '}
                <span className="text-[#C9A55D]">Holistic Growth</span>
              </h3>

              {/* Description: Clean sans-serif */}
              <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-[15.5px] text-gray-300 leading-relaxed font-normal">
                To provide high quality, inclusive education under the Karnataka State curriculum with moderate fee structures, individual mentorship, robust laboratory facilities, and dynamic co-curricular opportunities.
              </p>
            </div>

            {/* Bottom accent spacing */}
            <div className="pt-6 sm:pt-8" />
          </div>

        </div>

      </Container>

      {/* ================= BOTTOM FLOWING DECORATIVE CURVES ================= */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden leading-none z-20">
        
        {/* Secondary subtle gold edge */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A55D]/40 to-transparent" />
        
        {/* Primary thin gold curve line */}
        <svg 
          viewBox="0 0 1440 40" 
          fill="none" 
          preserveAspectRatio="none" 
          className="w-full h-4 sm:h-6 lg:h-8 -mb-[1px]"
        >
          <path 
            d="M0,24 C360,5 1080,5 1440,24" 
            stroke="#C9A55D" 
            strokeWidth="1.5" 
            fill="none" 
            strokeOpacity="0.8"
          />
        </svg>

        {/* Smooth flowing curved navy shape */}
        <svg 
          viewBox="0 0 1440 44" 
          fill="none" 
          preserveAspectRatio="none" 
          className="w-full h-5 sm:h-7 lg:h-9 text-[#153653]/15"
        >
          <path 
            d="M0,16 C360,38 1080,38 1440,16 L1440,44 L0,44 Z" 
            fill="currentColor" 
          />
        </svg>
      </div>

    </section>
  );
}
