import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-white">Get in touch with our team for any inquiries or support</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          
          <div className="space-y-6">
            <ContactInfo
              icon={<Mail className="h-6 w-6 text-yellow-500" />}
              title="Email"
              content="davidachibiri8@gmail.com"
            />
            <ContactInfo
              icon={<Phone className="h-6 w-6 text-yellow-500" />}
              title="Phone"
              content="+234 904 714 4503"
            />
            <ContactInfo
              icon={<MapPin className="h-6 w-6 text-yellow-500" />}
              title="Office"
              content="No 4, Mike Akhigbe Way, Jabi"
            />
          </div>

          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
            <div className="space-y-2 text-yellow-400">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-black p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="input-field w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input-field w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="input-field w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="input-field w-full"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center space-x-2"
            >
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-black p-3 rounded-lg">{icon}</div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-white">{content}</p>
    </div>
  </div>
);

export default Contact;