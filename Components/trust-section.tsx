"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Target, Zap, Clock, MessageSquare, Ban } from "lucide-react"

export function TrustSection() {
  const reasons = [
    {
      icon: Target,
      title: "Specialized in locksmith businesses",
      description: "Deep understanding of emergency service industry needs",
    },
    {
      icon: Zap,
      title: "Focus on calls, not just design",
      description: "Every element optimized for conversion and customer action",
    },
    {
      icon: Clock,
      title: "Fast turnaround",
      description: "Get your website live quickly and start generating leads",
    },
    {
      icon: MessageSquare,
      title: "Clear communication",
      description: "No technical jargon, just clear updates and results",
    },
    {
      icon: Ban,
      title: "No long-term contracts",
      description: "Flexible engagement that works for your business",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Locksmiths Choose Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-accent/50">
                  <Icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
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
          <p className="text-xl md:text-2xl font-semibold text-foreground max-w-3xl mx-auto italic">
            Your website should work as hard as you do during emergencies.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
