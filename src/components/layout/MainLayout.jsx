import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import AdmissionPopup from '../common/AdmissionPopup';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF7] text-[#222831]">
      <ScrollToTop />
      <Header />
      <AdmissionPopup />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
