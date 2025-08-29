'use client'

import { Dithering } from '@paper-design/shaders-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Showcase() {
    const [colorFront, setColorFront] = useState('hsl(0, 100%, 50%)');

    useEffect(() => {
        let hue = 0;
        const interval = setInterval(() => {
            hue = (hue + 1) % 360;
            setColorFront(`hsl(${hue}, 100%, 50%)`);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Left side */}
            <div className="relative flex-3 w-full md:w-3/4 flex flex-col bg-black overflow-y-auto p-4 md:p-8 scrollbar-hide">
                <h1 className="text-white text-4xl md:text-7xl font-bold font-mono mb-6 md:mb-12">
                    showcase
                </h1>
                <p className="text-white text-lg md:text-2xl font-light font-mono mb-6 md:mb-12 leading-relaxed">
                    These are my best projects, the ones that have performed really well or were built with long-term impact in mind. Click <Link href={"/"} className='text-blue-400 underline'>here</Link> to go back home or <Link href={"/garage"} className='text-orange-400 underline'>here</Link> to view my other side projects
                </p>

                {/* CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    
                    {/* getpeerai */}
                    <div
                        className="bg-black p-6 rounded-xl border-2 border-white transition-all duration-500 ease-out 
                                   hover:border-orange-500 hover:shadow-[0_0_25px_5px_rgba(255,140,0,0.7)]"
                        onMouseEnter={() => setColorFront("hsl(30, 100%, 50%)")}
                    >
                        <h2 className="text-white text-2xl font-bold mb-3">getpeerai</h2>
                        <p className="text-gray-400 text-base mb-6">
                            The only AI-powered study buddy you’ll ever need
                        </p>
                        <span className="text-orange-400 font-semibold text-lg">Coming soon 🚀</span>
                    </div>

                    {/* kozu */}
                    <div
                        className="bg-black p-6 rounded-xl border border-white transition-all duration-500 ease-out hover:shadow-[0_0_25px_5px_rgba(0,120,255,0.7)]"
                        onMouseEnter={() => setColorFront("hsl(220, 100%, 50%)")}
                    >
                        <h2 className="text-white text-2xl font-bold mb-3">kozu</h2>
                        <p className="text-gray-400 text-sm md:text-base mb-6">
                            Your YouTube companion, turn passive watching into active learning with progress tracking, organization, and insights.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://mykozu.xyz"
                                target="_blank"
                                className="text-blue-500 hover:underline font-medium"
                            >
                                Visit
                            </a>
                        </div>
                    </div>

                    {/* steal-this-idea */}
                    <div
                        className="bg-black p-6 rounded-xl border border-white transition-all duration-500 ease-out hover:shadow-[0_0_25px_5px_rgba(255,255,0,0.7)]"
                        onMouseEnter={() => setColorFront("hsl(50, 100%, 50%)")}
                    >
                        <h2 className="text-white text-2xl font-bold mb-3">steal-this-idea</h2>
                        <p className="text-gray-400 text-sm md:text-base mb-6">
                            A curated collection of 140+ startup ideas from Paras Chopra & Greg Isenberg ready for you to explore and steal.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://steal-this-idea.vercel.app"
                                target="_blank"
                                className="text-yellow-400 hover:underline font-medium"
                            >
                                Visit
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Shader side */}
            <div className="w-full md:w-1/4 h-64 md:h-full relative">
                <Dithering
                    style={{ height: '100%', width: '100%' }}
                    colorBack="hsl(0, 0%, 0%)"
                    colorFront={colorFront}
                    shape="warp"
                    type="random"
                    pxSize={5}
                    offsetX={0}
                    offsetY={0}
                    scale={1}
                    rotation={0}
                    speed={1}
                />
            </div>
        </div>
    );
}
