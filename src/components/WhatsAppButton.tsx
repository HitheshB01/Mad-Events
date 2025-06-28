import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in MAD Events services. Can you help me plan my event?");
    window.open(`https://wa.me/+91901943356?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-8 right-8 z-40"
    >
      <motion.button
        onClick={handleWhatsAppClick}
        className="relative w-16 h-16 bg-gradient-to-br from-success-green to-green-600 text-white rounded-full shadow-luxury cursor-hover group overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          y: [0, -8, 0],
        }}
        transition={{ 
          y: { 
            repeat: Infinity, 
            duration: 3, 
            ease: 'easeInOut',
            repeatDelay: 1
          },
          hover: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
        }}
      >
        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 bg-success-green rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
        
        <MessageCircle className="w-7 h-7 relative z-10 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10, scale: 0.8 }}
          whileHover={{ opacity: 1, x: 0, scale: 1 }}
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-charcoal text-pearl px-3 py-2 rounded-lg text-sm font-inter whitespace-nowrap shadow-luxury"
        >
          Chat with us on WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-charcoal" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default WhatsAppButton;