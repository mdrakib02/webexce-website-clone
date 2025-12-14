"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "24/7 Emergency Locksmith Pro",
      category: "Locksmith",
      description: "Mobile-optimized landing page with instant call buttons and service area coverage",
      image: "/locksmith-emergency-website-professional.jpg",
      tags: ["Landing Page", "Mobile-First", "SEO"],
      metrics: "+185% calls in 3 months",
    },
    {
      title: "Premium Plumbing Services",
      category: "Plumber",
      description: "Full website with booking system and emergency contact optimization",
      image: "/plumber-website-modern-professional.jpg",
      tags: ["Full Website", "Booking System", "Lead Gen"],
      metrics: "+220% online bookings",
    },
    {
      title: "Sparkle Clean Services",
      category: "Cleaning",
      description: "Service showcase website with instant quote form and gallery",
      image: "/cleaning-service-website-modern.jpg",
      tags: ["Service Pages", "Quote Form", "Gallery"],
      metrics: "+150% quote requests",
    },
    {
      title: "QuickFix Locksmith",
      category: "Locksmith",
      description: "Fast-loading emergency service site with location-based SEO",
      image: "/locksmith-mobile-website-fast.jpg",
      tags: ["Speed Optimized", "Local SEO", "Mobile"],
      metrics: "0.8s load time",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Project Showcase</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Real results for real businesses</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2 hover:border-accent/50 group">
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-accent">{project.metrics}</span>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
