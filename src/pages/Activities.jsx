import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import { activitiesData } from '../data/activities';

export default function Activities() {
  return (
    <div>
      <PageBanner
        eyebrow="Co-Curricular Life"
        title="Activities & Co-Curriculars"
        subtitle="Nurturing student potential through science clubs, scouts and guides, inter-school athletics, and cultural arts."
      />

      <Breadcrumb items={[{ label: 'Campus Life', to: '/activities' }, { label: 'Activities' }]} />

      <div className="py-16 bg-white">
        <Container>
          <SectionHeading
            badge="Holistic Development"
            title="Beyond Academics: Student Clubs & Programs"
            subtitle="Extensive extracurricular opportunities encouraging teamwork, creative expression, and civic leadership."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {activitiesData.map((act, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden bg-[#FAFAF7] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={act.image}
                    alt={act.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#17344E]/90 text-white backdrop-blur-sm px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                    {act.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#17344E]">
                      {act.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#646B73] leading-relaxed">
                      {act.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
