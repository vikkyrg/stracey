import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import AdmissionEnquiryForm from '../components/forms/AdmissionEnquiryForm';
import { ArrowRight, CheckCircle2, FileText, Download, Calendar } from 'lucide-react';

export default function Admissions() {
  return (
    <div>
      <PageBanner
        eyebrow="Enrollment 2026–27"
        title="Admissions Overview"
        subtitle="Join the Stracey Memorial family. Learn about our admission rules, eligibility, required documents, and open enrollment process."
      />

      <Breadcrumb items={[{ label: 'Admissions' }]} />

      <div className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Guidelines & Process (6 cols) */}
            <div className="lg:col-span-6 space-y-8">
              <SectionHeading
                badge="Your Child's Journey"
                title="Inclusive, Transparent & Merit-Driven Admissions"
                subtitle="We welcome applications for Nursery, Primary School, High School (SSLC), and I PUC."
              />

              <div className="space-y-4 text-sm sm:text-base text-[#646B73] leading-relaxed">
                <p>
                  Stracey Memorial operates on an inclusive, open-admission philosophy upholding moderate fees, ensuring deserving students from across the city can benefit from structured education in central Bengaluru.
                </p>
                <p>
                  Admissions for 1st PUC commence promptly upon announcement of the Karnataka SSLC and 10th standard board results in May/June. Early pre-registration and nursery/primary applications are open year-round.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-4 pt-2">
                <h4 className="font-serif text-xl font-bold text-[#17344E]">
                  Admission Steps:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAFAF7] border border-gray-200">
                    <span className="w-6 h-6 rounded-full bg-[#234E78] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                    <div className="text-sm">
                      <strong className="text-[#17344E]">Submit Online Enquiry:</strong> Fill out the form or obtain the application form from our St. Mark's Road campus.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAFAF7] border border-gray-200">
                    <span className="w-6 h-6 rounded-full bg-[#234E78] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                    <div className="text-sm">
                      <strong className="text-[#17344E]">Document Verification:</strong> Submit transfer certificate, previous marks sheets, and birth certificate.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAFAF7] border border-gray-200">
                    <span className="w-6 h-6 rounded-full bg-[#234E78] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                    <div className="text-sm">
                      <strong className="text-[#17344E]">Parent & Student Interaction:</strong> Meet with the Principal/Headmistress to review academic stream suitability.
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button to="/admission-procedure" variant="primary" icon={ArrowRight}>
                  View Detailed Rules
                </Button>
                <Button to="/downloads" variant="outline" icon={Download}>
                  Download Application PDF
                </Button>
              </div>
            </div>

            {/* Right Column: Admission Enquiry Form (6 cols) */}
            <div className="lg:col-span-6">
              <AdmissionEnquiryForm />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
