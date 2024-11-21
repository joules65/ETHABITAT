/* eslint-disable @typescript-eslint/no-explicit-any */
import { Search } from 'lucide-react';

export interface PropertyFiltersProps {
  onSearch: (value: string) => void;
  onFilterChange: (filters: any) => void;
}

const PropertyFilters = ({ onSearch, onFilterChange }: PropertyFiltersProps) => {
  const locations = ['All Locations', 'Lagos', 'Nairobi', 'Cape Town', 'Accra', 'Johannesburg', 'Addis Ababa','Cairo'];
  const priceRanges = ['Any Price', '0-100', '100-300', '300-500', '500+'];
  const propertyTypes = ['All Types', 'House', 'Apartment', 'Villa', 'Land', 'Commercial'];

  return (
    <div className="bg-yellow-400 p-6 rounded-lg space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-5 w-5" />
        <input
          type="text"
          placeholder="Search properties..."
          className="input-field w-full pl-10"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">Location</label>
          <select
            className="input-field w-full"
            onChange={(e) => onFilterChange({ location: e.target.value })}
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">Price Range</label>
          <select
            className="input-field w-full"
            onChange={(e) => onFilterChange({ priceRange: e.target.value })}
          >
            {priceRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Property Type Filter */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">Property Type</label>
          <select
            className="input-field w-full"
            onChange={(e) => onFilterChange({ propertyType: e.target.value })}
          >
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
