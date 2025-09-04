import { motion } from 'framer-motion';
import { BookOpen, Video, Headphones, FileText, Users, Brain, Heart, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resources = () => {
  const resourceCategories = [
    {
      icon: Brain,
      title: 'Mental Health Guides',
      description: 'Comprehensive guides on anxiety, depression, stress management, and more',
      items: ['Anxiety Management', 'Depression Support', 'Stress Relief', 'Mindfulness'],
      color: 'from-primary to-primary-dark'
    },
    {
      icon: Video,
      title: 'Video Library',
      description: 'Expert-led sessions, meditation videos, and therapeutic exercises',
      items: ['Guided Meditations', 'Therapy Sessions', 'Breathing Exercises', 'Yoga for Mental Health'],
      color: 'from-secondary to-secondary-light'
    },
    {
      icon: Headphones,
      title: 'Audio Resources',
      description: 'Podcasts, relaxation sounds, and guided audio sessions',
      items: ['Mental Health Podcasts', 'Sleep Stories', 'Nature Sounds', 'Affirmations'],
      color: 'from-success to-success/80'
    },
    {
      icon: FileText,
      title: 'Worksheets & Tools',
      description: 'Interactive worksheets, mood trackers, and self-assessment tools',
      items: ['Mood Tracker', 'Thought Records', 'Goal Setting', 'Progress Charts'],
      color: 'from-warning to-warning/80'
    }
  ];

  const featuredResources = [
    {
      title: 'Crisis Support Guide',
      description: 'Immediate resources and hotlines for mental health emergencies',
      type: 'Emergency',
      urgent: true
    },
    {
      title: 'Daily Wellness Routine',
      description: 'Build healthy habits with our comprehensive daily wellness guide',
      type: 'Guide',
      urgent: false
    },
    {
      title: 'Understanding Anxiety',
      description: 'Learn about anxiety symptoms, triggers, and coping strategies',
      type: 'Educational',
      urgent: false
    }
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
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Resource Hub</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Mental Health Resources
              </h1>
              
              <p className="text-xl text-foreground-muted leading-relaxed">
                Discover comprehensive resources, tools, and educational materials 
                to support your mental wellness journey at every step.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-background-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Resources</h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Essential resources recommended by our mental health professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-card p-6 rounded-xl hover:shadow-premium transition-all duration-300 ${
                  resource.urgent ? 'border-destructive/20 bg-destructive/5' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    resource.urgent 
                      ? 'bg-destructive/20 text-destructive' 
                      : 'bg-primary/20 text-primary'
                  }`}>
                    {resource.type}
                  </span>
                  {resource.urgent && (
                    <Heart className="h-4 w-4 text-destructive animate-pulse" />
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">{resource.title}</h3>
                <p className="text-foreground-muted mb-6 leading-relaxed">{resource.description}</p>
                
                <Button 
                  variant={resource.urgent ? "destructive" : "default"} 
                  className="w-full"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Access Resource
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Find the right resources for your specific needs and interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-xl hover:shadow-premium transition-all duration-300 group"
              >
                <div className={`bg-gradient-to-br ${category.color} p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">{category.title}</h3>
                <p className="text-foreground-muted mb-6 leading-relaxed">{category.description}</p>
                
                <div className="space-y-2 mb-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={item} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full backdrop-glass border-white/20 hover:bg-white/10">
                  Explore {category.title}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-foreground-muted mb-8 leading-relaxed">
              Connect with others on similar journeys, share experiences, and find support 
              in our moderated community forums.
            </p>
            <Button size="lg" className="btn-glow">
              <Users className="h-5 w-5 mr-2" />
              Join Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;