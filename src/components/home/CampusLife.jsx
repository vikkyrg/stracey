import React from 'react';
import { ArrowRight, Trophy, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { activitiesData } from '../../data/activities';

export default function CampusLife() {
  const previewActivities = activitiesData.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Vibrant Student Community"
            title="Beyond The Textbooks: Campus Life"
            subtitle="Fostering character, teamwork, and creative expression through science clubs, athletics, and cultural arts."
            className="mb-0"
          />
          <Button to="/activities" variant="outline" icon={ArrowRight}>
            Explore All Activities
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewActivities.map((act, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-[#FAFAF7] border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={act.image}
                  alt={act.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-bold text-[#17344E] uppercase tracking-wider">
                  {act.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#17344E] group-hover:text-[#234E78] transition-colors">
                    {act.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#646B73] leading-relaxed line-clamp-3">
                    {act.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-200/60 flex items-center justify-between text-xs font-semibold text-[#234E78]">
                  <span>Annual Program</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
