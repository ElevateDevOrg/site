import { Check, ArrowRight, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { useCurrency } from '@/components/CurrencyContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const plans = [
  {
    name: "Basic",
    description: "Perfect for small businesses just starting out",
    price: 500,
    features: [
      "Responsive Website Design",
      "3-5 Pages",
      "Basic SEO Setup",
      "Contact Form",
      "Mobile Optimization",
      "2 Rounds of Revisions"
    ],
    popular: false
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses with specific needs",
    price: 1000,
    features: [
      "Everything in Basic",
      "Up to 10 Pages",
      "Advanced SEO Optimization",
      "Content Management System",
      "Social Media Integration",
      "Basic Analytics Integration",
      "3 Rounds of Revisions"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    description: "Comprehensive solution for established organizations",
    price: null, // No fixed price
    features: [
      "Custom Website Development",
      "Unlimited Pages",
      "E-commerce Integration",
      "Custom Web Applications",
      "Advanced Analytics & Reporting",
      "User Authentication",
      "API Integrations",
      "Unlimited Revisions"
    ],
    popular: false
  }
];

const hostingPlans = [
  {
    name: "Standard Hosting",
    price: 15,
    features: [
      "99.9% Uptime Guarantee",
      "5GB Storage",
      "Free SSL Certificate",
      "Daily Backups",
      "Email Support"
    ]
  },
  {
    name: "Business Hosting",
    price: 30,
    features: [
      "99.99% Uptime Guarantee",
      "20GB Storage",
      "Free SSL Certificate",
      "Daily Backups",
      "CDN Integration",
      "Priority Support",
      "Security Monitoring"
    ]
  },
  {
    name: "Enterprise Hosting",
    price: 50,
    features: [
      "99.99% Uptime Guarantee",
      "50GB Storage",
      "Free SSL Certificate",
      "Hourly Backups",
      "CDN Integration",
      "24/7 Priority Support",
      "Advanced Security",
      "Dedicated Resources"
    ]
  }
];

const Pricing = () => {
  const { currency, setCurrency, convertPrice, getCurrencySymbol } = useCurrency();

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
            Pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Transparent, Value-Driven Pricing
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered approach allows us to deliver exceptional quality at competitive prices.
            Choose the plan that fits your business needs.
          </p>
          
          <div className="mt-8 flex justify-center items-center gap-3">
            <span className="text-sm font-medium">Select Currency:</span>
            <Select value={currency} onValueChange={(value) => setCurrency(value as any)}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="USD" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD ($)</SelectItem>
                <SelectItem value="GBP">GBP (£)</SelectItem>
                <SelectItem value="EUR">EUR (€)</SelectItem>
                <SelectItem value="ZAR">ZAR (R)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>
        
        <Tabs defaultValue="development" className="mb-12">
          <div className="flex justify-center">
            <TabsList className="glass mb-8">
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="hosting">Hosting</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="development">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative rounded-2xl overflow-hidden ${
                    plan.popular 
                      ? 'glass border-primary border-2 shadow-lg' 
                      : 'glass'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-primary text-white text-xs px-3 py-1 font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      {plan.price !== null ? (
                        <>
                          <span className="text-4xl font-display font-bold">
                            {getCurrencySymbol(currency)}{convertPrice(plan.price)}
                          </span>
                          <span className="text-muted-foreground">/project</span>
                        </>
                      ) : (
                        <span className="text-2xl font-display font-medium">Custom Pricing</span>
                      )}
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      asChild 
                      className={`w-full rounded-full ${plan.popular ? '' : 'bg-secondary text-primary hover:bg-secondary/80'}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        {plan.price !== null ? "Get Started" : "Contact Us"}
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="hosting">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-display font-bold mb-2">Website Hosting Solutions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer reliable hosting services to keep your website fast, secure, and always online.
                All hosting plans are billed monthly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hostingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl overflow-hidden flex flex-col"
                >
                  <div className="p-8 flex-grow">
                    <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                    
                    <div className="mb-6">
                      <span className="text-3xl font-display font-bold">
                        {getCurrencySymbol(currency)}{convertPrice(plan.price)}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-8 pt-0 mt-auto">
                    <Button asChild className="w-full rounded-full">
                      <Link to="/contact">
                        Select Plan
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 glass p-6 rounded-xl bg-primary/5">
              <h3 className="text-xl font-display font-semibold mb-4">All Hosting Plans Include:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Free Domain Name (1 year)",
                  "24/7 Server Monitoring",
                  "DDoS Protection",
                  "Regular Software Updates",
                  "Content Delivery Network",
                  "Monthly Performance Reports"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-display font-bold mb-10 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How does AI help reduce development costs?",
                answer: "Our AI tools automate repetitive tasks, accelerate development, and help identify issues early in the process. This efficiency allows us to reduce costs while maintaining high quality."
              },
              {
                question: "Do I need to purchase hosting from you?",
                answer: "No, hosting is optional. While we do offer reliable hosting solutions, you're free to host your website elsewhere if you prefer. We can provide guidance on selecting the right hosting provider."
              },
              {
                question: "How long does it take to complete a website?",
                answer: "Project timelines vary based on complexity, but our AI-powered approach typically delivers websites 30-50% faster than traditional methods. Basic websites can be completed in 1-2 weeks, while more complex projects may take 3-6 weeks."
              },
              {
                question: "Can I request custom features not mentioned in the plans?",
                answer: "Absolutely! Our plans are starting points, but we can customize any solution to meet your specific needs. Contact us for a personalized quote."
              },
              {
                question: "Do you offer maintenance services after the website is launched?",
                answer: "Yes, we offer maintenance packages to keep your website secure, updated, and running smoothly. These can be arranged separately or included with our hosting plans."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept credit/debit cards, bank transfers, and PayPal. We typically require a 50% deposit to begin work, with the remaining balance due upon project completion."
              }
            ].map((faq, index) => (
              <div key={index} className="glass p-6 rounded-xl">
                <h3 className="text-lg font-display font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="glass p-10 rounded-2xl bg-primary/5">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              If none of our standard packages fit your needs, we'd be happy to provide a custom quote tailored to your specific requirements.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact" className="flex items-center gap-2">
                Request a Custom Quote <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
