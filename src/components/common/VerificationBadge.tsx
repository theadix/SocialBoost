'use client';

import { useEffect, useState } from 'react';


interface VerificationBadgeProps {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const VerificationBadge = ({
  label = 'Manually Verified',
  size = 'md',
  className = '',
}: VerificationBadgeProps) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <div
      className={`inline-flex items-center space-x-2 ${sizeClasses[size]} rounded-full bg-success text-white font-headline font-semibold shadow-subtle verification-badge ${className}`}
    >
      <svg
        width={iconSizes[size]}
        height={iconSizes[size]}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M8 12L11 15L16 9"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="20"
          strokeDashoffset={isAnimated ? '0' : '20'}
          style={{
            transition: 'stroke-dashoffset 1.2s ease-out',
          }}
        />
      </svg>
      <span>{label}</span>
    </div>
  );
};

export default VerificationBadge;