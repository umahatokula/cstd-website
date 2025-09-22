import React, { useState, useEffect } from "react";
import { apiService } from "../services/api";
import {
  FaRocket,
  FaSatellite,
  FaCalendarAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaClock,
  FaPlay,
} from "react-icons/fa";

const Projects = () => {
  const [upcomingProjects, setUpcomingProjects] = useState([]);
  const [pastProjects, setPastProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('upcoming');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const [upcoming, past] = await Promise.all([
          apiService.getUpcomingProjects(),
          apiService.getPastProjects()
        ]);
        setUpcomingProjects(upcoming);
        setPastProjects(past);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const featuredProjects = [
    {
      id: 1,
      title: "NigeriaSat-X",
      type: "Earth Observation",
      status: "In Development",
      description: "Next-generation earth observation satellite with advanced imaging capabilities",
      image: "https://cdn.pixabay.com/photo/2015/01/14/18/54/satellite-photo-599494_1280.jpg",
      timeline: "2024-2026",
      objectives: [
        "High-resolution earth imaging",
        "Agricultural monitoring",
        "Environmental surveillance",
        "Disaster management support"
      ]
    },
    {
      id: 2,
      title: "NanoSat Constellation",
      type: "Communication",
      status: "Planning",
      description: "Constellation of nanosatellites for enhanced communication coverage",
      image: "https://cdn.pixabay.com/photo/2022/10/27/10/23/astronaaut-7550543_1280.png",
      timeline: "2025-2027",
      objectives: [
        "Rural communication connectivity",
        "IoT data collection",
        "Emergency communication",
        "Educational outreach"
      ]
    }
  ];

  const projectStats = [
    {
      number: "15+",
      title: "Completed Projects",
      description: "Successfully delivered satellite missions"
    },
    {
      number: "8",
      title: "Active Projects",
      description: "Currently in development or operation"
    },
    {
      number: "50+",
      title: "International Partners",
      description: "Collaborating organizations worldwide"
    },
    {
      number: "₦2.5B",
      title: "Total Investment",
      description: "Investment in satellite technology"
    }
  ];

  const ProjectCard = ({ project, isUpcoming = true }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={project.image || "https://cdn.pixabay.com/photo/2015/01/14/18/54/satellite-photo-599494_1280.jpg"}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            isUpcoming
              ? 'bg-blue-100 text-blue-800'
              : 'bg-green-100 text-green-800'
          }`}>
            {isUpcoming ? 'Upcoming' : 'Completed'}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
            {project.type || 'Satellite Mission'}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="space-y-2 mb-4">
          {project.startDate && (
            <div className="flex items-center text-sm text-gray-500">
              <FaCalendarAlt className="mr-2" />
              {new Date(project.startDate).toLocaleDateString()} - {project.endDate ? new Date(project.endDate).toLocaleDateString() : 'Ongoing'}
            </div>
          )}
          {project.partners && (
            <div className="flex items-center text-sm text-gray-500">
              <FaUsers className="mr-2" />
              {Array.isArray(project.partners) ? project.partners.join(', ') : project.partners}
            </div>
          )}
          {project.budget && (
            <div className="flex items-center text-sm text-gray-500">
              <FaMapMarkerAlt className="mr-2" />
              Budget: {project.budget}
            </div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <span className={`flex items-center text-sm font-semibold ${
            isUpcoming ? 'text-blue-600' : 'text-green-600'
          }`}>
            {isUpcoming ? <FaClock className="mr-1" /> : <FaCheckCircle className="mr-1" />}
            {project.status || (isUpcoming ? 'In Progress' : 'Completed')}
          </span>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-600 hover:text-green-800 transition-colors duration-200"
            >
              <FaExternalLinkAlt className="mr-1" />
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-800 to-green-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-green-400">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Pioneering satellite missions that advance Nigeria's space capabilities and serve national development
            </p>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Project Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measuring our contribution to Nigeria's space technology advancement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-4">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.title}
                </h3>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighting our most ambitious and impactful satellite missions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-lg">{project.type}</p>
                  </div>
                  <div className="absolute top-6 right-6">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center mb-6">
                    <FaCalendarAlt className="text-green-600 mr-3" />
                    <span className="text-gray-600">Timeline: {project.timeline}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Objectives</h4>
                    <ul className="space-y-2">
                      {project.objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                    <FaPlay className="mr-2" />
                    Learn More About This Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">All Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our complete portfolio of satellite missions and research initiatives
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === 'upcoming'
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Upcoming Projects ({upcomingProjects.length})
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === 'past'
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Completed Projects ({pastProjects.length})
              </button>
            </div>
          </div>

          {/* Project Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6).fill(0).map((_, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg animate-pulse">
                  <div className="h-48 bg-gray-300 rounded-t-2xl"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeTab === 'upcoming' ? (
                upcomingProjects.length > 0 ? (
                  upcomingProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} isUpcoming={true} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <FaRocket className="text-6xl text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">
                      Upcoming projects will be displayed here once available from the API.
                    </p>
                  </div>
                )
              ) : (
                pastProjects.length > 0 ? (
                  pastProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} isUpcoming={false} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <FaSatellite className="text-6xl text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">
                      Completed projects will be displayed here once available from the API.
                    </p>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Partner with Us
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Join us in advancing Nigeria's space capabilities. Whether you're a researcher,
            industry partner, or funding organization, there are opportunities to collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-12 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Start Partnership
            </a>
            <a
              href="/research"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-12 py-4 rounded-full transition-all duration-300"
            >
              View Research
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;