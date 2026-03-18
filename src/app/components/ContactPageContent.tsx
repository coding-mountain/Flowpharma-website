import React, { useState } from 'react';
import { ChevronRight, X, Mail, MapPin, Phone } from 'lucide-react';
import { Footer } from './Footer';
import { IMAGES } from '../../constants/images';

interface ContactPageContentProps {
  onClose: () => void;
}

export function ContactPageContent({ onClose }: ContactPageContentProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans w-full -mb-12">
      <div className="w-full px-4 sm:px-6 py-6 sm:py-8 md:px-12 md:py-12">
        {/* Breadcrumbs and Close Button */}
        <div className="flex items-center justify-between mb-6 sm:mb-8 md:mb-10">
          <div className="flex items-center space-x-2 text-[12px] sm:text-[13px] text-gray-500">
            <span
              className="cursor-pointer hover:text-gray-900 transition-colors"
              onClick={onClose}
            >
              Home
            </span>
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="text-gray-900 font-medium">Contact Us</span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-gray-300 flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
        </div>

        {/* Header Section */}
        <div className="w-full mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 w-full mb-4 sm:mb-6 leading-[1.15] tracking-tight">
            Get in Touch
          </h1>
          <p className="text-[15px] sm:text-[17px] text-gray-600 font-light leading-relaxed max-w-3xl">
            Have questions about FlowVax or interested in partnering with us? We'd love to hear from you.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Contact Form */}
          <div>
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 sm:mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm sm:text-base"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none text-sm sm:text-base"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white px-6 py-3 sm:py-3.5 rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-sm active:scale-[0.98] text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Info Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">Contact Information</h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Email</p>
                    <a href="mailto:info@flowpharma.com" className="text-sm text-gray-600 hover:text-blue-600 transition-colors break-all">
                      info@flowpharma.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Address</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Flow Pharma Inc.<br />
                      San Francisco, CA<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dylan Bruno Card */}
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <img
                  src={IMAGES.ourTeams.team8}
                  alt="Dylan Bruno"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 truncate">Dylan Bruno</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Director of Investor Relations</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                For investor relations, media inquiries, and partnership opportunities, please reach out through our contact form or email directly.
              </p>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}