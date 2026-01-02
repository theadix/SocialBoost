'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TrustBarProps {
  className?: string;
}

interface TrustMetric {
  icon: string;
  value: string;
  label: string;
  color: string;
}

const TrustBar = ({ className = '' }: TrustBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('trust-bar');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const trustMetrics: TrustMetric[] = [
    {
      icon: 'UsersIcon',
      value: '50,000+',
      label: 'Happy Clients',
      color: 'text-primary',
    },
    {
      icon: 'CheckBadgeIcon',
      value: '500K+',
      label: 'Successful Orders',
      color: 'text-success',
    },
    {
      icon: 'ShieldCheckIcon',
      value: '100%',
      label: 'Secure & Verified',
      color: 'text-secondary',
    },
    {
      icon: 'ClockIcon',
      value: '24/7',
      label: 'Support Available',
      color: 'text-accent',
    },
  ];

  return (
    <div
      id="trust-bar"
      className={`bg-surface border-y border-border ${className}`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustMetrics.map((metric, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center space-y-2 smooth-transition ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${metric.color} verification-badge`}>
                <Icon name={metric.icon as any} size={32} variant="solid" />
              </div>
              <div className="font-headline font-bold text-2xl text-text-primary">
                {metric.value}
              </div>
              <div className="font-medium text-sm text-text-secondary">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;