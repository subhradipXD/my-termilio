import './App.css';
import Header from './header/header';
import Terminal from './components/Terminal';
import PreLoader from './components/PreLoader';

import { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="text-center p-5 mt-5 text-green-600">
          <h1 className="text-xl font-bold">Mobile devices are not supported.</h1>
          <p>Please visit this site on a larger screen or use Desktop site.</p>
        </div>
      ) : isLoading ? (
        <PreLoader />
      ) : (
        <>
          <div className='font-mono text-sm text-green-700'>
            <Header />
            <Terminal />
          </div>
        </>
      )}
    </>
  );
};

export default App;
