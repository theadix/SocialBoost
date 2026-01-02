'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/homepage', icon: 'HomeIcon' },
    { label: 'Pricing', href: '/pricing-packages', icon: 'CurrencyDollarIcon' },
    { label: 'Services', href: '#services', icon: 'SparklesIcon' },
    { label: 'About', href: '#about', icon: 'InformationCircleIcon' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-card shadow-subtle ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link href="/homepage" className="flex items-center space-x-2 group">
            <div className="relative">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="smooth-transition group-hover:scale-105"
              >
                <rect width="40" height="40" rx="8" fill="url(#logo-gradient)" />
                <path
                  d="M20 10L25 15L20 20L15 15L20 10Z"
                  fill="white"
                  opacity="0.9"
                />
                <path
                  d="M20 20L25 25L20 30L15 25L20 20Z"
                  fill="white"
                  opacity="0.7"
                />
                <defs>
                  <linearGradient
                    id="logo-gradient"
                    x1="0"
                    y1="0"
                    x2="40"
                    y2="40"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2563EB" />
                    <stop offset="1" stopColor="#1E40AF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-xl font-headline font-bold text-text-primary smooth-transition group-hover:text-primary">
              SocialBoost Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-text-secondary font-medium smooth-transition hover:text-primary hover:bg-surface"
              >
                <Icon name={item.icon as any} size={20} variant="outline" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="#consultation"
              className="px-5 py-2.5 rounded-lg font-headline font-semibold text-white bg-primary smooth-transition hover:bg-secondary hover:shadow-premium"
            >
              Start Consultation
            </Link>
            <Link
              href="#contact"
              className="px-5 py-2.5 rounded-lg font-headline font-medium text-primary border border-primary smooth-transition hover:bg-primary hover:text-white"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-text-secondary smooth-transition hover:bg-surface hover:text-primary"
            aria-label="Toggle mobile menu"
          >
            <Icon
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
              size={24}
              variant="outline"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-slide-in-right">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-text-secondary font-medium smooth-transition hover:text-primary hover:bg-surface"
              >
                <Icon name={item.icon as any} size={20} variant="outline" />
                <span>{item.label}</span>
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t border-border">
              <Link
                href="#consultation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center px-5 py-3 rounded-lg font-headline font-semibold text-white bg-primary smooth-transition hover:bg-secondary"
              >
                Start Consultation
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center px-5 py-3 rounded-lg font-headline font-medium text-primary border border-primary smooth-transition hover:bg-primary hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;