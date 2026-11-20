import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import AcademicJourney from '../components/home/AcademicJourney';
import Button from '../components/common/Button';
import { puCombinations } from '../data/academics';
import { ArrowRight, BookOpen, CheckCircle, GraduationCap } from 'lucide-react';

export default function Academics() {
  return (
    <div>
      <PageBanner
        eyebrow="Curriculum & Programs"
        title="Academic Overview"
        subtitle="Nurturing young minds through the Karnataka State Board curriculum from Nursery to Pre-University."
      />

      <Breadcrumb items={[{ label: 'Academics' }]} />

      <AcademicJourney compactTopPadding />

      {/* PU Combinations Matrix */}
      <div className="py-20 bg-white">
        <Container>
          <SectionHeading
            badge="Pre-University Matrix"
            title="PUC Science & Commerce Combinations"
            subtitle="Structured combinations affiliated with the Karnataka State Pre-University Board."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {puCombinations.map((comb) => (
              <div
                key={comb.code}
                className="p-8 rounded-2xl bg-[#FAFAF7] border border-gray-200 hover:border-[#234E78]/30 hover:shadow-lg transition-all duration-300 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C9A66B]">
                    {comb.stream}
                  </span>
                  <span className="px-3 py-1 rounded bg-[#234E78] text-white text-xs font-bold">
                    {comb.code}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#17344E]">
                  {comb.subjects.join(' • ')}
                </h3>

                <div className="space-y-2 text-sm text-[#646B73]">
                  <p>
                    <strong className="text-[#17344E]">Career Gateways:</strong> {comb.careerPath}
                  </p>
                  <p>
                    <strong className="text-[#17344E]">Fee Indicator:</strong> {comb.feeRange}
                  </p>
                </div>

                <div className="pt-2">
                  <Button to="/admission-enquiry" variant="outline" size="sm" icon={ArrowRight}>
                    Enquire for {comb.code}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
