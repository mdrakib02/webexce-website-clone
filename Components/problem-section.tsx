"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { AlertCircle, Clock, Phone, Users } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Website loads slowly on mobile",
      description: "Potential customers leave before your site even loads",
    },
    {
      icon: AlertCircle,
      title: "Emergency services not clearly visible",
      description: "Visitors can't quickly find the help they need",
    },
    {
      icon: Phone,
      title: '"Call Now" button is hard to find',
      description: "Lost opportunities for immediate conversions",
    },
    {
      icon: Users,
      title: "Customers leave and call competitors",
      description: "Every second counts in emergency situations",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Most Locksmith Websites Lose Calls</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
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
            If your site isn&apos;t built for emergencies, you&apos;re losing money.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
