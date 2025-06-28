import React, { useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Calendar, Heart, Sparkles, Award, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const statsRef = useRef(null);
  const previewRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isAboutInView = useInView(aboutRef, { once: true, threshold: 0.3 });
  const isStatsInView = useInView(statsRef, { once: true, threshold: 0.3 });
  const isPreviewInView = useInView(previewRef, { once: true, threshold: 0.2 });
  const isCtaInView = useInView(ctaRef, { once: true, threshold: 0.3 });
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y1Spring = useSpring(y1, springConfig);
  const y2Spring = useSpring(y2, springConfig);

  const stats = [
    { number: '500+', label: 'Events Organized', icon: Calendar, color: 'from-rose-gold to-deep-rose' },
    { number: '50K+', label: 'Happy Clients', icon: Users, color: 'from-warm-gold to-rich-gold' },
    { number: '10+', label: 'Years Experience', icon: Award, color: 'from-deep-rose to-rose-gold' },
    { number: '200km', label: 'Service Radius', icon: MapPin, color: 'from-rich-gold to-warm-gold' },
  ];

  const eventPreviews = [
    {
      title: 'Balloon Celebrations',
      image: 'https://images.pexels.com/photos/1729791/pexels-photo-1729791.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Whimsical balloon artistry that transforms spaces into wonderlands of joy and color.',
      accent: 'rose-gold'
    },
    {
      title: 'Corporate Excellence',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sophisticated corporate events that blend professionalism with memorable experiences.',
      accent: 'warm-gold'
    },
    {
      title: 'Wedding Dreams',
      image: 'https://images.pexels.com/photos/1729787/pexels-photo-1729787.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Romantic celebrations crafted with meticulous attention to every precious detail.',
      accent: 'deep-rose'
    },
  ];

  return (
    <div className="bg-pearl">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background Elements */}
        <motion.div
          style={{ y: y1Spring }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-rose-gold/20 to-warm-gold/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          style={{ y: y2Spring }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-deep-rose/20 to-rose-gold/20 rounded-full blur-2xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ opacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-rose-gold to-warm-gold" />
              <span className="text-warm-gold font-inter text-sm tracking-[0.2em] uppercase font-medium">
                Premium Event Planning
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-playfair text-6xl lg:text-8xl font-bold text-charcoal mb-8 leading-[0.9]"
            >
              MAD
              <motion.span 
                className="block bg-gradient-to-r from-rose-gold via-deep-rose to-warm-gold bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200% 100%' }}
              >
                Events
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-warm-gray text-xl mb-10 max-w-lg leading-relaxed font-inter"
            >
              Crafting extraordinary moments through bespoke event experiences that transcend expectations and create lasting memories.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link
                to="/services"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-gold to-deep-rose text-pearl rounded-full font-inter font-medium transition-all duration-500 cursor-hover shadow-glow hover:shadow-glow-gold overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Explore Services
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-deep-rose to-warm-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              
              <Link
                to="/gallery"
                className="group inline-flex items-center px-8 py-4 border-2 border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-pearl rounded-full font-inter font-medium transition-all duration-500 cursor-hover relative overflow-hidden"
              >
                <span className="relative z-10">View Gallery</span>
                <div className="absolute inset-0 bg-warm-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
  className="relative"
>
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    className="relative z-10 bg-gradient-to-br from-rose-gold/30 to-warm-gold/30 backdrop-blur-md rounded-3xl shadow-luxury-lg p-8 lg:p-12 text-center"
  >
    <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-charcoal mb-4">
      Exclusive Offer!
    </h2>
    <p className="text-xl lg:text-2xl font-inter text-warm-gold mb-6 leading-relaxed">
      From <span className="font-semibold">27th June</span> to <span className="font-semibold">5th July</span>
    </p>
    <p className="text-lg lg:text-xl font-inter text-warm-gray mb-4">
      <span className="font-semibold">✓ 10% Off</span> on all pre-bookings
    </p>
    <p className="text-lg lg:text-xl font-inter text-warm-gray mb-6">
      <span className="font-semibold">✓ 60% Off</span> for one lucky customer!
    </p>

    <a
      href="https://forms.gle/7LcZhtYeJ7BCDRUT8"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-rose-gold to-deep-rose text-pearl rounded-full font-inter font-medium shadow-glow hover:shadow-glow-gold transition-all duration-500"
    >
      Pre-Book Now
    </a>
  </motion.div>

  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-warm-gold to-rich-gold rounded-full flex items-center justify-center shadow-glow-gold"
  >
    <Sparkles className="w-8 h-8 text-pearl" />
  </motion.div>

  <motion.div
    animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-rose-gold/30 to-deep-rose/30 rounded-full backdrop-blur-sm border border-rose-gold/20"
  />
</motion.div>


        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-32 bg-gradient-to-br from-champagne to-pearl relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-96 h-96 bg-gradient-to-br from-rose-gold to-warm-gold rounded-full blur-3xl" />
        </motion.div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isAboutInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center justify-center space-x-3 mb-8"
            >
              <div className="w-16 h-0.5 bg-gradient-to-r from-rose-gold to-warm-gold" />
              <Heart className="w-6 h-6 text-deep-rose" />
              <div className="w-16 h-0.5 bg-gradient-to-r from-warm-gold to-rose-gold" />
            </motion.div>
            
            <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-charcoal mb-8">
              Crafting Experiences,
              <span className="block text-deep-rose">Creating Joy</span>
            </h2>
            
            <p className="text-warm-gray text-xl leading-relaxed max-w-4xl mx-auto font-inter">
              With over a decade of expertise in luxury event management, MAD Events transforms ordinary occasions into extraordinary celebrations. From intimate balloon parties to grand corporate gatherings, we bring unparalleled creativity, precision, and passion to every event within 200km of Bangalore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-32 bg-pearl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                animate={isStatsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group text-center cursor-hover"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-luxury group-hover:shadow-luxury-lg transition-all duration-500`}
                >
                  <stat.icon className="w-8 h-8 text-pearl" />
                </motion.div>
                
                <motion.h3 
                  className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mb-3"
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.number}
                </motion.h3>
                
                <p className="text-warm-gray font-inter font-medium tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Previews */}
      <section ref={previewRef} className="py-32 bg-gradient-to-br from-pearl via-champagne to-pearl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isPreviewInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-20 h-0.5 bg-gradient-to-r from-rose-gold to-warm-gold" />
              <span className="text-warm-gold font-inter text-sm tracking-[0.2em] uppercase font-medium">
                Our Specialties
              </span>
              <div className="w-20 h-0.5 bg-gradient-to-r from-warm-gold to-rose-gold" />
            </div>
            
            <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-charcoal">
              Event Categories
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            {eventPreviews.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 80, rotateX: 15 }}
                animate={isPreviewInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group cursor-view relative"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:shadow-luxury-lg transition-all duration-700">
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="absolute bottom-0 left-0 right-0 p-8 text-pearl"
                  >
                    <h3 className="font-playfair text-2xl lg:text-3xl font-bold mb-3 group-hover:text-rose-gold transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-pearl/90 font-inter leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                  
                  <motion.div
                    className={`absolute top-6 right-6 w-12 h-12 bg-${event.accent} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500`}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                  >
                    <ArrowRight className="w-5 h-5 text-pearl" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isPreviewInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <Link
              to="/services"
              className="group inline-flex items-center px-10 py-5 bg-charcoal hover:bg-soft-black text-pearl rounded-full font-inter font-medium text-lg transition-all duration-500 cursor-hover shadow-luxury hover:shadow-luxury-lg"
            >
              <span className="mr-3">View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-32 bg-gradient-to-br from-charcoal via-soft-black to-charcoal relative overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-gold to-warm-gold rounded-full blur-3xl"
        />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 bg-gradient-to-br from-rose-gold to-warm-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow-gold"
            >
              <Star className="w-8 h-8 text-pearl" />
            </motion.div>
            
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-pearl mb-8">
              Ready to Create
              <span className="block bg-gradient-to-r from-rose-gold to-warm-gold bg-clip-text text-transparent">
                Something Magical?
              </span>
            </h2>
            
            <p className="text-pearl/80 text-xl mb-12 leading-relaxed font-inter max-w-2xl mx-auto">
              Let's transform your vision into an unforgettable experience. Connect with us today and begin your journey to extraordinary.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-rose-gold via-deep-rose to-warm-gold text-pearl rounded-full font-inter font-semibold text-lg shadow-glow-gold hover:shadow-luxury-lg transition-all duration-500 cursor-hover relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Journey
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-warm-gold via-rose-gold to-deep-rose opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;