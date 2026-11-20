import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import ChronicleTimeline from '../components/common/ChronicleTimeline';

export default function History() {
  return (
    <div>
      <PageBanner
        eyebrow="Institutional Legacy"
        title="Our History & Heritage"
        subtitle="Six decades of values, discipline, and community upliftment since July 1964 on St. Mark's Road."
      />

      <Breadcrumb items={[{ label: 'About', to: '/about' }, { label: 'History & Heritage' }]} />

      <ChronicleTimeline />
    </div>
  );
}
