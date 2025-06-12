import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye, Heart } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const galleryRef = useRef(null);
  const ctaRef = useRef(null);
  const isInView = useInView(galleryRef, { once: true, threshold: 0.1 });
  const isCtaInView = useInView(ctaRef, { once: true, threshold: 0.3 });

  const categories = [
    { id: 'all', label: 'All Events', gradient: 'from-rose-gold to-warm-gold' },
    { id: 'balloon', label: 'Balloon Celebrations', gradient: 'from-rose-gold to-deep-rose' },
    { id: 'corporate', label: 'Corporate Excellence', gradient: 'from-warm-gold to-rich-gold' },
    { id: 'wedding', label: 'Wedding Dreams', gradient: 'from-deep-rose to-rose-gold' },
    { id: 'traditional', label: 'Cultural Heritage', gradient: 'from-warm-gold to-deep-rose' },
    { id: 'special', label: 'Special Occasions', gradient: 'from-rose-gold to-warm-gold' },
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1729791/pexels-photo-1729791.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'balloon',
      title: 'Whimsical Birthday Wonderland',
      description: 'A magical balloon installation creating an enchanting atmosphere for celebration',
      featured: true
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'corporate',
      title: 'Executive Conference Excellence',
      description: 'Sophisticated corporate event setup blending professionalism with elegance',
      featured: false
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1729787/pexels-photo-1729787.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'wedding',
      title: 'Romantic Wedding Dreams',
      description: 'Breathtaking wedding ceremony with exquisite floral arrangements',
      featured: true
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'traditional',
      title: 'Cultural Festival Celebration',
      description: 'Authentic traditional decoration honoring cultural heritage',
      featured: false
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'wedding',
      title: 'Intimate Wedding Ceremony',
      description: 'Romantic candlelit wedding setup creating unforgettable moments',
      featured: true
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'corporate',
      title: 'Team Building Excellence',
      description: 'Dynamic corporate team building event with engaging activities',
      featured: false
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1729799/pexels-photo-1729799.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'special',
      title: 'Anniversary Milestone',
      description: 'Elegant anniversary celebration with sophisticated decorations',
      featured: true
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'corporate',
      title: 'Premium Product Launch',
      description: 'Modern product launch event with cutting-edge presentation',
      featured: false
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1729791/pexels-photo-1729791.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'balloon',
      title: 'Children\'s Party Paradise',
      description: 'Vibrant balloon decorations creating joy for young celebrations',
      featured: false
    },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (imageSrc: string, index: number) => {
    setLightboxImage(imageSrc);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const currentIndex = filteredImages.findIndex(img => img.src === lightboxImage);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }
    
    setLightboxImage(filteredImages[newIndex].src);
    setLightboxIndex(newIndex);
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
              Our Portfolio
            </span>
            <div className="w-20 h-0.5 bg-gradient-to-r from-warm-gold to-rose-gold" />
          </div>
          
          <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-charcoal mb-8">
            Gallery
          </h1>
          
          <p className="text-warm-gray text-xl max-w-3xl mx-auto leading-relaxed font-inter">
            Explore our curated collection of extraordinary events and celebrations. Each image captures a moment of joy, elegance, and unforgettable experiences we've crafted.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-500 cursor-hover relative overflow-hidden group ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.gradient} text-pearl shadow-glow`
                  : 'bg-white/80 backdrop-blur-sm border border-warm-gray/20 text-warm-gray hover:text-charcoal'
              }`}
            >
              <span className="relative z-10">{category.label}</span>
              {selectedCategory !== category.id && (
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div ref={galleryRef}>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${selectedCategory}-${image.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 40 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  exit={{ opacity: 0, scale: 0.8, y: -40 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className={`group cursor-view relative overflow-hidden rounded-3xl bg-white shadow-luxury hover:shadow-luxury-lg transition-all duration-700 ${
                    image.featured ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                  onClick={() => openLightbox(image.src, index)}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={image.src}
                      alt={image.title}
                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                        image.featured ? 'h-80 lg:h-96' : 'h-64 lg:h-80'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* View Icon */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="absolute top-6 right-6 w-12 h-12 bg-pearl/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-luxury"
                    >
                      <Eye className="w-5 h-5 text-charcoal" />
                    </motion.div>
                    
                    {/* Content */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="absolute bottom-0 left-0 right-0 p-6 text-pearl"
                    >
                      <h3 className="font-playfair text-xl lg:text-2xl font-bold mb-2 group-hover:text-rose-gold transition-colors duration-300">
                        {image.title}
                      </h3>
                      <p className="text-pearl/90 text-sm font-inter leading-relaxed">
                        {image.description}
                      </p>
                    </motion.div>

                    {/* Featured Badge */}
                    {image.featured && (
                      <div className="absolute top-6 left-6 px-3 py-1 bg-gradient-to-r from-rose-gold to-warm-gold text-pearl text-xs font-inter font-medium rounded-full shadow-glow">
                        Featured
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-5xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImage}
                  alt="Gallery Image"
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-luxury-lg"
                />
                
                {/* Close Button */}
                <motion.button
                  onClick={closeLightbox}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-pearl/20 hover:bg-pearl/30 backdrop-blur-sm rounded-full flex items-center justify-center text-pearl cursor-hover shadow-luxury"
                >
                  <X className="w-6 h-6" />
                </motion.button>
                
                {/* Navigation Buttons */}
                <motion.button
                  onClick={() => navigateLightbox('prev')}
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-pearl/20 hover:bg-pearl/30 backdrop-blur-sm rounded-full flex items-center justify-center text-pearl cursor-hover shadow-luxury"
                >
                  <ChevronLeft className="w-7 h-7" />
                </motion.button>
                
                <motion.button
                  onClick={() => navigateLightbox('next')}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-pearl/20 hover:bg-pearl/30 backdrop-blur-sm rounded-full flex items-center justify-center text-pearl cursor-hover shadow-luxury"
                >
                  <ChevronRight className="w-7 h-7" />
                </motion.button>
                
                {/* Image Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-4 left-4 right-4 bg-pearl/10 backdrop-blur-md rounded-2xl p-6 text-pearl"
                >
                  <h3 className="font-playfair text-2xl font-bold mb-2 text-rose-gold">
                    {filteredImages[lightboxIndex]?.title}
                  </h3>
                  <p className="text-pearl/90 font-inter">
                    {filteredImages[lightboxIndex]?.description}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 80 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-32 p-12 bg-gradient-to-br from-warm-gold/10 via-rose-gold/5 to-deep-rose/10 rounded-3xl border border-warm-gold/20 shadow-luxury relative overflow-hidden"
        >
          {/* Background Elements */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rose-gold to-warm-gold rounded-full blur-3xl"
          />
          
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 bg-gradient-to-br from-rose-gold to-warm-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow-gold"
            >
              <Heart className="w-8 h-8 text-pearl" />
            </motion.div>
            
            <h3 className="font-playfair text-3xl lg:text-5xl font-bold text-charcoal mb-6">
              Love What You See?
            </h3>
            
            <p className="text-warm-gray text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-inter">
              These are just glimpses of the extraordinary experiences we create. Let's discuss your vision and bring your dream event to life with the same attention to detail and passion.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-rose-gold via-deep-rose to-warm-gold text-pearl rounded-full font-inter font-semibold text-lg shadow-glow-gold hover:shadow-luxury-lg transition-all duration-500 cursor-hover relative overflow-hidden"
              onClick={() => {
                const message = encodeURIComponent("Hi! I loved your gallery and would like to discuss creating something beautiful for my event. Can we connect?");
                window.open(`https://wa.me/+919876543210?text=${message}`, '_blank');
              }}
            >
              <span className="relative z-10 flex items-center">
                Let's Create Something Beautiful
                <Heart className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-warm-gold via-rose-gold to-deep-rose opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;