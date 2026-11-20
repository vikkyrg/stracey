import React, { useState } from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Lightbox from '../gallery/Lightbox';
import { galleryItems, galleryCategories } from '../../data/gallery';

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index) => {
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="py-12 bg-white">
      <Container>
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#234E78] text-white shadow-md'
                  : 'bg-[#F1F3F0] text-[#646B73] hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="cursor-pointer group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] bg-gray-100"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17344E]/90 via-[#17344E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-bold text-[#C9A66B] uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg font-bold leading-snug">
                  {item.title}
                </h4>
                {item.caption && (
                  <p className="text-xs text-gray-200 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                )}
                <span className="mt-3 text-[11px] text-[#C9A66B] font-semibold underline">
                  Click to Expand
                </span>
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          items={filteredItems}
          activeIndex={activePhotoIndex}
          onIndexChange={setActivePhotoIndex}
        />
      </Container>
    </div>
  );
}
