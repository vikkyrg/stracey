import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import Breadcrumb from '../components/common/Breadcrumb';
import AdmissionEnquiryForm from '../components/forms/AdmissionEnquiryForm';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { institutionInfo } from '../data/institution';

export default function AdmissionEnquiry() {
  return (
    <div>
      <PageBanner
        eyebrow="Enrollment Gateway"
        title="Online Admission Enquiry"
        subtitle="Submit your admission enquiry for Nursery, Primary, High School (SSLC), or Pre-University College (Science & Commerce)."
      />

      <Breadcrumb items={[{ label: 'Admissions', to: '/admissions' }, { label: 'Online Enquiry' }]} />

      <div className="py-16 bg-[#FAFAF7]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <AdmissionEnquiryForm />
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-4">
                <h4 className="font-serif text-xl font-bold text-[#17344E] border-b border-gray-100 pb-3">
                  Admissions Office
                </h4>
                <div className="space-y-3 text-sm text-[#646B73]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#234E78] shrink-0 mt-1" />
                    <span>#52, St. Mark's Road, Bengaluru – 560001</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#234E78] shrink-0" />
                    <span>{institutionInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#234E78] shrink-0" />
                    <span>{institutionInfo.admissionEmail}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#234E78] shrink-0 mt-1" />
                    <span>Mon–Fri: 8:30 AM – 4:00 PM<br/>Sat: 8:30 AM – 1:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#234E78] to-[#17344E] p-6 rounded-2xl text-white space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C9A66B]">
                  Immediate Assistance
                </span>
                <h4 className="font-serif text-lg font-bold">Have Specific Questions?</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  You are welcome to visit our campus admissions office in person for campus tours, syllabus counseling, and fee inquiries.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
