import PageBanner from '../components/common/PageBanner';
import React, { useState } from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import { newsData } from '../data/news';
import { Calendar, Search, ArrowRight } from 'lucide-react';

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Institutional News', 'Academic', 'Sports'];

  const filteredNews = newsData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div>
      <PageBanner
        eyebrow="Campus Dispatches"
        title="News & Announcements"
        subtitle="Read latest bulletins, academic milestones, board examination results, and celebrations."
      />

      <Breadcrumb items={[{ label: 'News & Events', to: '/news' }, { label: 'Latest News' }]} />

      <div className="py-16 bg-white">
        <Container>
          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#234E78] text-white'
                      : 'bg-[#F1F3F0] text-[#646B73] hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#234E78]"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <article
                key={news.id}
                className="rounded-2xl overflow-hidden bg-[#FAFAF7] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#234E78] text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                    {news.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#646B73] mb-2">
                      <Calendar className="w-3.5 h-3.5 text-[#C9A66B]" />
                      <span>{news.date}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#17344E] leading-snug group-hover:text-[#234E78] transition-colors">
                      {news.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#646B73] leading-relaxed line-clamp-3">
                      {news.content}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
