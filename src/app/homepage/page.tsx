import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import FloatingConsultation from '@/components/common/FloatingConsultation';
import TrustBar from '@/components/common/TrustBar';
import HeroSection from './components/HeroSection';
import ServiceCategories from './components/ServiceCategories';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialCarousel from './components/TestimonialCarousel';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'SocialBoost Pro - Authentic Social Media Growth Services',
  description: 'Your trusted partner for authentic social media growth through manual verification, quality assurance, and personalized support. Grow your Instagram, YouTube, TikTok, Facebook, and Twitter presence with realistic, reliable results.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <TrustBar />
        <ServiceCategories />
        <WhyChooseUs />
        <TestimonialCarousel />
        <CTASection />
      </main>

      <Footer />
      <FloatingConsultation />
    </div>
  );
}