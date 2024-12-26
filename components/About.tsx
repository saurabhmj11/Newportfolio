import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const timelineData = [
  {
    year: '2024',
    title: 'Freelancer AI Developer',
    description: 'Leading AI initiatives and developing cutting-edge solutions',
    icon: Briefcase
  },
  {
    year: '2023',
    title: 'BE in computer science',
    description: 'Amravati University',
    icon: GraduationCap
  },
  {
    year: '2020',
    title: 'AI Research Award',
    description: 'Recognition for contributions to NLP research',
    icon: Award
  }
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Timeline */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-8">My Journey</h2>
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{item.year}</div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-gray-600">{item.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Neural Network Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 mb-6">
                I'm passionate about pushing the boundaries of what's possible with AI. 
                With expertise in machine learning, deep learning, and natural language processing, 
                I help organizations leverage AI to solve complex problems and create innovative solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Specializations</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Machine Learning</li>
                    <li>Natural Language Processing</li>
                    <li>Computer Vision</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Industries</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Healthcare</li>
                    <li>Finance</li>
                    <li>Technology</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;