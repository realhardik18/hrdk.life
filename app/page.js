import { Dithering } from '@paper-design/shaders-react';

export default function Home() {
  return (
    <div className="relative">
      <Dithering
        style={{ height: 800 }}
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
      <a className="absolute top-10 left-1/2 -translate-x-1/2 z-10 text-white text-6xl font-bold">
        Hello
      </a>
    </div>
  );
}
