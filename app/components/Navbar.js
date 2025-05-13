import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectsPopup from './ProjectsPopup';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProjectsPopupOpen, setIsProjectsPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (sectionId === '#projects') {
      setIsProjectsPopupOpen(true);
      setIsMenuOpen(false);
      return;
    }
    
    if (sectionId === '#about') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
      return;
    }
    
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = element.offsetTop - 100; // Adjust for navbar height
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 py-8 ${scrolled ? 'py-4' : 'py-8'}`}
      >
        <div className="max-w-[60%] mx-auto">
          <div className="relative px-6 py-4 rounded-2xl backdrop-blur-md bg-[rgba(15,15,15,0.7)] border border-zinc-800/50 shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center"
            >
              <div className="flex items-center space-x-1">
                <span className="h-2 w-2 rounded-full bg-purple-500 inline-block animate-pulse"></span>
                <span className="font-bold text-xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-500">
                  Danish
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</NavLink>
              <NavLink href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</NavLink>
              <NavLink href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</NavLink>
              <NavLink href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden mt-2 max-w-[90%] mx-auto"
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          <div className="px-6 py-5 space-y-4 flex flex-col items-center rounded-xl bg-[rgba(15,15,15,0.9)] backdrop-blur-lg border border-zinc-800/50">
            <MobileNavLink href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</MobileNavLink>
            <MobileNavLink href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</MobileNavLink>
            <MobileNavLink href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</MobileNavLink>
            <MobileNavLink href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</MobileNavLink>
          </div>
        </motion.div>
      </motion.nav>

      <ProjectsPopup 
        isOpen={isProjectsPopupOpen} 
        onClose={() => setIsProjectsPopupOpen(false)} 
      />
    </>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative text-gray-300 hover:text-white text-sm uppercase tracking-widest font-medium transition-all overflow-hidden group"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </a>
  );
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-300 hover:text-white font-medium text-sm uppercase tracking-wider w-full text-center py-2"
    >
      {children}
    </a>
  );
} 