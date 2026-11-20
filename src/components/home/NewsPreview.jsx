import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  ArrowRight, 
  Download, 
  MapPin, 
  FileText, 
  Clock, 
  CheckCircle2,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import Container from '../common/Container';
import { newsData, eventsData } from '../../data/news';
import eventImage from '../../assets/images/event.png';

export default function NewsPreview() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'news' | 'events'
  const [downloadSuccess, setDownloadSuccess] = useState(null);

  const featuredNews = newsData[0];
  const secondaryNews = newsData.slice(1);
  const upcomingEvents = eventsData;

  const handleDownloadCircular = () => {
    setDownloadSuccess('Academic Calendar & Circular 2026-27 downloaded successfully.');
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  // Type styling for events
  const getEventBadge = (category) => {
    switch (category?.toLowerCase()) {
      case 'examination':
        return {
          label: 'Examinations',
          textColor: 'text-[#C9A45C]',
          bgColor: 'bg-[#C9A45C]/12',
          borderColor: 'border-[#C9A45C]/30',
          accentBar: 'bg-[#C9A45C]',
          dateBg: 'bg-[#C9A45C] text-white',
        };
      case 'academic':
        return {
          label: 'Academic',
          textColor: 'text-[#24547D]',
          bgColor: 'bg-[#24547D]/10',
          borderColor: 'border-[#24547D]/25',
          accentBar: 'bg-[#24547D]',
          dateBg: 'bg-[#24547D] text-white',
        };
      case 'sports':
      case 'competition':
        return {
          label: 'Co-Curricular',
          textColor: 'text-[#547D68]',
          bgColor: 'bg-[#547D68]/12',
          borderColor: 'border-[#547D68]/30',
          accentBar: 'bg-[#547D68]',
          dateBg: 'bg-[#547D68] text-white',
        };
      default:
        return {
          label: 'Official',
          textColor: 'text-[#173652]',
          bgColor: 'bg-[#173652]/10',
          borderColor: 'border-[#173652]/20',
          accentBar: 'bg-[#173652]',
          dateBg: 'bg-[#173652] text-white',
        };
    }
  };

  // Helper to split date into Day and Month string for event badge
  const parseDateBadge = (dateStr) => {
    const parts = dateStr.split(' ');
    if (parts.length >= 2) {
      return {
        day: parts[0],
        month: parts[1].substring(0, 3).toUpperCase(),
        year: parts[2] || '2026'
      };
    }
    return { day: '15', month: 'DEC', year: '2026' };
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F7F8FA] relative overflow-hidden select-none">
      {/* Subtle Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#C9A45C]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#173652]/6 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container className="max-w-[1240px] relative z-10">
        
        {/* ==================== SECTION HEADER ==================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-14 gap-6 pb-6 border-b border-[#E3E8ED]">
          
          <div className="space-y-2.5 max-w-2xl">
            {/* Pill Label */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C9A45C]/35 text-[#173652] text-[11px] font-bold tracking-[0.08em] uppercase shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
              <span>NOTICES & HAPPENINGS</span>
            </div>

            {/* Serif Heading: Navy with Gold Highlight */}
            <h2 className="font-serif text-[clamp(30px,3.8vw,50px)] font-bold text-[#153653] leading-[1.1] tracking-tight">
              Institutional News & <span className="text-[#C9A55D]">Upcoming Events</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[#5B6D7E] text-[14px] sm:text-[15px] leading-relaxed max-w-xl font-normal">
              Stay informed with official circulars, examination schedules, state board achievements, and campus celebrations.
            </p>
          </div>

          {/* Filter & Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-end shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-[#173652] text-white shadow-sm'
                  : 'bg-white text-[#26384A] border border-[#E3E8ED] hover:bg-[#EBF2F8]'
              }`}
            >
              All Highlights
            </button>
            <Link
              to="/news"
              className="px-4 py-2 rounded-full text-[13px] font-semibold bg-white text-[#26384A] border border-[#E3E8ED] hover:bg-[#EBF2F8] hover:text-[#173652] transition-colors"
            >
              All News
            </Link>
            <Link
              to="/events"
              className="px-4 py-2 rounded-full text-[13px] font-semibold bg-[#24547D] text-white hover:bg-[#173652] shadow-sm transition-colors flex items-center gap-1.5"
            >
              <span>All Events</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* Optional Download feedback notification */}
        {downloadSuccess && (
          <div className="mb-8 p-3.5 sm:p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-3 animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold">{downloadSuccess}</span>
          </div>
        )}

        {/* ==================== MAIN EDITORIAL TWO-COLUMN LAYOUT ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* -------------------- LEFT COLUMN: FEATURED NEWS (~58% / col-span-7) -------------------- */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Featured Article Card */}
            <article className="bg-[#FFFFFF] rounded-[20px] overflow-hidden border border-[#E3E8ED] shadow-[0_4px_20px_-4px_rgba(23,54,82,0.06)] hover:shadow-[0_12px_30px_-6px_rgba(23,54,82,0.12)] transition-all duration-300 group flex flex-col">
              
              {/* Edge-to-edge 16:9 Image container with rounded top only */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[20px] bg-[#173652]/10">
                <img
                  src={eventImage}
                  alt={featuredNews.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173652]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Category Badge overlay */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#173652]/90 backdrop-blur-md text-white border border-white/20 shadow-xs">
                    {featuredNews.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[10.5px] font-bold uppercase tracking-wider bg-[#C9A45C] text-[#173652] shadow-xs">
                    Featured
                  </span>
                </div>
              </div>

              {/* White Content Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4">
                
                <div className="space-y-3">
                  {/* Date with Gold Calendar Icon */}
                  <div className="flex items-center gap-2 text-[12.5px] font-semibold text-[#5B6D7E]">
                    <Calendar className="w-4 h-4 text-[#C9A45C] stroke-[2.2]" />
                    <span>{featuredNews.date}</span>
                    <span className="text-[#C9A45C]">•</span>
                    <span>Diamond Jubilee Series</span>
                  </div>

                  {/* Large Serif Title */}
                  <h3 className="font-serif text-[22px] sm:text-[26px] font-bold text-[#173652] group-hover:text-[#24547D] transition-colors leading-[1.25]">
                    <Link to="/news" className="focus:outline-none">
                      {featuredNews.title}
                    </Link>
                  </h3>

                  {/* Short Description */}
                  <p className="text-[14px] text-[#4F6377] leading-[1.65] font-normal">
                    {featuredNews.summary}
                  </p>
                </div>

                {/* Read Article Link */}
                <div className="pt-3 border-t border-[#E3E8ED]/80 flex items-center justify-between">
                  <Link
                    to="/news"
                    className="inline-flex items-center gap-2 text-[14px] font-bold text-[#24547D] group-hover:text-[#173652] transition-colors group/link"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[12px] text-[#8697A8]">St. Mark's Road Campus</span>
                </div>

              </div>

            </article>

            {/* Secondary News Strip (Subtle editorial supplement) */}
            {secondaryNews.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {secondaryNews.slice(0, 2).map((item) => (
                  <Link
                    key={item.id}
                    to="/news"
                    className="p-4 rounded-[14px] bg-white border border-[#E3E8ED] hover:border-[#24547D]/30 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C9A45C]">
                        <span>{item.category}</span>
                        <span>•</span>
                        <span className="text-[#8697A8] font-normal">{item.date}</span>
                      </div>
                      <h4 className="font-serif text-[14.5px] font-bold text-[#173652] group-hover:text-[#24547D] leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                    <div className="pt-2 mt-2 border-t border-[#F0F4F8] flex items-center justify-between text-[11.5px] font-semibold text-[#24547D]">
                      <span>Read Brief</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            )}

          </div>


          {/* -------------------- RIGHT COLUMN: UPCOMING EVENTS & CIRCULAR (~42% / col-span-5) -------------------- */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Header label for Right column */}
            <div className="flex items-center justify-between pb-2 border-b border-[#E3E8ED]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A45C]" />
                <h3 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#173652]">
                  Upcoming Campus Events
                </h3>
              </div>
              <span className="text-[11.5px] font-semibold text-[#5B6D7E]">2026 – 2027</span>
            </div>

            {/* Event Cards Vertical Stack */}
            <div className="space-y-3.5">
              {upcomingEvents.map((evt) => {
                const badge = getEventBadge(evt.category);
                const dateBadge = parseDateBadge(evt.date);

                return (
                  <div
                    key={evt.id}
                    className="bg-[#FFFFFF] rounded-[16px] border border-[#E3E8ED] hover:border-[#24547D]/40 p-3.5 sm:p-4 shadow-[0_2px_12px_-3px_rgba(23,54,82,0.04)] hover:shadow-[0_8px_20px_-4px_rgba(23,54,82,0.08)] transition-all duration-300 flex flex-col sm:flex-row gap-3.5 items-stretch group"
                  >
                    
                    {/* Thumbnail Image on Left with Date Accent Overlay */}
                    <div className="relative w-full sm:w-[125px] h-36 sm:h-auto rounded-[12px] overflow-hidden shrink-0 bg-[#E3E8ED]">
                      <img
                        src={evt.image}
                        alt={evt.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Compact Gold Date Block in Corner */}
                      <div className="absolute top-2 left-2 rounded-md bg-[#173652]/90 backdrop-blur-xs text-white text-center px-2 py-1 shadow-xs border border-white/20">
                        <span className="block font-serif text-[14px] font-bold leading-none text-[#C9A45C]">
                          {dateBadge.day}
                        </span>
                        <span className="block text-[9px] font-bold tracking-wider uppercase text-gray-200">
                          {dateBadge.month}
                        </span>
                      </div>
                    </div>

                    {/* Right: Event Information */}
                    <div className="flex-1 flex flex-col justify-between space-y-2 min-w-0">
                      
                      <div className="space-y-1.5">
                        {/* Event Category & Time */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${badge.bgColor} ${badge.textColor} border ${badge.borderColor}`}>
                            {badge.label}
                          </span>
                          <span className="text-[11px] text-[#5B6D7E] flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#C9A45C]" />
                            <span>{evt.time}</span>
                          </span>
                        </div>

                        {/* Title using Elegant Serif */}
                        <h4 className="font-serif text-[15.5px] sm:text-[16px] font-bold text-[#173652] group-hover:text-[#24547D] transition-colors leading-snug line-clamp-2">
                          {evt.title}
                        </h4>

                        {/* Short Description */}
                        <p className="text-[12px] text-[#5B6D7E] leading-relaxed line-clamp-2 font-normal">
                          {evt.description}
                        </p>
                      </div>

                      {/* Venue / Location */}
                      <div className="pt-2 border-t border-[#F0F4F8] flex items-center justify-between text-[11.5px] text-[#24547D]">
                        <span className="flex items-center gap-1 font-medium truncate max-w-[200px] text-[#4F6377]">
                          <MapPin className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                          <span className="truncate">{evt.location}</span>
                        </span>
                        <Link
                          to="/events"
                          className="font-bold inline-flex items-center gap-1 text-[#173652] hover:text-[#C9A45C] transition-colors shrink-0"
                        >
                          <span>Details</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>

            {/* ==================== SPECIAL DOWNLOADABLE CIRCULAR CARD ==================== */}
            <div className="rounded-[18px] bg-[#173652] text-white p-5 sm:p-6 border border-[#24547D] shadow-[0_6px_22px_-4px_rgba(23,54,82,0.2)] relative overflow-hidden group">
              {/* Gold gradient subtle glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#C9A45C]/25 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-3">
                {/* Gold Label */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#C9A45C] bg-[#C9A45C]/15 border border-[#C9A45C]/30 px-2.5 py-0.5 rounded-full">
                    <FileText className="w-3 h-3 text-[#C9A45C]" />
                    <span>OFFICIAL CIRCULAR</span>
                  </span>
                  <span className="text-[11px] text-gray-300 font-mono">PDF • 1.8 MB</span>
                </div>

                {/* Title */}
                <h4 className="font-serif text-[17px] sm:text-[18px] font-bold text-white leading-snug">
                  Annual Academic Calendar, Holidays & Examination Timetables 2026-27
                </h4>

                {/* Short Description */}
                <p className="text-[12px] text-gray-300 leading-relaxed font-normal">
                  Approved circular by the Secretary & Board of Management for High School and Composite PU College.
                </p>

                {/* Download CTA Button */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleDownloadCircular}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C9A45C] hover:bg-[#b8934b] text-[#173652] text-[12.5px] font-bold transition-all shadow-sm active:scale-95"
                  >
                    <Download className="w-4 h-4 stroke-[2.2]" />
                    <span>Download Official Circular</span>
                  </button>

                  <Link
                    to="/downloads"
                    className="text-[12px] text-gray-300 hover:text-white underline underline-offset-4 font-medium transition-colors"
                  >
                    Browse All Documents →
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
