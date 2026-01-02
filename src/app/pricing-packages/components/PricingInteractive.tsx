'use client';

import { useState, useEffect } from 'react';
import PricingHero from './PricingHero';
import PackageCard from './PackageCard';
import ComparisonMatrix from './ComparisonMatrix';
import PricingFAQ from './PricingFAQ';
import Icon from '@/components/ui/AppIcon';

interface Feature {
  text: string;
  included: boolean;
}

interface Package {
  id: string;
  name: string;
  platform: string;
  price: number;
  originalPrice?: number;
  popular?: boolean;
  description: string;
  deliveryTime: string;
  features: Feature[];
  quantity: string;
  retention: string;
}

const PricingInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const allPackages: Package[] = [
    // Instagram Followers
    {
      id: 'instagram-1k',
      name: '1K Followers',
      platform: 'instagram',
      price: 199,
      description: 'Perfect for new creators starting their growth journey',
      deliveryTime: 'Less than 1 hour',
      quantity: '1,000 followers',
      retention: '95%+',
      features: [
        { text: 'Manual verification process', included: true },
        { text: 'Real, active accounts', included: true },
        { text: '30-day retention guarantee', included: true },
        { text: 'Basic support', included: true },
        { text: 'Instant delivery', included: true },
      ],
    },
    {
      id: 'instagram-5k',
      name: '5K Followers',
      platform: 'instagram',
      price: 899,
      popular: true,
      description: 'Ideal for established creators seeking consistent growth',
      deliveryTime: 'Less than 1 hour',
      quantity: '5,000 followers',
      retention: '97%+',
      features: [
        { text: 'Manual verification process', included: true },
        { text: 'Real, active accounts', included: true },
        { text: '60-day retention guarantee', included: true },
        { text: 'Priority support', included: true },
        { text: 'Instant delivery', included: true },
      ],
    },
    {
      id: 'instagram-10k',
      name: '10K Followers',
      platform: 'instagram',
      price: 1599,
      description: 'Premium quality for influencers and brands',
      deliveryTime: 'Less than 1 hour',
      quantity: '10,000 followers',
      retention: '98%+',
      features: [
        { text: 'Manual verification process', included: true },
        { text: 'Real, active accounts', included: true },
        { text: '90-day retention guarantee', included: true },
        { text: 'VIP support', included: true },
        { text: 'Instant delivery', included: true },
      ],
    },
    // Instagram Likes
    {
      id: 'instagram-likes',
      name: '100 Likes',
      platform: 'instagram',
      price: 10,
      description: 'Boost your post engagement with real likes',
      deliveryTime: 'Less than 1 hour',
      quantity: '100 likes',
      retention: '95%+',
      features: [
        { text: 'Real, active accounts', included: true },
        { text: 'Instant delivery', included: true },
        { text: 'Safe and secure', included: true },
        { text: 'No password required', included: true },
      ],
    },
    // Instagram Reel Views
    {
      id: 'instagram-reel-views',
      name: '1K Reel Views',
      platform: 'instagram',
      price: 10,
      description: 'Increase your reel visibility and reach',
      deliveryTime: 'Less than 1 hour',
      quantity: '1,000 reel views',
      retention: '100%',
      features: [
        { text: 'Real views from active users', included: true },
        { text: 'Instant delivery', included: true },
        { text: 'Safe and secure', included: true },
        { text: 'No password required', included: true },
      ],
    },
    // Instagram Story Views
    {
      id: 'instagram-story-views',
      name: '100 Story Views',
      platform: 'instagram',
      price: 5,
      description: 'Get more eyes on your Instagram stories',
      deliveryTime: 'Less than 1 hour',
      quantity: '100 story views',
      retention: '100%',
      features: [
        { text: 'Real views from active users', included: true },
        { text: 'Instant delivery', included: true },
        { text: 'Safe and secure', included: true },
        { text: 'No password required', included: true },
      ],
    },
    // Instagram Comments
    {
      id: 'instagram-comments',
      name: '10 Comments',
      platform: 'instagram',
      price: 10,
      description: 'Authentic comments to boost engagement',
      deliveryTime: 'Less than 1 hour',
      quantity: '10 comments',
      retention: '100%',
      features: [
        { text: 'Real, custom comments', included: true },
        { text: 'From active accounts', included: true },
        { text: 'Safe and secure', included: true },
        { text: 'No password required', included: true },
      ],
    },
    // YouTube Views
    {
      id: 'youtube-views',
      name: '1K Views',
      platform: 'youtube',
      price: 200,
      description: 'Boost your video visibility with real views',
      deliveryTime: 'Less than 1 hour',
      quantity: '1,000 views',
      retention: '100%',
      features: [
        { text: 'Real views from active users', included: true },
        { text: 'Watch time included', included: true },
        { text: 'Safe and secure', included: true },
        { text: 'No password required', included: true },
      ],
    },
    // YouTube Subscribers
    {
      id: 'youtube-subscribers',
      name: '100 Subscribers',
      platform: 'youtube',
      price: 400,
      popular: true,
      description: 'Grow your channel with real subscribers',
      deliveryTime: 'Less than 1 hour',
      quantity: '100 subscribers',
      retention: '95%+',
      features: [
        { text: 'Real, active subscribers', included: true },
        { text: '30-day retention guarantee', included: true },
        { text: 'Safe and secure', included: true },
        { text: 'No password required', included: true },
      ],
    },
    // YouTube Comments
    {
      id: 'youtube-comments',
      name: '100 Comments',
      platform: 'youtube',
      price: 150,
      description: 'Authentic comments to boost engagement',
      deliveryTime: 'Less than 1 hour',
      quantity: '100 comments',
      retention: '100%',
      features: [
        { text: 'Real, custom comments', included: true },
        { text: 'From active accounts', included: true },
        { text: 'Safe and secure', included: true },
        { text: 'No password required', included: true },
      ],
    },
    // Facebook Placeholder
    {
      id: 'facebook-contact',
      name: 'Facebook Services',
      platform: 'facebook',
      price: 0,
      description: 'Contact us for Facebook services and custom plans',
      deliveryTime: 'Custom',
      quantity: 'Custom',
      retention: 'Custom',
      features: [
        { text: 'Followers, likes, and more', included: true },
        { text: 'Custom packages available', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'Contact via WhatsApp/Telegram', included: true },
      ],
    },
  ];

  const filteredPackages = selectedPlatform === 'all' 
    ? allPackages 
    : allPackages.filter(pkg => pkg.platform === selectedPlatform);

  const handleConsultation = (pkg: Package) => {
    if (pkg.id === 'facebook-contact') {
      const message = `Hi! I'm interested in Facebook services. Can we discuss custom plans?`;
      window.open(`https://wa.me/919122294466?text=${encodeURIComponent(message)}`, '_blank');
    } else {
      const message = `Hi! I'm interested in the ${pkg.name} package for ${pkg.platform} (${pkg.quantity}). Can we discuss this further?`;
      window.open(`https://wa.me/919122294466?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-64 bg-surface animate-pulse" />
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 bg-surface rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PricingHero 
        onPlatformSelect={setSelectedPlatform}
        selectedPlatform={selectedPlatform}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPackages.map((pkg) => (
            <PackageCard 
              key={pkg.id} 
              package={pkg}
              onConsultation={handleConsultation}
            />
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-text-secondary">
              No packages available for this platform yet. Contact us for custom solutions!
            </p>
          </div>
        )}

        {/* Bulk Pricing Contact Section */}
        <div className="bg-card rounded-xl border border-border p-8 shadow-subtle mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <Icon name="ChatBubbleLeftRightIcon" size={32} variant="solid" className="text-primary" />
            <h2 className="text-3xl font-headline font-bold text-text-primary">
              Bulk Pricing & Custom Plans
            </h2>
          </div>
          <p className="text-lg text-text-secondary mb-6">
            Need larger quantities or custom packages? Get in touch with us for special bulk pricing and tailored solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => window.open('https://wa.me/919122294466?text=Hi!%20I%20need%20bulk%20pricing%20information', '_blank')}
              className="flex-1 py-4 px-6 rounded-lg bg-[#25D366] text-white font-headline font-bold text-lg smooth-transition hover:shadow-premium hover:scale-102 flex items-center justify-center space-x-2"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
              <span>Contact on WhatsApp</span>
            </button>
            <button
              onClick={() => window.open('https://t.me/the_adix', '_blank')}
              className="flex-1 py-4 px-6 rounded-lg bg-[#0088cc] text-white font-headline font-bold text-lg smooth-transition hover:shadow-premium hover:scale-102 flex items-center justify-center space-x-2"
            >
              <Icon name="PaperAirplaneIcon" size={24} variant="solid" />
              <span>Contact on Telegram</span>
            </button>
          </div>
        </div>

        <div className="mb-16">
          <ComparisonMatrix />
        </div>

        <PricingFAQ />
      </div>
    </div>
  );
};

export default PricingInteractive;
