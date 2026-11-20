import PageBanner from '../components/common/PageBanner';
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import ChronicleTimeline from '../components/common/ChronicleTimeline';
import VisionMissionSection from '../components/common/VisionMissionSection';
import { managementMembers, principalMessage } from '../data/institution';
import campusPhoto from '../assets/images/school.png';
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Quote,
  Target,
  History
} from 'lucide-react';

const historyTimeline = [
  {
    year: 'July 1964',
    title: 'Foundation by Mr. Ralph Stracey (ICS Retd.)',
    desc: "Established as 'Stracey English School' with just a single student at #52 St. Mark's Road, in loving memory of parents Daniel Augustine & Ethel Henrietta Stracey."
  },
  {
    year: '1971–1972',
    title: 'Renamed Stracey Memorial & State Syllabus Adoption',
    desc: "Following the passing of the founder's mother in 1971, the school was rechristened 'Stracey Memorial High School' and affiliated with the Karnataka State SSLC Board."
  },
  {
    year: '1997',
    title: 'Establishment of Composite Pre-University College',
    desc: 'Expanded into pre-university education offering Science (PCMB, PCMC) and Commerce (CEBA, HEBA) streams under the Karnataka State Pre-University Board.'
  },
  {
    year: '2014',
    title: 'Golden Jubilee Milestone (50 Years)',
    desc: 'Celebrated five decades of disciplined education in Bengaluru with notable alumni, dignitaries, and academic scholarship endowments.'
  },
  {
    year: '2024–Present',
    title: 'Diamond Jubilee: Over 60 Years of Educational Impact',
    desc: 'Commemorating 60 years of community service with modernized science laboratories, smart learning resources, and strong board pass percentages.'
  }
];

