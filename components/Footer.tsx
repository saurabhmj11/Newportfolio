import React from 'react';
import { Sun, Moon } from 'lucide-react';

const Footer = ({ isDark, toggleTheme }) => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-6 flex justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} AI Developer Portfolio. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;