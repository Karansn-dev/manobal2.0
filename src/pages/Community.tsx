import { motion } from 'framer-motion';
import { Users, MessageCircle, Heart, Shield, Plus, TrendingUp, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Community = () => {
  const forumCategories = [
    {
      name: 'General Support',
      description: 'Share experiences and find encouragement',
      members: 2847,
      posts: 15632,
      color: 'from-primary to-primary-dark',
      icon: Heart
    },
    {
      name: 'Anxiety & Stress',
      description: 'Discuss anxiety management and coping strategies',
      members: 3291,
      posts: 21840,
      color: 'from-secondary to-secondary-light',
      icon: MessageCircle
    },
    {
      name: 'Depression Support',
      description: 'A safe space for those dealing with depression',
      members: 2156,
      posts: 12963,
      color: 'from-success to-success/80',
      icon: Users
    },
    {
      name: 'Mindfulness & Meditation',
      description: 'Share mindfulness practices and meditation tips',
      members: 1847,
      posts: 8924,
      color: 'from-warning to-warning/80',
      icon: Star
    }
  ];

  const recentPosts = [
    {
      title: 'Finding strength in small victories',
      author: 'Sarah M.',
      category: 'General Support',
      replies: 23,
      time: '2 hours ago',
      featured: true
    },
    {
      title: 'Breathing techniques that actually work',
      author: 'Mike D.',
      category: 'Anxiety & Stress',
      replies: 15,
      time: '4 hours ago',
      featured: false
    },
    {
      title: 'My morning routine for better mental health',
      author: 'Emma L.',
      category: 'Mindfulness & Meditation',
      replies: 31,
      time: '6 hours ago',
      featured: true
    },
    {
      title: 'Therapy session prep tips',
      author: 'Alex R.',
      category: 'General Support',
      replies: 8,
      time: '1 day ago',
      featured: false
    }
  ];

  const communityStats = [
    { label: 'Active Members', value: '12,847', icon: Users },
    { label: 'Posts This Week', value: '2,341', icon: MessageCircle },
    { label: 'Helpful Responses', value: '8,926', icon: Heart },
    { label: 'Expert Moderators', value: '24', icon: Shield }
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
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Community Forum</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Connect & Support
              </h1>
              
              <p className="text-xl text-foreground-muted leading-relaxed mb-8">
                Join a compassionate community where you can share experiences, 
                find support, and help others on their mental wellness journey.
              </p>

              <Button size="lg" className="btn-glow premium-glow">
                <Plus className="h-5 w-5 mr-2" />
                Create New Post
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-background-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg w-fit mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-foreground-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Forum Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Forum Categories
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Find the right community space for your needs and interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {forumCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl hover:shadow-premium transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-gradient-to-br ${category.color} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <TrendingUp className="h-5 w-5 text-success" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">{category.name}</h3>
                <p className="text-foreground-muted mb-4 leading-relaxed">{category.description}</p>
                
                <div className="flex justify-between items-center text-sm text-foreground-muted">
                  <div className="flex items-center space-x-4">
                    <span>{category.members.toLocaleString()} members</span>
                    <span>{category.posts.toLocaleString()} posts</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                    Join →
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-background-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Recent Discussions</h2>
                <p className="text-foreground-muted">Latest conversations from our community</p>
              </div>
              <Button variant="outline" className="backdrop-glass border-white/20 hover:bg-white/10">
                View All Posts
              </Button>
            </div>

            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`glass-card p-6 rounded-xl hover:shadow-premium transition-all duration-300 cursor-pointer ${
                    post.featured ? 'border-primary/20 bg-primary/5' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        {post.featured && (
                          <div className="bg-primary/20 text-primary text-xs font-medium px-2 py-1 rounded-full">
                            Featured
                          </div>
                        )}
                        <span className="text-sm text-foreground-muted">{post.category}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <div className="flex items-center space-x-4 text-sm text-foreground-muted">
                        <span>by {post.author}</span>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.replies} replies</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.time}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Heart className="h-5 w-5 text-foreground-muted hover:text-primary cursor-pointer transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Safe & Supportive Space
            </h2>
            <p className="text-xl text-foreground-muted mb-8 leading-relaxed">
              Our community is moderated by mental health professionals to ensure 
              a safe, supportive, and respectful environment for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-glow">
                <Shield className="h-5 w-5 mr-2" />
                Community Guidelines
              </Button>
              <Button variant="outline" size="lg" className="backdrop-glass border-white/20 hover:bg-white/10">
                Report an Issue
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;