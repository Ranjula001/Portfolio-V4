'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './pages/LoadingScreen';
import PortfolioContent from './pages/PortfolioContent';
import ECGBackground from './pages/ECGBackground';
import Frame from './components/Frame';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black relative">
      <Frame>
        <ECGBackground />
        <AnimatePresence>
          {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
        </AnimatePresence>
        {!loading && <PortfolioContent />}
      </Frame>
    </div>
  );
}
