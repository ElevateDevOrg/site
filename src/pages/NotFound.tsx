
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container-tight">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <div className="relative inline-block mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-violet-500/30 rounded-xl blur-xl opacity-50"></div>
            <div className="relative text-8xl font-display font-bold text-gradient">
              404
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-display font-bold">
            Page Not Found
          </h1>
          
          <p className="text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          
          <Button asChild size="lg" className="mt-4 rounded-full">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              Return to Home
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
