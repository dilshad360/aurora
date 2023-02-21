import React from 'react';
import { motion } from 'framer-motion';

function Loader() {
  return (
    <motion.div animate={{
        rotate: [0, 0, 160, 240, 360],
      }}
      transition={{ repeat: Infinity  }}
      >🕛</motion.div>
  )
}

export default Loader