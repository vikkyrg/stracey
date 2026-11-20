import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import { achievementsData } from '../data/activities';
import { Trophy, Award, Star, CheckCircle } from 'lucide-react';

export default function Achievements() {
  return (
    <div>
      <PageBanner
        eyebrow="Hall of Honor"
        title="Institutional Achievements"
        subtitle="Celebrating scholastic board exam distinctions, athletic victories, science congress recognitions, and alumni legacy."
      />

      <Breadcrumb items={[{ label: 'Community', to: '/staff' }, { label: 'Achievements' }]} />

      <div className="py-16 bg-white">
        <Container>
          <SectionHeading
            badge="Verified Milestones"
            title="Honoring Dedication & Academic Distinction"
            subtitle="Highlights from state examinations, inter-school tournaments, and community contributions."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {achievementsData.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-[#FAFAF7] border border-gray-200 hover:border-[#234E78]/30 hover:shadow-lg transition-all duration-300 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded bg-[#234E78]/10 text-[#234E78] text-xs font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs font-bold text-[#C9A66B]">
                    {item.year}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#17344E]">
                  {item.title}
                </h3>

                <p className="text-sm text-[#646B73] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
