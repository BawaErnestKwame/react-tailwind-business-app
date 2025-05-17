import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Far far away, behind the word mountains...",
  },
  {
    id: 2,
    name: "John De marli",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "Far far away, behind the word mountains...",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "When she reached the first hills of the Mountains...",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The customer service has been exceptional...",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I've been using their services for over a year now...",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "What impressed me most was how quickly they responded...",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold md:text-4xl mb-4">What Our Happy Clients Say</h2>
        <p className="text-gray-600">Things that make the best price to start your journey</p>
      </div>

      {/* Swiper Section */}
      <div className="relative">
        <Swiper
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className= "bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-2xl h-full flex flex-col items-center text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <h3 className="text-lg font-semibold text-indigo-600">{testimonial.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300">
            <ArrowBackIosIcon />
          </button>
          <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300">
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
