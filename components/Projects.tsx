import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  MessageSquare, 
  Image, 
  Code,
  Rocket,
  TrendingUp,
  X
} from 'lucide-react';

const projects = [
  {
    title: 'AI Image Generator',
    category: 'Generative AI',
    description: 'A state-of-the-art image generation system using stable diffusion',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    technologies: ['Python', 'PyTorch', 'React'],
    icon: Image
  },
  {
    title: 'Intelligent Chatbot',
    category: 'NLP',
    description: 'Advanced conversational AI powered by latest LLM technology',
    image: 'https://images.unsplash.com/photo-1676299081847-824932160141',
    technologies: ['Python', 'TensorFlow', 'FastAPI'],
    icon: MessageSquare
  },
  {
    title: 'Code Assistant',
    category: 'Development Tools',
    description: 'AI-powered code completion and suggestion system',
    image: 'https://images.unsplash.com/photo-1676299081884-3c4fd4344757',
    technologies: ['TypeScript', 'Node.js', 'OpenAI'],
    icon: Code
  },
  {
    title: 'Blockchain Voting System',
    category: 'Blockchain',
    description: 'A decentralized, transparent, and secure voting platform using blockchain technology',
    image: 'https://images.unsplash.com/photo-1558699265-5f0c290c2d0c',
    technologies: ['Solidity', 'Ethereum', 'React'],
    icon: Brain
  },
  {
    title: 'AR Shopping Assistant',
    category: 'AR/VR',
    description: 'An augmented reality app for enhanced online shopping experiences',
    image: 'https://images.unsplash.com/photo-1518976024612-94081b7a4d12',
    technologies: ['Unity', 'C#', 'ARKit'],
    icon: Image
  },
  {
    title: 'Serverless E-Commerce Platform',
    category: 'Cloud Computing',
    description: 'A scalable, serverless e-commerce solution with advanced analytics',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    technologies: ['AWS Lambda', 'DynamoDB', 'Next.js'],
    icon: Rocket
  },
  {
    title: 'AI-Powered Personal Finance Manager',
    category: 'AI',
    description: 'A smart finance manager leveraging AI to help users track and optimize spending',
    image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366',
    technologies: ['Python', 'Flask', 'React'],
    icon: TrendingUp
  },
  {
    title: 'Fitness Tracking App',
    category: 'Mobile Development',
    description: 'A fitness tracker with real-time analytics and AI coaching',
    image: 'https://images.unsplash.com/photo-1540479859555-17af45c78602',
    technologies: ['Kotlin', 'Firebase', 'TensorFlow'],
    icon: Rocket
  },
  {
    title: 'Smart Home Automation',
    category: 'IoT',
    description: 'A comprehensive IoT solution for automating home devices',
    image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2',
    technologies: ['Node.js', 'Raspberry Pi', 'MQTT'],
    icon: Brain
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'Generative AI', 'NLP', 'Development Tools', 'Blockchain', 'AR/VR', 'Cloud Computing', 'AI', 'Mobile Development', 'IoT'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full ${
                filter === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700'
              } shadow-md`}
            >
              {category === 'all' ? 'All Projects' : category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <project.icon className="w-6 h-6 text-blue-600" />
                    <h3 className="font-semibold text-xl">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={e => e.stopPropagation()}
                className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
