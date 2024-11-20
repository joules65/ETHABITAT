import React from 'react';
import { Users, Globe2, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">About ETHABITAT</h1>
        <p className="text-xl text-white max-w-3xl mx-auto">
          Revolutionizing African real estate through blockchain technology and creating new opportunities for property investment across the continent.
        </p>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-white mb-6">
            ETHABITAT aims to democratize real estate investment in Africa by leveraging blockchain technology to create a transparent, secure, and accessible property market.
          </p>
          <p className="text-yellow-400">
            We're building a future where anyone can invest in African real estate using cryptocurrency, breaking down traditional barriers and creating new opportunities for wealth creation.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Stat number="1000+" label="Properties Listed" />
          <Stat number="50+" label="Cities" />
          <Stat number="10K+" label="Users" />
          <Stat number="$100M+" label="Transaction Volume" />
        </div>
      </section>

      {/* Values Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ValueCard
            icon={<Shield className="h-12 w-12 text-yellow-500" />}
            title="Security"
            description="Advanced blockchain technology ensuring secure and transparent transactions"
          />
          <ValueCard
            icon={<Users className="h-12 w-12 text-yellow-500" />}
            title="Accessibility"
            description="Making real estate investment accessible to everyone through cryptocurrency"
          />
          <ValueCard
            icon={<Globe2 className="h-12 w-12 text-yellow-500" />}
            title="Innovation"
            description="Pioneering new ways to invest in African real estate through technology"
          />
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">The Team</h2>
        <div className="grid md:grid-cols-1 gap-8">
          <TeamMember
            image="https://i.imghippo.com/files/iPfW2606lds.JPG" 
            name="David Chukwuebuka Achibiri"
            role="CEO & Founder"
          />
          
        </div>
      </section>
    </div>
  );
};

const Stat = ({ number, label }: { number: string; label: string }) => (
  <div className="bg-black p-6 rounded-lg text-center">
    <div className="text-2xl font-bold text-yellow-500 mb-2">{number}</div>
    <div className="text-yellow-200">{label}</div>
  </div>
);

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-black p-6 rounded-lg text-center">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-white">{description}</p>
  </div>
);

const TeamMember = ({ image, name, role }: { image: string; name: string; role: string }) => (
  <div className="text-center">
    <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
    <h3 className="font-semibold mb-1">{name}</h3>
    <p className="text-yellow-500">{role}</p>
  </div>
);

export default About;