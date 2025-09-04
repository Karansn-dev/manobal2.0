import { motion } from 'framer-motion';
import { Calendar, Clock, Video, User, Star, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Booking = () => {
  const therapists = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Anxiety & Depression',
      rating: 4.9,
      sessions: 1247,
      price: 120,
      availability: 'Available Today',
      image: '👩‍⚕️',
      verified: true
    },
    {
      name: 'Dr. Michael Chen',  
      specialty: 'Trauma & PTSD',
      rating: 4.8,
      sessions: 892,
      price: 135,
      availability: 'Next Available: Tomorrow',
      image: '👨‍⚕️',
      verified: true
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Couples & Family Therapy',
      rating: 4.9,
      sessions: 673,
      price: 140,
      availability: 'Available Today',
      image: '👩‍⚕️',
      verified: true
    }
  ];

  const sessionTypes = [
    {
      icon: Video,
      title: 'Video Session',
      description: 'Face-to-face therapy from the comfort of your home',
      duration: '50 minutes',
      popular: true
    },
    {
      icon: User,
      title: 'In-Person',
      description: 'Traditional therapy in our secure office locations',
      duration: '50 minutes',
      popular: false
    },
    {
      icon: Clock,
      title: 'Express Session',
      description: 'Quick check-in for ongoing support',
      duration: '25 minutes',
      popular: false
    }
  ];

  const availableSlots = [
    { time: '9:00 AM', available: true },
    { time: '10:30 AM', available: false },
    { time: '12:00 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '3:30 PM', available: false },
    { time: '5:00 PM', available: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-full px-4 py-2 mb-6">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Book a Session</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Professional Therapy Sessions
              </h1>
              
              <p className="text-xl text-foreground-muted leading-relaxed">
                Connect with licensed therapists and mental health professionals 
                for personalized support tailored to your needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-16 bg-background-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Session Type</h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Select the format that works best for your schedule and comfort level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {sessionTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-card p-6 rounded-xl hover:shadow-premium transition-all duration-300 cursor-pointer relative ${
                  type.popular ? 'border-primary/20 bg-primary/5' : ''
                }`}
              >
                {type.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg w-fit mx-auto mb-4">
                  <type.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 text-center">{type.title}</h3>
                <p className="text-foreground-muted text-center mb-4 text-sm leading-relaxed">{type.description}</p>
                
                <div className="text-center">
                  <span className="text-primary font-medium">{type.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Therapists */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Licensed Therapists
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Choose from our network of experienced mental health professionals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {therapists.map((therapist, index) => (
              <motion.div
                key={therapist.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl hover:shadow-premium transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{therapist.image}</div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{therapist.name}</h3>
                    {therapist.verified && (
                      <CheckCircle className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <p className="text-foreground-muted">{therapist.specialty}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-warning fill-current" />
                      <span className="text-foreground font-medium">{therapist.rating}</span>
                    </div>
                    <span className="text-foreground-muted text-sm">{therapist.sessions} sessions</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-muted">Session Price</span>
                    <span className="text-foreground font-medium">${therapist.price}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span className="text-success text-sm">{therapist.availability}</span>
                  </div>
                </div>

                <Button className="w-full btn-glow">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Session
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-background-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Simple Booking Process</h2>
              <p className="text-foreground-muted">Book your session in just a few clicks</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Available Times */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Available Times Today
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {availableSlots.map((slot, index) => (
                    <button
                      key={slot.time}
                      disabled={!slot.available}
                      className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        slot.available
                          ? 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white'
                          : 'bg-muted/50 text-foreground-muted border border-muted cursor-not-allowed'
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
                
                <Button className="w-full mt-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  View More Dates
                </Button>
              </div>

              {/* Session Summary */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-foreground mb-4">Session Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-muted">Session Type</span>
                    <span className="text-foreground">Video Session</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-muted">Duration</span>
                    <span className="text-foreground">50 minutes</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-muted">Therapist</span>
                    <span className="text-foreground">To be selected</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-muted">Date & Time</span>
                    <span className="text-foreground">To be selected</span>
                  </div>
                  
                  <div className="border-t border-white/[0.08] pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">Total</span>
                      <span className="text-foreground font-medium text-lg">$120</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full btn-glow premium-glow" size="lg">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Complete Booking
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <CheckCircle className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Insurance & Payment Options
            </h2>
            <p className="text-xl text-foreground-muted mb-8 leading-relaxed">
              We accept most major insurance plans and offer flexible payment options 
              to make mental health care accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-glow">
                Check Insurance Coverage
              </Button>
              <Button variant="outline" size="lg" className="backdrop-glass border-white/20 hover:bg-white/10">
                View Payment Plans
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;