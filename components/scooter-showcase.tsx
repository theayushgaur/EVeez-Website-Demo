"use client"

import { useState, useEffect, useMemo, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Zap, 
  Battery, 
  Gauge, 
  Weight, 
  Timer, 
  Shield, 
  Wifi, 
  Smartphone,
  ArrowRight,
  Check
} from "lucide-react"

// Define color types
type ScooterColorKey = 'orange' | 'blue' | 'green' | 'black';

// Define scooter colors
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

// Scooter model data - moved outside component to prevent recreation on each render
const scooterModels = [
  {
    id: "eco",
    name: "EVeez Eco",
    tagline: "Perfect for daily commuters",
    description: "An affordable and reliable electric scooter for everyday urban commuting. Designed for efficiency and ease of use.",
    color: "#10B981", // Green
    image: "/scooter-main.png",
    specs: {
      range: "80 km",
      topSpeed: "60 km/h",
      batteryCapacity: "2.5 kWh",
      chargingTime: "3.5 hours",
      motor: "1800W BLDC",
      weight: "85 kg",
      loadCapacity: "150 kg",
      acceleration: "5.2s (0-40 km/h)"
    },
    features: [
      "Digital LCD Display",
      "Regenerative Braking",
      "USB Charging Port",
      "LED Headlights",
      "Disc Brakes",
      "Keyless Start"
    ],
    price: "₹1,999/month"
  },
  {
    id: "pro",
    name: "EVeez Pro",
    tagline: "Performance meets comfort",
    description: "Our flagship model with premium features and enhanced performance. Perfect balance of power and range.",
    color: "#F16E00", // Orange (primary brand color)
    image: "/scooter-main.png",
    specs: {
      range: "120 km",
      topSpeed: "85 km/h",
      batteryCapacity: "3.2 kWh",
      chargingTime: "3 hours",
      motor: "3000W BLDC",
      weight: "95 kg",
      loadCapacity: "180 kg",
      acceleration: "4.2s (0-40 km/h)"
    },
    features: [
      "Digital LCD Display",
      "Regenerative Braking",
      "USB Charging Port",
      "LED Headlights",
      "Disc Brakes",
      "Keyless Start",
      "Mobile App Connectivity",
      "GPS Navigation",
      "Anti-theft Alarm"
    ],
    price: "₹2,999/month"
  },
  {
    id: "sport",
    name: "EVeez Sport",
    tagline: "Unleash the thrill",
    description: "For riders who crave excitement. Our most powerful model with sports-tuned suspension and premium features.",
    color: "#0070F3", // Blue
    image: "/scooter-main.png",
    specs: {
      range: "100 km",
      topSpeed: "95 km/h",
      batteryCapacity: "3.5 kWh",
      chargingTime: "2.5 hours",
      motor: "4000W BLDC",
      weight: "100 kg",
      loadCapacity: "160 kg",
      acceleration: "3.5s (0-40 km/h)"
    },
    features: [
      "Digital LCD Display",
      "Regenerative Braking",
      "USB Charging Port",
      "LED Headlights",
      "Disc Brakes",
      "Keyless Start",
      "Mobile App Connectivity",
      "GPS Navigation",
      "Anti-theft Alarm",
      "Sports Mode",
      "Adjustable Suspension",
      "Premium Seat"
    ],
    price: "₹3,499/month"
  }
]

// Memoized SpecItem component to prevent unnecessary re-renders
const SpecItem = memo(({ icon, label, value, color }: { icon: React.ReactNode, label: string, value: string, color: string }) => (
  <div className="flex items-center gap-3 bg-white/80 backdrop-blur rounded-lg p-3 shadow-sm border border-gray-100">
    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
))

SpecItem.displayName = 'SpecItem'

// Memoized model selection button
const ModelButton = memo(({ model, isSelected, onClick }: { 
  model: typeof scooterModels[0], 
  isSelected: boolean, 
  onClick: () => void 
}) => (
  <div
    onClick={onClick}
    className={`cursor-pointer p-4 rounded-xl ${
      isSelected
        ? "bg-white shadow-lg border-2"
        : "bg-white/50 border border-gray-100"
    }`}
    style={{ borderColor: isSelected ? model.color : "" }}
  >
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white"
        style={{ backgroundColor: model.color }}
      >
        {isSelected ? (
          <Check className="w-5 h-5" />
        ) : (
          <Zap className="w-5 h-5" />
        )}
      </div>
      <div>
        <h4 className="font-bold">{model.name}</h4>
        <p className="text-xs text-gray-500">{model.tagline}</p>
      </div>
    </div>
  </div>
))

