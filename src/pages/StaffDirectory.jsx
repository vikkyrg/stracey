import PageBanner from '../components/common/PageBanner';
import React, { useState } from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import { staffData, staffCategories } from '../data/staff';
import { GraduationCap, Award, Mail, Search } from 'lucide-react';

export default function StaffDirectory() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [search, setSearch] = useState('');

  const filteredStaff = staffData.filter((s) => {
    const matchesCat = selectedCat === 'All' || s.institution === selectedCat || s.department === selectedCat;
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
                          s.designation.toLowerCase().includes(search.toLowerCase()) ||
                          s.department.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div>
      <PageBanner
        eyebrow="Educators & Mentors"
        title="Faculty & Staff Directory"
        subtitle="Meet the experienced principals, headmistresses, lecturers, and teachers dedicated to student progress at Stracey."
      />

      <Breadcrumb items={[{ label: 'Community', to: '/staff' }, { label: 'Faculty Directory' }]} />

      <div className="py-16 bg-white">
        <Container>
          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <div className="flex flex-wrap items-center gap-2">
              {staffCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCat === cat
                      ? 'bg-[#234E78] text-white'
                      : 'bg-[#F1F3F0] text-[#646B73] hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search faculty..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#234E78]"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStaff.map((staff) => (
              <div
                key={staff.id}
                className="rounded-2xl overflow-hidden bg-[#FAFAF7] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17344E]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-bold text-[#C9A66B] uppercase tracking-wider">
                      {staff.department}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#17344E]">
                      {staff.name}
                    </h3>
                    <p className="text-xs text-[#234E78] font-semibold mt-0.5">
                      {staff.designation}
                    </p>
                    <p className="text-xs text-[#646B73] mt-1">
                      {staff.institution}
                    </p>
                    <div className="pt-3 border-t border-gray-200 text-xs text-[#646B73] space-y-1">
                      <p><strong>Qualification:</strong> {staff.qualification}</p>
                      <p><strong>Experience:</strong> {staff.experience}</p>
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
