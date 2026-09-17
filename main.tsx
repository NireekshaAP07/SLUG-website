
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './globals.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import CommunityPhotos from './components/CommunityPhotos';
import Events from './components/Events';
import EventDetail from './components/EventDetail';
import Volunteers from './components/Volunteers';
import CoreTeam from './components/CoreTeam';
import Members from './components/Members';
import FOSSFacts from './components/FOSSFacts';
import GamingArena from './components/GamingArena';
import Collaborators from './components/Collaborators';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function Component() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToEvent = (event: any) => {
    setSelectedEvent(event);
    setCurrentPage('event-detail');
    window.location.hash = 'event-detail';
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setSelectedEvent(null);
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <CustomCursor />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <CommunityPhotos />
            <Events onEventClick={navigateToEvent} />
            <Volunteers />
            <CoreTeam />
            <Members />
            <FOSSFacts />
            <GamingArena />
            <Collaborators />
            <Contact />
            <Footer />
          </motion.div>
        )}
        
        {currentPage === 'event-detail' && selectedEvent && (
          <motion.div
            key="event-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <EventDetail event={selectedEvent} onBack={navigateToHome} />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Component />
  </React.StrictMode>
);
