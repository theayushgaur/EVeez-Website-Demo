import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Shield, Zap, Wifi, DollarSign, Timer } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Powerful Performance",
    description: "Experience the thrill of instant torque with our high-performance electric motors.",
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Zero emissions, zero guilt. Reduce your carbon footprint with every ride.",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    icon: Shield,
    title: "Advanced Safety",
    description: "Ride with confidence thanks to our comprehensive safety features and systems.",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: Wifi,
    title: "Smart Connectivity",
    description: "Stay connected with smart features, GPS tracking, and mobile app integration.",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description: "Save money on fuel, maintenance, and parking with our subscription model.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100"
  },
  {
    icon: Timer,
    title: "Quick Charging",
    description: "Less time charging, more time riding with our fast-charging technology.",
    color: "text-red-600",
    bgColor: "bg-red-100"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grey gradient */}
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(200,200,200,0.05),transparent_70%)]"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(200,200,200,0.05),transparent_70%)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <Badge className="mb-2 sm:mb-4 bg-[#F16E00]/10 text-[#F16E00] border-[#F16E00]/30 text-xs sm:text-sm">Why Choose Us</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6">
            Cutting-Edge{" "}
            <span className="bg-gradient-to-r from-[#F16E00] to-orange-600 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Our electric scooters are packed with innovative features designed to enhance your riding experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl sm:rounded-2xl bg-white">
                <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${feature.bgColor} p-2 sm:p-3 mb-3 sm:mb-4 flex items-center justify-center mx-auto`}>
                    <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-base sm:text-lg md:text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pt-0 pb-4 sm:pb-6">
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 