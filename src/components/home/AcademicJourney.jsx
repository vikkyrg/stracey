import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  ArrowRight, 
  Sprout, 
  BookOpen, 
  FlaskConical, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';
import Container from '../common/Container';

// Import the authentic division images matching the exact reference composition
import nurseryImg from '../../assets/images/nursery-div.png';
import primaryImg from '../../assets/images/primary-div.png';
import highSchoolImg from '../../assets/images/highschool-div.png';
import puImg from '../../assets/images/pu-div.png';

const divisions = [
  {
    id: "nursery",
    ageLabel: "AGES 3–5 YEARS",
    ageIcon: Sprout,
    title: "Stracey Memorial Nursery School",
    subtitle: "Foundational Wonder & Early Play-Centric Learning",
    description: "Nurturing curiosity, expressive language skills, sensory discovery, and social harmony in a joyous, protective atmosphere.",
    features: [
      "Phonics & expressive play",
      "Safe interactive discovery zones",
      "Compassionate individual attention",
      "Foundational motor skill development"
    ],
    buttonText: "Explore Nursery School",
    path: "/nursery",
    image: nurseryImg,
    imageAlt: "Children in nursery classroom engaged in play-based learning",
    reverse: false
  },
  {
    id: "primary",
    ageLabel: "AGES 6–12 YEARS",
    ageIcon: BookOpen,
    title: "Stracey Memorial Primary School",
    subtitle: "Building Confidence, Literacy & Core Disciplines",
    description: "Strengthening mathematical foundations, environmental awareness, multilingual capabilities, and joyful co-curricular curiosity.",
    features: [
      "Karnataka State Syllabus",
      "Science clubs & Scout/Guides",
      "Interactive audio-visual classrooms",
      "Dedicated reading & computer sessions"
    ],
    buttonText: "Explore Primary School",
    path: "/primary",
    image: primaryImg,
    imageAlt: "Primary students learning actively with student raising hand",
    reverse: true
  },
  {
    id: "high-school",
    ageLabel: "AGES 13–15 YEARS",
    ageIcon: FlaskConical,
    title: "Stracey Memorial High School",
    subtitle: "Academic Rigor, Character & Board Examination Excellence",
    description: "Rigorous preparation for Karnataka State SSLC examinations backed by structured test series, laboratory experiments, and sportsmanship.",
    features: [
      "Designated State Board Exam Centre",
      "Well-equipped Science laboratories",
      "Regular parent-faculty reviews",
      "Physical education & leadership camps"
    ],
    buttonText: "Explore High School",
    path: "/high-school",
    image: highSchoolImg,
    imageAlt: "High school students conducting a biology experiment with a microscope",
    reverse: false
  },
  {
    id: "pre-university",
    ageLabel: "AGES 16–18 YEARS",
    ageIcon: Layers,
    title: "Stracey Memorial Composite\nPre-University College",
    subtitle: "Gateway to University & Professional Careers",
    description: "Offering rigorous science and commerce pathways designed to prepare students for university admission and competitive career opportunities.",
    features: [
      "PCMB, PCMC & Commerce streams",
      "KCET & competitive exam guidance",
      "Modern Physics, Chemistry & CS labs",
      "Experienced specialized faculty"
    ],
    buttonText: "Explore Pre-University",
    path: "/pre-university",
    image: puImg,
    imageAlt: "Senior pre-university students collaborating with a laptop outdoors",
    reverse: true
  }
];

export default function AcademicJourney({ compactTopPadding = false }) {
  const sectionSpacing = compactTopPadding
    ? 'pt-6 sm:pt-8 lg:pt-10 pb-20 lg:pb-28'
    : 'py-20 lg:py-28';

  return (
    <section className={`${sectionSpacing} bg-[#F7F8FA] relative overflow-hidden`}>
      <Container className="max-w-[1240px]">
        
        {/* 1. HEADER: Exact Structure matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18 space-y-3.5">
          {/* Top Pill Label */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2F8] border border-[#234E78]/15 text-[#17344E] text-[11px] font-bold tracking-[0.08em] uppercase select-none">
            <GraduationCap className="w-3.5 h-3.5 text-[#234E78]" />
            <span>OUR EDUCATIONAL PROGRAMMES</span>
          </div>

          {/* Large Editorial Headline */}
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-tight">
            <span className="text-[#153653] block">A Journey of Learning.</span>
            <span className="text-[#C9A55D] block">Every Stage, a New Beginning.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#42566B] text-[14px] sm:text-[15.5px] leading-relaxed max-w-2xl mx-auto pt-1 font-normal">
            Four distinctive divisions designed to nurture curiosity, build confidence, strengthen academic foundations, and prepare students for the future.
          </p>

          {/* Gold Decorative Divider */}
          <div className="flex justify-center pt-2">
            <div className="w-12 h-[3.5px] bg-[#C9A66B] rounded-full" />
          </div>
        </div>

        {/* 2. FOUR DIVISION HORIZONTAL CARDS: Alternating layout */}
        <div className="space-y-7 sm:space-y-8 lg:space-y-9">
          {divisions.map((div) => {
            const AgeIcon = div.ageIcon;
            return (
              <div
                key={div.id}
                className="bg-white rounded-[22px] border border-[#E1E7ED] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col lg:flex-row items-stretch"
              >
                {/* IMAGE HALF */}
                <div
                  className={`w-full lg:w-[48%] relative min-h-[260px] sm:min-h-[300px] lg:min-h-[330px] p-2.5 sm:p-3.5 ${
                    div.reverse ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="w-full h-full rounded-[16px] overflow-hidden relative">
                    <img
                      src={div.image}
                      alt={div.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* CONTENT HALF */}
                <div
                  className={`w-full lg:w-[52%] p-6 sm:p-8 lg:p-9 flex flex-col justify-center space-y-4 ${
                    div.reverse ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Age label with gold icon */}
                  <div className="flex items-center gap-2 text-[#C9A66B] text-[11px] sm:text-[11.5px] font-bold tracking-[0.14em] uppercase">
                    <AgeIcon className="w-4 h-4 stroke-[2.2] shrink-0" />
                    <span>{div.ageLabel}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="font-serif text-[22px] sm:text-[25px] lg:text-[27px] font-bold text-[#17344E] leading-tight whitespace-pre-line">
                      {div.title}
                    </h3>
                    <p className="font-serif italic text-[#17344E] text-[13.5px] sm:text-[14.5px] font-medium leading-snug">
                      {div.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[#42566B] text-[13px] sm:text-[13.5px] leading-relaxed font-normal">
                    {div.description}
                  </p>

                  {/* Feature Highlights Grid (2x2) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pt-1 text-[12px] sm:text-[12.5px] text-[#42566B]">
                    {div.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A66B] shrink-0 stroke-[2.2]" />
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button matching reference */}
                  <div className="pt-2">
                    <Link
                      to={div.path}
                      className="inline-flex items-center justify-center gap-2 h-[38px] px-5 rounded-[8px] text-[12.5px] sm:text-[13px] font-bold text-white bg-[#17344E] hover:bg-[#234E78] transition-colors shadow-2xs group cursor-pointer"
                    >
                      <span>{div.buttonText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 stroke-[2.2]" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
