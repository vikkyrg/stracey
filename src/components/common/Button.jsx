import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'gold', 'white'
  size = 'md',        // 'sm', 'md', 'lg'
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon: Icon,
  iconPosition = 'right'
}) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-[#234E78] hover:bg-[#17344E] text-white shadow-sm hover:shadow focus:ring-[#234E78]",
    secondary: "bg-[#547D68] hover:bg-[#436453] text-white shadow-sm focus:ring-[#547D68]",
    gold: "bg-[#C9A66B] hover:bg-[#B39055] text-[#17344E] font-semibold shadow-sm focus:ring-[#C9A66B]",
    orange: "bg-[#E99B55] hover:bg-[#D9873E] text-white shadow-sm focus:ring-[#E99B55]",
    outline: "border-2 border-[#234E78] text-[#234E78] hover:bg-[#234E78] hover:text-white focus:ring-[#234E78]",
    outlineWhite: "border-2 border-white text-white hover:bg-white hover:text-[#17344E] focus:ring-white",
    white: "bg-white text-[#234E78] hover:bg-[#F1F3F0] shadow-sm focus:ring-white",
    ghost: "text-[#234E78] hover:bg-[#F1F3F0] focus:ring-[#234E78]"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs sm:text-sm gap-1.5",
    md: "px-5 py-2.5 text-sm sm:text-base gap-2",
    lg: "px-7 py-3.5 text-base sm:text-lg gap-2.5 font-semibold"
  };

  const combinedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
