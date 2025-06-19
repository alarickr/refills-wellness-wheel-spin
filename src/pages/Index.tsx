
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-emerald-300"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-blue-300"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 rounded-full bg-green-300"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 rounded-full bg-teal-300"></div>
      </div>

      <div className="text-center z-10">
        {/* Main Loading Wheel */}
        <div className="relative mb-8">
          {/* Outer spinning ring */}
          <div className="w-32 h-32 border-4 border-emerald-200 rounded-full animate-spin border-t-emerald-500 mx-auto"></div>
          
          {/* Inner decorative elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
          
          {/* Secondary spinning element */}
          <div className="absolute inset-0 w-40 h-40 border-2 border-blue-200 rounded-full animate-spin-slow border-t-blue-400 mx-auto" style={{animationDirection: 'reverse', animationDuration: '4s'}}></div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
          Refills.com
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 font-light">
          Your Health & Wellness Journey Starts Here
        </p>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2 mb-6">
          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-teal-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>

        {/* Loading text */}
        <p className="text-emerald-600 font-medium animate-pulse">
          Preparing your wellness experience...
        </p>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-gray-200 rounded-full mx-auto mt-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-progress"></div>
        </div>
      </div>

      {/* Floating wellness elements */}
      <div className="absolute top-1/4 left-1/4 animate-float">
        <div className="w-4 h-4 bg-emerald-300 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float-delayed">
        <div className="w-3 h-3 bg-blue-300 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-float">
        <div className="w-5 h-5 bg-teal-300 rounded-full opacity-60"></div>
      </div>
    </div>
  );
};

export default Index;
