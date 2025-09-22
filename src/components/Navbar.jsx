import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import nasrdaLogo from "../assets/images/nasrda-logo.png";
import { apiService } from "../services/api";

export default function Navbar() {
  const [pageLinks, setPageLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageLinks = async () => {
      try {
        const links = await apiService.getPageLinks();
        setPageLinks(links);
      } catch (error) {
        console.error('Error fetching page links:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPageLinks();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Updated with actual CSTD logo */}
          <div className="flex items-center">
            <img
              src={nasrdaLogo}
              alt="CSTD Logo"
              className="h-16 w-auto mr-3"
            />
            {/* <div className="text-left">
              <h1 className="text-green-500 text-lg font-bold tracking-wide">
                CSTD
              </h1>
              <p className="text-blue-500 text-sm -mt-0.5 tracking-wider">
                NASRDA
              </p>
            </div> */}
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center text-md">
            {/** Navigation Items with Dropdown */}
            <Link
              to="/"
              className="text-white hover:text-green-600 relative group transition-colors duration-300"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Dropdown
              label="About Us"
              items={[
                { name: "About CSTD", link: "/about" },
                { name: "Mission & Vision", link: "/about#mission" },
                { name: "Leadership", link: "/about#leadership" },
                { name: "Our Values", link: "/about#values" }
              ]}
            />
            <Dropdown
              label="Research & Innovation"
              items={[
                { name: "Research Areas", link: "/research" },
                { name: "Publications", link: "/research#publications" },
                { name: "Facilities", link: "/research#facilities" },
                { name: "Collaborations", link: "/research#collaborations" }
              ]}
            />
            <Dropdown
              label="Projects"
              items={[
                { name: "All Projects", link: "/projects" },
                { name: "Upcoming Projects", link: "/projects#upcoming" },
                { name: "Past Projects", link: "/projects#past" }
              ]}
            />
            <Dropdown
              label="Media"
              items={[
                { name: "News", link: "/news" },
                { name: "Events", link: "/events" },
                { name: "Gallery", link: "/media" }
              ]}
            />
            <Link
              to="/contact"
              className="text-white hover:text-green-600 relative group transition-colors duration-300"
            >
              Contact Us
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Right Side - News/Events */}
          <div className="text-white hidden md:flex space-x-4 items-center">
            <Link
              to="/news"
              className="hover:text-green-600 transition-colors duration-300 py-2"
            >
              News
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              to="/events"
              className="hover:text-green-600 transition-colors duration-300 py-2"
            >
              Events
            </Link>
          </div>

          {/* Mobile menu button - for future mobile implementation */}
          <div className="md:hidden">
            <button className="text-white hover:text-green-500 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Dropdown({ label, items }) {
  return (
    <div className="relative group">
      <button className="text-white hover:text-green-600 relative group transition-colors duration-300">
        {label}
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
      </button>
      <div className="absolute top-full left-0 bg-white shadow-lg rounded-md text-md hidden group-hover:block z-50 min-w-[200px]">
        {items.map((item, idx) => (
          <Link
            key={idx}
            to={item.link || "#"}
            className="block px-4 py-2 text-slate-800 hover:bg-green-100 hover:text-green-700 text-sm transition-colors duration-200"
          >
            {item.name || item}
          </Link>
        ))}
      </div>
    </div>
  );
}
