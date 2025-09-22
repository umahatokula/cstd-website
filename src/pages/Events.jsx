import React, { useState, useEffect } from "react";
import { apiService } from "../services/api";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaTicketAlt,
  FaExternalLinkAlt,
  FaFilter,
  FaSearch,
  FaVideo,
  FaUserTie,
} from "react-icons/fa";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTimeFilter, setSelectedTimeFilter] = useState('all');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await apiService.getEvents();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Mock data if API doesn't return data
  const mockEvents = [
    {
      id: 1,
      title: "Annual Space Technology Symposium 2024",
      description: "Join leading experts and researchers from around the world to discuss the latest developments in satellite technology, space exploration, and their applications for national development.",
      date: "2024-04-15",
      time: "09:00 AM",
      endTime: "05:00 PM",
      location: "CSTD Conference Center, Abuja",
      category: "Conference",
      type: "In-person",
      capacity: 500,
      registered: 350,
      image: "https://cdn.pixabay.com/photo/2021/09/10/22/17/business-6614313_1280.png",
      speakers: [
        "Dr. Sarah Johnson - ESA Director",
        "Prof. Ahmed Ibrahim - CSTD",
        "Dr. Maria Santos - NASA"
      ],
      agenda: [
        "Opening Ceremony",
        "Keynote: Future of Satellite Technology",
        "Panel: International Collaborations",
        "Technical Sessions",
        "Networking Reception"
      ],
      registrationRequired: true,
      price: "Free",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Satellite Data Analysis Workshop",
      description: "Hands-on workshop for students and professionals on satellite data processing, analysis techniques, and practical applications in agriculture and environmental monitoring.",
      date: "2024-03-25",
      time: "10:00 AM",
      endTime: "04:00 PM",
      location: "CSTD Training Laboratory",
      category: "Workshop",
      type: "Hybrid",
      capacity: 50,
      registered: 45,
      image: "https://cdn.pixabay.com/photo/2019/02/15/17/09/cloud-3998880_1280.jpg",
      speakers: [
        "Dr. Fatima Abubakar - CSTD",
        "Eng. John Okafor - Remote Sensing Specialist"
      ],
      agenda: [
        "Introduction to Satellite Data",
        "Data Processing Techniques",
        "Hands-on Analysis Session",
        "Case Studies",
        "Q&A Session"
      ],
      registrationRequired: true,
      price: "₦5,000",
      status: "upcoming"
    },
    {
      id: 3,
      title: "NigeriaSat-X Launch Webinar",
      description: "Virtual event covering the launch of Nigeria's next-generation earth observation satellite, featuring live coverage and expert commentary.",
      date: "2024-02-20",
      time: "02:00 PM",
      endTime: "04:00 PM",
      location: "Virtual Event",
      category: "Launch",
      type: "Virtual",
      capacity: 1000,
      registered: 750,
      image: "https://cdn.pixabay.com/photo/2015/01/14/18/54/satellite-photo-599494_1280.jpg",
      speakers: [
        "Dr. Sadiq Umar - CSTD Director",
        "Mission Control Team"
      ],
      agenda: [
        "Pre-launch Briefing",
        "Live Launch Coverage",
        "Post-launch Analysis",
        "Q&A with Mission Team"
      ],
      registrationRequired: true,
      price: "Free",
      status: "past"
    }
  ];

  const displayEvents = events.length > 0 ? events : mockEvents;
  const categories = ['all', 'Conference', 'Workshop', 'Launch', 'Webinar', 'Training'];
  const timeFilters = ['all', 'upcoming', 'past', 'today', 'this-week'];

  // Filter events
  const filteredEvents = displayEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;

    let matchesTime = true;
    const eventDate = new Date(event.date);
    const today = new Date();
    const oneWeekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    switch (selectedTimeFilter) {
      case 'upcoming':
        matchesTime = eventDate >= today;
        break;
      case 'past':
        matchesTime = eventDate < today;
        break;
      case 'today':
        matchesTime = eventDate.toDateString() === today.toDateString();
        break;
      case 'this-week':
        matchesTime = eventDate >= today && eventDate <= oneWeekFromNow;
        break;
      default:
        matchesTime = true;
    }

    return matchesSearch && matchesCategory && matchesTime;
  });

  const EventCard = ({ event }) => {
    const eventDate = new Date(event.date);
    const isUpcoming = eventDate >= new Date();
    const registrationPercentage = (event.registered / event.capacity) * 100;

    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative h-48">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

          {/* Event badges */}
          <div className="absolute top-4 left-4 flex space-x-2">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              isUpcoming ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
            }`}>
              {event.category}
            </span>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {event.type}
            </span>
          </div>

          {/* Status badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              isUpcoming ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
            }`}>
              {isUpcoming ? 'Upcoming' : 'Past Event'}
            </span>
          </div>

          {/* Date overlay */}
          <div className="absolute bottom-4 left-4 text-white">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
              <div className="text-lg font-bold">
                {eventDate.getDate()}
              </div>
              <div className="text-sm">
                {eventDate.toLocaleDateString('en-US', { month: 'short' })}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {event.title}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {event.description}
          </p>

          {/* Event details */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center text-sm text-gray-500">
              <FaCalendarAlt className="mr-2 text-green-600" />
              {eventDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>

            <div className="flex items-center text-sm text-gray-500">
              <FaClock className="mr-2 text-blue-600" />
              {event.time} - {event.endTime}
            </div>

            <div className="flex items-center text-sm text-gray-500">
              <FaMapMarkerAlt className="mr-2 text-purple-600" />
              {event.location}
            </div>

            <div className="flex items-center text-sm text-gray-500">
              <FaUsers className="mr-2 text-orange-600" />
              {event.registered}/{event.capacity} registered
            </div>
          </div>

          {/* Registration progress */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Registration Progress</span>
              <span>{Math.round(registrationPercentage)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  registrationPercentage > 80 ? 'bg-red-500' :
                  registrationPercentage > 60 ? 'bg-yellow-500' : 'bg-green-500'
                }`}
                style={{ width: `${registrationPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Speakers */}
          {event.speakers && event.speakers.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center text-sm text-gray-700 mb-2">
                <FaUserTie className="mr-2" />
                Featured Speakers:
              </div>
              <div className="text-sm text-gray-600">
                {event.speakers.slice(0, 2).map((speaker, index) => (
                  <div key={index}>{speaker}</div>
                ))}
                {event.speakers.length > 2 && (
                  <div className="text-green-600">+{event.speakers.length - 2} more</div>
                )}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <FaTicketAlt className="mr-2 text-green-600" />
              <span className="font-semibold">{event.price}</span>
            </div>

            <div className="flex space-x-2">
              {event.type === 'Virtual' && (
                <button className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                  <FaVideo className="mr-1" />
                  Join
                </button>
              )}

              <button className="flex items-center text-green-600 hover:text-green-800 font-semibold transition-colors duration-200">
                <FaExternalLinkAlt className="mr-1" />
                {isUpcoming ? 'Register' : 'View Details'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-blue-800 to-green-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Upcoming <span className="text-green-400">Events</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Join us for conferences, workshops, and webinars on satellite technology and space research
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Time Filter */}
              <select
                value={selectedTimeFilter}
                onChange={(e) => setSelectedTimeFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              >
                <option value="all">All Time</option>
                <option value="upcoming">Upcoming</option>
                <option value="past">Past Events</option>
                <option value="today">Today</option>
                <option value="this-week">This Week</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6).fill(0).map((_, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg animate-pulse">
                  <div className="h-48 bg-gray-300 rounded-t-2xl"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-4"></div>
                    <div className="space-y-2 mb-4">
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded"></div>
                    </div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl text-gray-300 mb-4">📅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No events found</h3>
              <p className="text-gray-600">
                {searchTerm || selectedCategory !== 'all' || selectedTimeFilter !== 'all'
                  ? 'Try adjusting your search or filter criteria.'
                  : 'Events will appear here once available from the API.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-green-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Host an Event with Us
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Interested in organizing a satellite technology event or workshop?
            Partner with CSTD to reach a global audience of space technology enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-12 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Propose an Event
            </a>
            <a
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-12 py-4 rounded-full transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;