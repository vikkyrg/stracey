import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import CareerForm from '../components/forms/CareerForm';
import { Briefcase, CheckCircle2, GraduationCap } from 'lucide-react';

const openPositions = [
  {
    title: "Senior Lecturer in Physics (PU College)",
    department: "Department of Science",
    institution: "Stracey Memorial Composite PU College",
    qualification: "M.Sc. in Physics with B.Ed.",
    experience: "Minimum 2–3 years teaching experience in Karnataka State PU curriculum",
    type: "Full Time"
  },
  {
    title: "Senior Lecturer in Accountancy & Commerce",
    department: "Department of Commerce",
    institution: "Stracey Memorial Composite PU College",
    qualification: "M.Com. / M.Phil. with B.Ed.",
    experience: "Experience in coaching 1st & 2nd PUC Commerce students",
    type: "Full Time"
  },
  {
    title: "High School English & Social Studies Teacher",
    department: "High School Section",
    institution: "Stracey Memorial High School",
    qualification: "B.A. / M.A. in English / History with B.Ed.",
    experience: "Proficiency in English communication and Karnataka SSLC board pattern",
    type: "Full Time"
  }
];

export default function Careers() {
  return (
    <div>
      <PageBanner
        eyebrow="Faculty & Staff Opportunities"
        title="Careers at Stracey"
        subtitle="Join a collaborative academic family dedicated to inspiring character and knowledge since 1964."
      />

      <Breadcrumb items={[{ label: 'Careers' }]} />

      <div className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Open Positions List (6 cols) */}
            <div className="lg:col-span-6 space-y-8">
              <SectionHeading
                badge="Current Openings"
                title="Teaching & Mentorship Vacancies"
                subtitle="We invite experienced, passionate educators to mold future generations on our St. Mark's Road campus."
              />

              <div className="space-y-4">
                {openPositions.map((pos, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#FAFAF7] border border-gray-200 hover:border-[#234E78]/30 transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#234E78]">
                        {pos.department}
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-[#547D68]/10 text-[#547D68] text-xs font-bold">
                        {pos.type}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#17344E]">
                      {pos.title}
                    </h3>

                    <p className="text-xs text-[#17344E] font-medium">
                      Institution: {pos.institution}
                    </p>

                    <div className="space-y-1 text-xs text-[#646B73]">
                      <p><strong>Qualification:</strong> {pos.qualification}</p>
                      <p><strong>Experience:</strong> {pos.experience}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Application Form (6 cols) */}
            <div className="lg:col-span-6">
              <CareerForm />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
