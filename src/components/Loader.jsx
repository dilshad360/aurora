import React from 'react';
import { motion } from 'framer-motion';

function Loader() {
  return (
    <motion.div animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
      }}
      >🕛</motion.div>
  )
}

export default Loader