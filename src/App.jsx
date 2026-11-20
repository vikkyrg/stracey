import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Nursery from './pages/Nursery';
import PrimarySchool from './pages/PrimarySchool';
import HighSchool from './pages/HighSchool';
import PreUniversity from './pages/PreUniversity';
import Admissions from './pages/Admissions';
import AdmissionProcedure from './pages/AdmissionProcedure';
import FeesStructure from './pages/FeesStructure';
import AdmissionEnquiry from './pages/AdmissionEnquiry';
import Careers from './pages/Careers';
import Gallery from './pages/Gallery';
import Activities from './pages/Activities';
import Infrastructure from './pages/Infrastructure';
import Events from './pages/Events';
import News from './pages/News';
import StaffDirectory from './pages/StaffDirectory';
import Achievements from './pages/Achievements';
import Alumni from './pages/Alumni';
import Downloads from './pages/Downloads';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        
        {/* About Section */}
        <Route path="about" element={<About />} />
        <Route path="history" element={<Navigate to="/about#history" replace />} />
        <Route path="vision-mission" element={<Navigate to="/about#vision-mission" replace />} />
        <Route path="management" element={<Navigate to="/about#management" replace />} />
        <Route path="principal" element={<Navigate to="/about#principal-message" replace />} />
        
        {/* Academics Section */}
        <Route path="academics" element={<Academics />} />
        <Route path="nursery" element={<Nursery />} />
        <Route path="primary" element={<PrimarySchool />} />
        <Route path="high-school" element={<HighSchool />} />
        <Route path="pre-university" element={<PreUniversity />} />
        
        {/* Admissions Section */}
        <Route path="admissions" element={<Admissions />} />
        <Route path="admission-procedure" element={<AdmissionProcedure />} />
        <Route path="fees-structure" element={<FeesStructure />} />
        <Route path="admission-enquiry" element={<AdmissionEnquiry />} />
        
        {/* Campus Life & Facilities */}
        <Route path="activities" element={<Activities />} />
        <Route path="infrastructure" element={<Infrastructure />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="alumni" element={<Alumni />} />
        
        {/* News, Events & Downloads */}
        <Route path="news" element={<News />} />
        <Route path="events" element={<Events />} />
        <Route path="downloads" element={<Downloads />} />
        <Route path="staff" element={<StaffDirectory />} />
        <Route path="careers" element={<Careers />} />
        
        {/* Support & Contact */}
        <Route path="faqs" element={<FAQs />} />
        <Route path="contact" element={<Contact />} />
        
        {/* Catch-all 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
