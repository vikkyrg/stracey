import React from 'react';
import Container from './Container';
import { School, BookOpen, GraduationCap, Award, Gem } from 'lucide-react';

const milestones = [
  {
    number: '01',
    dateBadge: 'JULY 1964',
    title: 'Foundation by Mr. Ralph Stracey (ICS Retd.)',
    description:
      "Established as 'Stracey English School' with just a single student at #52 St. Mark's Road, in loving memory of parents Daniel Augustine & Ethel Henrietta Stracey.",
    icon: School,
    iconLabel: 'Foundation'
  },
  {
    number: '02',
    dateBadge: '1971–1972',
    title: 'Renamed Stracey Memorial & State Syllabus Adoption',
    description:
      "Following the passing of the founder's mother in 1971, the school was rechristened 'Stracey Memorial High School' and affiliated with the Karnataka State SSLC Board.",
    icon: BookOpen,
    iconLabel: 'SSLC Affiliation'
  },
  {
    number: '03',
    dateBadge: '1997',
    title: 'Establishment of Composite Pre-University College',
    description:
      'Expanded into pre-university education offering Science (PCMB, PCMC) and Commerce (CEBA, HEBA) streams under the Karnataka State Pre-University Board.',
    icon: GraduationCap,
    iconLabel: 'PU College'
  },
  {
    number: '04',
    dateBadge: '2014',
    title: 'Golden Jubilee Milestone (50 Years)',
    description:
      'Celebrated five decades of disciplined education in Bengaluru with notable alumni, dignitaries, and academic scholarship endowments.',
    icon: Award,
    iconLabel: 'Golden Jubilee'
  },
  {
    number: '05',
    dateBadge: '2024–PRESENT',
    title: 'Diamond Jubilee: Over 60 Years of Educational Impact',
    description:
      'Commemorating 60 years of community service with modernized science laboratories, smart learning resources, and strong board pass percentages.',
    icon: Gem,
    iconLabel: 'Diamond Jubilee'
  }
];

export default function ChronicleTimeline({ className = '' }) {
  return (
    <section 
      id="history" 
      className={`scroll-mt-24 relative bg-[#FAF8F3] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28 overflow-hidden select-none border-t border-[#EAE3D2]/70 ${className}`}
    >
      {/* ================= BACKGROUND DECORATIONS ================= */}

      {/* Soft warm light glow accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#C9A55D]/[0.05] to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container className="max-w-[1180px] relative z-10 px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER AREA ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          
          {/* Small rounded badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFECE3] border border-[#DDD5C3] text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#173653] shadow-xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A55D]" />
            <span>Chronicle of Excellence</span>
          </div>

          {/* Main heading */}
          <h2 className="font-serif text-[clamp(30px,3.8vw,52px)] font-bold text-[#153653] tracking-tight leading-[1.1]">
            From One Pupil to Over Sixty Years of{' '}
            <span className="text-[#C9A55D] italic font-serif font-medium">Leadership</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base text-[#52657A] font-normal leading-relaxed max-w-xl mx-auto">
            The historical journey of Stracey Memorial Education Society.
          </p>

          {/* Gold horizontal decorative divider with centered diamond/dot */}
          <div className="flex items-center justify-center gap-3 mt-6 sm:mt-7">
            <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#C9A55D]" />
            <div className="w-2 h-2 rotate-45 border border-[#C9A55D] bg-[#FAF8F3] flex items-center justify-center">
              <div className="w-1 h-1 bg-[#C9A55D]" />
            </div>
            <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#C9A55D]" />
          </div>
        </div>

        {/* ================= TIMELINE SECTION ================= */}
        <div className="relative">

          {/* Vertical Connecting Line */}
          {/* Desktop/Tablet: aligned at left 140px. Mobile: aligned at left 20px */}
          <div 
            className="absolute top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#C9A55D] via-[#D8B979] to-[#C9A55D]/40 left-[20px] md:left-[140px] -translate-x-1/2" 
          />

          <div className="space-y-8 sm:space-y-10 lg:space-y-11">
            {milestones.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={item.number} 
                  className="relative flex flex-col md:flex-row items-start gap-4 md:gap-8 group"
                >
                  
                  {/* ====== LEFT COLUMN: Date Badge & Node ====== */}
                  {/* Desktop/Tablet: Fixed width area (140px) positioning Date Badge on left + Node directly on line */}
                  <div className="flex md:flex-row items-center md:justify-end gap-3 md:gap-4 w-full md:w-[140px] shrink-0 pl-1 md:pl-0">
                    
                    {/* Timeline Node (Circle on vertical line) */}
                    {/* On Desktop: positioned at right of this 140px column (right: -10px relative to line) */}
                    {/* On Mobile: positioned on left 20px */}
                    <div className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF8F3] border-[2px] border-[#C9A55D] flex items-center justify-center shadow-sm order-1 md:order-2 md:-mr-5 shrink-0">
                      {/* Inner gold outer ring + dark navy center */}
                      <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-[#173653] flex items-center justify-center border border-[#C9A55D]/60 shadow-inner group-hover:bg-[#C9A55D] transition-colors duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FAF8F3]" />
                      </div>
                    </div>

                    {/* Date Label: Navy pill-shaped badge */}
                    <div className="order-2 md:order-1 inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#173653] text-[#FAF8F3] text-[11px] sm:text-xs font-semibold tracking-wider uppercase shadow-sm border border-[#173653]/80 shrink-0">
                      <span>{item.dateBadge}</span>
                    </div>
                  </div>

                  {/* ====== RIGHT COLUMN: Horizontal Milestone Card ====== */}
                  <div className="flex-1 w-full pl-9 md:pl-0">
                    <div className="relative bg-white/95 rounded-[22px] sm:rounded-[24px] p-5 sm:p-7 lg:p-8 border border-[#E9E2D2] border-r-[3.5px] border-r-[#C9A55D] shadow-[0_4px_20px_-6px_rgba(23,54,83,0.06)] hover:shadow-[0_8px_26px_-6px_rgba(23,54,83,0.1)] transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                      
                      {/* Pale Gold Circular Icon */}
                      <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-[#F6EEDC] border border-[#E4D5B4] flex items-center justify-center text-[#9F7A2D] shrink-0 shadow-xs group-hover:scale-105 group-hover:bg-[#F0E4CB] transition-all duration-300">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[11px] font-bold tracking-widest uppercase text-[#C9A55D]">
                            Milestone {item.number}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-[#D4BA82]" />
                          <span className="text-[11px] font-medium tracking-wide text-[#7C8B9B]">
                            {item.iconLabel}
                          </span>
                        </div>

                        <h3 className="font-serif text-lg sm:text-xl lg:text-[22px] font-bold text-[#173653] leading-snug group-hover:text-[#10273D] transition-colors">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs sm:text-[14.5px] text-[#52657A] leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </Container>

      {/* ================= BOTTOM DECORATIVE CURVE ================= */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden leading-none z-20">
        {/* Subtle curved gold line */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A55D]/70 to-transparent" />
        
        {/* Subtle dark navy decorative wave / bottom edge separator */}
        <svg 
          viewBox="0 0 1200 36" 
          fill="none" 
          preserveAspectRatio="none" 
          className="w-full h-4 sm:h-5 lg:h-6 text-[#173653]/15"
        >
          <path 
            d="M0,0 C300,24 900,24 1200,0 L1200,36 L0,36 Z" 
            fill="currentColor" 
          />
        </svg>
      </div>

    </section>
  );
}
