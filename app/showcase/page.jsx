'use client'

import { Dithering } from '@paper-design/shaders-react';
import { useState, useEffect } from 'react';

export default function Showcase() {
    const [colorFront, setColorFront] = useState('hsl(0, 100%, 50%)');

    useEffect(() => {
        let hue = 0;
        const interval = setInterval(() => {
        hue = (hue + 1) % 360;
        setColorFront(`hsl(${hue}, 100%, 50%)`);
        }, 50); // Adjust the interval for smoother or faster transitions
        return () => clearInterval(interval);
    }, []);    
    const projects = [
        {
            name: "Project One",
            image: "/images/project1.jpg",
            description: "A modern web application built with React.",
            link: "/projects/project-one",
        },
        {
            name: "Project Two",
            image: "/images/project2.jpg",
            description: "A robust backend API built with Node.js.",
            link: "/projects/project-two",
        },
        {
            name: "Project Three",
            image: "/images/project3.jpg",
            description: "A creative design prototype made in Figma.",
            link: "/projects/project-three",
        },
        {
            name: "Project Four",
            image: "/images/project4.jpg",
            description: "A fun browser-based game using JavaScript.",
            link: "/projects/project-four",
        },
        {
            name: "Project Five",
            image: "/images/project5.jpg",
            description: "An AI-powered tool built with Python.",
            link: "/projects/project-five",
        },
        {
            name: "Project Six",
            image: "/images/project6.jpg",
            description: "A cross-platform mobile app built with Flutter.",
            link: "/projects/project-six",
        },
    ];

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="relative flex-3 w-full md:w-3/4 flex flex-col bg-black overflow-y-auto p-4 md:p-8 scrollbar-hide">
                <h1 className="text-white text-4xl md:text-7xl font-bold font-mono mb-6 md:mb-12">showcase</h1>
                <p className="text-white text-lg md:text-2xl font-light font-mono mb-6 md:mb-12 leading-relaxed">
                    explore my projects and creations. this is where i showcase my work, ideas, and experiments.{' '}
                    <a href="/" className="text-blue-500 hover:underline">
                        back to home
                    </a>. if you want to see projects not in production, visit{' '}
                    <a href="/garage" className="text-blue-500 hover:underline">
                        /garage
                    </a>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-black p-4 rounded-lg shadow-lg border border-gray-700 hover:scale-105 hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.3)] transition-transform duration-300 ease-in-out"
                        >
                            <div className="overflow-hidden rounded-md mb-4">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-40 object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out"
                                />
                            </div>
                            <h2 className="text-white text-xl md:text-2xl font-bold mb-2">{project.name}</h2>
                            <p className="text-gray-300 text-sm md:text-base mb-4">{project.description}</p>
                            <a
                                href={project.link}
                                className="text-blue-500 hover:underline hover:text-blue-300 transition-colors duration-200"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full md:w-1/4 h-64 md:h-full relative">
                <Dithering
                    style={{ height: '100%', width: '100%' }}
                    colorBack="rgb(0, 0, 0)"
                    colorFront={colorFront}
                    shape="swirl"
                    type="8x8"
                    pxSize={2.2}
                    offsetX={0}
                    offsetY={0}
                    scale={1}
                    rotation={0}
                    speed={1.3}
                />
            </div>
        </div>
    );
}