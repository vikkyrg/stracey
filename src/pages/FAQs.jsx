import PageBanner from '../components/common/PageBanner';
import React, { useState } from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import Accordion from '../components/common/Accordion';
import Button from '../components/common/Button';
import { faqData } from '../data/faq';
import { HelpCircle, ArrowRight } from 'lucide-react';

export default function FAQs() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Admissions', 'Pre-University', 'Fees', 'Academics', 'Facilities'];

  const filteredFaqs = selectedCategory === 'All'
    ? faqData
    : faqData.filter(f => f.category === selectedCategory);

  return (
    <div>
      <PageBanner
        eyebrow="Questions & Answers"
        title="Frequently Asked Questions"
        subtitle="Find prompt answers to common questions about admissions, PU courses, fees, syllabus, and facilities."
      />

      <Breadcrumb items={[{ label: 'Support', to: '/contact' }, { label: 'FAQs' }]} />

      <div className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#234E78] text-white'
                      : 'bg-[#F1F3F0] text-[#646B73] hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <Accordion items={filteredFaqs} />

            {/* Still have questions? */}
            <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-gray-200 text-center space-y-3 mt-12">
              <h3 className="font-serif text-2xl font-bold text-[#17344E]">
                Still Have Questions?
              </h3>
              <p className="text-sm text-[#646B73] max-w-lg mx-auto">
                Our admissions and administrative team is available to assist you Monday through Saturday on St. Mark's Road.
              </p>
              <div className="pt-2">
                <Button to="/contact" variant="primary" icon={ArrowRight}>
                  Contact Campus Office
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
