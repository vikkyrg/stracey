import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import { puCombinations } from '../data/academics';
import puDivImage from '../assets/images/pu-div.png';
import { GraduationCap, CheckCircle, ArrowRight, Atom, TrendingUp, Layers } from 'lucide-react';

export default function PreUniversity() {
  return (
    <div>
      <PageBanner
        eyebrow="Higher Secondary Education"
        title="Stracey Memorial Composite PU College"
        subtitle="I & II PUC Science and Commerce: Dedicated subject lecturers, modern science and computer laboratories, and competitive KCET mentoring."
      />

      <Breadcrumb items={[{ label: 'Academics', to: '/academics' }, { label: 'Pre-University College' }]} />

      <div className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Established 1997"
                primaryPart="Your Gateway to"
                highlightPart="Premier Higher Professional Education"
                subtitle="Affiliated to the Karnataka State Pre-University Board, serving as an official government examination and evaluation center."
              />

              <div className="space-y-4 text-sm sm:text-base text-[#646B73] leading-relaxed">
                <p>
                  Established in 1997, <strong>Stracey Memorial Composite PU College</strong> has consistently delivered superior results in Karnataka State Board examinations. Led by Principal <strong>Prof. Ravindra Kumar V.R.</strong> (M.Sc., B.Ed., M.Phil.), our faculty consists of seasoned post-graduate educators committed to every learner's potential.
                </p>
                <p>
                  We offer Science combinations (PCMB, PCMC) and Commerce combinations (CEBA, HEBA, SEBA) in a disciplined campus environment featuring specialized laboratories for Physics, Chemistry, Biology, and Computer Science.
                </p>
              </div>

              <div className="pt-2">
                <Button to="/admission-enquiry" variant="primary" icon={ArrowRight}>
                  Apply for I PUC 2026–27
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <img
                src={puDivImage}
                alt="Stracey Memorial Pre-University College students and campus"
                className="w-full h-96 rounded-2xl object-cover shadow-xl border-4 border-white"
              />
            </div>
          </div>

          {/* Stream Breakdown */}
          <div className="mt-20">
            <SectionHeading
              badge="Course Options"
              title="Science & Commerce Subject Streams"
              subtitle="Choose the stream that aligns with your engineering, medical, business, or civil service goals."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {puCombinations.map((comb) => (
                <div
                  key={comb.code}
                  className="p-8 rounded-2xl bg-[#FAFAF7] border border-gray-200 hover:border-[#234E78]/30 transition-all shadow-sm space-y-4"
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
                      <strong className="text-[#17344E]">Recommended Career Paths:</strong> {comb.careerPath}
                    </p>
                    <p>
                      <strong className="text-[#17344E]">Approximate Annual Fee:</strong> {comb.feeRange}
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
          </div>
        </Container>
      </div>
    </div>
  );
}
