import React, { useState, useEffect } from "react";
import { apiService } from "../services/api";
import {
  FaTrophy,
  FaUsers,
  FaRocket,
  FaGlobe,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const About = () => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const data = await apiService.getPageDetails('about');
        setPageData(data);
      } catch (error) {
        console.error('Error fetching about page data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  const values = [
    {
      title: "EXCELLENCE",
      description: "We pursue the highest standards in all we do.",
      icon: <FaTrophy className="text-3xl text-green-600" />,
      details: "Our commitment to excellence drives us to continuously improve our satellite technology capabilities and deliver world-class solutions that meet international standards."
    },
    {
      title: "INNOVATION",
      description: "We foster creativity to solve real-world problems.",
      icon: <FaRocket className="text-3xl text-green-600" />,
      details: "Innovation is at the heart of our mission. We leverage cutting-edge technology and creative thinking to develop satellite solutions that address Nigeria's development challenges."
    },
    {
      title: "COLLABORATION",
      description: "We work with others to achieve greater impact.",
      icon: <FaUsers className="text-3xl text-green-600" />,
      details: "Through strategic partnerships with local and international organizations, we amplify our impact and accelerate the development of Nigeria's space technology sector."
    },
    {
      title: "GLOBAL REACH",
      description: "Contributing to worldwide space technology advancement.",
      icon: <FaGlobe className="text-3xl text-green-600" />,
      details: "While rooted in Nigeria, our vision extends globally as we contribute to the international space community and establish Nigeria as a key player in space technology."
    }
  ];

  const achievements = [
    {
      number: "15+",
      title: "Satellite Projects",
      description: "Successfully completed satellite missions"
    },
    {
      number: "50+",
      title: "Research Papers",
      description: "Published in international journals"
    },
    {
      number: "100+",
      title: "Professionals",
      description: "Skilled engineers and scientists"
    },
    {
      number: "20+",
      title: "Partnerships",
      description: "International collaborations"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-green-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-green-400">CSTD</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Leading Nigeria's satellite technology development and space innovation
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-green-700 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To advance Nigeria's capacity in satellite technology development through cutting-edge research,
                innovation, and strategic partnerships that address national development challenges in agriculture,
                security, communication, and environmental monitoring.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-600 italic">
                  "Empowering Nigeria through space technology innovation"
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To be a world-class center of excellence in satellite technology development,
                recognized globally for our contributions to space science and technology while
                serving as the backbone of Nigeria's space program.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-600 italic">
                  "Leading Africa's space technology revolution"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming Nigeria's premier satellite technology development center
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Building Nigeria's Space Future</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Centre for Satellite Technology Development (CSTD) was established as a pioneering
                institution under NASRDA to advance Nigeria's capabilities in space technology. Since our
                inception, we have been at the forefront of satellite design, development, and deployment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our journey began with a vision to reduce Nigeria's dependence on foreign satellite
                technology and build indigenous capacity. Through dedicated research, strategic partnerships,
                and continuous innovation, we have successfully contributed to multiple satellite missions
                including NigeriaSat-1, NigeriaSat-2, and various nanosatellite projects.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, CSTD stands as a testament to Nigeria's growing prowess in space technology,
                training the next generation of space scientists and engineers while contributing to
                national development through practical satellite applications.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://cdn.pixabay.com/photo/2015/01/14/18/54/satellite-photo-599494_1280.jpg"
                alt="Satellite Technology"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that demonstrate our commitment to excellence in satellite technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-green-600 mb-4">
                  {achievement.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div
                  className="p-6 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setActiveValue(activeValue === index ? -1 : index)}
                >
                  <div className="flex items-center space-x-4">
                    {value.icon}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                  {activeValue === index ? (
                    <FaChevronUp className="text-green-600" />
                  ) : (
                    <FaChevronDown className="text-green-600" />
                  )}
                </div>
                {activeValue === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {value.details}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders driving Nigeria's space technology advancement
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-3xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                <img
                  src="https://central.nasrda.gov.ng/wp-content/uploads/2025/03/Eng-Sadq-Umar.jpg"
                  alt="Dr. Sadiq Umar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden"></div>
              </div>

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
                  "Under the visionary leadership of Dr. Sadiq Umar, the centre is repositioning
                  itself as an engine of national development. CSTD has prioritised community
                  outreach to address grassroots challenges and stimulate the academic interest
                  of the girl child in satellite systems."
                </blockquote>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Dr. Umar's leadership focuses on incentivising research activities that accelerate
                  sustainable national development. The management and staff of CSTD emphasise the
                  importance of research, innovation, and partnerships with universities and research
                  institutions to deepen the culture of research and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Be part of Nigeria's space technology revolution. Whether you're a researcher,
            student, or industry partner, there's a place for you in our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-12 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Involved
            </a>
            <a
              href="/research"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-12 py-4 rounded-full transition-all duration-300"
            >
              Explore Research
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;