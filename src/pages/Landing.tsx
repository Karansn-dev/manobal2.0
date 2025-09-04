import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Heart, Shield, Users, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

const Landing = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Support',
      description: 'Advanced AI chatbot providing 24/7 emotional support and personalized guidance for your mental wellness journey.'
    },
    {
      icon: Users,
      title: 'Professional Network',
      description: 'Connect with licensed therapists, counselors, and mental health professionals through our secure booking system.'
    },
    {
      icon: Heart,
      title: 'Community Support',
      description: 'Join a compassionate community of individuals sharing similar experiences in a safe, moderated environment.'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your mental health data is protected with enterprise-grade security and complete privacy controls.'
    }
  ];

  const benefits = [
    'Instant access to mental health resources',
    'Professional therapy sessions',
    'Peer support community',
    'Personalized wellness plans',
    'Progress tracking tools',
    '24/7 crisis support'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-2 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-foreground">Your Digital Mental Health Sanctuary</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Transform Your</span>
                <br />
                <span className="text-gradient animate-float">Mental Wellness</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
                Experience premium mental health support with AI-driven insights, professional therapy, 
                and a caring community—all in one secure platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link to="/login">
                <Button size="lg" className="btn-glow premium-glow text-lg px-8 py-4">
                  <Heart className="h-5 w-5 mr-2" />
                  Start Your Journey
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/resources">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 backdrop-glass border-white/20 hover:bg-white/10">
                  Explore Resources
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-foreground-muted">AI Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-foreground-muted">Resources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-foreground-muted">Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-foreground-muted">Private</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Mental Health Support
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Discover powerful tools and resources designed to support your mental wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl hover:shadow-premium transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground-muted leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Everything You Need for Better Mental Health
              </h2>
              <p className="text-xl text-foreground-muted mb-8 leading-relaxed">
                MANOBAL provides a comprehensive suite of tools and resources to support 
                your mental wellness journey, from crisis support to long-term growth.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/login">
                <Button size="lg" className="btn-glow">
                  <Heart className="h-5 w-5 mr-2" />
                  Join MANOBAL Today
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="glass-card p-8 rounded-2xl">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full w-fit mx-auto mb-6">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Start Your Journey</h3>
                  <p className="text-foreground-muted mb-6">
                    Take the first step towards better mental health with personalized support and guidance.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground-muted">Setup Progress</span>
                      <span className="text-primary font-medium">Ready</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Mental Wellness?
          </h2>
          <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
            Join thousands of individuals who have found support, growth, and healing through MANOBAL.
          </p>
          <Link to="/login">
            <Button size="lg" className="btn-glow premium-glow text-lg px-12 py-4">
              <Heart className="h-5 w-5 mr-2" />
              Get Started Free
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;