import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { facilitiesData } from '../../data/facilities';

export default function CampusShowcase() {
  const featuredFacility = facilitiesData[0];
  const gridFacilities = facilitiesData.slice(1, 5);

  return (
    <section className="py-20 bg-[#17344E] text-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Campus Infrastructure"
            title="Purpose-Built Learning & Athletic Facilities"
            subtitle="Explore our well-equipped science laboratories, computer labs, central library, and sports courts in central Bengaluru."
            dark
            className="mb-0"
          />
          <Button to="/infrastructure" variant="gold" icon={ArrowRight}>
            View All Facilities
          </Button>
        </div>

        {/* Editorial Layout: 1 Large Showcase + 4 Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Large Facility (7 cols) */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-2xl group min-h-[380px] lg:min-h-full">
            <img
              src={featuredFacility.image}
              alt={featuredFacility.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 space-y-2">
              <span className="inline-block px-3 py-1 rounded bg-[#C9A66B] text-[#17344E] text-xs font-bold uppercase tracking-wider">
                {featuredFacility.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {featuredFacility.title}
              </h3>
              <p className="text-sm text-gray-300 max-w-xl leading-relaxed">
                {featuredFacility.description}
              </p>
            </div>
          </div>

          {/* 4 Supporting Facilities Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gridFacilities.map((fac) => (
              <div
                key={fac.id}
                className="relative rounded-xl overflow-hidden shadow-md group h-48 sm:h-56 bg-black"
              >
                <img
                  src={fac.image}
                  alt={fac.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17344E]/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-bold text-[#C9A66B] uppercase tracking-wider block">
                    {fac.category}
                  </span>
                  <h4 className="font-serif text-sm sm:text-base font-bold leading-tight truncate">
                    {fac.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
