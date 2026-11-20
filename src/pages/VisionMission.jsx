import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import VisionMissionSection from '../components/common/VisionMissionSection';
import { Shield, HeartHandshake, BookOpen } from 'lucide-react';

export default function VisionMission() {
  return (
    <div>
      <PageBanner
        eyebrow="Institutional Ethos"
        title="Vision & Mission"
        subtitle="Guiding young minds through ethical clarity, academic diligence, and community responsibility."
      />

      <Breadcrumb items={[{ label: 'About', to: '/about' }, { label: 'Vision & Mission' }]} />

      {/* Redesigned Vision & Mission Hero Section */}
      <VisionMissionSection />

      {/* Core Values */}
      <div className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="pt-4 border-t border-gray-100">
            <SectionHeading
              badge="Guiding Principles"
              primaryPart="Our Core"
              highlightPart="Values"
              subtitle="The pillars that define daily academic and interpersonal life at Stracey."
              centered
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
              <div className="text-center p-6 rounded-xl bg-[#F1F3F0]/60">
                <Shield className="w-8 h-8 text-[#234E78] mx-auto mb-3" />
                <h3 className="font-serif text-xl font-bold text-[#17344E] mb-2">Integrity & Discipline</h3>
                <p className="text-xs text-[#646B73] leading-relaxed">
                  Fostering regular attendance, honesty, ethical conduct, and mutual respect among peers.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-[#F1F3F0]/60">
                <HeartHandshake className="w-8 h-8 text-[#547D68] mx-auto mb-3" />
                <h3 className="font-serif text-xl font-bold text-[#17344E] mb-2">Inclusivity & Service</h3>
                <p className="text-xs text-[#646B73] leading-relaxed">
                  Welcoming every background with moderate fees, equal opportunities, and compassionate mentoring.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-[#F1F3F0]/60">
                <BookOpen className="w-8 h-8 text-[#C9A66B] mx-auto mb-3" />
                <h3 className="font-serif text-xl font-bold text-[#17344E] mb-2">Curiosity & Excellence</h3>
                <p className="text-xs text-[#646B73] leading-relaxed">
                  Inspiring scientific inquiry, expressive languages, and academic resilience from Nursery to PU.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
                <p className="text-xs text-[#646B73] leading-relaxed">
                  Ensuring moderate fee access so students from all communities experience uncompromised learning.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-[#F1F3F0]/60">
                <BookOpen className="w-8 h-8 text-[#E99B55] mx-auto mb-3" />
                <h3 className="font-serif text-xl font-bold text-[#17344E] mb-2">Curiosity & Excellence</h3>
                <p className="text-xs text-[#646B73] leading-relaxed">
                  Encouraging scientific inquiry in laboratories, cultural expression, and board exam mastery.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
