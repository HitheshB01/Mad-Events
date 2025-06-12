import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Heart, Star, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const contactRef = useRef(null);
  const ctaRef = useRef(null);
  const isInView = useInView(contactRef, { once: true, threshold: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, threshold: 0.3 });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 98765 43210',
      description: 'Call us for immediate assistance',
      gradient: 'from-rose-gold to-deep-rose',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+91 98765 43210',
      description: 'Quick responses via WhatsApp',
      gradient: 'from-success-green to-green-600',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@madevents.com',
      description: 'Send us your detailed requirements',
      gradient: 'from-warm-gold to-rich-gold',
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: '200km around Bangalore',
      description: 'We travel to you',
      gradient: 'from-deep-rose to-rose-gold',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: '9 AM - 8 PM',
      description: 'Monday to Sunday',
      gradient: 'from-warm-gold to-deep-rose',
    },
  ];

  const whyChooseUs = [
    '10+ years of premium event planning experience',
    '500+ successful events delivered with excellence',
    'Personalized luxury service for every client',
    'Complete coverage across 200km from Bangalore',
    'Multilingual support in English and Kannada',
    '24/7 customer support during event planning'
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'd like to discuss planning an extraordinary event with MAD Events. Can we schedule a consultation?");
    window.open(`https://wa.me/+919876543210?text=${message}`, '_blank');
  };

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
              Get In Touch
            </span>
            <div className="w-20 h-0.5 bg-gradient-to-r from-warm-gold to-rose-gold" />
          </div>
          
          <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-charcoal mb-8">
            Contact Us
          </h1>
          
          <p className="text-warm-gray text-xl max-w-3xl mx-auto leading-relaxed font-inter">
            Ready to transform your vision into an extraordinary celebration? We're here to guide you through every step of creating your perfect event experience.
          </p>
        </motion.div>

        <div ref={contactRef} className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-luxury hover:shadow-luxury-lg transition-all duration-700 cursor-hover border border-white/20"
                >
                  <div className="flex items-start space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow`}
                    >
                      <info.icon className="w-7 h-7 text-pearl" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2 group-hover:text-deep-rose transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-charcoal font-inter font-semibold text-lg mb-2">{info.details}</p>
                      <p className="text-warm-gray font-inter">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="p-10 bg-gradient-to-br from-warm-gold/10 via-rose-gold/5 to-deep-rose/10 rounded-3xl border border-warm-gold/20 shadow-luxury relative overflow-hidden"
            >
              {/* Background Pattern */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-gold/20 to-warm-gold/20 rounded-full blur-2xl"
              />
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="w-12 h-12 bg-gradient-to-br from-rose-gold to-warm-gold rounded-full flex items-center justify-center shadow-glow"
                  >
                    <Heart className="w-6 h-6 text-pearl" />
                  </motion.div>
                  <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-charcoal">
                    Why Choose MAD Events?
                  </h3>
                </div>
                
                <div className="grid gap-4">
                  {whyChooseUs.map((reason, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + (index * 0.1) }}
                      className="flex items-center text-warm-gray font-inter"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-rose-gold to-warm-gold rounded-full mr-4 flex-shrink-0" />
                      {reason}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-br from-charcoal via-soft-black to-charcoal rounded-3xl p-10 lg:p-16 text-pearl shadow-luxury-lg relative overflow-hidden"
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
            
            <div className="text-center relative z-10">
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                }}
                className="w-20 h-20 bg-gradient-to-br from-rose-gold to-warm-gold rounded-full flex items-center justify-center mx-auto mb-10 shadow-glow-gold"
              >
                <MessageCircle className="w-10 h-10 text-pearl" />
              </motion.div>
              
              <h2 className="font-playfair text-3xl lg:text-5xl font-bold mb-6">
                Let's Start Planning
                <span className="block bg-gradient-to-r from-rose-gold to-warm-gold bg-clip-text text-transparent">
                  Your Dream Event!
                </span>
              </h2>
              
              <p className="text-pearl/80 text-lg mb-10 leading-relaxed font-inter max-w-md mx-auto">
                The easiest way to begin is through WhatsApp. Share your vision with us, and we'll respond within minutes with personalized ideas and a custom proposal.
              </p>
              
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group w-full bg-gradient-to-r from-success-green to-green-600 hover:from-green-600 hover:to-success-green text-pearl py-6 px-10 rounded-full font-inter font-semibold text-lg transition-all duration-500 cursor-hover shadow-glow hover:shadow-luxury-lg relative overflow-hidden mb-8"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Chat on WhatsApp
                </span>
              </motion.button>
              
              <div className="pt-8 border-t border-pearl/20">
                <p className="text-pearl/60 text-sm font-inter mb-4">
                  Or call us directly for immediate assistance
                </p>
                <a 
                  href="tel:+919876543210" 
                  className="text-rose-gold hover:text-warm-gold transition-colors font-inter font-medium text-lg"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Languages Section */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 80 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-32 p-12 bg-white/80 backdrop-blur-sm rounded-3xl shadow-luxury border border-white/20 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-br from-rose-gold to-warm-gold rounded-3xl"
          />
          
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 bg-gradient-to-br from-rose-gold to-warm-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow-gold"
            >
              <Globe className="w-8 h-8 text-pearl" />
            </motion.div>
            
            <h3 className="font-playfair text-2xl lg:text-4xl font-bold text-charcoal mb-6">
              We Speak Your Language
            </h3>
            
            <p className="text-warm-gray font-inter text-lg mb-10 max-w-2xl mx-auto">
              Communicate with us in English or Kannada - whatever makes you most comfortable. Our multilingual team ensures clear communication throughout your event planning journey.
            </p>
            
            <div className="flex justify-center space-x-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center group cursor-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-gold/20 to-deep-rose/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <span className="text-deep-rose font-playfair font-bold text-xl">EN</span>
                </div>
                <p className="text-warm-gray font-inter font-medium">English</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center group cursor-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-warm-gold/20 to-rich-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-gold transition-all duration-300">
                  <span className="text-warm-gold font-playfair font-bold text-lg">ಕನ್ನಡ</span>
                </div>
                <p className="text-warm-gray font-inter font-medium">Kannada</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;