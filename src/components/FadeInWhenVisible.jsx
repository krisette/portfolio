import * as React from 'react';
import { motion } from 'framer-motion';

export default function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 1 }
      }}
    >
      {children}
    </motion.div>
  );
}