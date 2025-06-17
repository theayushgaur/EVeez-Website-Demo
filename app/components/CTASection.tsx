import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Zap, 
  ArrowRight, 
  Check, 
  X, 
  Phone, 
  Calendar, 
  MapPin,
  Mail,
  MessageSquare
} from 'lucide-react';

const CTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'subscribe' | 'testRide'>('subscribe');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setError('');
    }, 1000);
  };
  
  const handleTestRide = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone) {
      setError('Please fill in all fields');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setError('');
    }, 1000);
  };
  
  const resetForm = () => {
    setEmail('');
    setName('');
    setPhone('');
    setSubmitted(false);
    setError('');
  };

  return (
    <section id="cta" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grey gradient */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[radial-gradient(circle_at_center,rgba(200,200,200,0.05),transparent_70%)]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[radial-gradient(circle_at_center,rgba(200,200,200,0.05),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left side content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 text-[#F16E00] font-semibold text-xs border border-orange-200/50 shadow-sm">
                <span className="mr-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F16E00] animate-pulse"></span>
                <span>Get Started Today</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to <span className="bg-gradient-to-r from-[#F16E00] to-orange-600 bg-clip-text text-transparent">electrify</span> your journey?
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg">
                Join thousands of satisfied riders who have made the switch to sustainable, smart electric mobility with EVeez.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "No down payment required",
                  "Flexible subscription plans",
                  "Free maintenance & insurance",
                  "24/7 roadside assistance"
                ].map((benefit, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div 
                      key={i} 
                      className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                      style={{ zIndex: 5 - i }}
                    >
                      <img 
                        src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                        alt="Customer" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">500+</span> people joined this month
                </div>
              </div>
            </motion.div>
            
            {/* Right side form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-xl blur-md opacity-10"></div>
              <div className="relative bg-white rounded-xl shadow-xl border border-gray-100 p-6 sm:p-8">
                <div className="mb-6">
                  <div className="flex border border-gray-200 rounded-lg p-1 mb-6">
                    <button
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                        activeTab === 'subscribe'
                          ? 'bg-[#F16E00] text-white shadow-sm'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      onClick={() => {
                        setActiveTab('subscribe');
                        resetForm();
                      }}
                    >
                      Subscribe
                    </button>
                    <button
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                        activeTab === 'testRide'
                          ? 'bg-[#F16E00] text-white shadow-sm'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      onClick={() => {
                        setActiveTab('testRide');
                        resetForm();
                      }}
                    >
                      Book Test Ride
                    </button>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {activeTab === 'subscribe' 
                      ? 'Subscribe to EVeez' 
                      : 'Book a Test Ride'}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6">
                    {activeTab === 'subscribe' 
                      ? 'Get updates on our latest models and exclusive offers.' 
                      : 'Experience the EVeez difference with a free test ride.'}
                  </p>
                </div>
                
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={activeTab === 'subscribe' ? handleSubscribe : handleTestRide}
                      className="space-y-4"
                    >
                      {activeTab === 'testRide' && (
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <div className="relative">
                            <Input
                              id="name"
                              type="text"
                              placeholder="Enter your name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="pl-10"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <MessageSquare className="h-4 w-4 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <div className="relative">
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10"
                          />
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                      
                      {activeTab === 'testRide' && (
                        <>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <div className="relative">
                              <Input
                                id="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="pl-10"
                              />
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Phone className="h-4 w-4 text-gray-400" />
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                              <div className="relative">
                                <Input
                                  id="date"
                                  type="date"
                                  className="pl-10"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <Calendar className="h-4 w-4 text-gray-400" />
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                              <div className="relative">
                                <select 
                                  id="location"
                                  className="w-full h-10 pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#F16E00] focus:border-transparent"
                                >
                                  <option value="">Select</option>
                                  <option value="delhi">Delhi</option>
                                  <option value="mumbai">Mumbai</option>
                                  <option value="bangalore">Bangalore</option>
                                  <option value="hyderabad">Hyderabad</option>
                                </select>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <MapPin className="h-4 w-4 text-gray-400" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      
                      {error && (
                        <div className="text-red-500 text-sm flex items-center gap-1">
                          <X className="h-4 w-4" />
                          {error}
                        </div>
                      )}
                      
                      <Button 
                        type="submit"
                        className="w-full bg-[#F16E00] hover:bg-orange-700 text-white py-5 sm:py-6 text-sm sm:text-base font-medium rounded-lg shadow-lg shadow-orange-500/20"
                      >
                        {activeTab === 'subscribe' ? 'Subscribe Now' : 'Book Test Ride'} 
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {activeTab === 'subscribe' ? 'Subscribed Successfully!' : 'Test Ride Booked!'}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {activeTab === 'subscribe' 
                          ? 'Thank you for subscribing to our newsletter.' 
                          : 'Our team will contact you shortly to confirm your test ride.'}
                      </p>
                      <Button 
                        onClick={resetForm}
                        variant="outline"
                        className="border-[#F16E00] text-[#F16E00] hover:bg-orange-50"
                      >
                        Back to Form
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* 3D scooter decoration */}
              <motion.div
                className="absolute -bottom-12 -right-12 w-32 h-32 opacity-70 hidden md:block"
                animate={{ 
                  y: [0, -10, 0],
                  rotateZ: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src="/scooter-main.png" 
                  alt="EVeez Scooter" 
                  className="w-full h-full object-contain"
                  style={{ 
                    filter: 'drop-shadow(0 10px 15px rgba(241, 110, 0, 0.3))'
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;