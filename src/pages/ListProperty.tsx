import React, { useState } from 'react';
import { Upload, Building2, AlertCircle } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';

const ListProperty = () => {
  const { isConnected } = useWallet();
  const [images, setImages] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    price: '',
    location: '',
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    description: ''
  });

  // Handle form data input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file input change (image upload)
  // Handle file input change (image upload)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // Get the files and update the state
      setImages((prevImages) => [...prevImages, ...Array.from(e.target.files ?? [])]);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create FormData to send the data along with images
    const data = new FormData();
    
    // Append text data
    Object.keys(formData).forEach((key) => {
      // Fix for the error on line 43
      data.append(key, String(formData[key as keyof typeof formData]));
    });

    // Append images to FormData
    images.forEach((image) => {
      data.append('images', image);
    });

    try {
      // Send the form data to the backend (or blockchain service)
      const response = await fetch('/api/list-property', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Property listed successfully');
        // Reset form
        setFormData({
          title: '',
          type: '',
          price: '',
          location: '',
          bedrooms: 0,
          bathrooms: 0,
          area: 0,
          description: ''
        });
        setImages([]);
      } else {
        alert('Failed to list property');
      }
    } catch (error) {
      console.error('Error uploading property:', error);
      alert('An error occurred. Please try again.');
    }
  };

  // Show error message if wallet is not connected
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
              <input
                type="text"
                className="input-field w-full"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Property Type
              </label>
              <select
                className="input-field w-full"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
              >
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
              <input
                type="number"
                step="0.01"
                className="input-field w-full"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Location
              </label>
              <input
                type="text"
                className="input-field w-full"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
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
              <input
                type="number"
                className="input-field w-full"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleInputChange}
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Bathrooms
              </label>
              <input
                type="number"
                className="input-field w-full"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleInputChange}
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Area (m²)
              </label>
              <input
                type="number"
                className="input-field w-full"
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                min="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Description
            </label>
            <textarea
              rows={4}
              className="input-field w-full"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
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
              onChange={handleImageChange}
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
