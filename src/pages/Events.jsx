import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import { eventsData } from '../data/news';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function Events() {
  return (
    <div>
      <PageBanner
        eyebrow="Schedule & Calendar"
        title="Upcoming Campus Events"
        subtitle="Mark your calendar for upcoming academic symposia, examination timetables, cultural festivals, and parent-teacher meetings."
      />

      <Breadcrumb items={[{ label: 'News & Events', to: '/news' }, { label: 'Events Calendar' }]} />

      <div className="py-16 bg-white">
        <Container>
          <SectionHeading
            badge="Institutional Diary"
            title="Events, Symposia & Examinations"
            subtitle="Stay up to date with key scholastic dates and co-curricular highlights."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {eventsData.map((evt) => (
              <div
                key={evt.id}
                className="rounded-2xl overflow-hidden bg-[#FAFAF7] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#C9A66B] text-[#17344E] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                    {evt.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#234E78] mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{evt.date}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#17344E]">
                      {evt.title}
                    </h3>

                    <p className="mt-2 text-sm text-[#646B73] leading-relaxed">
                      {evt.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-200/60 text-xs text-[#646B73] space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C9A66B]" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C9A66B]" />
                      <span>{evt.location}</span>
                    </div>
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
