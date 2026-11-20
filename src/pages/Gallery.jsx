import PageBanner from '../components/common/PageBanner';
import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumb from '../components/common/Breadcrumb';
import GalleryGrid from '../components/gallery/GalleryGrid';

export default function Gallery() {
  return (
    <div>
      <PageBanner
        eyebrow="Campus Visuals"
        title="Photo & Campus Gallery"
        subtitle="A glimpse into everyday life, laboratories, celebrations, sports events, and heritage moments at Stracey Memorial."
      />

      <Breadcrumb items={[{ label: 'Gallery' }]} />

      <GalleryGrid />
    </div>
  );
}
