import React, { useState } from "react";
import { apiService } from "../services/api";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
  FaBuilding,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: '',
    organization: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await apiService.submitFeedback(contactForm);
      setSubmitStatus('success');
      setContactForm({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: '',
        organization: ''
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-green-600" />,
      title: "Address",
      content: [
        "Centre for Satellite Technology Development (CSTD)",
        "National Space Research & Development Agency (NASRDA)",
        "Km 17, Airport Road, Abuja, Nigeria"
      ]
    },
    {
      icon: <FaPhone className="text-2xl text-blue-600" />,
      title: "Phone",
      content: [
        "+234 (0) 9 461 4600",
        "+234 (0) 9 461 4601"
      ]
    },
    {
      icon: <FaEnvelope className="text-2xl text-purple-600" />,
      title: "Email",
      content: [
        "info@cstd.nasrda.gov.ng",
        "director@cstd.nasrda.gov.ng"
      ]
    },
    {
      icon: <FaClock className="text-2xl text-orange-600" />,
      title: "Office Hours",
      content: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const departments = [
    {
      icon: <FaBuilding className="text-3xl text-green-600" />,
      name: "Administration",
      email: "admin@cstd.nasrda.gov.ng",
      description: "General inquiries and administrative matters"
    },
    {
      icon: <FaUsers className="text-3xl text-blue-600" />,
      name: "Research & Development",
      email: "research@cstd.nasrda.gov.ng",
      description: "Research collaborations and technical inquiries"
    },
    {
      icon: <FaHandshake className="text-3xl text-purple-600" />,
      name: "Partnerships",
      email: "partnerships@cstd.nasrda.gov.ng",
      description: "Business partnerships and collaborations"
    }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, name: "Facebook", url: "#", color: "bg-blue-600" },
    { icon: <FaTwitter />, name: "Twitter", url: "#", color: "bg-blue-400" },
    { icon: <FaLinkedinIn />, name: "LinkedIn", url: "#", color: "bg-blue-700" },
    { icon: <FaInstagram />, name: "Instagram", url: "#", color: "bg-pink-600" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 via-blue-800 to-purple-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact <span className="text-green-400">Us</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Get in touch with our team to discuss collaborations, partnerships, or any inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help and answer any questions you might have
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.content.map((item, idx) => (
                    <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-sm">We'll get back to you as soon as possible.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                  <p className="font-semibold">Error sending message</p>
                  <p className="text-sm">Please try again or contact us directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Your full name"
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
                      value={contactForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={contactForm.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Your organization"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-3" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Our Facility</h2>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-64 mb-8 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FaMapMarkerAlt className="text-4xl mb-4 mx-auto" />
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p className="text-sm">Google Maps integration would go here</p>
                </div>
              </div>

              {/* Directions */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Directions</h3>
                <div className="space-y-2 text-gray-600">
                  <p>📍 Located on Airport Road, Km 17, Abuja</p>
                  <p>🚗 15 minutes drive from Nnamdi Azikiwe International Airport</p>
                  <p>🚌 Accessible by public transportation</p>
                  <p>🅿️ Free parking available on-site</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`${social.color} text-white p-3 rounded-full hover:opacity-80 transition-opacity duration-300 transform hover:scale-110`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Department Contacts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect directly with the right department for your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{dept.name}</h3>
                <p className="text-gray-600 mb-6">{dept.description}</p>
                <a
                  href={`mailto:${dept.email}`}
                  className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold transition-colors duration-200"
                >
                  <FaEnvelope className="mr-2" />
                  {dept.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Whether you're interested in research collaboration, partnership opportunities,
            or have questions about our projects, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/about"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-12 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Learn About Us
            </a>
            <a
              href="/projects"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-12 py-4 rounded-full transition-all duration-300"
            >
              View Our Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;