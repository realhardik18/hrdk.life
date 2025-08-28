"use client"
import { Dithering } from '@paper-design/shaders-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [colorFront, setColorFront] = useState('hsl(0, 100%, 50%)');

  useEffect(() => {
    let hue = 0;
    const interval = setInterval(() => {
      hue = (hue + 1) % 360;
      setColorFront(`hsl(${hue}, 100%, 50%)`);
    }, 50); // Adjust the interval for smoother or faster transitions
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left 3/4: Content */}
      <div className="relative flex-3 w-full md:w-3/4 flex flex-col bg-black overflow-y-auto p-4 md:p-8">
        <h1 className="text-white text-5xl md:text-8xl font-bold font-mono mb-6 md:mb-12">yo im hrdk</h1>
        <p className="text-white text-xl md:text-3xl font-light font-mono mb-6 md:mb-12 leading-relaxed">
          welcome to my personal space on the internet. i’m a developer, designer, and thinker who loves creating meaningful digital experiences.
        </p>
        <p className="text-white text-xl md:text-3xl font-light font-mono mb-6 md:mb-12 leading-relaxed">
          this site is a reflection of my growth and creativity. feel free to explore my work, read my blogs, or get in touch.
        </p>
        <div className="flex flex-wrap gap-4 md:gap-6 mt-auto">
          <a href="/showcase" className="text-purple-500 text-lg md:text-2xl font-medium font-sans hover:underline">
            showcase
          </a>
          <a href="/garage" className="text-orange-500 text-lg md:text-2xl font-medium font-sans hover:underline">
            garage
          </a>
          <a href="/blogs" className="text-red-500 text-lg md:text-2xl font-medium font-sans hover:underline">
            blogs
          </a>
          <a href="/socials" className="text-green-500 text-lg md:text-2xl font-medium font-sans hover:underline">
            socials
          </a>
          <a href="/contact" className="text-blue-500 text-lg md:text-2xl font-medium font-sans hover:underline">
            contact
          </a>
        </div>
      </div>
      {/* Right 1/4: Vertical strip with Dithering */}
      <div className="w-full md:w-1/4 h-64 md:h-full relative">
        <Dithering
          style={{ height: '100%', width: '100%' }}
          colorBack="rgb(0, 0, 0)"
          colorFront={colorFront}
          shape={3}
          type="4x4"
          pxSize={2}
          offsetX={0}
          offsetY={0}
          scale={0.5}
          rotation={0}
          speed={1}
        />
      </div>
    </div>
  );
}

