import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import { principalMessage } from '../data/institution';
import { Quote, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Principal() {
  const principalTitleParts = principalMessage.title.split(', ');

  return (
    <div>
      <PageBanner
        eyebrow="Institutional Leadership"
        title="Principal's Message"
        subtitle="Warm greetings and academic guidance from the Principal's Desk."
      />

      <Breadcrumb items={[{ label: 'About', to: '/about' }, { label: "Principal's Welcome" }]} />

      <div className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Principal Profile Card */}
            <div className="lg:col-span-4 bg-[#FAFAF7] rounded-2xl p-6 border border-gray-200 text-center space-y-4 shadow-sm">
              <img
                src={principalMessage.image}
                alt={principalMessage.name}
                className="w-48 h-48 mx-auto rounded-2xl object-cover border-4 border-[#C9A66B] shadow-md"
              />
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#17344E]">
                  {principalMessage.name}
                </h3>
                <p className="text-xs font-bold text-[#C9A66B] uppercase tracking-wider mt-1">
                  {principalMessage.qualification}
                </p>
                <p className="text-xs text-[#234E78] font-semibold mt-1">
                  {principalMessage.designation}
                </p>
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

            {/* Principal Editorial Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#234E78] bg-[#234E78]/10 px-3 py-1 rounded-full">
                <Quote className="w-3.5 h-3.5" />
                <span>Welcome Address</span>
              </div>

              <h2 className="font-serif text-[clamp(30px,3.8vw,48px)] font-bold tracking-tight text-[#153653] leading-[1.1]">
                <span>{principalTitleParts[0]},</span>{' '}<span className="text-[#C9A55D]">
                  {principalTitleParts.slice(1).join(', ')}
                </span>
              </h2>

              <div className="space-y-4 text-base text-[#646B73] leading-relaxed">
                {principalMessage.message.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center gap-4">
                <Button to="/admissions" variant="primary" icon={ArrowRight}>
                  Explore Admissions
                </Button>
                <Button to="/pre-university" variant="outline">
                  Pre-University Courses
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
