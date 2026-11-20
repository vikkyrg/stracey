import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import ContactForm from '../components/forms/ContactForm';
import { institutionInfo } from '../data/institution';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Compass } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <PageBanner
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="We welcome visits, queries, and phone consultations at our historic campus at #52, St. Mark's Road, Bengaluru."
      />

      <Breadcrumb items={[{ label: 'Contact Us' }]} />

      <div className="py-16 bg-[#FAFAF7]">
        <Container>
          <SectionHeading
            highlightPart="Contact."
            subtitle="We welcome visits, queries, and phone consultations at our historic campus at #52, St. Mark's Road, Bengaluru."
            centered
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Campus Info & Map (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C9A66B] block mb-1">
                    Institution Address
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#17344E]">
                    Stracey Memorial Education Society
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-[#646B73]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#234E78] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#17344E] block">Campus Location:</strong>
                      <span>#52, St. Mark's Road, Shanthala Nagar, Ashok Nagar, Bengaluru – 560001, Karnataka, India</span>
                      <p className="text-xs text-gray-400 mt-1">(Near M.G. Road Metro Station, Bangalore Cantonment area)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#234E78] shrink-0" />
                    <div>
                      <strong className="text-[#17344E] block">Telephone:</strong>
                      <a href={`tel:${institutionInfo.phone}`} className="hover:text-[#234E78]">
                        {institutionInfo.phone}
                      </a> / <a href={`tel:${institutionInfo.altPhone}`} className="hover:text-[#234E78]">
                        {institutionInfo.altPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#234E78] shrink-0" />
                    <div>
                      <strong className="text-[#17344E] block">Official Email:</strong>
                      <a href={`mailto:${institutionInfo.email}`} className="hover:text-[#234E78]">
                        {institutionInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#234E78] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#17344E] block">Office Hours:</strong>
                      <span>Monday to Friday: 8:30 AM – 4:00 PM</span><br/>
                      <span>Saturday: 8:30 AM – 1:00 PM</span><br/>
                      <span className="text-xs text-gray-400">Sunday & Public Holidays: Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed placeholder */}
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="w-full h-64 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center relative">
                  <iframe
                    title="Stracey Memorial Location"
                    src="https://maps.google.com/maps?q=Stracey+Memorial+High+School+Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
