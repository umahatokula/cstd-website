import React, { useState, useEffect } from "react";
import { apiService } from "../services/api";
import {
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaSearch,
  FaArrowRight,
  FaClock,
  FaEye,
  FaShare,
} from "react-icons/fa";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 9;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await apiService.getNews();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Mock data if API doesn't return data
  const mockNews = [
    {
      id: 1,
      title: "CSTD Successfully Launches New Earth Observation Satellite",
      excerpt: "The Centre for Satellite Technology Development achieved a major milestone with the successful launch of its latest earth observation satellite, enhancing Nigeria's remote sensing capabilities.",
      content: "Full article content...",
      author: "Dr. Sarah Johnson",
      category: "Launch",
      date: "2024-03-15",
      image: "https://cdn.pixabay.com/photo/2015/10/28/16/36/raisting-satellite-1010862_1280.jpg",
      readTime: "5 min read",
      views: 1250
    },
    {
      id: 2,
      title: "International Collaboration Announced for Next-Gen Satellite Project",
      excerpt: "CSTD partners with leading space agencies worldwide to develop advanced satellite technologies for climate monitoring and disaster management.",
      content: "Full article content...",
      author: "Prof. Ahmed Ibrahim",
      category: "Partnership",
      date: "2024-03-10",
      image: "https://cdn.pixabay.com/photo/2023/02/04/21/03/business-7768170_1280.jpg",
      readTime: "7 min read",
      views: 890
    },
    {
      id: 3,
      title: "CSTD Hosts Annual Space Technology Conference",
      excerpt: "Leading experts and researchers gather at CSTD to discuss the latest developments in satellite technology and space science applications.",
      content: "Full article content...",
      author: "Dr. Fatima Abubakar",
      category: "Event",
      date: "2024-03-05",
      image: "https://cdn.pixabay.com/photo/2021/09/10/22/17/business-6614313_1280.png",
      readTime: "4 min read",
      views: 2100
    }
  ];

  const displayNews = news.length > 0 ? news : mockNews;
  const categories = ['all', 'Launch', 'Partnership', 'Event', 'Research', 'Technology'];

  // Filter news based on search and category
  const filteredNews = displayNews.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);

  const NewsCard = ({ article, featured = false }) => (
    <article className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
      featured ? 'lg:col-span-2' : ''
    }`}>
      <div className={`relative ${featured ? 'h-64' : 'h-48'}`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {article.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center space-x-4 text-sm">
            <span className="flex items-center">
              <FaClock className="mr-1" />
              {article.readTime}
            </span>
            <span className="flex items-center">
              <FaEye className="mr-1" />
              {article.views}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <FaCalendarAlt className="mr-2" />
            {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <FaUser className="mr-2" />
            {article.author}
          </div>
        </div>

        <h2 className={`font-bold text-gray-900 mb-3 line-clamp-2 ${
          featured ? 'text-2xl' : 'text-xl'
        }`}>
          {article.title}
        </h2>

        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <button className="flex items-center text-green-600 hover:text-green-800 font-semibold transition-colors duration-200">
            Read More
            <FaArrowRight className="ml-2" />
          </button>
          <button className="flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <FaShare className="mr-1" />
            Share
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-green-800 to-purple-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Latest <span className="text-green-400">News</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest developments in satellite technology and space research
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search news articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6).fill(0).map((_, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg animate-pulse">
                  <div className="h-48 bg-gray-300 rounded-t-2xl"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-300 rounded mb-4"></div>
                    <div className="h-6 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredNews.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl text-gray-300 mb-4">📰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No news found</h3>
              <p className="text-gray-600">
                {searchTerm || selectedCategory !== 'all'
                  ? 'Try adjusting your search or filter criteria.'
                  : 'News articles will appear here once available from the API.'}
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentNews.map((article, index) => (
                  <NewsCard
                    key={article.id}
                    article={article}
                    featured={index === 0 && currentPage === 1}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg ${
                          currentPage === page
                            ? 'bg-green-600 text-white'
                            : 'border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Subscribe to our newsletter and never miss important updates about satellite technology and space research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full border-0 focus:ring-2 focus:ring-white outline-none"
            />
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;