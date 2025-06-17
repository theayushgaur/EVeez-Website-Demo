import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BadgeCheck, 
  Lock, 
  BarChart3, 
  Search, 
  ArrowRight,
  Zap,
  Battery,
  Gauge,
  Wifi,
  ChevronRight,
  CheckCircle,
  Play,
  Clock
} from 'lucide-react';

// Updated features with EV-related content
const features = [
  {
    icon: <Zap className="w-6 h-6 text-[#F16E00]" />, 
    title: 'Fast Charging',
    desc: "80% charge in just 45 minutes with our advanced charging technology."
  },
  {
    icon: <Battery className="w-6 h-6 text-[#F16E00]" />,
    title: 'Extended Range',
    desc: "Travel up to 150km on a single charge with our high-capacity batteries."
  },
  {
    icon: <Wifi className="w-6 h-6 text-[#F16E00]" />,
    title: 'Smart Connectivity',
    desc: "Control and monitor your scooter from anywhere with our mobile app."
  },
];

const partners = [
  { name: "Zomato" },
  { name: "Swiggy" },
  { name: "BigBasket" },
  { name: "Blinkit" },
  { name: "Zepto" },
  { name: "Dunzo" }
];

// Key specs to highlight
const keySpecs = [
  { 
    icon: <Gauge className="w-4 h-4 sm:w-5 sm:h-5" />,
    value: "80 km/h",
    label: "Top Speed"
  },
  { 
    icon: <Battery className="w-4 h-4 sm:w-5 sm:h-5" />,
    value: "120 km",
    label: "Range"
  },
  { 
    icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
    value: "3 hrs",
    label: "Charging"
  },
  { 
    icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
    value: "3000W",
    label: "Motor"
  }
];

// Benefits
const benefits = [
  "Zero down payment",
  "Flexible subscription",
  "Free maintenance",
  "Roadside assistance",
  "Smart app integration",
  "Premium design"
];

const HeroSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  // Animation phrases for typing effect
  const phrases = [
    "Urban Mobility",
    "Smart Transport",
    "Green Commuting",
    "Future Travel"
  ];
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
        
        // If we've typed the full phrase, pause then start deleting
        if (displayedText === currentPhrase) {
          setTypingSpeed(1500); // Pause at the end
          setIsDeleting(true);
        } else {
          setTypingSpeed(150); // Normal typing speed
        }
      } else {
        // Deleting
        setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
        
        // If we've deleted everything, move to next phrase
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          setTypingSpeed(500); // Pause before typing next word
        } else {
          setTypingSpeed(75); // Faster when deleting
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayedText, currentPhraseIndex, isDeleting, typingSpeed, phrases]);

  return (
    <section className="relative pt-24 md:pt-28 pb-16 md:pb-20 bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(241,110,0,0.1),transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(241,110,0,0.1),transparent_40%)]"></div>
        
        {/* Enhanced circuit-like pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            d="M0,0 L20,0 L20,20 L40,20 L40,40 L60,40 L60,60 L80,60 L80,80 L100,80 L100,100" 
            stroke="rgba(241,110,0,0.5)" 
            strokeWidth="0.5" 
            fill="none" 
          />
          <path 
            d="M0,20 L30,20 L30,50 L70,50 L70,80 L100,80" 
            stroke="rgba(241,110,0,0.3)" 
            strokeWidth="0.5" 
            fill="none" 
          />
          <path 
            d="M10,90 L30,90 L30,70 L50,70 L50,50 L70,50 L70,30 L90,30 L90,10" 
            stroke="rgba(241,110,0,0.2)" 
            strokeWidth="0.5" 
            fill="none" 
          />
        </svg>
        
        {/* Animated dots grid */}
        <div className="absolute inset-0 opacity-20 hidden md:block">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="absolute" style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              width: '1px',
              height: '1px',
              background: '#F16E00',
              boxShadow: '0 0 8px 2px rgba(241,110,0,0.3)',
              borderRadius: '50%'
            }}></div>
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Left content - Enhanced */}
          <div className="flex flex-col justify-center w-full order-2 lg:order-1 mt-8 lg:mt-0">
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 text-[#F16E00] font-semibold text-xs sm:text-sm mb-2 border border-orange-200 shadow-sm">
                <span className="mr-1.5 sm:mr-2 flex-shrink-0 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#F16E00] animate-pulse"></span>
                <span className="font-medium">NEW</span>
                <span className="ml-1.5 sm:ml-2 font-normal text-gray-700 truncate">EVeez Pro 2023 is out!</span>
                <ChevronRight className="ml-1 sm:ml-2 w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" />
              </span>
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Redefining <br />
              <span className="bg-gradient-to-r from-[#F16E00] to-orange-500 bg-clip-text text-transparent inline-block min-h-[1.2em]">
                {displayedText}
                <span className="animate-blink">|</span>
              </span>
            </motion.h1>

            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience the perfect fusion of cutting-edge technology, sustainable design, and unmatched performance with EVeez electric scooters.
            </motion.p>

            {/* Benefits list */}
            <motion.div
              className="mb-6 sm:mb-8 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, staggerChildren: 0.1 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#F16E00]" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row w-full max-w-xl mb-6 sm:mb-8 gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                className="bg-gradient-to-r from-[#F16E00] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium rounded-xl shadow-lg shadow-orange-500/20 flex items-center justify-center transition-transform hover:scale-105"
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" /> Book Test Ride
              </Button>
              <Button
                className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-4 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium rounded-xl shadow-sm transition-all hover:shadow-md hover:border-orange-200"
                variant="outline"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-[#F16E00]" /> Watch Video
              </Button>
            </motion.div>

            {/* Key specs display - Enhanced */}
            <motion.div 
              className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {keySpecs.map((spec, index) => (
                <motion.div 
                  key={index} 
                  className="text-center px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-xl shadow-sm border border-orange-100 flex items-center gap-2 sm:gap-3 hover:shadow-md hover:border-orange-200 transition-all cursor-pointer"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <div className="text-[#F16E00]">{spec.icon}</div>
                  </div>
                  <div className="text-left">
                    <div className="text-sm sm:text-base font-bold text-gray-900">{spec.value}</div>
                    <div className="text-xs text-gray-500 font-medium">{spec.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Partners section - Enhanced */}
            <motion.div 
              className="w-full mt-6 sm:mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 font-medium">TRUSTED BY LEADING DELIVERY PARTNERS</p>
              <div className="relative w-full max-w-2xl bg-white/50 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-gray-100">
                <div className="overflow-x-hidden w-full py-1 sm:py-2">
                  <div
                    className="flex gap-3 sm:gap-4 md:gap-8 animate-scroll-partners whitespace-nowrap hover:[animation-play-state:paused]"
                    style={{ animation: 'scroll-partners 18s linear infinite' }}
                  >
                    {partners.concat(partners).map((partner, idx) => (
                      <span
                        key={idx}
                        className="font-bold text-xs sm:text-sm md:text-base text-gray-400 tracking-tight select-none px-1 sm:px-2 md:px-4 hover:text-[#F16E00] transition-colors"
                        style={{ letterSpacing: '0.01em' }}
                      >
                        {partner.name}
                      </span>
                    ))}
                  </div>
                  <style jsx>{`
                    @keyframes scroll-partners {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                  `}</style>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right visuals: Enhanced scooter image */}
          <div className="relative flex items-center justify-center w-full order-1 lg:order-2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
            {/* Circular highlight - Enhanced */}
            <motion.div 
              className="absolute w-[80%] sm:w-[85%] md:w-[90%] h-[80%] sm:h-[85%] md:h-[90%] rounded-full bg-gradient-to-br from-orange-100/50 via-orange-50/30 to-transparent"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Circular rings */}
            <motion.div 
              className="absolute w-[75%] sm:w-[80%] md:w-[85%] h-[75%] sm:h-[80%] md:h-[85%] rounded-full border border-dashed border-orange-200/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Scooter image with enhanced presentation */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative">
                {/* Enhanced glow effect under scooter */}
                <div className="absolute -bottom-4 w-[80%] h-[20px] sm:h-[30px] bg-gradient-to-r from-orange-200/20 via-[#F16E00]/20 to-orange-200/20 blur-xl rounded-full mx-auto left-0 right-0"></div>
                
                {/* Main scooter image */}
                <motion.img
                  src="/scooter-main.png"
                  alt="EVeez Electric Scooter"
                  className="relative z-10 w-full max-w-[240px] xs:max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] h-auto object-contain drop-shadow-2xl mx-auto"
                  initial={{ y: 0 }}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ filter: 'drop-shadow(0 25px 25px rgba(241,110,0,0.15))' }}
                />

                {/* Interactive feature points - Only show on larger screens */}
                <div className="hidden md:block">
                  {[
                    { top: '20%', left: '70%', label: 'Smart Display' },
                    { top: '40%', left: '10%', label: 'Battery Pack' },
                    { top: '60%', left: '80%', label: 'BLDC Motor' }
                  ].map((point, index) => (
                    <div key={index} className="absolute" style={{ top: point.top, left: point.left }}>
                      <motion.div
                        className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white shadow-lg border-2 border-orange-200 flex items-center justify-center cursor-pointer"
                        whileHover={{ scale: 1.2 }}
                        animate={{ 
                          boxShadow: activeFeature === index 
                            ? ['0 0 0 0 rgba(241,110,0,0)', '0 0 0 10px rgba(241,110,0,0.2)', '0 0 0 0 rgba(241,110,0,0)'] 
                            : 'none'
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        onClick={() => setActiveFeature(activeFeature === index ? null : index)}
                      >
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#F16E00]"></div>
                      </motion.div>
                      
                      <AnimatePresence>
                        {activeFeature === index && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-lg border border-orange-100 text-xs font-medium text-gray-700 whitespace-nowrap z-20"
                          >
                            {point.label}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Feature highlights - Enhanced - Only show on larger screens */}
            <div className="hidden sm:block">
              <motion.div 
                className="absolute top-[15%] right-[10%] bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-xs border border-orange-200 shadow-md"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-[#F16E00]" />
                  <span className="text-gray-700 font-medium">Smart Connectivity</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-[20%] left-[5%] bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-xs border border-orange-200 shadow-md"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#F16E00]" />
                  <span className="text-gray-700 font-medium">Fast Charging</span>
                </div>
              </motion.div>
            </div>
            
            {/* Eco badge - Enhanced */}
            <motion.div 
              className="absolute bottom-2 sm:bottom-5 right-2 sm:right-5 bg-gradient-to-r from-green-50 to-white backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-green-200 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] sm:text-xs text-green-600 font-medium">100% Eco-Friendly</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Video modal would go here - simplified for this example */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setIsVideoModalOpen(false)}>
          <div className="bg-white p-3 sm:p-4 rounded-xl w-full max-w-3xl mx-auto" onClick={e => e.stopPropagation()}>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Video Player Placeholder</p>
            </div>
            <div className="mt-3 sm:mt-4 flex justify-end">
              <Button onClick={() => setIsVideoModalOpen(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection; 