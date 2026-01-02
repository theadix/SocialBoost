"use client";

import Header from '@/components/common/Header';
import FloatingConsultation from '@/components/common/FloatingConsultation';
import TrustBar from '@/components/common/TrustBar';
import HeroSection from './components/HeroSection';
import ServiceCategories from './components/ServiceCategories';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialCarousel from './components/TestimonialCarousel';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function HomePageClient() {
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
