"use client"

import type React from "react"

// import { motion } from "framer-motion"
// import { Card } from "./ui/card"
// import { Button } from "./ui/button"
// import { Input } from "./ui/input"
// import { Textarea } from "./ui/textarea"
// import { Label } from "./ui/label"
// import { Phone, Mail, Send } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <h1>Contact</h1>
    // <section id="contact" className="py-20 bg-muted/30">
    //   <div className="container mx-auto px-4">
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 0.6 }}
    //       className="text-center mb-12"
    //     >
    //       <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get More Locksmith Calls?</h2>
    //       <p className="text-xl text-muted-foreground">Let&apos;s transform your online presence</p>
    //     </motion.div>

    //     <div className="max-w-4xl mx-auto">
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         viewport={{ once: true }}
    //         transition={{ duration: 0.6, delay: 0.2 }}
    //       >
    //         <Card className="p-8 md:p-12 border-2">
    //           <form onSubmit={handleSubmit} className="space-y-6">
    //             <div className="grid md:grid-cols-2 gap-6">
    //               <div className="space-y-2">
    //                 <Label htmlFor="name">Full Name *</Label>
    //                 <Input
    //                   id="name"
    //                   name="name"
    //                   placeholder="John Doe"
    //                   value={formData.name}
    //                   onChange={handleChange}
    //                   required
    //                   className="h-12"
    //                 />
    //               </div>
    //               <div className="space-y-2">
    //                 <Label htmlFor="email">Email Address *</Label>
    //                 <Input
    //                   id="email"
    //                   name="email"
    //                   type="email"
    //                   placeholder="john@example.com"
    //                   value={formData.email}
    //                   onChange={handleChange}
    //                   required
    //                   className="h-12"
    //                 />
    //               </div>
    //             </div>

    //             <div className="grid md:grid-cols-2 gap-6">
    //               <div className="space-y-2">
    //                 <Label htmlFor="phone">Phone Number *</Label>
    //                 <Input
    //                   id="phone"
    //                   name="phone"
    //                   type="tel"
    //                   placeholder="+1 (555) 123-4567"
    //                   value={formData.phone}
    //                   onChange={handleChange}
    //                   required
    //                   className="h-12"
    //                 />
    //               </div>
    //               <div className="space-y-2">
    //                 <Label htmlFor="businessType">Business Type *</Label>
    //                 <Input
    //                   id="businessType"
    //                   name="businessType"
    //                   placeholder="e.g., Locksmith, Plumber"
    //                   value={formData.businessType}
    //                   onChange={handleChange}
    //                   required
    //                   className="h-12"
    //                 />
    //               </div>
    //             </div>

    //             <div className="space-y-2">
    //               <Label htmlFor="message">Tell us about your project *</Label>
    //               <Textarea
    //                 id="message"
    //                 name="message"
    //                 placeholder="I need a website for my emergency locksmith business..."
    //                 value={formData.message}
    //                 onChange={handleChange}
    //                 required
    //                 rows={6}
    //                 className="resize-none"
    //               />
    //             </div>

    //             <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
    //               <Button type="submit" size="lg" className="w-full text-lg py-6 group">
    //                 <Phone className="mr-2 h-5 w-5" />
    //                 Request Free Review
    //                 <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
    //               </Button>
    //             </motion.div>

    //             <p className="text-center text-sm text-muted-foreground">
    //               No obligation • Quick response • Locksmith-focused
    //             </p>
    //           </form>

    //           <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-center gap-6">
    //             <div className="flex items-center gap-2 text-muted-foreground">
    //               <Mail className="h-5 w-5" />
    //               <span>info@webexce.com</span>
    //             </div>
    //             <div className="flex items-center gap-2 text-muted-foreground">
    //               <Phone className="h-5 w-5" />
    //               <span>+1 (555) 987-6543</span>
    //             </div>
    //           </div>
    //         </Card>
    //       </motion.div>
          
         
    //     </div>
    //   </div>
    // </section>
  )
}
