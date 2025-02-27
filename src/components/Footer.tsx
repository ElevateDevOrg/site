
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-md bg-primary">
                <div className="absolute inset-0 flex items-center justify-center text-white font-display font-bold text-xl">E</div>
              </div>
              <span className="font-display font-semibold text-2xl tracking-tight">
                Elevate<span className="text-primary">Dev</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Leveraging the power of AI to deliver exceptional websites at competitive prices.
              Our mission is to elevate your digital presence.
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Web Development
              </li>
              <li className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                UI/UX Design
              </li>
              <li className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                E-commerce Solutions
              </li>
              <li className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Web Applications
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">1234 Design Street, Creative Valley, CV 90210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:damoncarle@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  damoncarle@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {currentYear} ElevateDev. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
