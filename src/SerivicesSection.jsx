import React from 'react';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VideoStableIcon from '@mui/icons-material/VideoStable';
import Filter8Icon from '@mui/icons-material/Filter8';

const ServicesSection = () => {
  const services = [
    {
      icon: <DoneAllIcon className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      icon: <LightbulbIcon className= "w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives",
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      icon: <VideoStableIcon className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      icon: <Filter8Icon className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ];

  return (
    <section className= "py-20 bg-gray-50" id='services'>
      <div className= "container mx-auto px-4 sm:px-6 lg:px-8">
        <div className= "flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Left Side */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Future of Support with New Shape
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Discuss your goals, determine success matrices, identify problems.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                </div>
                <span className="text-gray-700">UX design content strategy</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                </div>
                <span className="text-gray-700">Development bring</span>
              </div>
            </div>

            <button className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition duration-300 hover:scale-105"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href={service.link}
                  className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
                >
                  LEARN MORE
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
