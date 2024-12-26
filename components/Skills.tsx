import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Brain, 
  Code2, 
  Database, 
  Cloud,
  Terminal,
  GitBranch,
  Monitor,
  Cpu
} from 'lucide-react';

const skills = [
  {
    name: 'Machine Learning',
    icon: Brain,
    level: 90,
    description: 'TensorFlow, PyTorch, Scikit-learn'
  },
  {
    name: 'Programming',
    icon: Code2,
    level: 95,
    description: 'Python, JavaScript, TypeScript'
  },
  {
    name: 'Databases',
    icon: Database,
    level: 85,
    description: 'SQL, MongoDB, Redis'
  },
  {
    name: 'Cloud Computing',
    icon: Cloud,
    level: 80,
    description: 'AWS, GCP, Azure'
  },
  {
    name: 'DevOps',
    icon: Terminal,
    level: 75,
    description: 'Docker, Kubernetes, CI/CD'
  },
  {
    name: 'Version Control',
    icon: GitBranch,
    level: 90,
    description: 'Git, GitHub, GitLab'
  },
  {
    name: 'Web Development',
    icon: Monitor,
    level: 85,
    description: 'React, Node.js, REST APIs'
  },
  {
    name: 'Deep Learning',
    icon: Cpu,
    level: 85,
    description: 'Neural Networks, CNNs, RNNs'
  }
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Technical Skills
        </motion.h2>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <skill.icon className="w-8 h-8 text-blue-600" />
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              
              <div className="mb-4">
                <div className="h-2 bg-gray-200 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-blue-600 rounded-full"
                  />
                </div>
              </div>

              <p className="text-gray-600 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;