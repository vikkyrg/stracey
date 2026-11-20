import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import primaryDivImage from '../assets/images/primary-div.png';
import { BookOpen, CheckCircle, ArrowRight, Award } from 'lucide-react';

export default function PrimarySchool() {
  return (
    <div>
      <PageBanner
        eyebrow="Foundational Schooling"
        title="Stracey Memorial Primary School"
        subtitle="Classes 1 to 7: Building strong numeracy, multilingual fluency, and joyful scientific curiosity under the Karnataka State curriculum."
      />

      <Breadcrumb items={[{ label: 'Academics', to: '/academics' }, { label: 'Primary School' }]} />

      <div className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Classes 1 to 7"
                title="Curiosity, Core Competence & Character"
                subtitle="A balanced syllabus fostering reading habits, mathematical clarity, environmental awareness, and basic computing."
              />

              <div className="space-y-4 text-sm sm:text-base text-[#646B73] leading-relaxed">
                <p>
                  Stracey Memorial Primary School bridges early childhood wonder with disciplined scholastic progress. We follow the prescribed Karnataka State Board curriculum in English medium, complemented by Kannada and Hindi language instruction.
                </p>
                <p>
                  Pupils take part in weekly library sessions, computer lab basics, physical education drills, and introductory Science Club activities to build holistic confidence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-[#17344E] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#547D68]" />
                  <span>English Medium Curriculum</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#17344E] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#547D68]" />
                  <span>Foundational Mathematics</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#17344E] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#547D68]" />
                  <span>Computer & Cyber Literacy</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#17344E] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#547D68]" />
                  <span>Scouts, Cubs & Bulbuls</span>
                </div>
              </div>

              <div className="pt-4">
                <Button to="/admission-enquiry" variant="primary" icon={ArrowRight}>
                  Enquire for Primary School Admission
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <img
                src={primaryDivImage}
                alt="Stracey Memorial Primary students in interactive classroom"
                className="w-full h-96 rounded-2xl object-cover shadow-xl border-4 border-white"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
