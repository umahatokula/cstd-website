import React, { useState, useEffect } from "react";
import { apiService } from "../services/api";
import {
  FaFlask,
  FaSatellite,
  FaEye,
  FaWifi,
  FaDownload,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

const Research = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('focus-areas');

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const data = await apiService.getPublications();
        setPublications(data);
      } catch (error) {
        console.error('Error fetching publications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  const researchAreas = [
    {
      icon: <FaSatellite className="text-4xl text-green-600" />,
      title: "Satellite Design & Development",
      description: "Advanced satellite platform design, integration, and testing",
      details: [
        "Nanosatellite and CubeSat development",
        "Satellite subsystem design and integration",
        "Thermal and structural analysis",
        "Payload integration and testing"
      ]
    },
    {
      icon: <FaEye className="text-4xl text-blue-600" />,
      title: "Remote Sensing Applications",
      description: "Earth observation and environmental monitoring solutions",
      details: [
        "Agricultural monitoring and precision farming",
        "Environmental change detection",
        "Urban planning and land use mapping",
        "Disaster monitoring and response"
      ]
    },
    {
      icon: <FaWifi className="text-4xl text-purple-600" />,
      title: "Satellite Communication",
      description: "Advanced communication systems and protocols",
      details: [
        "Ground station design and development",
        "Communication protocol optimization",
        "Signal processing and analysis",
        "Network connectivity solutions"
      ]
    },
    {
      icon: <FaFlask className="text-4xl text-orange-600" />,
      title: "Space Technology Innovation",
      description: "Cutting-edge research in space technologies",
      details: [
        "Artificial intelligence in space systems",
        "Advanced materials for space applications",
        "Autonomous satellite operations",
        "Space debris monitoring and mitigation"
      ]
    }
  ];

  const facilities = [
    {
      name: "Satellite Integration & Testing Laboratory",
      description: "State-of-the-art facility for satellite assembly, integration, and testing",
      capabilities: [
        "Clean room environment (ISO 14644-1 Class 100,000)",
        "Thermal vacuum testing",
        "Vibration and shock testing",
        "EMC/EMI testing"
      ]
    },
    {
      name: "Ground Station Network",
      description: "Advanced ground stations for satellite communication and control",
      capabilities: [
        "S-band and X-band communication",
        "Real-time telemetry and command",
        "Data downlink and processing",
        "Mission operations center"
      ]
    },
    {
      name: "Research & Development Centre",
      description: "Modern laboratories for advanced research and development",
      capabilities: [
        "Electronics and PCB design lab",
        "Software development environment",
        "3D printing and prototyping",
        "Material testing and analysis"
      ]
    }
  ];

  const tabs = [
    { id: 'focus-areas', label: 'Research Focus Areas' },
    { id: 'facilities', label: 'Research Facilities' },
    { id: 'publications', label: 'Publications' },
    { id: 'collaborations', label: 'Collaborations' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-800 to-green-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Research & <span className="text-green-400">Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Advancing the frontiers of satellite technology through cutting-edge research and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 whitespace-nowrap border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      {activeTab === 'focus-areas' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Research Focus Areas</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our research spans across multiple domains of satellite technology and space science
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    {area.icon}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{area.title}</h3>
                      <p className="text-gray-600">{area.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {area.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Research Facilities */}
      {activeTab === 'facilities' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Research Facilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                World-class facilities equipped with cutting-edge technology for satellite development
              </p>
            </div>

            <div className="space-y-12">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{facility.name}</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">{facility.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {facility.capabilities.map((capability, idx) => (
                          <div key={idx} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {capability}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src={`https://cdn.pixabay.com/photo/2015/01/14/18/54/satellite-photo-599494_1280.jpg`}
                        alt={facility.name}
                        className="rounded-lg shadow-lg w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Publications */}
      {activeTab === 'publications' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Publications</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our research contributions to the global scientific community
              </p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array(6).fill(0).map((_, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
                    <div className="h-4 bg-gray-300 rounded mb-4"></div>
                    <div className="h-3 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded mb-4"></div>
                    <div className="h-3 bg-gray-300 rounded w-24"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publications.slice(0, 9).map((publication, index) => (
                  <div key={publication.id || index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {publication.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {publication.authors || "CSTD Research Team"}
                    </p>
                    <p className="text-gray-500 text-sm mb-4">
                      {publication.journal || "CSTD Publications"} • {publication.year || new Date().getFullYear()}
                    </p>
                    <div className="flex space-x-3">
                      {publication.downloadUrl && (
                        <a
                          href={publication.downloadUrl}
                          className="flex items-center text-green-600 hover:text-green-800 transition-colors duration-200"
                        >
                          <FaDownload className="mr-1" />
                          Download
                        </a>
                      )}
                      {publication.externalUrl && (
                        <a
                          href={publication.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        >
                          <FaExternalLinkAlt className="mr-1" />
                          View
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {publications.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  Publications will be displayed here once available from the API.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Collaborations */}
      {activeTab === 'collaborations' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Research Collaborations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Building partnerships to advance satellite technology research
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  type: "International",
                  partners: ["European Space Agency (ESA)", "NASA", "JAXA", "DLR"],
                  focus: "Technology transfer and joint research programs"
                },
                {
                  type: "Academic",
                  partners: ["University of Abuja", "Ahmadu Bello University", "Obafemi Awolowo University"],
                  focus: "Student training and collaborative research"
                },
                {
                  type: "Industry",
                  partners: ["Airbus Defence & Space", "Thales Alenia Space", "Surrey Satellite Technology"],
                  focus: "Commercial satellite development and technology"
                }
              ].map((collaboration, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <FaUsers className="text-3xl text-blue-600 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900">{collaboration.type}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{collaboration.focus}</p>
                  <ul className="space-y-2">
                    {collaboration.partners.map((partner, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {partner}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-green-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Collaborate with Us
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Join our research initiatives and contribute to advancing satellite technology in Nigeria and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-12 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Start Collaboration
            </a>
            <a
              href="/publications"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-12 py-4 rounded-full transition-all duration-300"
            >
              View All Publications
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;