import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import { managementMembers } from '../data/institution';

export default function Management() {
  return (
    <div>
      <PageBanner
        eyebrow="Governance & Leadership"
        title="Governing Management"
        subtitle="Guiding the institutional vision, heritage preservation, and academic standards of Stracey Memorial Education Society."
      />

      <Breadcrumb items={[{ label: 'About', to: '/about' }, { label: 'Governing Management' }]} />

      <div className="py-16 bg-white">
        <Container>
          <SectionHeading
            badge="Leadership Council"
            title="Office Bearers & Managing Committee"
            subtitle="Distinguished educators and administrators serving Stracey Memorial Education Society."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl overflow-hidden bg-[#FAFAF7] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
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
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9A66B]">
                      {member.role}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#17344E]">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#234E78] font-semibold mt-0.5">
                      {member.society}
                    </p>
                    <p className="text-xs text-[#646B73] leading-relaxed mt-2">
                      {member.bio}
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
