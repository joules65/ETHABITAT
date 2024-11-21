/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import PropertyFilters from '../components/PropertyFilters';
import PropertyGrid, { Property } from '../components/PropertyGrid';

const SAMPLE_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Luxury Villa with Ocean View',
    location: 'Cape Town, South Africa',
    price: '750 ETH',
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    bedrooms: 5,
    bathrooms: 4,
    area: '550 m²'
    
  },
  {
    id: '2',
    title: 'Modern City Apartment',
    location: 'Lagos, Nigeria',
    price: '280 ETH',
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    bedrooms: 3,
    bathrooms: 2,
    area: '120 m²'
  },
  {
    id: '3',
    title: 'Exclusive Penthouse',
    location: 'Nairobi, Kenya',
    price: '500 ETH',
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    bedrooms: 4,
    bathrooms: 3,
    area: '300 m²'
  },
  {
    id: '4',
    title: 'Exclusive Penthouse',
    location: 'Abuja, Nigeria',
    price: '900 ETH',
    type: 'Villa',
    image: 'https://res.cloudinary.com/dhkscpkf5/image/upload/v1732109975/stephan-bechert-yFV39g6AZ5o-unsplash_pkbcwr.jpg',
    bedrooms: 7,
    bathrooms: 4,
    area: '1800 m²'
  },
  {
    id: '5',
    title: 'Modern Apartment',
    location: 'Addis Ababa, Ethiopia',
    price: '200 ETH',
    type: 'Apartment',
    image: 'https://res.cloudinary.com/dhkscpkf5/image/upload/v1732110239/patrick-perkins-3wylDrjxH-E-unsplash_ixtleo.jpg',
    bedrooms: 2,
    bathrooms: 1,
    area: '150 m²'
  },
  {
    id: '6',
    title: 'Exclusive Penthouse',
    location: 'Kigali, Rwanda',
    price: '750 ETH',
    type: 'Villa',
    image: 'https://res.cloudinary.com/dhkscpkf5/image/upload/v1732185839/rwanda_czuqmw.jpg',
    bedrooms: 5,
    bathrooms: 3,
    area: '1300 m²'
  },
];

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: 'All Locations',
    priceRange: 'Any Price',
    propertyType: 'All Types'
  });
  

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Properties</h1>
        <p className="text-white">{SAMPLE_PROPERTIES.length} properties found</p>
      </div>

      <PropertyFilters onSearch={handleSearch} onFilterChange={handleFilterChange} />
      
      <PropertyGrid properties={SAMPLE_PROPERTIES} />
    </div>
  );
};

export default Properties;