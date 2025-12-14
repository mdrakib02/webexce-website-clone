"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Search, DollarSign, Hammer, Rocket } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Free website review",
      description: "We analyze your current site or discuss your needs",
    },
    {
      icon: DollarSign,
      number: "02",
      title: "Clear pricing & plan",
      description: "Transparent pricing with no hidden fees or surprises",
    },
    {
      icon: Hammer,
      number: "03",
      title: "Website build or fix",
      description: "Expert development with regular updates on progress",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Launch + support",
      description: "Go live with confidence and ongoing support",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple 4-Step Process</h2>
          <p className="text-xl text-muted-foreground">Short, clean, professional.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full relative overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-primary/50">
                  <div className="absolute top-0 right-0 text-8xl font-bold text-muted/10">{step.number}</div>
                  <Icon className="h-12 w-12 text-primary mb-4 relative z-10" />
                  <h3 className="text-xl font-bold mb-2 relative z-10">{step.title}</h3>
                  <p className="text-muted-foreground text-sm relative z-10 leading-relaxed">{step.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
