import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import nurseryDivImage from '../assets/images/nursery-div.png';
import { Sparkles, Heart, Smile, CheckCircle, ArrowRight } from 'lucide-react';

export default function Nursery() {
  return (
    <div>
      <PageBanner
        eyebrow="Early Childhood Learning"
        title="Stracey Memorial Nursery School"
        subtitle="Nurturing young minds aged 3 to 5 years through joyful sensory play, phonics, and loving foundational care."
      />

      <Breadcrumb items={[{ label: 'Academics', to: '/academics' }, { label: 'Nursery School' }]} />

      <div className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Play-Centric Discovery"
                title="A Warm, Safe & Joyous Early Childhood Environment"
                subtitle="Helping little learners take their very first steps into literacy, motor coordination, and social camaraderie."
              />

              <div className="space-y-4 text-sm sm:text-base text-[#646B73] leading-relaxed">
                <p>
                  At Stracey Nursery School, we believe that early childhood should be filled with wonder, warmth, and active play. Our classrooms are bright, protective spaces where compassionate teachers guide toddlers through songs, storytelling, block play, and tactile exploration.
                </p>
                <p>
                  We lay the ground for phonetic reading, numbers, creative art, and social manners, preparing each child smoothly for primary education without undue academic pressure.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-[#17344E] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#547D68]" />
                  <span>Phonics & Storytelling</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#17344E] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#547D68]" />
                  <span>Motor Skills & Play Area</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#17344E] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#547D68]" />
                  <span>Caring Teacher Ratios</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#17344E] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#547D68]" />
                  <span>Safe St. Mark's Campus</span>
                </div>
              </div>

              <div className="pt-4">
                <Button to="/admission-enquiry" variant="primary" icon={ArrowRight}>
                  Enquire for Nursery Admission
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <img
                src={nurseryDivImage}
                alt="Stracey Memorial Nursery children playing and learning"
                className="w-full h-96 rounded-2xl object-cover shadow-xl border-4 border-white"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
