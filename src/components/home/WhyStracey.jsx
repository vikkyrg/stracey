import React, { useState } from 'react';
import { 
  Users, 
  Wallet, 
  ClipboardCheck, 
  GraduationCap, 
  Target, 
  Trophy,
  CheckCircle2
} from 'lucide-react';
import Container from '../common/Container';
import schoolBuilding from '../../assets/images/school.png';

const pillars = [
  {
    icon: Users,
    title: "Personalized Faculty Mentorship",
    description: "Small teacher-student ratios ensure every child receives tailored guidance and remedial support.",
    iconColor: "text-[#24547D]",
    iconBg: "bg-[#24547D]/10",
    barColor: "bg-[#24547D]",
    cornerGlow: "from-[#24547D]/10 via-[#24547D]/5 to-transparent",
    backExtra: "Every student receives personal attention, guidance, and encouragement to reach their full potential.",
    points: [
      "Individual learning support",
      "Dedicated teacher guidance",
      "Student-focused development"
    ]
  },
  {
    icon: Wallet,
    title: "Moderate & Accessible Fees",
    description: "Committed to quality education accessible across socioeconomic backgrounds with structured fee installments.",
    iconColor: "text-[#547D68]",
    iconBg: "bg-[#547D68]/10",
    barColor: "bg-[#547D68]",
    cornerGlow: "from-[#547D68]/10 via-[#547D68]/5 to-transparent",
    backExtra: "We believe quality education should remain accessible to families from different economic backgrounds.",
    points: [
      "Affordable fee structure",
      "Flexible installment support",
      "Quality education for all"
    ]
  },
  {
    icon: ClipboardCheck,
    title: "Discipline & Attendance Monitoring",
    description: "Strict 75% attendance policy, regular parent-teacher reviews, and character-first values.",
    iconColor: "text-[#C9A45C]",
    iconBg: "bg-[#C9A45C]/12",
    barColor: "bg-[#C9A45C]",
    cornerGlow: "from-[#C9A45C]/12 via-[#C9A45C]/5 to-transparent",
    backExtra: "Strong discipline, regular attendance, and active parent involvement help students develop responsibility.",
    points: [
      "Attendance monitoring",
      "Parent-teacher communication",
      "Character development"
    ]
  },
  {
    icon: GraduationCap,
    title: "Karnataka State Board Center",
    description: "Official designated examination and evaluation center for SSLC and Pre-University examinations.",
    iconColor: "text-[#C9A45C]",
    iconBg: "bg-[#C9A45C]/12",
    barColor: "bg-[#C9A45C]",
    cornerGlow: "from-[#C9A45C]/12 via-[#C9A45C]/5 to-transparent",
    backExtra: "Students benefit from a recognized academic environment and structured preparation for important examinations.",
    points: [
      "SSLC examination support",
      "Pre-University examination preparation",
      "Academic evaluation standards"
    ]
  },
  {
    icon: Target,
    title: "KCET & Competitive Readiness",
    description: "Dedicated science laboratory experiments and competitive entrance mentoring for PU students.",
    iconColor: "text-[#24547D]",
    iconBg: "bg-[#24547D]/10",
    barColor: "bg-[#24547D]",
    cornerGlow: "from-[#24547D]/10 via-[#24547D]/5 to-transparent",
    backExtra: "Academic guidance and practical learning help students prepare confidently for higher education opportunities.",
    points: [
      "Competitive exam guidance",
      "Science laboratory learning",
      "Higher education preparation"
    ]
  },
  {
    icon: Trophy,
    title: "Holistic Co-Curriculars",
    description: "Active Science Club, Scouts and Guides camps, inter-school basketball, and cultural events.",
    iconColor: "text-[#547D68]",
    iconBg: "bg-[#547D68]/10",
    barColor: "bg-[#547D68]",
    cornerGlow: "from-[#547D68]/10 via-[#547D68]/5 to-transparent",
    backExtra: "Learning goes beyond textbooks through activities that develop teamwork, leadership, confidence, and creativity.",
    points: [
      "Sports and athletics",
      "Cultural activities",
      "Clubs and student leadership"
    ]
  }
];

