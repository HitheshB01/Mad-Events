import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { path: '/', label: 'Home', number: '01' },
    { path: '/services', label: 'Services', number: '02' },
    { path: '/gallery', label: 'Gallery', number: '03' },
    { path: '/contact', label: 'Contact', number: '04' },
  ];

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      }
    }
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 24,
      }
    })
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
          scrolled 
            ? 'bg-pearl/80 backdrop-blur-md shadow-luxury' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 cursor-hover group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-8 h-8 bg-gradient-to-br from-rose-gold to-warm-gold rounded-full flex items-center justify-center shadow-glow"
            >
              <Sparkles className="w-4 h-4 text-pearl" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-playfair text-2xl font-bold text-charcoal group-hover:text-deep-rose transition-colors duration-300">
                MAD Events
              </span>
              <span className="text-xs text-warm-gray font-inter tracking-wider">
                Creating Memories
              </span>
            </div>
          </Link>
          
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-12 h-12 flex items-center justify-center cursor-hover group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/20 to-warm-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div 
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-charcoal" />
              ) : (
                <Menu className="w-6 h-6 text-charcoal" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-40"
            />
            
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-full max-w-md bg-pearl z-50 shadow-luxury-lg"
            >
              <div className="p-8 pt-24 h-full flex flex-col">
                <div className="space-y-8 flex-1">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      custom={index}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      className="group"
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-4 cursor-hover"
                      >
                        <span className="text-warm-gray font-inter text-sm font-medium">
                          {item.number}
                        </span>
                        <div className="flex-1">
                          <h3 className={`font-playfair text-3xl font-bold transition-all duration-300 ${
                            location.pathname === item.path
                              ? 'text-deep-rose'
                              : 'text-charcoal group-hover:text-rose-gold group-hover:translate-x-2'
                          }`}>
                            {item.label}
                          </h3>
                          <div className={`h-0.5 bg-gradient-to-r from-rose-gold to-warm-gold transition-all duration-500 ${
                            location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                          }`} />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mt-12 p-6 bg-gradient-to-br from-rose-gold/10 to-warm-gold/10 rounded-2xl border border-rose-gold/20"
                >
                  <h4 className="font-playfair text-lg font-bold text-charcoal mb-2">
                    Ready to Create Magic?
                  </h4>
                  <p className="text-warm-gray text-sm mb-4 leading-relaxed">
                    Let's bring your vision to life with our premium event planning services.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-rose-gold to-warm-gold text-pearl py-3 rounded-full font-inter font-medium text-sm shadow-glow hover:shadow-glow-gold transition-all duration-300"
                    onClick={() => {
                      const message = encodeURIComponent("Hi! I'm interested in MAD Events services. Can you help me plan something special?");
                      window.open(`https://wa.me/+919876543210?text=${message}`, '_blank');
                    }}
                  >
                    Start Planning
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;