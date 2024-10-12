
import './App.css'
import Header from './header/header'
import Terminal from './components/Terminal'

import { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenSize = () => {
    // You can adjust the pixel value to your preference
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="text-center p-5 mt-5 text-green-600">
          <h1 className="text-xl font-bold">Mobile devices are not supported.</h1>
          <p>Please visit this site on a larger screen or use Desktop site.</p>
        </div>
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