function FlipCard({ item }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = item.icon;

  return (
    <div
      className="group h-[205px] sm:h-[200px] lg:h-[205px] w-full [perspective:1200px] cursor-pointer focus:outline-none"
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${item.title} card.`}
    >
      <div
        className={`relative w-full h-full duration-700 transition-transform [transform-style:preserve-3d] ease-in-out ${
          isFlipped ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'
        }`}
      >
        {/* ==================== FRONT SIDE ==================== */}
        <div className="absolute inset-0 w-full h-full bg-[#FFFFFF] rounded-[18px] p-5 sm:p-5.5 border border-[#E1E7ED] shadow-[0_4px_16px_-4px_rgba(23,52,78,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(23,52,78,0.08)] [backface-visibility:hidden] [webkit-backface-visibility:hidden] flex flex-col justify-start overflow-hidden">
          {/* Subtle soft colored corner arc at bottom-right */}
          <div 
            className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-tl ${item.cornerGlow} pointer-events-none group-hover:scale-125 transition-transform duration-500`} 
          />

          <div className="space-y-2.5 relative z-10">
            {/* Icon Box: Rounded-square container */}
            <div className={`w-[42px] h-[42px] rounded-[11px] ${item.iconBg} ${item.iconColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
              <Icon className="w-[22px] h-[22px] stroke-[2.2]" />
            </div>

            {/* Title with left accent vertical bar */}
            <div className="flex items-start gap-2.5">
              <span className={`w-[3px] h-[18px] ${item.barColor} rounded-full shrink-0 mt-0.5`} />
              <h3 className="font-serif text-[16px] sm:text-[17px] font-bold text-[#17344E] leading-snug">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-[#52677D] text-[12.5px] sm:text-[13px] leading-[1.55] font-normal pl-3.5">
              {item.description}
            </p>
          </div>
        </div>

        {/* ==================== BACK SIDE (Warm Ivory / Cream #FBF8F1 matching reference) ==================== */}
        <div className="absolute inset-0 w-full h-full bg-[#FBF8F1] rounded-[18px] p-4.5 sm:p-5 border border-[#E8DCC5] shadow-[0_6px_20px_-4px_rgba(23,52,78,0.06)] [transform:rotateY(180deg)] [backface-visibility:hidden] [webkit-backface-visibility:hidden] flex flex-col justify-start overflow-hidden">
          {/* Subtle gold / warm aesthetic decorative arcs */}
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#C9A45C]/12 blur-md pointer-events-none" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-tl from-[#C9A45C]/15 via-[#C9A45C]/5 to-transparent pointer-events-none" />

          {/* Decorative subtle laurel wreath outline watermark on bottom-right */}
          <div className="absolute bottom-2 right-2 opacity-15 pointer-events-none text-[#C9A45C]">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
              <path d="M6 6h10"/>
              <path d="M6 10h10"/>
            </svg>
          </div>

          <div className="space-y-2 relative z-10">
            {/* Header: Gold-framed square icon + Title */}
            <div className="flex items-start gap-2.5">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-white border border-[#E8DCC5] shadow-2xs flex items-center justify-center text-[#C9A45C] shrink-0">
                <Icon className="w-[19px] h-[19px] stroke-[2.2]" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-serif text-[15px] sm:text-[16px] font-bold text-[#17344E] leading-tight">
                  {item.title}
                </h3>
                <div className="w-6 h-[2px] bg-[#C9A45C] rounded-full" />
              </div>
            </div>

            {/* Additional Explanation */}
            <p className="text-[11.5px] sm:text-[12px] text-[#42566B] leading-[1.45] font-normal">
              {item.backExtra}
            </p>

            {/* 3 Supporting Points */}
            <div className="space-y-1 pt-1 border-t border-[#E8DCC5]/70">
              {item.points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-center gap-1.5 text-[11px] sm:text-[11.5px] text-[#17344E] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A45C] shrink-0 stroke-[2.4]" />
                  <span className="leading-tight">{pt}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default function WhyStracey() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] relative overflow-hidden select-none">
      
      {/* ==================== BACKGROUND DECORATIONS (Unified with Admissions & Heritage) ==================== */}
      
      {/* 1. Subtle faded campus architecture in background (extremely low opacity, top-right) */}
      <div className="absolute top-0 right-0 w-full sm:w-[65%] lg:w-[48%] h-[340px] sm:h-[420px] lg:h-[480px] pointer-events-none overflow-hidden opacity-[0.14] mix-blend-multiply">
        <img 
          src={schoolBuilding} 
          alt="Stracey Memorial Campus Silhouette" 
          className="w-full h-full object-cover object-top filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#F8FAFC]/60 to-[#F8FAFC]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8FAFC]" />
      </div>

      {/* 2. Top-left subtle natural foliage / leaf detail near corner */}
      <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-44 sm:w-56 h-44 sm:h-56 pointer-events-none opacity-40">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path d="M0,0 Q60,20 80,60 Q100,100 40,120 Q0,100 0,0 Z" fill="#2E6F40" fillOpacity="0.4" />
          <path d="M20,0 Q90,40 100,90 Q90,140 30,130 Q10,80 20,0 Z" fill="#408253" fillOpacity="0.3" />
        </svg>
      </div>

      {/* 3. Soft ambient light gradients (warm ivory, soft gold, and light blue-gray) */}
      <div className="absolute top-1/4 -right-16 w-[420px] h-[420px] bg-gradient-to-br from-[#E7C47A]/10 via-[#F8FAFC]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-gradient-to-tr from-[#16324F]/6 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 4. Subtle decorative curved organic shape / flowing corner accents */}
      <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-gradient-to-tl from-[#C99A3D]/10 via-transparent to-transparent blur-2xl pointer-events-none" />

      <Container className="max-w-[1240px] relative z-10">
        
        {/* HEADER SECTION: Compact, balanced spacing */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12 space-y-2.5">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FFFFFF] border border-[#C9A45C]/35 text-[#17344E] text-[10.5px] font-bold tracking-[0.08em] uppercase shadow-2xs">
            <GraduationCap className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>INSTITUTIONAL PILLARS</span>
          </div>

          {/* Main Serif Heading: Navy + Gold */}
          <h2 className="font-serif text-[clamp(30px,3.8vw,48px)] font-bold leading-[1.1] tracking-tight">
            <span className="text-[#153653]">Why Choose </span>
            <span className="text-[#C9A55D]">Stracey Memorial</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#52677D] text-[13.5px] sm:text-[14.5px] leading-relaxed max-w-2xl mx-auto pt-0.5 font-normal">
            Our core educational ethos focuses on academic integrity, accessible education, and individual pupil character.
          </p>

          {/* Decorative Gold Accent Bar */}
          <div className="flex justify-center pt-1.5">
            <div className="w-10 h-[3px] bg-[#C9A45C] rounded-full" />
          </div>
        </div>

        {/* 6 FEATURE CARDS GRID: 3 columns x 2 rows, calibrated height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {pillars.map((item, idx) => (
            <FlipCard key={idx} item={item} />
          ))}
        </div>

      </Container>
    </section>
  );
}
