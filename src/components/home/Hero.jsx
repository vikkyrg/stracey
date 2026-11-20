import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Award, Wallet } from 'lucide-react';
import heroImage from '../../assets/images/hero.png';
import heroMobile from '../../assets/images/herom.png';

export default function Hero() {
  return (
    <>
      {/* =========================================================================
          DESKTOP HERO SECTION (lg: 1024px and above)
          - Preserved exactly as existing with hero.png (2:1 ratio)
          - Viewport-aware sizing (calc(100vh - 122px)), max 820px
          - Content in the left blue zone (~44-46% width)
          - Students visible on the right with no cropping or clipping
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#17344E] h-[calc(100vh-122px)] max-h-[820px] hidden lg:flex items-center">
        <img
          src={heroImage}
          alt="Stracey Memorial Students and Campus"
          className="absolute inset-0 w-full h-full object-cover object-[right_center] xl:object-center pointer-events-none select-none"
        />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-12 xl:px-16 py-6">
          <div className="w-[48%] xl:w-[45%] flex flex-col justify-center space-y-4 xl:space-y-5">
            {/* Eyebrow Label with decorative gold rule */}
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-[2px] bg-[#C9A66B] rounded-full inline-block shrink-0" />
              <span className="text-white text-[12.5px] font-semibold tracking-[0.2em] uppercase">
                ESTABLISHED 1964
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-0.5">
              <h1 className="font-sans font-extrabold leading-[1.08] tracking-tight text-[clamp(34px,3.4vw,54px)]">
                <span className="text-white block">
                  Growing Minds.
                </span>
                <span className="text-[#C9A55D] block">
                  Building Futures.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-200 text-[clamp(13.5px,1.15vw,15.5px)] leading-relaxed max-w-[480px] font-normal">
              For over six decades, we have nurtured young minds through education rooted in values, discipline, curiosity, and opportunity.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 pt-1">
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center gap-2 h-[44px] px-6 rounded-[8px] text-[14px] font-bold text-[#17344E] bg-white hover:bg-gray-100 transition-all duration-200 shadow-md group cursor-pointer shrink-0"
              >
                <span>Admissions Open 2026–27</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.2]" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center h-[44px] px-6 rounded-[8px] text-[14px] font-semibold text-white bg-transparent border border-white/80 hover:bg-white/10 hover:border-white transition-all duration-200 cursor-pointer shrink-0"
              >
                <span>Explore Our Institution</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-3.5 border-t border-white/15">
              <div className="flex items-center gap-x-3.5 text-[12px] text-gray-200 font-medium">
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <GraduationCap className="w-3.5 h-3.5 text-[#C9A66B] stroke-[2.2] shrink-0" />
                  <span>Nursery to Pre-University</span>
                </span>
                <span className="text-white/30">|</span>
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <Award className="w-3.5 h-3.5 text-[#C9A66B] stroke-[2.2] shrink-0" />
                  <span>Karnataka State Board</span>
                </span>
                <span className="text-white/30">|</span>
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <Wallet className="w-3.5 h-3.5 text-[#C9A66B] stroke-[2.2] shrink-0" />
                  <span>Moderate Fee Structure</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MOBILE & TABLET HERO SECTION (< 1024px)
          - Controlled, subtle 5–8% height adjustment over original baseline (620px / 710px / 810px)
          - 100% width with no side cropping, no stretching, and full image composition visible
          - Top content fits inside the upper navy region with comfortable vertical spacing
          - Students, campus, and gold divider flourish in the lower half
          - Next sections (Admissions announcement & Heritage) follow naturally on scroll
          ========================================================================= */}
      <section className="lg:hidden relative w-full bg-[#00325E] overflow-hidden select-none min-h-[620px] xs:min-h-[710px] sm:min-h-[810px] flex flex-col justify-between">

        {/* Full-width complete background image */}
        <img
          src={heroMobile}
          alt="Stracey Memorial Mobile Hero"
          className="absolute inset-0 w-full h-full object-cover object-[center_top] pointer-events-none select-none"
        />

        {/* 
            Upper Content: Positioned comfortably inside the upper navy zone 
            with generous vertical breathing room
        */}
        <div className="relative z-10 w-full px-5 xs:px-6 sm:px-8 pt-8 xs:pt-10 sm:pt-14 pb-4 max-w-lg mx-auto">
          <div className="space-y-3 xs:space-y-3.5 sm:space-y-4">

            {/* Eyebrow: ESTABLISHED 1964 */}
            <div className="flex items-center gap-2">
              <span className="w-5 sm:w-6 h-[2px] bg-[#C9A66B] rounded-full inline-block shrink-0" />
              <span className="text-white text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] uppercase">
                ESTABLISHED 1964
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-0.5">
              <h1 className="font-sans font-extrabold leading-[1.08] tracking-tight text-[30px] xs:text-[34px] sm:text-[40px]">
                <span className="text-white block">
                  Growing Minds.
                </span>
                <span className="text-[#C9A55D] block">
                  Building Futures.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-[#E0EBF5] text-[13px] xs:text-[14px] sm:text-[15px] leading-[1.6] max-w-[380px] font-normal">
              For over six decades, we have nurtured young minds through education rooted in values, discipline, curiosity, and opportunity.
            </p>

            {/* Action Buttons: Stacked with comfortable touch height */}
            <div className="flex flex-col gap-2.5 pt-1.5 sm:pt-2 w-full max-w-[320px]">
              <Link
                to="/admissions"
                className="w-full inline-flex items-center justify-center gap-2 h-[44px] px-5 rounded-[10px] text-[13.5px] xs:text-[14px] font-bold text-[#17344E] bg-white hover:bg-gray-100 shadow-md transition-all active:scale-98"
              >
                <span>Admissions Open 2026–27</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.2]" />
              </Link>

              <Link
                to="/about"
                className="w-full inline-flex items-center justify-center h-[42px] px-5 rounded-[10px] text-[13px] xs:text-[13.5px] font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/60 transition-all active:scale-98"
              >
                <span>Explore Our Institution</span>
              </Link>
            </div>

          </div>
        </div>

        {/* 
            Lower Spacer Area: Proportionally tuned (5–8% increase) to give students 
            and campus background optimal vertical clearance
        */}
        <div className="relative z-10 w-full h-[240px] xs:h-[280px] sm:h-[340px] pointer-events-none" />

      </section>
    </>
  );
}
