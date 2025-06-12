import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Building2, Heart, Star, Gift, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);
  const isInView = useInView(servicesRef, { once: true, threshold: 0.1 });
  const isCtaInView = useInView(ctaRef, { once: true, threshold: 0.3 });

  const services = [
    {
      id: 'balloon-party',
      title: 'Balloon Celebrations',
      icon: Sparkles,
      gradient: 'from-rose-gold via-deep-rose to-warm-gold',
      bgGradient: 'from-rose-gold/10 via-deep-rose/5 to-warm-gold/10',
      description: 'Transform any space into a whimsical wonderland with our artistic balloon installations and themed decorations.',
      features: [
        'Custom Color Palettes & Themes',
        'Architectural Balloon Installations', 
        'Interactive Photo Experiences',
        'Age-Appropriate Design Concepts'
      ],
      gallery: [
        'https://images.pexels.com/photos/1729791/pexels-photo-1729791.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1729787/pexels-photo-1729787.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1729799/pexels-photo-1729799.jpeg?auto=compress&cs=tinysrgb&w=500',
      ]
    },
    {
      id: 'corporate',
      title: 'Corporate Excellence',
      icon: Building2,
      gradient: 'from-warm-gold via-rich-gold to-deep-rose',
      bgGradient: 'from-warm-gold/10 via-rich-gold/5 to-deep-rose/10',
      description: 'Elevate your corporate events with sophisticated planning that seamlessly blends professionalism with memorable experiences.',
      features: [
        'Executive Conference Management',
        'Strategic Team Building Experiences',
        'Premium Product Launch Events',
        'Prestigious Award Ceremonies'
      ],
      gallery: [
        'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=500',
      ]
    },
    {
      id: 'weddings',
      title: 'Wedding Dreams',
      icon: Heart,
      gradient: 'from-deep-rose via-rose-gold to-warm-gold',
      bgGradient: 'from-deep-rose/10 via-rose-gold/5 to-warm-gold/10',
      description: 'Create the wedding of your dreams with our meticulous attention to detail and passion for romantic perfection.',
      features: [
        'Bespoke Traditional & Modern Setups',
        'Luxury Floral Design & Arrangements',
        'Professional Photography Coordination',
        'Gourmet Catering & Menu Curation'
      ],
      gallery: [
        'https://images.pexels.com/photos/1729787/pexels-photo-1729787.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1729799/pexels-photo-1729799.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=500',
      ]
    },
    {
      id: 'traditional',
      title: 'Cultural Heritage',
      icon: Star,
      gradient: 'from-warm-gold via-deep-rose to-rose-gold',
      bgGradient: 'from-warm-gold/10 via-deep-rose/5 to-rose-gold/10',
      description: 'Honor traditions with authentic cultural celebrations that respect heritage while creating contemporary elegance.',
      features: [
        'Authentic Festival Decorations',
        'Sacred Religious Ceremonies',
        'Traditional Cultural Programs',
        'Heritage-Inspired Themes'
      ],
      gallery: [
        'https://images.pexels.com/photos/1729799/pexels-photo-1729799.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1729787/pexels-photo-1729787.jpeg?auto=compress&cs=tinysrgb&w=500',
      ]
    },
    {
      id: 'special',
      title: 'Special Occasions',
      icon: Gift,
      gradient: 'from-rose-gold via-warm-gold to-deep-rose',
      bgGradient: 'from-rose-gold/10 via-warm-gold/5 to-deep-rose/10',
      description: 'Celebrate life\'s precious milestones with custom-designed events that capture the essence of your special moments.',
      features: [
        'Elegant Baby Shower Celebrations',
        'Milestone Graduation Parties',
        'Romantic Anniversary Celebrations',
        'Creative Themed Party Experiences'
      ],
      gallery: [
        'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1729791/pexels-photo-1729791.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=500',
      ]
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-pearl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-20 h-0.5 bg-gradient-to-r from-rose-gold to-warm-gold" />
            <span className="text-warm-gold font-inter text-sm tracking-[0.2em] uppercase font-medium">
              Our Services
            </span>
            <div className="w-20 h-0.5 bg-gradient-to-r from-warm-gold to-rose-gold" />
          </div>
          
          <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-charcoal mb-8">
            Event Categories
          </h1>
          
          <p className="text-warm-gray text-xl max-w-3xl mx-auto leading-relaxed font-inter">
            From intimate celebrations to grand occasions, we specialize in creating bespoke experiences that reflect your unique vision and exceed your expectations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div ref={servicesRef} className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 1, 
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${service.bgGradient} border border-white/20 shadow-luxury hover:shadow-luxury-lg transition-all duration-700 group`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-rose-gold to-warm-gold rounded-full blur-2xl" />
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-deep-rose to-rose-gold rounded-full blur-xl" />
              </div>

              <div className={`grid lg:grid-cols-2 gap-12 p-8 lg:p-16 relative z-10 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-glow`}
                    >
                      <service.icon className="w-8 h-8 text-pearl" />
                    </motion.div>
                    <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-charcoal">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-warm-gray text-lg leading-relaxed font-inter">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="font-playfair text-xl font-semibold text-charcoal">
                      Premium Features:
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                          className="flex items-center text-warm-gray font-inter"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-4 flex-shrink-0`} />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group/btn inline-flex items-center px-8 py-4 bg-gradient-to-r ${service.gradient} text-pearl rounded-full font-inter font-medium transition-all duration-500 cursor-hover shadow-glow hover:shadow-glow-gold relative overflow-hidden`}
                    onClick={() => {
                      const message = encodeURIComponent(`Hi! I'm interested in ${service.title} services. Can you help me plan something extraordinary?`);
                      window.open(`https://wa.me/+919876543210?text=${message}`, '_blank');
                    }}
                  >
                    <span className="relative z-10 flex items-center">
                      Get Quote for {service.title}
                      <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </div>
                
                {/* Gallery */}
                <div className={`grid grid-cols-2 gap-4 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {service.gallery.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        delay: (index * 0.2) + (imageIndex * 0.1),
                        duration: 0.6
                      }}
                      whileHover={{ scale: 1.05, rotate: imageIndex % 2 === 0 ? 2 : -2 }}
                      className="relative overflow-hidden rounded-2xl cursor-view shadow-luxury group-hover:shadow-luxury-lg transition-all duration-500"
                    >
                      <img
                        src={image}
                        alt={`${service.title} ${imageIndex + 1}`}
                        className="w-full h-32 lg:h-40 object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 80 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-32 p-12 bg-gradient-to-br from-charcoal via-soft-black to-charcoal rounded-3xl shadow-luxury-lg relative overflow-hidden"
        >
          {/* Background Elements */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rose-gold to-warm-gold rounded-full blur-3xl"
          />
          
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 bg-gradient-to-br from-rose-gold to-warm-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow-gold"
            >
              <Star className="w-8 h-8 text-pearl" />
            </motion.div>
            
            <h3 className="font-playfair text-3xl lg:text-5xl font-bold text-pearl mb-6">
              Ready to Plan Your
              <span className="block bg-gradient-to-r from-rose-gold to-warm-gold bg-clip-text text-transparent">
                Perfect Event?
              </span>
            </h3>
            
            <p className="text-pearl/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-inter">
              Let's discuss your vision and create something extraordinary together. Contact us via WhatsApp for instant consultation and personalized quotes.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-rose-gold via-deep-rose to-warm-gold text-pearl rounded-full font-inter font-semibold text-lg shadow-glow-gold hover:shadow-luxury-lg transition-all duration-500 cursor-hover relative overflow-hidden"
              onClick={() => {
                const message = encodeURIComponent("Hi! I'd like to discuss my event planning needs and explore your premium services. Can we schedule a consultation?");
                window.open(`https://wa.me/+919876543210?text=${message}`, '_blank');
              }}
            >
              <span className="relative z-10 flex items-center">
                Start Planning Now
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-warm-gold via-rose-gold to-deep-rose opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;