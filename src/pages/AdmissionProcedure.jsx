import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import { CheckCircle2, FileText, AlertCircle, ArrowRight } from 'lucide-react';

export default function AdmissionProcedure() {
  const documents = [
    "Original Transfer Certificate (TC) from the previous school/college",
    "Marks Card / Statement of marks of the qualifying examination (SSLC / 10th standard)",
    "Conduct & Character Certificate from the Head of the Institution last attended",
    "Copy of Student Aadhar Card and Parent Identification",
    "Passport-size recent photographs (4 copies)",
    "Caste and Income Certificate (where applicable for government scholarship eligibility)",
    "Migration Certificate (for students coming from boards other than Karnataka SSLC/ICSE/CBSE)"
  ];

  return (
    <div>
      <PageBanner
        eyebrow="Rules & Regulations"
        title="Admission Procedure & Eligibility"
        subtitle="Essential guidelines, eligibility criteria, and required documentation for admissions to Stracey Memorial."
      />

      <Breadcrumb items={[{ label: 'Admissions', to: '/admissions' }, { label: 'Procedure & Eligibility' }]} />

      <div className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Eligibility */}
            <div className="space-y-4">
              <SectionHeading
                badge="Eligibility Matrix"
                primaryPart="Academic"
                highlightPart="Eligibility"
                subtitle="Guidelines defined under the Karnataka State Department of Pre-University and School Education."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-[#FAFAF7] border border-gray-200">
                  <h4 className="font-serif text-lg font-bold text-[#17344E] mb-2">Pre-University Science (PCMB / PCMC)</h4>
                  <p className="text-xs sm:text-sm text-[#646B73] leading-relaxed">
                    Candidates must have passed Karnataka SSLC or equivalent 10th standard board with good marks in Science and Mathematics.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-[#FAFAF7] border border-gray-200">
                  <h4 className="font-serif text-lg font-bold text-[#17344E] mb-2">Pre-University Commerce (CEBA / HEBA / SEBA)</h4>
                  <p className="text-xs sm:text-sm text-[#646B73] leading-relaxed">
                    Candidates must have passed 10th standard SSLC or equivalent examination from a recognized Indian board.
                  </p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#17344E]">
                Checklist of Required Documents
              </h3>
              <p className="text-sm text-[#646B73]">
                Please bring original documents alongside two sets of photocopies during admission verification:
              </p>

              <div className="space-y-2.5">
                {documents.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#F1F3F0]/60 border border-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-[#547D68] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#17344E]">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* General Rules */}
            <div className="p-6 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
              <h4 className="font-bold text-sm text-amber-900 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700" />
                <span>Attendance & Code of Conduct Notice</span>
              </h4>
              <p className="text-xs text-amber-800 leading-relaxed">
                As per the Department of Pre-University Education Karnataka, students must maintain a minimum of <strong>75% attendance</strong> in each subject to be eligible for annual and public examinations. Strict adherence to institutional uniform and code of conduct is mandatory.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button to="/admission-enquiry" variant="primary" icon={ArrowRight}>
                Fill Online Enquiry Form
              </Button>
              <Button to="/fees-structure" variant="outline">
                View Fee Details
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
