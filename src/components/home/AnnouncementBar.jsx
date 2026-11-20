import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell, Calendar, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import { announcementsData } from '../../data/announcements';

export default function AnnouncementBar() {
  const latest = announcementsData[0];
  if (!latest) return null;

  return (
    <div className="bg-gradient-to-r from-[#234E78] via-[#17344E] to-[#234E78] text-white py-2.5 sm:py-3 border-y border-[#C9A66B]/30 shadow-inner overflow-hidden">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 sm:gap-3 text-center sm:text-left flex-wrap justify-center sm:justify-start min-w-0">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E99B55] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider shrink-0 animate-pulse">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              {latest.badge}
            </span>
            <span className="font-semibold text-white tracking-tight sm:tracking-wide text-xs sm:text-sm truncate max-w-[280px] xs:max-w-[340px] sm:max-w-none">
              {latest.title}
            </span>
            <span className="hidden lg:inline text-gray-300 text-xs">
              — {latest.summary}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <Link
              to={latest.link || '/admission-enquiry'}
              className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#C9A66B] hover:text-white uppercase tracking-wider transition-colors py-0.5"
            >
              <span>Explore Details</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
