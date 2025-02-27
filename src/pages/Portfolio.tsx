
import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Project type
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Bloom Boutique",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    description: "A modern e-commerce store for a fashion boutique, featuring online shopping, inventory management, and secure payment processing.",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    link: "#"
  },
  {
    id: 2,
    title: "TechNova Solutions",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    description: "A professional corporate website with service details, team profiles, and a dynamic case studies section.",
    technologies: ["Vue.js", "Tailwind CSS", "Laravel", "MySQL"],
    link: "#"
  },
  {
    id: 3,
    title: "Urban Fitness",
    category: "Health & Fitness",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    description: "A fitness studio website with class schedules, online booking, membership management, and fitness tracking.",
    technologies: ["React", "Express.js", "PostgreSQL", "Auth0"],
    link: "#"
  },
  {
    id: 4,
    title: "Artisan Cafe",
    category: "Restaurant",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    description: "A restaurant website with online menu, reservation system, and integration with delivery platforms.",
    technologies: ["Next.js", "Sanity CMS", "Vercel", "Stripe"],
    link: "#"
  },
  {
    id: 5,
    title: "EcoAdventures",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    description: "A travel agency website with tour packages, booking management, and integration with payment gateways.",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    link: "#"
  },
  {
    id: 6,
    title: "MediCare Clinic",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80",
    description: "A medical clinic website with appointment scheduling, patient portal, and electronic health records integration.",
    technologies: ["Angular", "Node.js", "Firebase", "Stripe"],
    link: "#"
  }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const categories = ["all", ...new Set(projects.map(project => project.category.toLowerCase()))];
  
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeTab);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary text-primary text-sm font-medium">
            Our Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our Recent Work
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of websites and web applications we've created for clients across various industries.
          </p>
        </motion.div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <div className="flex justify-center">
            <TabsList className="glass">
              {categories.map((category, index) => (
                <TabsTrigger key={index} value={category} className="capitalize">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden rounded-xl mb-4 relative">
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity z-10">
                  <Button variant="secondary" size="sm" asChild className="rounded-full">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      View Project <ExternalLink size={16} />
                    </a>
                  </Button>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium px-2 py-1 bg-secondary text-muted-foreground rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description.length > 120 
                    ? `${project.description.substring(0, 120)}...` 
                    : project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-secondary text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="glass p-10 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how we can help you create a website that stands out from the competition while staying within your budget.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
