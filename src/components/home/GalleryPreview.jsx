import React from 'react';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { galleryItems } from '../../data/gallery';

export default function GalleryPreview() {
  const previewItems = galleryItems.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-[#F1F3F5] via-[#EFF2F5] to-[#EAEFF3] relative overflow-hidden select-none">
      
      {/* ==================== EDITORIAL GALLERY / MUSEUM CANVAS BACKGROUND ==================== */}
      
      {/* 1. Large Cropped Abstract Architectural Circle (Top-Right, 2-3% opacity) */}
      <div className="absolute -top-36 -right-36 w-[620px] h-[620px] rounded-full border-[1.5px] border-[#16324F]/[0.05] pointer-events-none">
        <div className="w-full h-full rounded-full bg-[#16324F]/[0.02]" />
      </div>

      {/* 2. Oversized Cropped Concentric Rings & Curved Rectangles (Left Edge) */}
      <div className="absolute top-1/4 -left-48 w-[540px] h-[540px] rounded-full border border-[#16324F]/[0.04] pointer-events-none">
        <div className="absolute inset-10 rounded-full border border-dashed border-[#16324F]/[0.03]" />
      </div>

      {/* 3. Exhibition Framing Lines & Thin Architectural Grid */}
      <div className="absolute inset-x-8 top-10 h-px bg-gradient-to-r from-transparent via-[#16324F]/[0.06] to-transparent pointer-events-none" />
      <div className="absolute inset-x-8 bottom-10 h-px bg-gradient-to-r from-transparent via-[#16324F]/[0.06] to-transparent pointer-events-none" />

      {/* 4. Minimal Architectural Corner Dots / Registration Marks */}
      <div className="absolute top-8 left-8 opacity-[0.08] pointer-events-none hidden sm:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="10" cy="10" r="1.5" fill="#16324F" />
          <circle cx="25" cy="10" r="1.5" fill="#16324F" />
          <circle cx="40" cy="10" r="1.5" fill="#16324F" />
          <circle cx="10" cy="25" r="1.5" fill="#16324F" />
          <circle cx="25" cy="25" r="1.5" fill="#16324F" />
          <circle cx="40" cy="25" r="1.5" fill="#16324F" />
        </svg>
      </div>

      <div className="absolute bottom-8 right-8 opacity-[0.08] pointer-events-none hidden sm:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="20" cy="35" r="1.5" fill="#16324F" />
          <circle cx="35" cy="35" r="1.5" fill="#16324F" />
          <circle cx="50" cy="35" r="1.5" fill="#16324F" />
          <circle cx="20" cy="50" r="1.5" fill="#16324F" />
          <circle cx="35" cy="50" r="1.5" fill="#16324F" />
          <circle cx="50" cy="50" r="1.5" fill="#16324F" />
        </svg>
      </div>

      {/* 5. Restrained Minimal Gold Accent Line (Single focal exhibition accent) */}
      <div className="absolute top-10 right-28 w-16 h-[2px] bg-[#C99A3D]/40 rounded-full pointer-events-none hidden sm:block" />
      <div className="absolute bottom-10 left-28 w-12 h-[2px] bg-[#C99A3D]/30 rounded-full pointer-events-none hidden sm:block" />

      {/* 6. Soft Gray-Blue Ambient Gradient at Bottom Corner */}
      <div className="absolute -bottom-28 right-10 w-96 h-96 bg-gradient-to-t from-[#24547D]/[0.05] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Moments at Stracey"
            primaryPart="Life in"
            highlightPart="Pictures"
            subtitle="Snapshots of classroom discovery, laboratory inquiry, sports tournaments, and heritage celebrations."
            className="mb-0"
          />
          <Button to="/gallery" variant="outline" icon={ArrowRight}>
            View Full Gallery
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden shadow-sm group bg-white border border-gray-200 aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17344E]/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] font-bold uppercase text-[#C9A66B] tracking-wider mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg font-bold leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-300 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
