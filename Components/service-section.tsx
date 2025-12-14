"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Globe, Layout, Wrench, Smartphone, ArrowRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Layout,
      title: "Emergency Locksmith Landing Page",
      description: "High-converting single-page websites optimized for emergency calls",
      features: ["Mobile-first design", "One-tap calling", "Fast loading"],
    },
    {
      icon: Globe,
      title: "Full Locksmith Website (5-7 pages)",
      description: "Complete website solution with multiple service pages and SEO optimization",
      features: ["Multi-page structure", "SEO optimized", "Content management"],
    },
    {
      icon: Wrench,
      title: "Website Redesign & Speed Optimization",
      description: "Transform your existing website into a conversion powerhouse",
      features: ["Performance boost", "Modern design", "Mobile optimization"],
    },
    {
      icon: Smartphone,
      title: "Mobile Call Conversion Fix",
      description: "Optimize your mobile experience to capture more emergency calls",
      features: ["Click-to-call buttons", "Mobile UX", "Fast response"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Can Do for Your Locksmith Business</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-2xl transition-all hover:-translate-y-2 border-2 hover:border-primary/50 bg-card">
                  <Icon className="h-14 w-14 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button size="lg" className="text-lg px-8 py-6 group" asChild>
            <a href="#contact">
              <Phone className="mr-2 h-5 w-5" />
              Get a Free Website Review
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Add missing import
import { Phone } from "lucide-react"
