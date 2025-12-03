'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import PortfolioContent from './components/PortfolioContent';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black relative">
      <div className="scanline"></div>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      {!loading && <PortfolioContent />}
    </div>
  );
}
