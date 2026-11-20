import React from 'react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-28 bg-[#FAFAF7] text-center">
      <Container>
        <div className="max-w-md mx-auto space-y-6">
          <span className="text-6xl font-bold font-serif text-[#234E78] block">404</span>
          <h1 className="font-serif text-[clamp(28px,3vw,40px)] font-bold tracking-tight leading-[1.1]">
            <span className="text-[#153653]">Page</span>{' '}
            <span className="text-[#C9A55D]">Not Found</span>
          </h1>
          <p className="text-sm text-[#646B73] leading-relaxed">
            The page you are looking for might have been moved, removed, or is temporarily unavailable.
          </p>
          <div className="pt-2">
            <Button to="/" variant="primary" icon={Home} iconPosition="left">
              Return to Homepage
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
