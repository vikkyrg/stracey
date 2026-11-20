import PageBanner from '../components/common/PageBanner';
import React, { useState } from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import { downloadsData } from '../data/faq';
import { Download as DownloadIcon, FileText, Calendar, Filter, CheckCircle2 } from 'lucide-react';

export default function Downloads() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [downloadSuccess, setDownloadSuccess] = useState(null);

  const categories = ['All', 'Admissions', 'Application Forms', 'Academic', 'Annual Reports', 'Circulars'];

  const filteredDownloads = selectedCat === 'All'
    ? downloadsData
    : downloadsData.filter(d => d.category === selectedCat);

  const handleDownload = (doc) => {
    setDownloadSuccess(`Downloaded ${doc.title} (${doc.fileSize})`);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <div>
      <PageBanner
        eyebrow="Resource Library"
        title="Download Center"
        subtitle="Access official school and college prospectuses, admission application forms, examination timetables, and annual reports."
      />

      <Breadcrumb items={[{ label: 'Resources', to: '/downloads' }, { label: 'Download Center' }]} />

      <div className="py-16 bg-white">
        <Container>
          {downloadSuccess && (
            <div className="mb-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-semibold">{downloadSuccess}</span>
            </div>
          )}

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCat === cat
                    ? 'bg-[#234E78] text-white shadow-md'
                    : 'bg-[#F1F3F0] text-[#646B73] hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {filteredDownloads.map((doc) => (
              <div
                key={doc.id}
                className="p-5 sm:p-6 rounded-2xl bg-[#FAFAF7] border border-gray-200 hover:border-[#234E78]/30 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#234E78]/10 text-[#234E78] flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9A66B] block">
                      {doc.category} • {doc.fileType} ({doc.fileSize})
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#17344E] mt-0.5">
                      {doc.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#646B73] mt-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Updated: {doc.date}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-auto shrink-0">
                  <Button
                    onClick={() => handleDownload(doc)}
                    variant="primary"
                    size="sm"
                    icon={DownloadIcon}
                    className="w-full sm:w-auto"
                  >
                    Download File
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