ModelButton.displayName = 'ModelButton'

// Optimized highlight point component with reduced animation complexity
const HighlightPoint = memo(({ delay, position, color }: { 
  delay: number, 
  position: string, 
  color: string 
}) => (
  <div
    className={`absolute ${position} w-6 h-6 rounded-full shadow-lg cursor-pointer animate-pulse`}
    style={{ 
      background: color, 
      boxShadow: `0 0 15px ${color}80`,
      animationDelay: `${delay}s`,
      animationDuration: '3s'
    }}
  />
))

HighlightPoint.displayName = 'HighlightPoint'

export function ScooterShowcase() {
  const [selectedModelId, setSelectedModelId] = useState("pro") // Store only ID for better performance
  const [selectedView, setSelectedView] = useState("overview")
  const [selectedColor, setSelectedColor] = useState<string>("#F16E00")

  // Memoize the selected model to prevent recalculation on every render
  const selectedModel = useMemo(() => 
    scooterModels.find(model => model.id === selectedModelId) || scooterModels[1]
  , [selectedModelId])

  // Memoize feature items to prevent unnecessary re-renders
  const featureItems = useMemo(() => (
    selectedModel.features.map((feature, index) => (
      <div key={index} className="flex items-center gap-2">
        <div 
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${selectedModel.color}20` }}
        >
          <Check className="w-4 h-4" style={{ color: selectedModel.color }} />
        </div>
        <span className="text-gray-700">{feature}</span>
      </div>
    ))
  ), [selectedModel])

  return (
    <section id="our-scooters" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Left: Model Selection and Image */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            {/* Model selection buttons: stack on mobile, row on desktop */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-md">
              {scooterModels.map((model) => (
                <ModelButton
                  key={model.id}
                  model={model}
                  isSelected={selectedModelId === model.id}
                  onClick={() => setSelectedModelId(model.id)}
                />
              ))}
            </div>
            {/* Scooter image: responsive and centered */}
            <div className="w-full flex justify-center items-center mb-6">
              <motion.img
                src={selectedModel.image}
                alt={selectedModel.name}
                className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[400px] h-auto object-contain drop-shadow-2xl rounded-3xl bg-white/80"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{ boxShadow: '0 12px 48px 0 rgba(241,110,0,0.10)' }}
              />
            </div>
            {/* Color selection: row, touch-friendly */}
            <div className="flex gap-3 justify-center mb-4">
              {Object.entries(scooterColors).map(([key, color]) => (
                <button
                  key={key}
                  className={`w-7 h-7 rounded-full border-2 transition-transform ${selectedColor === color.primary ? "ring-2 ring-offset-2 ring-gray-400 scale-110" : "hover:scale-105"}`}
                  style={{ background: color.primary }}
                  onClick={() => setSelectedColor(color.primary)}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
          </div>

          {/* Right: Scooter Details */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">{selectedModel.name}</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4">{selectedModel.description}</p>
            {/* Specs: responsive grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
              <SpecItem icon={<Zap className="w-5 h-5 text-orange-600" />} label="Motor" value={selectedModel.specs.motor} color={selectedModel.color} />
              <SpecItem icon={<Gauge className="w-5 h-5 text-blue-600" />} label="Top Speed" value={selectedModel.specs.topSpeed} color={selectedModel.color} />
              <SpecItem icon={<Battery className="w-5 h-5 text-green-600" />} label="Range" value={selectedModel.specs.range} color={selectedModel.color} />
              <SpecItem icon={<Timer className="w-5 h-5 text-red-600" />} label="Charging Time" value={selectedModel.specs.chargingTime} color={selectedModel.color} />
              <SpecItem icon={<Weight className="w-5 h-5 text-gray-600" />} label="Weight" value={selectedModel.specs.weight} color={selectedModel.color} />
              <SpecItem icon={<Shield className="w-5 h-5 text-purple-600" />} label="Load Capacity" value={selectedModel.specs.loadCapacity} color={selectedModel.color} />
            </div>
            {/* Features: responsive, wrap on mobile */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedModel.features.map((feature, idx) => (
                <span key={idx} className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                  {feature}
                </span>
              ))}
            </div>
            {/* CTAs: stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 bg-[#F16E00] hover:bg-orange-600 text-white shadow-md" size="lg">
                Book Test Ride
              </Button>
              <Button className="flex-1" variant="outline" size="lg">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 