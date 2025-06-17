import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  increment: number;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, suffix, increment, delay }) => {
  const [count, setCount] = useState(value);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + increment);
    }, delay);
    
    return () => clearInterval(timer);
  }, [increment, delay]);
  
  return (
    <motion.div 
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative mb-3">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-200 to-orange-100 rounded-full opacity-20 blur-sm"></div>
        <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-sm border border-orange-100">
          {icon}
        </div>
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#F16E00] rounded-full flex items-center justify-center text-white text-xs font-bold">
          <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 5L18 11M12 5L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      <div className="group">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-1 flex items-center justify-center">
          <span className="tabular-nums">{count.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span>
          <span className="text-[#F16E00]">{suffix}</span>
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 font-medium">{label}</p>
      </div>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section id="impact" className="relative py-8 sm:py-10 md:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div 
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 text-[#F16E00] font-semibold text-xs mb-3 border border-orange-200/50 shadow-sm">
            <span className="mr-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F16E00] animate-pulse"></span>
            <span>Real-time Impact</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight mb-2 sm:mb-3">
            Making a difference with
            <span className="bg-gradient-to-r from-[#F16E00] to-orange-600 bg-clip-text text-transparent ml-1">
              every kilometer
            </span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <StatItem 
            icon={
              <svg className="w-8 h-8 text-[#F16E00]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17.25V18.75M12 17.25V18.75M15 17.25V18.75M5.25 6.75H18.75M5.25 6.75C4.42157 6.75 3.75 7.42157 3.75 8.25V15.75C3.75 16.5784 4.42157 17.25 5.25 17.25H18.75C19.5784 17.25 20.25 16.5784 20.25 15.75V8.25C20.25 7.42157 19.5784 6.75 18.75 6.75M5.25 6.75L6.75 3.75H17.25L18.75 6.75M7.5 12C7.5 12.4142 7.16421 12.75 6.75 12.75C6.33579 12.75 6 12.4142 6 12C6 11.5858 6.33579 11.25 6.75 11.25C7.16421 11.25 7.5 11.5858 7.5 12ZM6.75 12H9M12 10.5L10.5 12L12 13.5M13.5 10.5L15 12L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 21.75C5.58579 21.75 5.25 21.4142 5.25 21C5.25 20.5858 5.58579 20.25 6 20.25V21.75ZM18 20.25C18.4142 20.25 18.75 20.5858 18.75 21C18.75 21.4142 18.4142 21.75 18 21.75V20.25ZM6 20.25H18V21.75H6V20.25Z" fill="currentColor"/>
                <path d="M10.5 2.25C10.5 1.83579 10.8358 1.5 11.25 1.5H12.75C13.1642 1.5 13.5 1.83579 13.5 2.25V3.75H10.5V2.25Z" fill="currentColor"/>
                <path d="M7.5 21C7.5 21.4142 7.16421 21.75 6.75 21.75C6.33579 21.75 6 21.4142 6 21H7.5ZM6 21V18.75H7.5V21H6Z" fill="currentColor"/>
                <path d="M18 21C18 21.4142 17.6642 21.75 17.25 21.75C16.8358 21.75 16.5 21.4142 16.5 21H18ZM16.5 21V18.75H18V21H16.5Z" fill="currentColor"/>
                <path d="M12 21C12 21.4142 11.6642 21.75 11.25 21.75C10.8358 21.75 10.5 21.4142 10.5 21H12ZM10.5 21V18.75H12V21H10.5Z" fill="currentColor"/>
              </svg>
            }
            value={2158356.78}
            label="Fuel Saved (in litres)"
            suffix="+"
            increment={0.12}
            delay={100}
          />
          
          <StatItem 
            icon={
              <svg className="w-8 h-8 text-[#F16E00]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 3.5H14.5M12 3.5V6.5M7 21.5H17C19.2091 21.5 21 19.7091 21 17.5C21 15.2909 19.2091 13.5 17 13.5H7C4.79086 13.5 3 15.2909 3 17.5C3 19.7091 4.79086 21.5 7 21.5ZM17 13.5C17 10.1863 14.3137 7.5 11 7.5C7.68629 7.5 5 10.1863 5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.5 17.5L11.5 18.5L12.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.5 17.5L17.5 18.5L16.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 17.5L7.5 18.5L8.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            value={6475070.33}
            label="Kgs CO₂ saved"
            suffix="+"
            increment={0.25}
            delay={100}
          />
          
          <StatItem 
            icon={
              <svg className="w-8 h-8 text-[#F16E00]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 10.5H15.51M10.5 13.5H10.51M7.5 7.5V10.5M12 3L4.5 7.5L4.5 16.5L12 21L19.5 16.5V7.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.5 7.5L12 12M12 12L19.5 7.5M12 12V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            value={129501406.56}
            label="Km Covered"
            suffix="+"
            increment={1.5}
            delay={100}
          />
        </div>
        
        {/* Interactive element */}
        <motion.div 
          className="mt-6 sm:mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-100 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-xs text-gray-500">Live data updating in real-time</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection; 