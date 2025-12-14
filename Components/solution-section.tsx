"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Smartphone, Zap, Shield, Search, FileText, CheckCircle2 } from "lucide-react"

export function SolutionSection() {
  const features = [
    { icon: Smartphone, text: "Fast-loading mobile design" },
    { icon: Zap, text: "One-tap 'Call Now' buttons" },
    { icon: Shield, text: "Emergency services highlighted" },
    { icon: Search, text: "Google-friendly structure" },
    { icon: FileText, text: "Simple contact forms" },
    { icon: CheckCircle2, text: "Conversion-focused layouts" },
  ]

  return (
    <section id="how-we-help" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Websites Built Specifically for Locksmiths</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">What you offer</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-accent/50 h-full">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="inline-block mb-4">
                    <Icon className="h-12 w-12 text-accent mx-auto" />
                  </motion.div>
                  <p className="text-lg font-medium">{feature.text}</p>
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
          <p className="text-xl md:text-2xl font-semibold text-foreground max-w-3xl mx-auto">
            I don&apos;t build generic websites — I build call-focused locksmith websites.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
