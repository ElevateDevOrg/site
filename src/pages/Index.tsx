
import { ArrowRight, Code, LineChart, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Abstract Shapes */}
          <motion.div 
            className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-primary/20 to-violet-500/20 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-[20%] left-[5%] w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/10 to-primary/10 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
              rotate: [0, -60, 0]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute top-[40%] left-[30%] w-72 h-72 rounded-full bg-gradient-to-r from-yellow-400/10 to-pink-500/10 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />
          
          {/* Floating Elements */}
          <motion.div 
            className="absolute top-[30%] right-[20%] w-20 h-20 bg-primary/10 rounded-xl backdrop-blur-lg border border-white/10"
            initial={{ y: 0, rotate: 0 }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-[35%] left-[15%] w-16 h-16 bg-primary/20 rounded-full backdrop-blur-lg"
            initial={{ y: 0 }}
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute top-[60%] right-[35%] w-12 h-12 bg-violet-500/10 rounded-md backdrop-blur-lg"
            initial={{ y: 0, rotate: 0 }}
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />
        </div>
        
        <div className="container-tight relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
                AI-Powered Web Development
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                <span className="text-gradient">Elevate Your Digital</span>
                <span className="block mt-1">Presence</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                Beautiful websites, faster & more affordable through AI.
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full h-[500px] perspective">
                {/* Floating Panels */}
                <motion.div 
                  className="absolute top-0 left-[10%] w-64 h-48 glass rounded-xl shadow-xl overflow-hidden border border-white/20"
                  initial={{ x: -10, y: 0, rotateY: 0 }}
                  animate={{ 
                    x: [-10, 10, -10],
                    y: [0, -15, 0],
                    rotateY: [0, 5, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <div className="h-2 w-full bg-gradient-to-r from-primary to-violet-500"></div>
                  <div className="p-4">
                    <div className="w-1/2 h-3 bg-gray-200 rounded-full mb-3"></div>
                    <div className="w-3/4 h-3 bg-gray-200 rounded-full mb-3"></div>
                    <div className="w-2/3 h-3 bg-gray-200 rounded-full"></div>
                    <div className="mt-6 flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                      <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-[5%] right-[5%] w-72 h-60 glass rounded-xl shadow-xl overflow-hidden border border-white/20 z-20"
                  initial={{ x: 10, y: 0, rotateY: 0 }}
                  animate={{ 
                    x: [10, -10, 10],
                    y: [0, 20, 0],
                    rotateY: [0, -5, 0]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                >
                  <div className="h-2 w-full bg-gradient-to-r from-blue-400 to-primary"></div>
                  <div className="p-4">
                    <div className="w-1/3 h-3 bg-gray-200 rounded-full mb-3"></div>
                    <div className="w-full h-24 bg-gray-200/50 rounded-lg mb-3"></div>
                    <div className="w-1/2 h-3 bg-gray-200 rounded-full"></div>
                    <div className="mt-4 flex justify-end">
                      <div className="w-20 h-6 rounded-full bg-primary/20"></div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-[40%] right-[15%] w-56 h-40 glass rounded-xl shadow-xl overflow-hidden border border-white/20 z-10"
                  initial={{ x: 0, y: 10, rotateY: 0 }}
                  animate={{ 
                    x: [0, 15, 0],
                    y: [10, -10, 10],
                    rotateY: [0, 8, 0]
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 2
                  }}
                >
                  <div className="h-2 w-full bg-gradient-to-r from-pink-400 to-purple-500"></div>
                  <div className="flex p-4 items-center justify-center h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="animate-bounce"
          >
            <a href="#services" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
              <span className="text-sm font-medium mb-2">Explore</span>
              <ArrowRight size={20} className="rotate-90" />
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="section-padding bg-white relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-t from-violet-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-tight relative z-10">
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
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="text-primary h-8 w-8" />,
                title: "Web Development",
                description: "Beautiful, responsive websites powered by AI for faster delivery and lower costs.",
                delay: 0.1
              },
              {
                icon: <LineChart className="text-primary h-8 w-8" />,
                title: "Digital Marketing",
                description: "Strategies to increase visibility, drive traffic, and convert visitors to customers.",
                delay: 0.3
              },
              {
                icon: <Zap className="text-primary h-8 w-8" />,
                title: "AI Integration",
                description: "Implement intelligent features to enhance user experience and streamline operations.",
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/pricing" className="group flex items-center">
                View Our Pricing
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Why Choose Us Section - Simplified */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        {/* Abstract Shape */}
        <div className="absolute -top-[10%] -right-[5%] w-80 h-80 rounded-full bg-gradient-to-b from-primary/10 to-transparent blur-3xl"></div>
        
        <div className="container-tight relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                The ElevateDev Advantage
              </h2>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "AI-Powered Development",
                description: "Faster delivery and lower costs without compromising quality."
              },
              {
                title: "Human Creativity",
                description: "AI efficiency combined with human creativity for your unique brand."
              },
              {
                title: "Transparent Pricing",
                description: "Clear, competitive pricing with no hidden fees or surprise costs."
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center text-white">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-display font-medium mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button asChild className="rounded-full">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </motion.div>
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
              Let's create something amazing together.
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
