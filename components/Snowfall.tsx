"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Snowflake {
    id: number;
    x: number;
    size: number;
    duration: number;
    delay: number;
    drift: number;
    shape: 'circle' | 'star' | 'snowflake';
}

export default function Snowfall() {
    const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

    useEffect(() => {
        // Generate snowflakes - 75 flakes for 50% more density
        const flakes: Snowflake[] = Array.from({ length: 75 }, (_, i) => {
            const rand = Math.random();
            let shape: 'circle' | 'star' | 'snowflake';
            if (rand < 0.33) shape = 'circle';
            else if (rand < 0.66) shape = 'star';
            else shape = 'snowflake';

            return {
                id: i,
                x: Math.random() * 100, // Random horizontal position (%)
                size: Math.random() * 6 + 4, // Size between 4-10px (bigger snowflakes)
                duration: Math.random() * 3 + 5, // Fall duration 5-8s
                delay: Math.random() * 5, // Random delay 0-5s
                drift: Math.random() * 40 - 20, // Horizontal drift -20 to 20
                shape: shape,
            };
        });
        setSnowflakes(flakes);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {snowflakes.map((flake) => (
                <motion.div
                    key={flake.id}
                    className="absolute"
                    style={{
                        left: `${flake.x}%`,
                        width: flake.shape === 'star' ? `${flake.size * 2}px` : `${flake.size}px`,
                        height: flake.shape === 'star' ? `${flake.size * 2}px` : `${flake.size}px`,
                        top: `-${flake.size}px`,
                    }}
                    animate={{
                        y: ["0vh", "100vh"],
                        x: [0, flake.drift, 0, -flake.drift, 0],
                        opacity: [0, 0.8, 0.8, 0.4, 0],
                        rotate: flake.shape === 'star' ? [0, 360] : 0,
                    }}
                    transition={{
                        duration: flake.duration,
                        delay: flake.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {flake.shape === 'circle' ? (
                        <div className="w-full h-full rounded-full bg-white opacity-80" />
                    ) : flake.shape === 'snowflake' ? (
                        <div className="w-full h-full flex items-center justify-center text-white opacity-90" style={{ fontSize: `${flake.size}px` }}>
                            ❄
                        </div>
                    ) : (
                        <svg
                            viewBox="0 0 24 24"
                            fill="white"
                            className="w-full h-full opacity-80"
                        >
                            {/* Star/Snowflake shape */}
                            <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
                            <path d="M12 4L13 10L19 12L13 14L12 20L11 14L5 12L11 10L12 4Z" />
                        </svg>
                    )}
                </motion.div>
            ))}
        </div>
    );
}
