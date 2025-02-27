
import { ArrowRight, Code, LineChart, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient pt-24">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Web Development Reimagined
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                <span className="block">Elevate Your Digital</span>
                <span className="text-gradient">Presence With AI</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                We combine human creativity with artificial intelligence to deliver exceptional websites at competitive prices, making premium web development accessible to all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/portfolio" className="group flex items-center">
                    View Our Work
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-violet-500/30 rounded-2xl blur-xl opacity-50"></div>
                <div className="relative glass rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Web development with AI" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="animate-bounce"
          >
            <a href="#services" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
              <span className="text-sm font-medium mb-2">Scroll Down</span>
              <ArrowRight size={20} className="rotate-90" />
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container-tight">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary text-primary text-sm font-medium">
                Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                How We Elevate Your Business
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We leverage artificial intelligence to streamline the development process, resulting in faster delivery, lower costs, and exceptional quality.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="text-primary h-8 w-8" />,
                title: "Web Development",
                description: "Custom websites and web applications built with the latest technologies and optimized for performance.",
                delay: 0.1
              },
              {
                icon: <LineChart className="text-primary h-8 w-8" />,
                title: "Digital Marketing",
                description: "Strategies to increase your online visibility, drive traffic, and convert visitors into customers.",
                delay: 0.3
              },
              {
                icon: <Zap className="text-primary h-8 w-8" />,
                title: "AI Integration",
                description: "Implement intelligent features and automation to enhance user experience and streamline operations.",
                delay: 0.5
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: service.delay }}
                className="glass p-8 rounded-xl hover:shadow-lg transition-shadow group"
              >
                <div className="mb-6 p-4 bg-primary/10 inline-block rounded-xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section-padding bg-secondary">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-violet-500/30 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Our work environment"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                The ElevateDev Advantage
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "AI-Powered Development",
                    description: "Our AI tools accelerate the development process without compromising on quality, saving you time and money."
                  },
                  {
                    title: "Human Creativity & Expertise",
                    description: "While AI speeds things up, human experts ensure your website is tailored to your unique brand and audience."
                  },
                  {
                    title: "Transparent Pricing",
                    description: "No hidden fees or surprise costs. Our pricing is clear, competitive, and offers exceptional value."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white">
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-medium mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button asChild className="mt-8 rounded-full">
                <Link to="/pricing">View Our Pricing</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary text-primary text-sm font-medium">
                Testimonials
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with ElevateDev.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "Bloom Boutique",
                image: "https://randomuser.me/api/portraits/women/45.jpg",
                quote: "Working with ElevateDev was a game-changer for our boutique. They delivered a beautiful website in half the time and at a fraction of the cost we expected.",
                delay: 0.1
              },
              {
                name: "Michael Chen",
                company: "TechNova Solutions",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                quote: "As a tech company, we were skeptical about AI-powered development, but ElevateDev proved us wrong. The quality and attention to detail exceeded our expectations.",
                delay: 0.3
              },
              {
                name: "Emma Rodriguez",
                company: "Urban Fitness",
                image: "https://randomuser.me/api/portraits/women/63.jpg",
                quote: "Our fitness studio needed a website that reflected our energy and professionalism. ElevateDev delivered exactly what we needed, and the online booking system has increased our class attendance by 30%.",
                delay: 0.5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: testimonial.delay }}
                className="glass p-8 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-display font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Elevate Your Digital Presence?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss how we can help you create a website that stands out from the competition while staying within your budget.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link to="/contact" className="text-primary font-medium">
                Schedule a Free Consultation
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
