import React, { useState } from 'react';
import { Upload, Building2, AlertCircle } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';

const ListProperty = () => {
  const { isConnected } = useWallet();
  const [images, setImages] = useState<File[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle property listing submission
  };

  if (!isConnected) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto" />
        <h2 className="text-2xl font-bold">Wallet Not Connected</h2>
        <p className="text-yellow-400">Please connect your wallet to list your property.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Building2 className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">List Your Property</h1>
        <p className="text-yellow-400">Create a new property listing on the blockchain</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="bg-black p-8 rounded-lg space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Basic Information</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Property Title
              </label>
              <input type="text" className="input-field w-full" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Property Type
              </label>
              <select className="input-field w-full" required>
                <option value="">Select type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="land">Land</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Price (ETH)
              </label>
              <input type="number" step="0.01" className="input-field w-full" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Location
              </label>
              <input type="text" className="input-field w-full" required />
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="bg-black p-8 rounded-lg space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Property Details</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Bedrooms
              </label>
              <input type="number" className="input-field w-full" min="0" />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Bathrooms
              </label>
              <input type="number" className="input-field w-full" min="0" />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Area (m²)
              </label>
              <input type="number" className="input-field w-full" min="0" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Description
            </label>
            <textarea
              rows={4}
              className="input-field w-full"
              required
            ></textarea>
          </div>
        </div>

        {/* Images Upload */}
        <div className="bg-yellow-400 p-8 rounded-lg space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Property Images</h2>
          
          <div className="border-2 border-dashed border-white rounded-lg p-8 text-center">
            <Upload className="h-12 w-12 text-black mx-auto mb-4" />
            <p className="text-white mb-2">Drag and drop your images here, or click to select files</p>
            <p className="text-sm text-white">Maximum 10 images, PNG or JPG (max. 5MB each)</p>
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files) {
                  setImages(Array.from(e.target.files));
                }
              }}
            />
          </div>

          {images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative aspect-square">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Property ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <button type="submit" className="btn-primary w-full">
          Create Listing
        </button>
      </form>
    </div>
  );
};

export default ListProperty;