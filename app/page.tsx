"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { HowItWorks } from "@/components/how-it-works"
import { ScooterShowcase } from "@/components/scooter-showcase"
import {
  Zap,
  Leaf,
  Shield,
  Battery,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Gauge,
  Wrench,
  Wifi,
  Weight,
  Timer,
  DollarSign,
  Phone,
  Mail,
  MessageCircle,
  Download,
  Camera,
  Navigation,
  Bluetooth,
  SmartphoneIcon,
  ChevronDown,
  ArrowDown,
  Menu,
  X,
} from "lucide-react"
import TestimonialsSection from './components/TestimonialsSection';
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import StatsSection from "./components/StatsSection"
import CTASection from "./components/CTASection"
import AppDownloadSection from "./components/AppDownloadSection"

export default function EVScooterWebsite() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeScooterColor, setActiveScooterColor] = useState<ScooterColorKey>("orange")
  const [showScooterFeatures, setShowScooterFeatures] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])
  
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  type ScooterColorKey = 'orange' | 'blue' | 'green' | 'black';
  
  const scooterColors: Record<ScooterColorKey, {
    primary: string;
    secondary: string;
    name: string;
  }> = {
    orange: {
      primary: "#F16E00",
      secondary: "#FF8A3D",
      name: "Sunset Orange",
    },
    blue: {
      primary: "#0070F3",
      secondary: "#3694FF",
      name: "Electric Blue",
    },
    green: {
      primary: "#10B981",
      secondary: "#34D399",
      name: "Eco Green",
    },
    black: {
      primary: "#1F2937",
      secondary: "#4B5563",
      name: "Midnight Black",
    },
  }

  const handleExploreScooter = () => {
    setShowScooterFeatures(!showScooterFeatures)
  }

  // Define scooter model type
  type ScooterModel = {
    id: string;
    name: string;
    image: string;
    price: string;
    color: string;
    specs: {
      range: string;
      topSpeed: string;
      motor: string;
      chargingTime: string;
    };
    tagline: string;
    description: string;
  };

  // Define scooter models
  const scooterModelsData: ScooterModel[] = [
    {
      id: "pro",
      name: "EVeez Pro",
      image: "/scooter-main.png",
      price: "₹2,999/month",
      color: "#F16E00",
      specs: {
        range: "120 km",
        topSpeed: "85 km/h",
        motor: "3000W BLDC",
        chargingTime: "3 hours",
      },
      tagline: "Performance meets comfort",
      description: "Our flagship model with premium features and enhanced performance. Perfect balance of power and range.",
    },
    {
      id: "commuter",
      name: "EVeez Commuter",
      image: "/scooter-main.png",
      price: "₹1,999/month",
      color: "#0070F3",
      specs: {
        range: "150 km",
        topSpeed: "65 km/h",
        motor: "2000W BLDC",
        chargingTime: "2.5 hours",
      },
      tagline: "Ideal for daily commuting",
      description: "Designed for daily commuting and regular city travel, with a focus on efficiency and convenience.",
    },
    {
      id: "explorer",
      name: "EVeez Explorer",
      image: "/scooter-main.png",
      price: "₹2,499/month",
      color: "#10B981",
      specs: {
        range: "100 km",
        topSpeed: "50 km/h",
        motor: "1500W BLDC",
        chargingTime: "2 hours",
      },
      tagline: "Perfect for weekend adventures",
      description: "Ideal for weekend adventures and occasional rides, with a focus on affordability and convenience.",
    },
  ];
  
  // State for selected scooter and color
  const [selectedModelId, setSelectedModelId] = useState<string>("pro");
  const [selectedColor, setSelectedColor] = useState<string>("#F16E00");
  
  // Get the currently selected model
  const selectedScooterModel = useMemo(() => 
    scooterModelsData.find(model => model.id === selectedModelId) || scooterModelsData[0],
  [selectedModelId, scooterModelsData]);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-black/95 via-black/90 to-black/95 backdrop-blur-lg border-b border-orange-300/30 shadow-md">
        {/* Animated top border */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 animate-gradient-x"></div>
        
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M0,50 L20,50 L20,30 L40,30 L40,50 L60,50 L60,30 L80,30 L80,50 L100,50" 
              stroke="rgba(241,110,0,0.8)" 
              strokeWidth="0.5" 
              fill="none" 
            />
            <path 
              d="M0,70 L30,70 L30,50 L50,50 L50,30 L100,30" 
              stroke="rgba(241,110,0,0.5)" 
              strokeWidth="0.5" 
              fill="none" 
            />
          </svg>
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-1.5 sm:space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-[#F16E00] to-orange-600 rounded-lg flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{ 
                      y: [0, -3, 0],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.div>
              </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#F16E00] to-orange-500 bg-clip-text text-transparent">
                EVeez
              </span>
                <span className="text-[8px] sm:text-[10px] text-orange-300/80 -mt-1 tracking-wider">ELECTRIC MOBILITY</span>
            </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {["Features", "Our Scooters", "How It Works", "Plans", "Support", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm lg:text-base text-white hover:text-[#F16E00] transition-colors cursor-pointer font-medium relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F16E00] group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button className="bg-gradient-to-r from-[#F16E00] to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white shadow-lg px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm transition-all duration-300 hover:shadow-orange-500/30 hover:shadow-xl">
                  <span className="flex items-center gap-1.5">
                    <span>Get Started</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </span>
                </Button>
              </motion.div>
              
              {/* Mobile menu button */}
              <motion.button 
                className="md:hidden text-white p-1 rounded-md focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
          </div>
          </div>
          
          {/* Mobile menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-3 space-y-2">
                  {["Features", "Our Scooters", "How It Works", "Plans", "Support", "Contact"].map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-2 py-2 text-sm text-white hover:bg-orange-600/10 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <HeroSection />

      <StatsSection />

      <section id="our-scooters" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="mb-3 sm:mb-4 bg-[#F16E00]/10 text-[#F16E00] border-[#F16E00]/30">Our Models</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Choose Your <span className="bg-gradient-to-r from-[#F16E00] to-orange-600 bg-clip-text text-transparent">Ride</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Select the perfect EVeez model that fits your lifestyle and requirements
            </p>
          </div>
          
          <div className="relative">
            {/* Scooter Model Navigation - Enhanced with better visual indicators */}
            <div className="flex justify-center mb-8 sm:mb-12 overflow-x-auto pb-2">
              <div className="inline-flex bg-white/80 backdrop-blur-md rounded-full p-1.5 sm:p-2 shadow-lg border border-gray-100">
                 {scooterModelsData.map((model) => (
                   <Button
                     key={model.id}
                     variant={selectedModelId === model.id ? "default" : "ghost"}
                     onClick={() => setSelectedModelId(model.id)}
                    className={`rounded-full px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                       selectedModelId === model.id 
                        ? "bg-gradient-to-r from-gray-50 to-white text-gray-900 shadow-md scale-105" 
                        : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                     }`}
                    style={{
                      borderLeft: selectedModelId === model.id ? `3px solid ${model.color}` : ''
                    }}
                   >
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div 
                        className="w-2 sm:w-3 h-2 sm:h-3 rounded-full flex-shrink-0" 
                        style={{ background: model.color }}
                      ></div>
                     {model.name}
                    </div>
                   </Button>
                 ))}
               </div>
             </div>

            {/* Scooter Display - Enhanced with glass effect and better visuals */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
              {/* Left: Scooter Image - With reflection effect */}
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="bg-gradient-to-br from-blue-50/90 to-gray-100/90 backdrop-blur-md rounded-3xl p-4 sm:p-8 flex items-center justify-center h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden shadow-xl border border-white/50">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),rgba(255,255,255,0))]"></div>
                  <div className="relative w-full h-full z-10">
                     {scooterModelsData.map((model) => (
                       <motion.div
                         key={model.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                         animate={{ 
                           opacity: selectedModelId === model.id ? 1 : 0,
                          scale: selectedModelId === model.id ? 1 : 0.9,
                          rotateY: selectedModelId === model.id ? 0 : -15
                         }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                         className="absolute inset-0 flex items-center justify-center"
                       >
                        <motion.div 
                           className="w-full h-full bg-contain bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-500"
                           style={{ backgroundImage: `url(${model.image})` }}
                          whileHover={{ y: -10 }}
                         />
                        {/* Reflection effect */}
                        <div 
                          className="absolute bottom-0 w-full h-16 sm:h-20 bg-contain bg-center bg-no-repeat opacity-20 blur-sm scale-y-[-0.4] scale-x-[0.9] translate-y-8"
                          style={{ backgroundImage: `url(${model.image})` }}
                        ></div>
                       </motion.div>
                     ))}
                  </div>
                  
                  {/* Highlight points */}
                  <div className="absolute left-1/4 top-1/4 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-white/80 blur-sm"></div>
                  <div className="absolute right-1/4 bottom-1/3 w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-white/60 blur-sm"></div>
                </div>
                
                {/* Price Tag - Enhanced */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
                  <Badge
                    className="text-sm sm:text-lg px-3 sm:px-5 py-1.5 sm:py-2.5 shadow-lg backdrop-blur-sm font-medium"
                    style={{ 
                      background: `linear-gradient(135deg, ${selectedScooterModel?.color || '#F16E00'}, ${selectedScooterModel?.color || '#F16E00'}CC)`, 
                      color: 'white',
                      borderColor: `${selectedScooterModel?.color || '#F16E00'}40`
                    }}
                  >
                    {selectedScooterModel?.price || "₹1,999/month"}
                  </Badge>
                </div>
                
                {/* Model badge */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20">
                  <Badge
                    className="px-2 sm:px-3 py-1 sm:py-1.5 shadow-md backdrop-blur-sm text-xs sm:text-sm"
                    style={{ 
                      background: 'rgba(255,255,255,0.8)', 
                      color: selectedScooterModel?.color || '#F16E00',
                      borderColor: `${selectedScooterModel?.color || '#F16E00'}40`
                    }}
                  >
                    {selectedModelId.toUpperCase()} MODEL
                  </Badge>
                </div>
              </div>
              
              {/* Right: Scooter Details - Enhanced with modern design */}
              <div className="space-y-6 sm:space-y-8 mt-4 sm:mt-0">
                <motion.div 
                  className="mb-4 sm:mb-6"
                  key={selectedModelId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2 sm:gap-3">
                    {selectedScooterModel?.name || "EVeez Pro"}
                    <span 
                      className="inline-block w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full" 
                      style={{ background: selectedScooterModel?.color || '#F16E00' }}
                    ></span>
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-600 mb-3 sm:mb-4 font-medium">{selectedScooterModel?.tagline || "Performance meets comfort"}</p>
                  <p className="text-base sm:text-lg text-gray-700">{selectedScooterModel?.description || "Our flagship model with premium features and enhanced performance. Perfect balance of power and range."}</p>
                </motion.div>
                
                <motion.div 
                  className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8"
                  key={`specs-${selectedModelId}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 sm:gap-4 bg-white rounded-xl p-3 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-blue-100/70 flex-shrink-0">
                      <Battery className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">Range</p>
                      <p className="font-bold text-base sm:text-lg">{selectedScooterModel?.specs.range || "120 km"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 bg-white rounded-xl p-3 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-red-100/70 flex-shrink-0">
                      <Gauge className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">Top Speed</p>
                      <p className="font-bold text-base sm:text-lg">{selectedScooterModel?.specs.topSpeed || "85 km/h"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 bg-white rounded-xl p-3 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-orange-100/70 flex-shrink-0">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">Motor</p>
                      <p className="font-bold text-base sm:text-lg">{selectedScooterModel?.specs.motor || "3000W BLDC"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 bg-white rounded-xl p-3 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-green-100/70 flex-shrink-0">
                      <Timer className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">Charging Time</p>
                      <p className="font-bold text-base sm:text-lg">{selectedScooterModel?.specs.chargingTime || "3 hours"}</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <Button 
                    className="flex-1 bg-gradient-to-r from-[#F16E00] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg text-sm sm:text-base font-medium py-5 sm:py-6"
                    size="lg"
                  >
                    Book Test Ride
                  </Button>
                  <Button 
                    className="flex-1 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-sm text-sm sm:text-base font-medium py-5 sm:py-6" 
                    size="lg"
                  >
                    View Details
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#F16E00]/10 text-[#F16E00] border-[#F16E00]/30">Simple Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It{" "}
              <span className="bg-gradient-to-r from-[#F16E00] to-orange-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting your electric scooter subscription is easy and hassle-free. Just follow these simple steps.
            </p>
          </div>

          <HowItWorks />
        </div>
      </section>

      <TestimonialsSection />

      {/* Detailed Specifications Section */}
      <section id="specifications" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#F16E00]/10 text-[#F16E00] border-[#F16E00]/30">Technical Excellence</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the{" "}
              <span className="bg-gradient-to-r from-[#F16E00] to-orange-600 bg-clip-text text-transparent">
                EVeez Pro
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineered for performance, designed for comfort. Every detail crafted to deliver the ultimate electric
              riding experience.
            </p>
          </motion.div>

          <Tabs defaultValue="performance" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="battery">Battery & Range</TabsTrigger>
              <TabsTrigger value="smart">Smart Features</TabsTrigger>
              <TabsTrigger value="safety">Safety & Build</TabsTrigger>
            </TabsList>

            <TabsContent value="performance" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-gray-200 shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Gauge className="w-6 h-6 text-[#F16E00]" />
                        Performance Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Top Speed</span>
                          <span className="font-bold text-lg">85 km/h</span>
                        </div>
                        <Progress value={85} className="h-2" />

                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Acceleration (0-50 km/h)</span>
                          <span className="font-bold text-lg">4.2 seconds</span>
                        </div>
                        <Progress value={90} className="h-2" />

                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Motor Power</span>
                          <span className="font-bold text-lg">3000W BLDC</span>
                        </div>
                        <Progress value={95} className="h-2" />

                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Torque</span>
                          <span className="font-bold text-lg">170 Nm</span>
                        </div>
                        <Progress value={88} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-gray-200 shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Weight className="w-6 h-6 text-[#F16E00]" />
                        Physical Specifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-[#F16E00]">118 kg</div>
                          <div className="text-sm text-gray-600">Total Weight</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-[#F16E00]">150 kg</div>
                          <div className="text-sm text-gray-600">Max Load</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-[#F16E00]">1850mm</div>
                          <div className="text-sm text-gray-600">Length</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-[#F16E00]">780mm</div>
                          <div className="text-sm text-gray-600">Seat Height</div>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Riding Modes</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Eco Mode</span>
                            <span className="text-green-600">45 km/h • 120km range</span>
                          </div>
                          <div className="flex justify-between">
                            <span>City Mode</span>
                            <span className="text-blue-600">65 km/h • 90km range</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sport Mode</span>
                            <span className="text-red-600">85 km/h • 70km range</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="battery" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-gray-200 shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Battery className="w-6 h-6 text-[#F16E00]" />
                        Advanced Battery Technology
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                        <div className="text-4xl font-bold text-[#F16E00] mb-2">3.2 kWh</div>
                        <div className="text-gray-600">Lithium-ion Battery Capacity</div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Battery Type</span>
                          <span className="font-semibold">LiFePO4 (Lithium Iron Phosphate)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Charging Time (0-80%)</span>
                          <span className="font-semibold text-green-600">2.5 hours</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Full Charge Time</span>
                          <span className="font-semibold">4 hours</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Battery Life</span>
                          <span className="font-semibold">1000+ cycles</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Removable Battery</span>
                          <span className="font-semibold text-[#F16E00]">Yes (Portable)</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-gray-200 shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="w-6 h-6 text-[#F16E00]" />
                        Range & Efficiency
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">120km</div>
                          <div className="text-xs text-gray-600">Eco Mode</div>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">90km</div>
                          <div className="text-xs text-gray-600">City Mode</div>
                        </div>
                        <div className="p-4 bg-red-50 rounded-lg">
                          <div className="text-2xl font-bold text-red-600">70km</div>
                          <div className="text-xs text-gray-600">Sport Mode</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-semibold mb-2">Charging Options</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Home charging (15A socket)
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Fast charging stations
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Portable battery charging
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Solar charging compatible
                            </li>
                          </ul>
                        </div>

                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-[#F16E00]">₹2.5 per 100km</div>
                          <div className="text-sm text-gray-600">Running Cost</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="smart" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-gray-200 shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <SmartphoneIcon className="w-6 h-6 text-[#F16E00]" />
                        Smart Connectivity
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <Bluetooth className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <div className="font-semibold">Bluetooth 5.0</div>
                          <div className="text-sm text-gray-600">Seamless pairing</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <Wifi className="w-8 h-8 text-green-600 mx-auto mb-2" />
                          <div className="font-semibold">4G Connectivity</div>
                          <div className="text-sm text-gray-600">Always connected</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Mobile App Features</h4>
                        <ul className="space-y-3">
                          {[
                            "Real-time battery monitoring",
                            "GPS tracking & navigation",
                            "Remote lock/unlock",
                            "Ride statistics & analytics",
                            "Maintenance reminders",
                            "Find my scooter",
                            "Geofencing alerts",
                            "Speed limit settings",
                          ].map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-gray-200 shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Camera className="w-6 h-6 text-[#F16E00]" />
                        Digital Dashboard
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                        <div className="text-2xl font-bold text-[#F16E00] mb-2">7" TFT Display</div>
                        <div className="text-gray-600">Full Color Touchscreen</div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Display Features</h4>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Speed & RPM
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Battery level
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Range remaining
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Trip meter
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Navigation
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Weather info
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Music control
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Call notifications
                          </div>
                        </div>

                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-semibold mb-2">Voice Commands</h4>
                          <p className="text-sm text-gray-600">
                            Control your scooter with voice commands. Navigate, check battery, change modes, and more -
                            all hands-free for safer riding.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="safety" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-gray-200 shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="w-6 h-6 text-[#F16E00]" />
                        Safety Features
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-red-50 rounded-lg">
                          <div className="text-lg font-bold text-red-600">ABS</div>
                          <div className="text-sm text-gray-600">Anti-lock Braking</div>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-600">CBS</div>
                          <div className="text-sm text-gray-600">Combined Braking</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Advanced Safety Systems</h4>
                        <ul className="space-y-3">
                          {[
                            "Anti-theft alarm system",
                            "Immobilizer with smart key",
                            "Panic button for emergencies",
                            "Automatic crash detection",
                            "Emergency contact alerts",
                            "LED headlight with DRL",
                            "Hazard warning lights",
                            "Reverse parking assist",
                          ].map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <Shield className="w-4 h-4 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-gray-200 shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Wrench className="w-6 h-6 text-[#F16E00]" />
                        Build Quality
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold mb-2">Frame & Chassis</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• High-strength steel tubular frame</li>
                            <li>• Corrosion-resistant coating</li>
                            <li>• Reinforced mounting points</li>
                            <li>• Crash-tested design</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-semibold mb-2">Suspension & Comfort</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Front telescopic suspension</li>
                            <li>• Rear mono-shock absorber</li>
                            <li>• Adjustable suspension settings</li>
                            <li>• Ergonomic seating position</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-semibold mb-2">Weather Protection</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• IP67 rated electronics</li>
                            <li>• Waterproof battery compartment</li>
                            <li>• All-weather riding capability</li>
                            <li>• UV-resistant body panels</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <FeaturesSection />

      {/* Subscription Plans */}
      <section id="plans" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="mb-4 bg-[#F16E00]/10 text-[#F16E00] border-[#F16E00]/30">Flexible Plans</Badge>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-[#F16E00] to-orange-600 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with no hidden costs. All plans include maintenance, insurance, and 24/7 support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Explorer",
                price: "₹2,999",
                period: "/month",
                description: "Perfect for weekend adventures and occasional rides",
                features: [
                  "Up to 500km/month usage",
                  "Basic maintenance included",
                  "Mobile app access",
                  "Standard customer support",
                  "Insurance coverage",
                  "Home charging support",
                ],
                popular: false,
                savings: "Save ₹15,000/year vs ownership",
              },
              {
                name: "Commuter",
                price: "₹4,999",
                period: "/month",
                description: "Ideal for daily commuting and regular city travel",
                features: [
                  "Up to 1200km/month usage",
                  "Premium maintenance included",
                  "Priority customer support",
                  "Comprehensive insurance",
                  "Free helmet & accessories",
                  "Battery replacement warranty",
                  "Roadside assistance",
                  "App premium features",
                ],
                popular: true,
                savings: "Save ₹25,000/year vs ownership",
              },
              {
                name: "Unlimited",
                price: "₹7,999",
                period: "/month",
                description: "For unlimited freedom and maximum flexibility",
                features: [
                  "Unlimited kilometers",
                  "Premium maintenance & care",
                  "24/7 priority support",
                  "Full comprehensive insurance",
                  "Free accessories & upgrades",
                  "Scooter swap anytime",
                  "Concierge service",
                  "Multiple city access",
                  "Premium app features",
                ],
                popular: false,
                savings: "Save ₹40,000/year vs ownership",
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-[#F16E00] to-orange-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`h-full ${plan.popular ? "bg-gradient-to-b from-orange-50 to-white border-[#F16E00]/50 shadow-lg" : "bg-white border-gray-200"} transition-all duration-300 shadow-sm hover:shadow-lg`}
                >
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#F16E00]">{plan.price}</span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>
                    <CardDescription className="text-gray-600 mb-4">{plan.description}</CardDescription>
                    <div className="text-sm font-semibold text-green-600">{plan.savings}</div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#F16E00] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}

                    <Button
                      className={`w-full mt-8 ${plan.popular ? "bg-gradient-to-r from-[#F16E00] to-orange-600 hover:from-orange-600 hover:to-[#F16E00]" : "bg-gray-900 hover:bg-gray-800"} text-white shadow-lg`}
                      size="lg"
                    >
                      Choose {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-orange-50 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">What's Included in All Plans</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Zero down payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No EMI hassles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Flexible cancellation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Upgrade anytime</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="mb-4 bg-[#F16E00]/10 text-[#F16E00] border-[#F16E00]/30">Complete Support</Badge>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6">
              We've Got{" "}
              <span className="bg-gradient-to-r from-[#F16E00] to-orange-600 bg-clip-text text-transparent">
                You Covered
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support ecosystem ensuring you never face any issues alone
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Phone,
                title: "24/7 Helpline",
                description: "Round-the-clock customer support via phone, chat, and email",
                contact: "1800-EVEEZ",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: Wrench,
                title: "Doorstep Service",
                description: "Free pickup and drop service for maintenance and repairs",
                contact: "Book via app",
                color: "bg-green-50 text-green-600",
              },
              {
                icon: MapPin,
                title: "Service Centers",
                description: "200+ authorized service centers across 25+ cities",
                contact: "Find nearest center",
                color: "bg-purple-50 text-purple-600",
              },
              {
                icon: MessageCircle,
                title: "Live Chat Support",
                description: "Instant help through our mobile app and website chat",
                contact: "Available 24/7",
                color: "bg-orange-50 text-[#F16E00]",
              },
              {
                icon: Download,
                title: "Self-Help Resources",
                description: "Comprehensive guides, videos, and troubleshooting tips",
                contact: "Access via app",
                color: "bg-yellow-50 text-yellow-600",
              },
              {
                icon: Users,
                title: "Community Forum",
                description: "Connect with other riders, share experiences, and get tips",
                contact: "Join community",
                color: "bg-pink-50 text-pink-600",
              },
            ].map((support, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white border-gray-200 hover:border-[#F16E00]/50 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${support.color} p-3 mb-4`}>
                      <support.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-gray-900">{support.title}</CardTitle>
                    <div className="text-sm font-semibold text-[#F16E00]">{support.contact}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">{support.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <AppDownloadSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="py-12 sm:py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 mb-3 sm:mb-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-[#F16E00] to-orange-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#F16E00] to-orange-600 bg-clip-text text-transparent">
                  EVeez
                </span>
              </div>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                India's leading electric scooter subscription platform. Sustainable, smart, and affordable mobility for
                everyone with EVeez.
              </p>
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-300">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>1800-EVEEZ</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-300">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>hello@eveez.com</span>
                </div>
              </div>
            </div>

            {[
              {
                title: "Product",
                links: ["Scooter Specs", "Features", "Pricing", "Compare Plans", "Test Ride"],
              },
              {
                title: "Support",
                links: ["Help Center", "Service Centers", "Roadside Assistance", "App Download", "User Manual"],
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Press", "Investors", "Sustainability"],
              },
            ].map((section, index) => (
              <div key={index} className={index === 0 ? "mt-6 sm:mt-0" : ""}>
                <h3 className="text-white font-semibold mb-2 sm:mb-4 text-sm sm:text-base">{section.title}</h3>
                <ul className="space-y-1 sm:space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-300 hover:text-[#F16E00] transition-colors text-xs sm:text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm">
              &copy; 2024 EVeez Technologies Pvt. Ltd. All rights reserved. | Revolutionizing urban mobility across
              India.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
