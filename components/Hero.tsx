import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Bot, Code, TrendingUp, Rocket } from 'lucide-react';

const tooltipContent = {
  AI: 'Artificial Intelligence: Systems designed to mimic human intelligence',
  LLMs: 'Large Language Models: Advanced AI models that understand and generate human-like text',
  GenAI: 'Generative AI: AI systems that create new content, from text to images',
  'Software Development': 'Building robust, scalable applications using cutting-edge technologies',
  'Tech Enthusiast': 'Exploring innovations in AI, web development, and cloud technologies',
  Innovation: 'Leveraging AI for groundbreaking solutions to real-world problems',
};

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    testimonial:
      'Saurabh has been instrumental in transforming our ideas into intelligent solutions. His expertise in AI and software development is unparalleled.',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61',
  },
  {
    name: 'Jane Smith',
    role: 'CTO, InnovateNow',
    testimonial:
      'The AI-driven applications crafted by Saurabh significantly improved our operational efficiency. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6',
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-10 animate-gradient"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3"
          >
            <div className="relative">
              <img
                src="1718502168847.jpg"
                alt="AI Developer Profile"
                className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
                aria-label="AI expertise"
              >
                <Brain className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-2/3 text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Hi, I&apos;m Saurabh Lokhande
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-700 dark:text-gray-300">
              An AI/Software Developer transforming ideas into intelligent solutions.
            </p>
            <p className="text-lg lg:text-xl mb-8 text-gray-600 dark:text-gray-400">
              I specialize in creating AI-driven applications, crafting innovative generative AI models, and building scalable software solutions. Passionate about learning and pushing the boundaries of technology.
            </p>

            {/* Interactive Keywords */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {Object.entries(tooltipContent).map(([key, content], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="group relative"
                >
                  <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md cursor-pointer">
                    {key === 'AI' && <Brain className="w-5 h-5 text-blue-600" />}
                    {key === 'LLMs' && <Sparkles className="w-5 h-5 text-purple-600" />}
                    {key === 'GenAI' && <Bot className="w-5 h-5 text-pink-600" />}
                    {key === 'Software Development' && <Code className="w-5 h-5 text-green-600" />}
                    {key === 'Tech Enthusiast' && <TrendingUp className="w-5 h-5 text-orange-600" />}
                    {key === 'Innovation' && <Rocket className="w-5 h-5 text-red-600" />}
                    <span>{key}</span>
                  </span>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 p-2 bg-white dark:bg-gray-800 rounded-md shadow-lg text-sm w-64 z-10"
                    aria-label={content}
                  >
                    {content}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{testimonial.testimonial}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Ideas?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Let’s collaborate to bring your vision to life with cutting-edge AI and software solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
            aria-label="Contact for collaboration"
          >
            Get in Touch
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;


