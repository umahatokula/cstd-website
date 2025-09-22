import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiService } from "../services/api";
import {
  FaPlay,
  FaPause,
  FaTimes,
  FaTrophy,
  FaSlidersH,
  FaThumbsUp,
  FaUsers,
} from "react-icons/fa";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Home = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // API state management
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [projects, setProjects] = useState([]);
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newsData, eventsData, upcomingProjects, pastProjects, publicationsData] = await Promise.all([
          apiService.getNews(),
          apiService.getEvents(),
          apiService.getUpcomingProjects(),
          apiService.getPastProjects(),
          apiService.getPublications()
        ]);

        setNews(newsData);
        setEvents(eventsData);
        setProjects([...upcomingProjects, ...pastProjects]);
        setPublications(publicationsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiService.submitFeedback(contactForm);
      alert('Message submitted successfully!');
      setContactForm({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Error submitting message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const images = [
    "https://innov8hub.ng/wp-content/uploads/2024/05/New-story-6.jpg",
    "https://innov8hub.ng/wp-content/uploads/2024/05/new-story-5.jpg",
    "https://innov8hub.ng/wp-content/uploads/2024/05/New-Story-1.jpg",
    "https://innov8hub.ng/wp-content/uploads/2024/05/new-story-5.jpg",
    "https://innov8hub.ng/wp-content/uploads/2024/05/New-Story-2.jpg",
    "https://cdn.pixabay.com/photo/2022/11/16/12/40/food-7595910_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/12/04/16/49/indian-food-3856050_1280.jpg",
    " https://cdn.pixabay.com/photo/2023/01/17/07/59/mossel-dish-7724006_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/11/01/15/52/spring-roll-6760871_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/06/26/12/49/red-wine-2443699_1280.jpg",
  ];

  const [open, setOpen] = useState(null);
  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const values = [
    {
      title: "EXCELLENCE",
      content: "We pursue the highest standards in all we do.",
    },
    {
      title: "INNOVATION",
      content: "We foster creativity to solve real-world problems.",
    },
    {
      title: "COLLABORATION",
      content: "We work with others to achieve greater impact.",
    },
  ];

  const departments = [
    {
      title: "Satellite Systems",
      image:
        "https://cdn.pixabay.com/photo/2022/10/27/10/23/astronaaut-7550543_1280.png",
    },
    {
      title: "Research and Innovation",
      image:
        "https://cdn.pixabay.com/photo/2021/09/10/22/17/business-6614313_1280.png",
    },
    {
      title: "Space Missions & Data",
      image:
        "https://cdn.pixabay.com/photo/2024/01/26/08/06/ai-generated-8533600_1280.jpg",
    },
    {
      title: "Accounting & Finance",
      image:
        "https://cdn.pixabay.com/photo/2019/10/18/19/51/financial-4560047_1280.jpg",
    },
    {
      title: "ICT",
      image:
        "https://cdn.pixabay.com/photo/2019/02/15/17/09/cloud-3998880_1280.jpg",
    },
    {
      title: "Spacecraft Structures & Mechanism",
      image:
        "https://cdn.pixabay.com/photo/2023/05/23/11/51/machine-8012596_1280.jpg",
    },
    {
      title: "Communications",
      image:
        "https://cdn.pixabay.com/photo/2021/11/25/20/01/tv-6824507_1280.png",
    },
    {
      title: "Administration",
      image:
        "https://cdn.pixabay.com/photo/2023/11/18/15/45/work-8396635_1280.jpg",
    },
  ];

  const faqs = [
    {
      question: "WHY IS SPACE SCIENCE TECHNOLOGY ESSENTIAL TO NIGERIA?",
      answer:
        "Space science supports national development in communication, security, agriculture, and climate monitoring.",
    },
    {
      question:
        "HOW DOES SPACE SCIENCE TECHNOLOGY BENEFIT NIGERIA'S AGRICULTURAL SECTOR?",
      answer:
        "It improves precision farming, soil monitoring, and crop yield forecasting using satellite data.",
    },
    {
      question:
        "WHAT ROLE DOES SPACE SCIENCE TECHNOLOGY PLAY IN NIGERIA'S ENVIRONMENTAL MANAGEMENT?",
      answer:
        "It enables real-time monitoring of deforestation, pollution, and natural resource use.",
    },
  ];

  return (
    <div className="mt-16">
      {/* Banner Video Section - Improved spacing */}
      <div id="home" className="relative w-full h-screen">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="https://cdn.pixabay.com/video/2023/08/05/174708-852018337_large.mp4"
          type="video/mp4"
          muted
          loop
          autoPlay
        />

        {/* Overlay Content - Better spacing */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40 px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 max-w-6xl leading-tight">
            CENTRE FOR <br className="hidden md:block" />
            <span className="text-green-400">SATELLITE TECHNOLOGY</span>
            <br className="hidden md:block" />
            <span className="text-green-400">DEVELOPMENT</span>
          </h1>
          <p className="text-xl md:text-2xl mb-16 max-w-4xl text-gray-200 leading-relaxed">
            Advancing Nigeria's space technology through innovation, research,
            and excellence
          </p>
          <a
            href="#about"
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-12 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
          >
            DISCOVER MORE
          </a>
        </div>

        {/* Play/Pause Button - Better positioning */}
        <button
          onClick={togglePlayPause}
          className="absolute bottom-8 right-8 p-4 bg-gray-800 bg-opacity-60 text-white rounded-full shadow-lg hover:bg-gray-700 hover:bg-opacity-80 transition-all duration-300"
        >
          {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
        </button>
      </div>

      {/* Satellite Project Showcase Section - Improved spacing */}
      <div id="projects" className="bg-gray-50 py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-green-700 mb-6">
              Our Key Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leading Nigeria's space technology advancement through
              cutting-edge research and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Project 1 - Better card spacing */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <img
                src="https://cdn.pixabay.com/photo/2017/10/22/22/38/drone-2879538_1280.jpg"
                alt="Our Projects"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Our Projects
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Advancing satellite platforms, remote sensing, and mission
                  operations through innovative solutions.
                </p>
                <a
                  href="#"
                  className="text-green-600 font-semibold hover:text-green-800 transition-colors duration-300"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <img
                src="https://cdn.pixabay.com/photo/2015/01/14/18/54/satellite-photo-599494_1280.jpg"
                alt="Research on Sustainable Energy Systems"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Sustainable Energy Research
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Exploring renewable energy through satellite-enabled
                  technologies and sustainable solutions.
                </p>
                <a
                  href="#"
                  className="text-green-600 font-semibold hover:text-green-800 transition-colors duration-300"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <img
                src="https://cdn.pixabay.com/photo/2023/02/04/21/03/business-7768170_1280.jpg"
                alt="Global Partnerships"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Global Partnerships
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Collaborating with international agencies to expand innovation
                  and create lasting impact.
                </p>
                <a
                  href="#"
                  className="text-green-600 font-semibold hover:text-green-800 transition-colors duration-300"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us - Much better spacing */}
      <div id="about-us" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Grid - Text Section with better spacing */}
            <div className="order-2 lg:order-1">
              <h2 className="text-5xl font-bold text-green-700 mb-8">
                ABOUT US
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                The Centre for Satellite Technology Development (CSTD) is a
                leading arm of NASRDA, dedicated to building Nigeria's capacity
                in satellite design, development, and innovation. As a key
                contributor to national space programs like NigeriaSat-1,
                NigeriaSat-2, and the Tubesat project, CSTD plays a vital role
                in applying satellite technology for environmental monitoring,
                agriculture, security, and communication.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-12">
                We work closely with local and international partners to drive
                research, develop skills, and support sustainable solutions
                through space science. With a strong focus on innovation and
                knowledge transfer, CSTD is shaping the future of Nigeria's
                space technology and empowering the next generation of aerospace
                professionals.
              </p>

              {/* Icons Row - Better spacing */}
              <div className="grid grid-cols-2 gap-8 text-gray-800 font-semibold">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <FaTrophy className="text-green-600 text-2xl" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      REPUTATION FOR
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      EXCELLENCE
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <FaSlidersH className="text-green-600 text-2xl" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      WE BUILD
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      PARTNERSHIPS
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <FaThumbsUp className="text-green-600 text-2xl" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      GUIDED BY
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      COMMITMENT
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <FaUsers className="text-green-600 text-2xl" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      A TEAM OF
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      PROFESSIONALS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Grid - Our Values with better spacing */}
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl font-bold text-green-700 mb-8">
                OUR VALUES
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-10">
                We operate under this set of core values to guide us on our
                mission and activities.
              </p>

              {values.map((val, index) => (
                <div
                  key={index}
                  className="mb-6 border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center px-6 py-4 font-bold text-lg bg-gradient-to-r from-gray-50 to-green-50 hover:from-green-50 hover:to-green-100 transition-all duration-300"
                  >
                    {val.title}
                    {open === index ? (
                      <ChevronUpIcon className="w-6 h-6 text-green-600" />
                    ) : (
                      <ChevronDownIcon className="w-6 h-6 text-green-600" />
                    )}
                  </button>
                  {open === index && (
                    <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed bg-white">
                      {val.content}
                    </div>
                  )}
                </div>
              ))}

              <button className="mt-8 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section - Better spacing */}
      <div id="gallery" className="py-20 bg-gray-50 flex justify-center">
        <div className="w-full max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-green-700 font-bold mb-6">Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our journey through images showcasing our projects,
              facilities, and achievements
            </p>
          </div>

          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="rounded-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center w-[300px] md:w-[400px] lg:w-[500px]"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="rounded-2xl shadow-lg w-full h-80 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Latest News Section - Much better spacing */}
      <div id="latest-news" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-green-700 font-bold mb-6">
              Latest News
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest developments in space technology and
              research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              // Loading skeleton
              Array(3).fill(0).map((_, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-lg animate-pulse">
                  <div className="w-full h-56 bg-gray-300 rounded-t-2xl"></div>
                  <div className="p-8">
                    <div className="h-4 bg-gray-300 rounded mb-3"></div>
                    <div className="h-6 bg-gray-300 rounded mb-4"></div>
                    <div className="h-20 bg-gray-300 rounded mb-6"></div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </div>
                </article>
              ))
            ) : (
              news.slice(0, 3).map((newsItem, index) => (
                <article key={newsItem.id || index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {newsItem.image && (
                    <img
                      src={newsItem.image}
                      alt={newsItem.title}
                      className="w-full h-56 object-cover"
                    />
                  )}
                  <div className="p-8">
                    <div className="text-sm text-green-600 font-semibold mb-3">
                      {new Date(newsItem.date || newsItem.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <h3 className="text-xl font-bold mb-4">
                      {newsItem.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {newsItem.excerpt || newsItem.content?.substring(0, 150) + '...'}
                    </p>
                    <a
                      href={newsItem.link || "#"}
                      className="text-green-600 font-semibold hover:text-green-800 transition-colors duration-300"
                    >
                      Read More →
                    </a>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Our Departments section - Much better spacing */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-green-700 mb-8">
              Our Departments
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Specialized divisions working together to advance Nigeria's space
              technology capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="relative bg-white text-black rounded-2xl shadow-lg hover:shadow-xl p-8 pt-24 transform hover:-translate-y-3 transition-all duration-500 border border-gray-100"
              >
                {/* Image Div - Much better positioning and sizing */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full overflow-hidden shadow-lg p-1 hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full bg-white rounded-full p-2">
                    <img
                      src={dept.image}
                      alt={dept.title}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Title - Better typography and spacing */}
                <h3 className="text-center text-xl font-bold mb-8 leading-tight text-gray-900 min-h-[3.5rem] flex items-center justify-center px-2">
                  {dept.title}
                </h3>

                {/* Explore Link - Better styling */}
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition-all duration-300 bg-green-50 hover:bg-green-100 px-6 py-3 rounded-full hover:shadow-md"
                  >
                    Explore
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Optional: Add a bottom CTA for departments */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6 text-lg">
              Want to learn more about our organizational structure?
            </p>
            <a
              href="#"
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View All Departments
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Leadership section - Much better layout */}
      <div id="leadership" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-green-700 mb-6">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Visionary leadership driving Nigeria's space technology
              advancement
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-3xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Grid - Image */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src="https://central.nasrda.gov.ng/wp-content/uploads/2025/03/Eng-Sadq-Umar.jpg"
                  alt="CSTD CEO"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden"></div>
              </div>

              {/* Right Grid - Content with much better spacing */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Dr. Sadiq Umar
                  </h3>
                  <p className="text-xl text-green-600 font-semibold">
                    Director, CSTD
                  </p>
                </div>

                <blockquote className="text-gray-700 text-lg leading-relaxed mb-8">
                  "Under the visionary leadership of Dr. Sadiq Umar, the
                  director of CSTD, the centre is repositioning itself as an
                  engine of national development. The centre has prioritised
                  community outreach to address grassroots challenges and
                  stimulate the academic interest of the girl child in satellite
                  systems."
                </blockquote>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Dr. Umar's key focus is incentivising research activities that
                  accelerate sustainable national development. Hence, the
                  management and staff of CSTD emphasise the importance of
                  research, innovation, and partnerships with universities and
                  research institutions to deepen its culture of research and
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ and Contact Section - Better layout */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FAQ Section */}
          <div>
            <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
              FAQs
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-8 text-left hover:bg-gray-50 transition-colors duration-300"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="font-bold text-lg pr-4">{faq.question}</h3>
                    <span className="text-2xl text-green-600 flex-shrink-0">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-8 pb-8">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-bold text-green-700 mb-12 text-center">
              HAVE QUESTIONS?
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    className="border border-gray-300 px-4 py-3 w-full rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300"
                  />
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="border border-gray-300 px-4 py-3 w-full rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="border border-gray-300 px-4 py-3 w-full rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300"
                />
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  placeholder="Enter Your Message"
                  required
                  className="border border-gray-300 px-4 py-3 w-full rounded-xl h-40 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                ></textarea>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT MESSAGE'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 to-green-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Explore the Future?
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Join us in advancing Nigeria's space technology capabilities and
            shaping the future of satellite innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-12 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Involved
            </a>
            <a
              href="#"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-12 py-4 rounded-full transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Bottom spacer - removed the random div */}
    </div>
  );
};

export default Home;
