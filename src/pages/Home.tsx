import React from 'react';
import { Building2, Coins, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            The Future of Real Estate in
            <span className="text-yellow-400"> Africa</span>
          </h1>
          <p className="text-xl md:text-2xl text-white">
            Buy, sell, and invest in premium African real estate using cryptocurrency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="bg-yellow-400 hover:bg-black text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Properties
            </Link>
            <Link
              to="/wallet"
              className="bg-yellow-400 hover:bg-black text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Connect Wallet
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 px-4">
        <FeatureCard
          icon={<Building2 className="h-12 w-12 text-yellow-500" />}
          title="Premium Properties"
          description="Exclusive access to high-end real estate across Africa's most promising markets"
        />
        <FeatureCard
          icon={<Coins className="h-12 w-12 text-yellow-500" />}
          title="Crypto Transactions"
          description="Seamless property transactions using cryptocurrency and smart contracts"
        />
        <FeatureCard
          icon={<Shield className="h-12 w-12 text-yellow-500" />}
          title="Secure Investment"
          description="AI-powered smart contracts ensuring safe and transparent transactions"
        />
      </section>

      {/* Featured Properties */}
      <section className="px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <PropertyCard
            image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            title="Luxury Villa in Lagos"
            price="450 ETH"
            location="Lagos, Nigeria"
          />
          <PropertyCard
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            title="Modern Apartment in Nairobi"
            price="280 ETH"
            location="Nairobi, Kenya"
          />
          <PropertyCard
            image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            title="Beachfront Property in Cape Town"
            price="620 ETH"
            location="Cape Town, South Africa"
          />
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-transparent p-6 rounded-lg">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-white">{description}</p>
  </div>
);

const PropertyCard = ({ image, title, price, location }: { image: string; title: string; price: string; location: string }) => (
  <div className="bg-yellow-400 rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white font-bold mb-2">{price}</p>
      <p className="text-black">{location}</p>
    </div>
  </div>
);

export default Home;