import React from 'react';
import Hero from '../components/home/Hero';
import AnnouncementBar from '../components/home/AnnouncementBar';
import AboutSection from '../components/home/AboutSection';
import AcademicJourney from '../components/home/AcademicJourney';
import WhyStracey from '../components/home/WhyStracey';
import CampusShowcase from '../components/home/CampusShowcase';
import GalleryPreview from '../components/home/GalleryPreview';
import NewsPreview from '../components/home/NewsPreview';
import AdmissionsCTA from '../components/home/AdmissionsCTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <AnnouncementBar />
      <AboutSection />
      <AcademicJourney />
      <WhyStracey />
      <CampusShowcase />
      <GalleryPreview />
      <NewsPreview />
      <AdmissionsCTA />
    </div>
  );
}
