import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import { facilitiesData } from '../data/facilities';

export default function Infrastructure() {
  return (
    <div>
      <PageBanner
        eyebrow="Campus Environment"
        title="Campus Infrastructure & Facilities"
        subtitle="Specialized science laboratories, cyber computing labs, central library, and athletic courts on St. Mark's Road."
      />

      <Breadcrumb items={[{ label: 'Campus Life', to: '/activities' }, { label: 'Infrastructure' }]} />

      <div className="py-16 bg-white">
        <Container>
          <SectionHeading
            badge="Modern Facilities"
            title="Designed for Academic Inquiry & Athletic Vigor"
            subtitle="Explore the physical facilities supporting high school and pre-university learning."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {facilitiesData.map((fac) => (
              <div
                key={fac.id}
                className="rounded-2xl overflow-hidden bg-[#FAFAF7] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#234E78] text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                    {fac.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#17344E]">
                      {fac.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#646B73] leading-relaxed">
                      {fac.description}
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