export default function About() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
  }, [hash]);

  return (
    <div>
      <PageBanner
        eyebrow="Established 1964 • Bengaluru"
        title="About Stracey Memorial"
        subtitle="Dedicated to providing values-driven, disciplined, and accessible education from Nursery to Composite Pre-University in Bengaluru."
      />

      <Breadcrumb items={[{ label: 'About Us' }]} />

      <section id="about-us" className="scroll-mt-24 pt-6 sm:pt-10 lg:pt-14 pb-16 sm:pb-20 lg:pb-24 bg-[#FAF8F3] relative overflow-hidden select-none">
        
        {/* ==================== BACKGROUND DECORATIONS (Institutional Heritage Style) ==================== */}
        
        {/* 1. Subtle faded campus architecture silhouette in the far-right background */}
        <div className="absolute top-0 right-0 w-full sm:w-[65%] lg:w-[50%] h-[380px] sm:h-[480px] lg:h-[540px] pointer-events-none overflow-hidden opacity-[0.12] mix-blend-multiply">
          <img 
            src={campusPhoto} 
            alt="Stracey Memorial Heritage Architecture" 
            className="w-full h-full object-cover object-top filter contrast-125"
          />
          {/* Seamless fading into the warm ivory #FAF8F3 canvas */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#FAF8F3]/60 to-[#FAF8F3]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAF8F3]" />
        </div>

        {/* 2. Botanical foliage silhouette near the top-right corner */}
        <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-40 sm:w-56 h-40 sm:h-56 pointer-events-none opacity-25 sm:opacity-35 text-[#2E6F40]">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            <path d="M200,0 Q140,20 120,60 Q100,100 160,120 Q200,100 200,0 Z" fill="#2E6F40" fillOpacity="0.4" />
            <path d="M180,0 Q110,40 100,90 Q110,140 170,130 Q190,80 180,0 Z" fill="#408253" fillOpacity="0.3" />
          </svg>
        </div>

        {/* 3. Subtle architectural curved line accents (left-to-center backdrop) */}
        <div className="hidden lg:block absolute -bottom-10 left-1/3 w-[500px] h-[500px] pointer-events-none opacity-[0.04] text-[#C99A3D]">
          <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <circle cx="200" cy="200" r="180" strokeDasharray="4 4" />
            <circle cx="200" cy="200" r="140" />
            <path d="M20,200 Q200,80 380,200" />
          </svg>
        </div>

        {/* 4. Warm subtle ambient light glow */}
        <div className="absolute top-10 left-12 w-96 h-96 bg-gradient-to-br from-[#E7C47A]/[0.08] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#16324F]/[0.04] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        <Container className="max-w-[1240px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
            
            {/* ==================== LEFT COLUMN (55% / col-span-7) ==================== */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C99A3D]/30 text-[#16324F] text-[11px] font-bold tracking-[0.08em] uppercase shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C99A3D]" />
                <span>FILIAL DEVOTION & PURPOSE</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2.5">
                <h2 className="font-serif text-[clamp(30px,3.6vw,48px)] font-bold text-[#153653] leading-[1.1] tracking-tight">
                  A Legacy of Sixty Years on <span className="text-[#C9A55D]">St. Mark&apos;s Road</span>
                </h2>
                {/* Gold Divider Line */}
                <div className="w-12 h-[3px] bg-[#C99A3D] rounded-full" />
              </div>

              {/* Introductory Lead Text */}
              <p className="text-[15.5px] sm:text-[17px] font-medium text-[#1E4568] leading-relaxed">
                Founded in July 1964 by <strong className="text-[#16324F] font-bold">Mr. Ralph Stracey (ICS Retd.)</strong> in loving memory of his parents.
              </p>

              {/* Historical Description Narrative */}
              <div className="space-y-3.5 text-[#52657A] text-[14px] sm:text-[15px] leading-[1.7] max-w-[620px]">
                <p>
                  Stracey Memorial Education Society stands as an enduring tribute to <strong className="text-[#16324F] font-semibold">Daniel Augustine Stracey</strong> and <strong className="text-[#16324F] font-semibold">Ethel Henrietta Stracey</strong>, whose devotion to their children's education inspired their son to establish an English-medium school for the community.
                </p>
                <p>
                  What started with just a single student has expanded over the decades into four composite educational divisions serving hundreds of families across Bengaluru. In 1972, the institution transitioned to the Karnataka State syllabus, maintaining high academic standards in SSLC and Pre-University education while fostering individual character.
                </p>
              </div>

              {/* Heritage Statistics: Clean horizontal layout with subtle separators */}
              <div className="pt-2 border-t border-[#E1E7ED] flex flex-wrap items-center gap-6 sm:gap-10">
                <div>
                  <div className="text-[32px] sm:text-[36px] font-serif font-bold text-[#16324F] leading-none">
                    60+
                  </div>
                  <div className="text-[12px] sm:text-[12.5px] text-[#52657A] font-medium mt-1">
                    Years of Heritage
                  </div>
                </div>

                <div className="hidden sm:block w-px h-10 bg-[#E1E7ED]" />

                <div>
                  <div className="text-[32px] sm:text-[36px] font-serif font-bold text-[#C99A3D] leading-none">
                    100%
                  </div>
                  <div className="text-[12px] sm:text-[12.5px] text-[#52657A] font-medium mt-1">
                    Inclusive Values
                  </div>
                </div>

                <div className="hidden sm:block w-px h-10 bg-[#E1E7ED]" />

                <div>
                  <div className="text-[32px] sm:text-[36px] font-serif font-bold text-[#1E4568] leading-none">
                    1964
                  </div>
                  <div className="text-[12px] sm:text-[12.5px] text-[#52657A] font-medium mt-1">
                    Year Established
                  </div>
                </div>
              </div>

              {/* Optional CTA Link */}
              <div className="pt-2">
                <a
                  href="#history"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-[#16324F] hover:bg-[#1E4568] text-white font-bold text-[13.5px] transition-all shadow-sm group"
                >
                  <span>Explore Our History</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.2] transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

            {/* ==================== RIGHT COLUMN (45% / col-span-5) ==================== */}
            <div className="lg:col-span-5 relative">
              
              {/* Outer Card with subtle gold border accent */}
              <div className="relative rounded-[22px] overflow-hidden shadow-[0_12px_36px_-6px_rgba(22,50,79,0.16)] border-4 border-white bg-white group">
                
                {/* Large Campus Image (5:4 aspect ratio) */}
                <div className="relative aspect-[5/4] sm:aspect-[4/3] w-full overflow-hidden bg-[#16324F]/10">
                  <img
                    src={campusPhoto}
                    alt="Stracey Memorial Historic Heritage Building"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  />
                  {/* Subtle dark gradient at bottom for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16324F]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Heritage Card: Positioned top-left over the image */}
                <div className="absolute top-4 left-4 z-20 bg-[#16324F]/95 backdrop-blur-md text-white p-3.5 sm:p-4 rounded-[14px] shadow-lg border border-white/15 select-none max-w-[200px]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-full bg-[#C99A3D]/20 flex items-center justify-center text-[#C99A3D]">
                      <History className="w-3.5 h-3.5 stroke-[2.2]" />
                    </div>
                    <span className="font-serif text-[14px] font-bold text-white tracking-wide">
                      JULY 1964
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-200 leading-snug font-normal">
                    Starting with 1 pupil, evolving to thousands.
                  </p>
                </div>

                {/* Thin gold accent border at bottom edge */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#C99A3D] via-[#E7C47A] to-[#C99A3D]" />

              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* Chronicle of Excellence Timeline Section */}
      <ChronicleTimeline />

      {/* Vision & Mission Section */}
      <VisionMissionSection />

      <section id="management" className="scroll-mt-24 py-16 bg-[#FAFAF7] border-y border-gray-200">
        <Container>
          <SectionHeading
            badge="Leadership Council"
            title="Office Bearers & Managing Committee"
            subtitle="Distinguished educators and administrators serving Stracey Memorial Education Society."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {managementMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17344E]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9A66B]">{member.role}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#17344E]">{member.name}</h3>
                  <p className="text-xs text-[#234E78] font-semibold mt-0.5">{member.society}</p>
                  <p className="text-xs text-[#646B73] leading-relaxed mt-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="principal-message" className="scroll-mt-24 py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] relative overflow-hidden select-none">
        
        {/* ==================== BACKGROUND DECORATIONS (Admissions Style) ==================== */}
        
        {/* 1. Faded authentic campus building image positioned toward the right side */}
        <div className="absolute top-0 right-0 w-full sm:w-[68%] lg:w-[58%] h-[380px] sm:h-[480px] lg:h-[540px] pointer-events-none overflow-hidden opacity-[0.18] mix-blend-multiply">
          <img 
            src={campusPhoto} 
            alt="Stracey Memorial Campus Silhouette" 
            className="w-full h-full object-cover object-top filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#F8FAFC]/55 to-[#F8FAFC]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8FAFC]" />
        </div>

        {/* 2. Subtle botanical / foliage details in the upper-right area */}
        <div className="absolute -top-8 -right-8 w-44 sm:w-56 h-44 sm:h-56 pointer-events-none opacity-35 sm:opacity-45">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            <path d="M200,0 Q140,20 120,60 Q100,100 160,120 Q200,100 200,0 Z" fill="#2E6F40" fillOpacity="0.4" />
            <path d="M180,0 Q110,40 100,90 Q110,140 170,130 Q190,80 180,0 Z" fill="#408253" fillOpacity="0.3" />
          </svg>
        </div>

        {/* 3. Subtle ambient gold & blue atmospheric glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-[#E7C47A]/12 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-[#16324F]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <SectionHeading
            badge="Institutional Leadership"
            primaryPart="Principal's"
            highlightPart="Message"
            subtitle="Warm greetings and academic guidance from the Principal's Desk."
            centered
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-10">
            <div className="lg:col-span-4 bg-[#FAFAF7] rounded-2xl p-6 border border-gray-200 text-center space-y-4 shadow-sm">
              <img
                src={principalMessage.image}
                alt={principalMessage.name}
                className="w-48 h-48 mx-auto rounded-2xl object-cover border-4 border-[#C9A66B] shadow-md"
              />
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#17344E]">{principalMessage.name}</h3>
                <p className="text-xs font-bold text-[#C9A66B] uppercase tracking-wider mt-1">{principalMessage.qualification}</p>
                <p className="text-xs text-[#234E78] font-semibold mt-1">{principalMessage.designation}</p>
              </div>
              <div className="pt-4 border-t border-gray-200 text-left text-xs space-y-2 text-[#646B73]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#547D68]" />
                  <span>24+ Years of Educational Leadership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#547D68]" />
                  <span>State Board Examination Center In-Charge</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#547D68]" />
                  <span>Individual Student Academic Mentorship</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#234E78] bg-[#234E78]/10 px-3 py-1 rounded-full">
                <Quote className="w-3.5 h-3.5" />
                <span>Welcome Address</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#17344E] leading-tight">
                {principalMessage.title}
              </h3>
              <div className="space-y-4 text-base text-[#646B73] leading-relaxed">
                {principalMessage.message.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center gap-4">
                <Button to="/admissions" variant="primary" icon={ArrowRight}>Explore Admissions</Button>
                <Button to="/pre-university" variant="outline">Pre-University Courses</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
