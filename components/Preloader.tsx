import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Network, Sparkles } from 'lucide-react';

const iconVariants = {
  rotate: {
    rotate: [0, 360],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
  pulse: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Preloader = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-800 via-blue-900 to-gray-800"
    >
      <div className="relative scale-75">
        {/* Neural network background effect */}
        <div className="absolute inset-0 -z-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
              animate={{
                x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                y: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: Math.random() * 1.5 + 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <motion.div className="flex flex-col items-center">
          {/* Main brain icon */}
          <motion.div
            variants={iconVariants}
            animate={["rotate", "pulse"]}
            className="relative mb-6"
          >
            <Brain className="w-16 h-16 text-blue-400" />
            <motion.div
              className="absolute inset-0"
              animate={{
                opacity: [0, 0.5, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Brain className="w-16 h-16 text-blue-400" />
            </motion.div>
          </motion.div>

          {/* Orbiting icons */}
          <motion.div className="relative w-24 h-24">
            {[Cpu, Network, Sparkles].map((Icon, index) => (
              <motion.div
                key={index}
                className="absolute"
                animate={{
                  rotate: [0, 360],
                  x: Math.cos(index * (Math.PI * 2) / 3) * 35,
                  y: Math.sin(index * (Math.PI * 2) / 3) * 35,
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Icon className="w-6 h-6 text-blue-400" />
              </motion.div>
            ))}
          </motion.div>

          {/* Loading text */}
          <motion.div
            className="mt-6 text-center"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <h2 className="text-lg font-semibold text-white mb-2">
              Initializing AI Systems...
            </h2>
            <div className="flex items-center gap-1 text-blue-400">
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              >
                .
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
