import React from 'react';

const NewsLetterSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16" id='newsletter'>
      <div className="relative bg-blue-600 rounded-2xl overflow-hidden shadow-xl">
        {/* Decorative gradient overlay (optional) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-500 opacity-70 z-0"></div>

        <div className= "relative z-10 px-6 py-16 md:px-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left Content */}
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Subscribe to our Newsletter
            </h2>
            <p className="text-blue-100 text-base">
              Get the latest updates, offers, and insights delivered straight to your inbox.
            </p>
          </div>

          {/* Right Content - Email Form */}
          <form className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              className= "w-full sm:flex-1 px-5 py-3 bg-amber-50 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <button
              type="submit"
              className= "w-full sm:w-auto bg-green-500 hover:bg-green-600 transition-colors px-6 py-3 text-white font-semibold rounded-xl sm:rounded-l-none sm:rounded-r-xl"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSection;
