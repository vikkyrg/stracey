import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import { puCombinations } from '../data/academics';
import { Wallet, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';

export default function FeesStructure() {
  return (
    <div>
      <PageBanner
        eyebrow="Transparent Tuition"
        title="Fee Structure & Guidelines"
        subtitle="Stracey Memorial is committed to moderate, accessible fees with installment facilities for all deserving students."
      />

      <Breadcrumb items={[{ label: 'Admissions', to: '/admissions' }, { label: 'Fee Structure' }]} />

      <div className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <SectionHeading
              badge="Moderate & Inclusive"
              primaryPart="Pre-University Course"
              highlightPart="Fees (Indicative)"
              subtitle="Fees are structured to provide modern laboratory maintenance, computer access, and library resources without prohibitive costs."
            />

            {/* Fee Table */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#17344E] text-white">
                    <th className="p-4 font-serif">Stream / Course</th>
                    <th className="p-4 font-serif">Subject Combination</th>
                    <th className="p-4 font-serif">Approx. I PUC Fee</th>
                    <th className="p-4 font-serif">Approx. II PUC Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-[#FAFAF7]">
                    <td className="p-4 font-semibold text-[#17344E]">Science (PCMB)</td>
                    <td className="p-4 text-[#646B73]">Physics, Chem, Maths, Biology</td>
                    <td className="p-4 font-bold text-[#234E78]">₹46,000</td>
                    <td className="p-4 text-[#646B73]">₹41,000</td>
                  </tr>
                  <tr className="hover:bg-[#FAFAF7]">
                    <td className="p-4 font-semibold text-[#17344E]">Science (PCMC)</td>
                    <td className="p-4 text-[#646B73]">Physics, Chem, Maths, Computer Sci</td>
                    <td className="p-4 font-bold text-[#234E78]">₹48,500</td>
                    <td className="p-4 text-[#646B73]">₹43,000</td>
                  </tr>
                  <tr className="hover:bg-[#FAFAF7]">
                    <td className="p-4 font-semibold text-[#17344E]">Commerce (CEBA)</td>
                    <td className="p-4 text-[#646B73]">Computer Sci, Econ, Bus, Accounts</td>
                    <td className="p-4 font-bold text-[#234E78]">₹47,000</td>
                    <td className="p-4 text-[#646B73]">₹42,000</td>
                  </tr>
                  <tr className="hover:bg-[#FAFAF7]">
                    <td className="p-4 font-semibold text-[#17344E]">Commerce (HEBA / SEBA)</td>
                    <td className="p-4 text-[#646B73]">History / Soc, Econ, Bus, Accounts</td>
                    <td className="p-4 font-bold text-[#234E78]">₹44,000</td>
                    <td className="p-4 text-[#646B73]">₹40,500</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-[#646B73] italic">
              * Note: Fee figures are approximate and subject to annual management resolution and board curriculum updates. Structured installments are available upon request at the accounts office.
            </p>

            {/* School Fees Notice */}
            <div className="p-6 rounded-2xl bg-[#FAFAF7] border border-gray-200 space-y-3">
              <h4 className="font-serif text-xl font-bold text-[#17344E]">
                Nursery, Primary & High School Fees
              </h4>
              <p className="text-sm text-[#646B73] leading-relaxed">
                Fees for Stracey Memorial Nursery, Primary School (Classes 1–7), and High School (Classes 8–10) are regulated by the Stracey Memorial Education Society and kept accessible. Please contact the administrative desk on St. Mark's Road for the exact prospectus and class-wise fee schedules.
              </p>
              <div className="pt-2">
                <Button to="/admission-enquiry" variant="primary" size="sm" icon={ArrowRight}>
                  Enquire at Accounts Desk
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
