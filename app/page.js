import { Dithering } from '@paper-design/shaders-react';

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Left 3/4: Content */}
      <div className="relative flex-3 w-3/4 flex flex-col bg-black overflow-y-auto p-8">
        <h1 className="text-white text-7xl font-mono mb-10">yo i'm hrdk</h1>
        <p className="text-white text-2xl font-mono mb-10 leading-relaxed">
          Welcome to my personal space on the internet. I’m a developer, designer, and thinker who loves creating meaningful digital experiences.
        </p>
        <p className="text-white text-2xl font-mono mb-10 leading-relaxed">
          This site is a reflection of my growth and creativity. Feel free to explore my work, read my blogs, or get in touch.
        </p>
        <p className="text-white text-2xl font-mono mb-10 leading-relaxed">
          I believe in the power of technology to transform lives and bring people closer together. Lets build something amazing.
        </p>
        <div className="flex flex-wrap gap-6 mt-auto">
          <a href="/showcase" className="text-purple-500 text-xl font-mono hover:underline">Showcase</a>
          <a href="/graveyard" className="text-orange-500 text-xl font-mono hover:underline">Graveyard</a>
          <a href="/blogs" className="text-red-500 text-xl font-mono hover:underline">Blogs</a>
          <a href="/contact" className="text-blue-500 text-xl font-mono hover:underline">Contact</a>
        </div>
      </div>
      {/* Right 1/4: Vertical strip with Dithering */}
      <div className="w-1/4 h-full relative">
        <Dithering
          style={{ height: '100%', width: '100%' }}
          colorBack="hsl(0, 0%, 0%)"
          colorFront="hsl(198, 100%, 50%)"
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

