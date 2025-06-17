import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Shield, Wifi } from 'lucide-react';

const AppDownloadSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background elements - simplified */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(200,200,200,0.05),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left side content - simplified */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 text-[#F16E00] font-semibold text-xs border border-orange-200/50 shadow-sm">
                <span className="mr-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F16E00] animate-pulse"></span>
                <span>Mobile App</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                Take EVeez in your <span className="bg-gradient-to-r from-[#F16E00] to-orange-600 bg-clip-text text-transparent">pocket</span>
              </h2>
              
              <p className="text-sm sm:text-base text-gray-600 mb-5 max-w-lg">
                Download our mobile app to book rides, track your scooter, and manage your subscription on the go.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                {[
                  {
                    icon: <Smartphone className="w-4 h-4 text-[#F16E00]" />,
                    title: "Book & Track",
                  },
                  {
                    icon: <Shield className="w-4 h-4 text-[#F16E00]" />,
                    title: "Secure Payments",
                  },
                  {
                    icon: <Wifi className="w-4 h-4 text-[#F16E00]" />,
                    title: "Remote Controls",
                  }
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 rounded-md bg-orange-100 flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-800">
                      {feature.title}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-row gap-3">
                <motion.a 
                  href="#" 
                  className="flex items-center bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-900 transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="mr-2">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M17.9,19.9l-5.4,3c-0.8,0.5-1.9,0.2-2.4-0.6L3.8,12L10.1,1.6c0.5-0.8,1.6-1.1,2.4-0.6l5.4,3c2.1,1.2,3.5,3.5,3.5,5.9
                      S20,18.8,17.9,19.9z M8.8,12l4.6,8l4.6-8L13.4,4L8.8,12z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-[10px]">GET IT ON</div>
                    <div className="text-xs font-semibold">Google Play</div>
                  </div>
                </motion.a>
                
                <motion.a 
                  href="#" 
                  className="flex items-center bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-900 transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="mr-2">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M18.71,19.5c-0.83,1.24-1.71,2.45-3.05,2.47c-1.34,0.03-1.77-0.79-3.29-0.79c-1.53,0-2,0.77-3.27,0.82
                      c-1.31,0.05-2.3-1.32-3.14-2.53C4.25,17.03,2.94,12.45,4.7,9.39c0.87-1.52,2.43-2.48,4.12-2.51c1.28-0.02,2.5,0.87,3.29,0.87
                      c0.78,0,2.26-1.07,3.81-0.91c0.65,0.03,2.47,0.26,3.64,1.98c-0.09,0.06-2.17,1.28-2.15,3.81c0.03,3.02,2.65,4.03,2.68,4.04
                      C20.09,16.67,19.01,18.48,18.71,19.5z M13,3.5c0.73-0.83,1.94-1.46,2.94-1.5c0.13,1.17-0.34,2.35-1.04,3.19
                      c-0.69,0.85-1.83,1.51-2.95,1.42C11.78,5.43,12.23,4.26,13,3.5z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-[10px]">DOWNLOAD ON THE</div>
                    <div className="text-xs font-semibold">App Store</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
            
            {/* Right side - Simplified Phone mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Phone frame - smaller */}
                <div className="relative w-[200px] h-[400px] bg-black rounded-[2rem] p-2 shadow-lg">
                  {/* Screen */}
                  <div className="w-full h-full bg-gradient-to-br from-orange-50 to-white rounded-[1.8rem] overflow-hidden relative">
                    {/* App UI mockup - simplified */}
                    <div className="absolute inset-0">
                      {/* Status bar */}
                      <div className="h-8 bg-[#F16E00] flex items-center justify-between px-4">
                        <div className="text-white text-xs font-medium">9:41</div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-white opacity-80"></div>
                          <div className="w-2 h-2 rounded-full bg-white opacity-80"></div>
                          <div className="w-2 h-2 rounded-full bg-white opacity-80"></div>
                        </div>
                      </div>
                      
                      {/* App content - simplified */}
                      <div className="p-3">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-6 h-6 bg-[#F16E00] rounded-lg flex items-center justify-center mr-2">
                              <Zap className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-bold text-sm">EVeez</span>
                          </div>
                          <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
                        </div>
                        
                        {/* Map view - simplified */}
                        <div className="w-full h-32 bg-gray-200 rounded-lg mb-3 relative overflow-hidden">
                          <div className="absolute inset-0 opacity-50" style={{
                            backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/77.2090,28.6139,12,0/400x200?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2F6eHZ1c3MwMXZzMnFvZGx1OXBzaGUyIn0.example')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}></div>
                          
                          {/* Scooter location */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-5 h-5 bg-[#F16E00] rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Scooter info - simplified */}
                        <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold text-xs">Nearby Scooter</span>
                            <span className="text-[10px] text-[#F16E00]">200m away</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-orange-100 rounded-lg mr-2 flex items-center justify-center">
                                <Zap className="w-4 h-4 text-[#F16E00]" />
                              </div>
                              <div>
                                <div className="font-medium text-xs">EVeez Pro</div>
                                <div className="text-[10px] text-gray-500">ID: EV-2845</div>
                              </div>
                            </div>
                            <div className="text-xs font-semibold text-[#F16E00]">87%</div>
                          </div>
                        </div>
                        
                        {/* Action buttons - simplified */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="bg-[#F16E00] text-white rounded-lg p-2 text-center text-xs font-medium">
                            Book Now
                          </div>
                          <div className="bg-gray-100 text-gray-800 rounded-lg p-2 text-center text-xs font-medium">
                            View Details
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom navigation - simplified */}
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white border-t border-gray-200 flex justify-around items-center px-2">
                        {['Home', 'Map', 'Book', 'Profile'].map((item, i) => (
                          <div key={i} className={`flex flex-col items-center ${i === 0 ? 'text-[#F16E00]' : 'text-gray-400'}`}>
                            <div className={`w-1 h-1 rounded-full ${i === 0 ? 'bg-[#F16E00]' : 'bg-transparent'} mb-0.5`}></div>
                            <div className="text-[10px]">{item}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Notch - smaller */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-2xl"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection; 