import { Link } from 'react-router-dom';
import { Brain, Heart, Shield, Users, BookOpen, Calendar } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary/50 backdrop-blur-xl border-t border-white/[0.08] mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">MANOBAL</span>
            </div>
            <p className="text-foreground-muted max-w-md mb-6">
              A premium digital sanctuary for mental wellness, providing AI-driven support, 
              professional resources, and a compassionate community for your journey to better mental health.
            </p>
            <div className="flex items-center space-x-4 text-sm text-foreground-muted">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Secure & Private
              </div>
              <div className="flex items-center">
                <Heart className="h-4 w-4 mr-1" />
                Always Here
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-foreground-muted hover:text-primary transition-colors duration-200 flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-foreground-muted hover:text-primary transition-colors duration-200 flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Community
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-foreground-muted hover:text-primary transition-colors duration-200 flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Session
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground-muted hover:text-primary transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground-muted hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground-muted hover:text-primary transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground-muted hover:text-primary transition-colors duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.08] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground-muted text-sm">
            © {currentYear} MANOBAL. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-foreground-muted text-sm">Made with</span>
            <Heart className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-foreground-muted text-sm">for your wellbeing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;