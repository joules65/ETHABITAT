import React, { useState } from 'react';
import { Heart, Share2 } from 'lucide-react';

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  type: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
}

interface PropertyGridProps {
  properties: Property[];
}

const PropertyGrid = ({ properties }: PropertyGridProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter properties based on search query
  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search properties..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-white rounded-lg w-full text-black"
        />
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div key={property.id} className="bg-yellow-400 rounded-lg overflow-hidden group">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-yellow-400 bg-opacity-70 rounded-full hover:bg-yellow-600 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-white bg-opacity-70 rounded-full hover:bg-yellow-500 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                    <p className="text-white">{property.location}</p>
                  </div>
                  <p className="text-black font-bold">{property.price}</p>
                </div>
                {(property.bedrooms || property.bathrooms || property.area) && (
                  <div className="border-t border-white pt-4 mt-4">
                    <div className="flex justify-between text-sm text-white">
                      {property.bedrooms && <span>{property.bedrooms} Bedrooms</span>}
                      {property.bathrooms && <span>{property.bathrooms} Bathrooms</span>}
                      {property.area && <span>{property.area}</span>}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-4 text-center text-white">No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default PropertyGrid;
