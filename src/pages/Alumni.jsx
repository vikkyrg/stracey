import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import { Users, GraduationCap, Award, HeartHandshake, ArrowRight } from 'lucide-react';

const alumniStories = [
  {
    name: "Mr. N.A. Haris",
    field: "Public Leadership & Governance",
    batch: "Stracey High School Alumnus",
    note: "Prominent public leader and legislator from Bengaluru, contributing extensively to civil welfare and educational support."
  },
  {
    name: "Dr. Sheila D'Souza",
    field: "Medicine & Healthcare",
    batch: "PUC Science Stream",
    note: "Consultant physician in Bengaluru actively supporting health check camps and student medical guidance."
  },
  {
    name: "Mr. Arun Ramanathan",
    field: "Technology & Software Architecture",
    batch: "PUC Science (PCMC)",
    note: "Tech executive leading cloud engineering initiatives and mentoring computer science aspirants at Stracey."
  }
];

export default function Alumni() {
  return (
    <div>
      <PageBanner
        eyebrow="Global Network"
        title="Stracey Alumni Network"
        subtitle="Over 15,000 alumni across the world carrying forward the heritage, values, and memories of St. Mark's Road."
      />

      <Breadcrumb items={[{ label: 'Community', to: '/staff' }, { label: 'Alumni Network' }]} />

      <div className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <SectionHeading
              badge="Enduring Bonds"
              primaryPart="A Proud Legacy"
              highlightPart="Across Generations"
              subtitle="Stracey graduates contribute to governance, medicine, engineering, law, and education across India and globally."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {alumniStories.map((alum, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#FAFAF7] border border-gray-200 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#234E78]/10 text-[#234E78] flex items-center justify-center font-bold">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#17344E]">
                    {alum.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#C9A66B] block">
                    {alum.batch}
                  </span>
                  <p className="text-xs text-[#646B73] leading-relaxed">
                    {alum.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Connect Box */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-[#234E78] to-[#17344E] text-white text-center space-y-4">
              <h3 className="font-serif text-2xl font-bold">
                Are You a Stracey Alumnus?
              </h3>
              <p className="text-sm text-gray-300 max-w-xl mx-auto">
                Reconnect with your teachers, mentor current pupils, and participate in our Diamond Jubilee alumni gatherings.
              </p>
              <div>
                <Button to="/contact" variant="gold" icon={ArrowRight}>
                  Register With Alumni Association
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
