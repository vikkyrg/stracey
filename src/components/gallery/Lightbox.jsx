import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ isOpen, onClose, items = [], activeIndex = 0, onIndexChange }) {
  if (!isOpen || !items.length) return null;

  const currentItem = items[activeIndex] || items[0];

  const handlePrev = (e) => {
    e.stopPropagation();
    onIndexChange((activeIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onIndexChange((activeIndex + 1) % items.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onIndexChange((activeIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onIndexChange((activeIndex + 1) % items.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, items.length, onClose, onIndexChange]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image & Caption Container */}
      <div
        className="max-w-4xl max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.image || currentItem.url}
          alt={currentItem.title}
          className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
        />
        <div className="mt-4 text-center text-white space-y-1">
          <span className="text-xs uppercase font-bold text-[#C9A66B] tracking-wider">
            {currentItem.category} • {activeIndex + 1} of {items.length}
          </span>
          <h4 className="font-serif text-xl font-bold">{currentItem.title}</h4>
          {currentItem.caption && (
            <p className="text-xs text-gray-300 max-w-xl">{currentItem.caption}</p>
          )}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
