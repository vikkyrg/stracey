import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import highSchoolDivImage from '../assets/images/highschool-div.png';
import { BookOpen, CheckCircle, ArrowRight, ShieldCheck, Microscope } from 'lucide-react';

export default function HighSchool() {
  return (
    <div>
      <PageBanner
        eyebrow="Secondary Education"
        title="Stracey Memorial High School"
        subtitle="Classes 8 to 10 (Karnataka SSLC): Academic rigor, laboratory experiments, board examination mastery, and athletic sportsmanship."
      />

      <Breadcrumb items={[{ label: 'Academics', to: '/academics' }, { label: 'High School (SSLC)' }]} />

      <div className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Karnataka State Board SSLC"
                title="Rigorous Academic Preparation & Character Formation"
                subtitle="Equipping students for the crucial 10th standard board examinations with dedicated faculty mentorship and regular testing."
              />

              <div className="space-y-4 text-sm sm:text-base text-[#646B73] leading-relaxed">
                <p>
                  Stracey Memorial High School is an official Karnataka State Board examination center. Our high school curriculum covers Mathematics, Science (Physics, Chemistry, Biology), Social Science, and three languages.
                </p>
                <p>
                  Students spend dedicated practical hours in science laboratories, take part in model question tests, and receive personalized remedial attention. Physical training, basketball, throwball, and debate forums cultivate balanced, confident personalities.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-[#17344E] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#547D68]" />
                  <span>State SSLC Board Examination Center</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#17344E] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#547D68]" />
                  <span>Hands-on Science Laboratories</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#17344E] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#547D68]" />
                  <span>Strict 75% Attendance Standard</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#17344E] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#547D68]" />
                  <span>Inter-School Basketball & Sports</span>
                </div>
              </div>

              <div className="pt-4">
                <Button to="/admission-enquiry" variant="primary" icon={ArrowRight}>
                  Enquire for High School Admission
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <img
                src={highSchoolDivImage}
                alt="Stracey Memorial High school students and campus"
                className="w-full h-96 rounded-2xl object-cover shadow-xl border-4 border-white"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
