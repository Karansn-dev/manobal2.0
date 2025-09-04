import { motion } from 'framer-motion';
import { Brain, Heart, Shield, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Login = () => {
  const handleGoogleSignIn = () => {
    // Firebase Google Sign-In will be implemented here
    console.log('Google Sign-In clicked');
  };

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-2xl shadow-premium"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full">
                  <Brain className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">Welcome to MANOBAL</h1>
              <p className="text-foreground-muted">
                Sign in to access your personal mental wellness sanctuary
              </p>
            </div>

            {/* Features Preview */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Heart className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">24/7 AI Support</div>
                  <div className="text-xs text-foreground-muted">Always here when you need guidance</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <div className="bg-secondary/20 p-2 rounded-lg">
                  <Shield className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Private & Secure</div>
                  <div className="text-xs text-foreground-muted">Your data is protected and encrypted</div>
                </div>
              </div>
            </div>

            {/* Sign In Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleGoogleSignIn}
                className="w-full btn-glow py-3 text-base font-medium"
                size="lg"
              >
                <Chrome className="h-5 w-5 mr-3" />
                Continue with Google
              </Button>
            </motion.div>

            {/* Privacy Notice */}
            <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="flex items-start space-x-2">
                <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-xs text-foreground-muted">
                  <strong className="text-primary">Privacy First:</strong> We never share your personal information. 
                  Your mental health data is encrypted and stored securely according to HIPAA standards.
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] text-center space-y-2">
              <div className="flex justify-center space-x-4 text-xs text-foreground-muted">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-colors">Help</a>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-8"
          >
            <p className="text-foreground-muted text-sm">
              New to mental health platforms?{' '}
              <a href="/resources" className="text-primary hover:text-primary-dark transition-colors">
                Explore our resources
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;