import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Amit Sharma',
    company: 'Swiggy',
    text: 'EVeez scooters have transformed our delivery fleet. Reliable, efficient, and cost-effective!',
    avatar: '/testimonials/user-1.jpg',
    role: 'Fleet Manager'
  },
  {
    id: 2,
    name: 'Priya Singh',
    company: 'Zomato',
    text: 'Our riders love the smooth ride and quick charging. EVeez is a game changer!',
    avatar: '/testimonials/user-2.jpg',
    role: 'Operations Head'
  },
  {
    id: 3,
    name: 'Rahul Verma',
    company: 'Zepto',
    text: 'The support and service from EVeez is top-notch. Highly recommended for any business.',
    avatar: '/testimonials/user-3.jpg',
    role: 'Logistics Director'
  },
  {
    id: 4,
    name: 'Sneha Patel',
    company: 'Blinkit',
    text: 'We have seen a significant reduction in our operational costs. EVeez delivers on its promise.',
    avatar: '/testimonials/user-4.jpg',
    role: 'Regional Manager'
  },
  {
    id: 5,
    name: 'Vikram Rao',
    company: 'BigBasket',
    text: 'Eco-friendly and powerful. Our customers appreciate our green initiative with EVeez.',
    avatar: '/testimonials/user-5.jpg',
    role: 'Sustainability Lead'
  },
  {
    id: 6,
    name: 'Anjali Mehta',
    company: 'Dunzo',
    text: 'The best electric scooters for urban logistics. EVeez is our trusted partner.',
    avatar: '/testimonials/user-6.jpg',
    role: 'City Manager'
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circular gradient */}
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(200,200,200,0.05),transparent_70%)]"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(200,200,200,0.05),transparent_70%)]"></div>
        
        {/* Dotted pattern */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="absolute rounded-full" style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: i % 3 === 0 ? '#F16E00' : i % 3 === 1 ? '#8a8a8a' : '#c0c0c0',
              opacity: Math.random() * 0.5 + 0.2
            }}></div>
          ))}
        </div>
        
        {/* Subtle wave pattern */}
        <svg className="absolute bottom-0 left-0 w-full opacity-5" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#666666" fillOpacity="0.5"/>
          <path d="M0 120L60 115C120 110 240 100 360 95C480 90 600 90 720 95C840 100 960 110 1080 110C1200 110 1320 100 1380 95L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#666666" fillOpacity="0.3"/>
        </svg>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 text-[#F16E00] font-semibold text-xs sm:text-sm mb-4 border border-orange-200/50 shadow-sm">
            <span className="mr-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F16E00] animate-pulse"></span>
            <span>Customer Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight mb-4 sm:mb-6">
            We have worked with<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#F16E00] to-orange-600 bg-clip-text text-transparent">
              thousands of amazing people
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our partners have to say about their experience with EVeez electric scooters
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03, boxShadow: '0 8px 32px 0 rgba(241,110,0,0.15)' }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md border border-gray-100 p-4 sm:p-6 flex flex-col transition-all duration-300 cursor-pointer hover:shadow-lg relative overflow-hidden"
            >
              {/* Accent corner */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-[#F16E00]/10 to-orange-300/20 rounded-full"></div>
              
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-orange-200 shadow-sm">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a default avatar if image fails to load
                      e.currentTarget.src = "https://randomuser.me/api/portraits/thumb/people/" + (t.id + 30) + ".jpg";
                    }}
                  />
                </div>
                <div className="ml-3 text-left">
                  <div className="font-bold text-gray-900 text-sm sm:text-base">{t.name}</div>
                  <div className="flex items-center">
                    <span className="text-xs sm:text-sm text-[#F16E00] font-semibold">{t.company}</span>
                    <span className="mx-1.5 text-gray-300">•</span>
                    <span className="text-xs text-gray-500">{t.role}</span>
                  </div>
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-gray-700 text-sm sm:text-base mb-3 text-left">"{t.text}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#F16E00] fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              {/* Quote mark */}
              <div className="absolute bottom-2 right-2 opacity-10">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11L8 13H5C4.44772 13 4 12.5523 4 12V8C4 7.44772 4.44772 7 5 7H9C9.55228 7 10 7.44772 10 8V11Z" stroke="#F16E00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 11L17 13H14C13.4477 13 13 12.5523 13 12V8C13 7.44772 13.4477 7 14 7H18C18.5523 7 19 7.44772 19 8V11Z" stroke="#F16E00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="#contact" className="inline-flex items-center text-[#F16E00] font-medium hover:text-orange-700 transition-colors">
            <span>Join our growing list of satisfied partners</span>
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 