import React from 'react';

/**
 * Helper to split a title string into primary (navy) and highlight (gold) parts.
 * Supported patterns:
 * 1. Explicit props: primary + highlight
 * 2. Colon / Dash / Pipe separator: e.g. "Primary Part: Gold Highlight"
 * 3. Array of two strings: [primary, highlight]
 * 4. React node / JSX: rendered as is
 */
function renderTwoColorTitle(title, primaryPart, highlightPart, dark) {
  const navyColor = dark ? 'text-white' : 'text-[#153653]';
  const goldColor = 'text-[#C9A55D]';

  // 1. Explicit props provided
  if (primaryPart || highlightPart) {
    return (
      <>
        {primaryPart && <span className={`${navyColor} block`}>{primaryPart}</span>}
        {highlightPart && <span className={`${goldColor} block`}>{highlightPart}</span>}
      </>
    );
  }

  // 2. Title is an array: [firstLine, secondLine]
  if (Array.isArray(title)) {
    return (
      <>
        <span className={`${navyColor} block`}>{title[0]}</span>
        {title[1] && <span className={`${goldColor} block`}>{title[1]}</span>}
      </>
    );
  }

  // 3. Title is a string: check for natural separators
  if (typeof title === 'string') {
    // If title already contains newline
    if (title.includes('\n')) {
      const parts = title.split('\n');
      return (
        <>
          <span className={`${navyColor} block`}>{parts[0]}</span>
          <span className={`${goldColor} block`}>{parts.slice(1).join(' ')}</span>
        </>
      );
    }

    // Check for common natural split points if length is sufficient
    // e.g. "From One Pupil to Over Sixty Years of Leadership"
    if (title.includes(': ')) {
      const parts = title.split(': ');
      return (
        <>
          <span className={`${navyColor} block`}>{parts[0]}</span>
          <span className={`${goldColor} block`}>{parts.slice(1).join(': ')}</span>
        </>
      );
    }

    if (title.includes(' & ')) {
      const parts = title.split(' & ');
      return (
        <>
          <span className={navyColor}>{parts[0]} &amp; </span>
          <span className={goldColor}>{parts.slice(1).join(' & ')}</span>
        </>
      );
    }

    // Default string without separator
    return <span className={navyColor}>{title}</span>;
  }

  // Fallback for JSX or numbers
  return title;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  primaryPart,
  highlightPart,
  centered = false,
  dark = false,
  divider = true,
  className = ''
}) {
  const hasTitle = Boolean(title || primaryPart || highlightPart);

  return (
    <div className={`mb-10 sm:mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {/* Eyebrow Badge */}
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase mb-3.5 shadow-2xs ${
          dark 
            ? 'bg-[#C9A55D]/20 text-[#C9A55D] border border-[#C9A55D]/30' 
            : 'bg-[#FAF8F3] text-[#153653] border border-[#DDD5C3]'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A55D]" />
          <span>{badge}</span>
        </div>
      )}

      {/* Main Two-Color Serif Heading */}
      {hasTitle && (
        <h2 className="font-serif text-[clamp(30px,3.8vw,52px)] font-bold tracking-tight leading-[1.1]">
          {renderTwoColorTitle(title, primaryPart, highlightPart, dark)}
        </h2>
      )}

      {/* Subtle Gold Divider */}
      {divider && hasTitle && (
        <div className={`pt-3.5 ${centered ? 'flex justify-center' : 'flex justify-start'}`}>
          <div className="w-12 h-[3px] bg-[#C9A55D] rounded-full" />
        </div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className={`mt-3.5 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal ${
          dark ? 'text-gray-300' : 'text-[#52657A]'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
