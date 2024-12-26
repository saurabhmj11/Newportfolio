import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const location = useLocation();
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
            Saurabh Lokhande
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {routes.map(({ path, label }) => (
            <motion.div key={path} whileHover={{ scale: 1.1 }}>
              <Link
                to={path}
                className={`relative text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                  location.pathname === path ? 'text-blue-600 dark:text-blue-400' : ''
                }`}
              >
                {label}
                {location.pathname === path && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="flex items-center">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>

        {/* Mobile Menu (Optional) */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 dark:text-gray-300 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
