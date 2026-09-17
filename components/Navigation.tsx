import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Events', id: 'events' },
    { label: 'Volunteers', id: 'volunteers' },
    { label: 'Core', id: 'core' },
    { label: 'Members', id: 'members' },
    { label: 'Games', id: 'games' },
    { label: 'FOSS', id: 'foss' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setCurrentPage('home');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <button
            onClick={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <img
              src="public/SLUGLOGO.svg"
              alt="SLUG Logo"
              className="h-10 w-auto sm:h-12"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative text-sm text-gray-700 transition-colors hover:text-teal-600"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden rounded-full bg-teal-600 px-6 py-2.5 text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-md lg:block">
            Join SLUG
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden"
          >
            <div className="flex h-5 w-6 flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-gray-900 transition-all ${
                  mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`h-0.5 w-full bg-gray-900 transition-all ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-full bg-gray-900 transition-all ${
                  mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? 0 : '100%',
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-white lg:hidden"
        style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
      >
        <div className="flex flex-col gap-6 px-4 pt-24">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: mobileMenuOpen ? 1 : 0,
                x: mobileMenuOpen ? 0 : 20,
              }}
              transition={{ delay: index * 0.05 }}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-2xl font-semibold text-gray-900 transition-colors hover:text-teal-600"
            >
              {item.label}
            </motion.button>
          ))}
          <button className="mt-4 rounded-full bg-teal-600 px-6 py-3 text-center text-white">
            Join SLUG
          </button>
        </div>
      </motion.div>
    </>
  );
}