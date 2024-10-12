import './App.css';
import Header from './header/header';
import Terminal from './components/Terminal';
import PreLoader from './components/PreLoader'; // Import PreLoader

import { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  const checkScreenSize = () => {
    // Adjust the pixel value to your preference
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    // Simulate loading time for preloader
    const timer = setTimeout(() => {
      setIsLoading(false); // Remove pre-loader after a delay
    }, 5000); // 5 seconds

    // Cleanup the event listener and timeout on component unmount
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
      ) : isLoading ? ( // Conditional rendering for preloader
        <PreLoader /> // Show pre-loader
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
