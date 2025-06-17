"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  ClipboardCheck,
  PhoneCall,
  Car,
  Zap,
} from "lucide-react"

  const steps = [
    {
      title: "Sign Up",
    description: "Let us know your details using our simple sign up form.",
      icon: ClipboardCheck,
      color: "from-orange-400 to-[#F16E00]",
    },
    {
      title: "Call with Expert",
    description: "An expert will contact you to understand your requirements.",
      icon: PhoneCall,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Test Drive",
    description: "Your expert will ensure you get a test drive if needed.",
      icon: Car,
      color: "from-green-400 to-green-600",
    },
    {
      title: "Start Saving",
    description: "Sign the agreement and start enjoying your electric scooter.",
      icon: Zap,
      color: "from-purple-400 to-purple-600",
    },
  ]

export function HowItWorks() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {steps.map((step, idx) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.04, boxShadow: "0 8px 32px 0 rgba(200,200,200,0.20)" }}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 cursor-pointer hover:shadow-lg"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-r ${step.color}`}>
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
              <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
