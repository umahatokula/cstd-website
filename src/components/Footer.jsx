import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import nasrdaLogo from "../assets/images/nasrda-logo.png";
import { apiService } from "../services/api";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const data = await apiService.getFooter();
        setFooterData(data);
      } catch (error) {
        console.error('Error fetching footer data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFooterData();
  }, []);

  return (
    <footer className="bg-slate-950 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Mission - Updated with CSTD logo */}
        <div className="md:col-span-2">
          <div className="flex items-center mb-6">
            <img src={nasrdaLogo} alt="CSTD Logo" className="w-16 h-16 mr-4" />
            {/* <div>
              <h2 className="text-xl font-bold text-green-500">CSTD</h2>
              <p className="text-blue-500 text-sm">NASRDA</p>
            </div> */}
          </div>
          <h3 className="text-2xl font-bold mb-4">
            Centre For Satellite Technology Development
          </h3>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            CSTD explores the unknown in air and space, innovates for the
            benefit of humanity, and inspires the world through discovery.
          </p>
          <a
            href="#"
            className="block underline text-sm text-white mb-3 hover:text-green-400 transition-colors duration-300"
          >
            About CSTD's Mission
          </a>
          <a
            href="#"
            className="text-red-500 font-bold text-sm flex items-center hover:text-red-400 transition-colors duration-300"
          >
            Join Us
            <span className="ml-2 transform transition-transform duration-300 hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Footer Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300"
              >
                News & Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300"
              >
                Multimedia
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300 flex items-center"
              >
                CSTD+
                <span className="ml-2 text-xs px-2 py-1 border border-white rounded bg-red-600 text-white">
                  LIVE
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300"
              >
                Satellite in Space
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300"
              >
                Earth
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300"
              >
                The Solar System
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300"
              >
                The Universe
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300"
              >
                Science
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Services</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300"
              >
                Aeronautics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300"
              >
                Technology
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300"
              >
                Learning Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300"
              >
                About CSTD
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300"
              >
                Partnership
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-white font-semibold mb-6 text-lg">Follow CSTD</h3>
          <div className="flex gap-4 mb-6">
            <a
              href="#"
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110"
            >
              <FaFacebookF className="text-lg" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300 transform hover:scale-110"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 transform hover:scale-110"
            >
              <FaXTwitter className="text-lg" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 transform hover:scale-110"
            >
              <FaYoutube className="text-lg" />
            </a>
          </div>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300"
              >
                More CSTD Social Accounts
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300"
              >
                CSTD Newsletters
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Bottom Links */}
      <div className="max-w-7xl mx-auto text-xs text-gray-400 flex flex-wrap justify-between gap-y-4">
        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Sitemap
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            For Media
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            FOIA
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            No FEAR Act
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Office of the IG
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Budget & Annual Reports
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Agency Financial Reports
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Contact CSTD
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Accessibility
          </a>
        </div>
        <div className="mt-4 lg:mt-0">
          <p className="mb-1">
            Page Last Updated:{" "}
            <span className="text-white font-medium">May 12, 2025</span>
          </p>
          <p className="mb-1">
            Page Editor:{" "}
            <span className="font-semibold text-white">
              Ehi Jennifer Ehoida
            </span>
          </p>
          <p>
            Responsible CSTD Official:{" "}
            <span className="font-semibold text-white">Omotayo Maryam</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
