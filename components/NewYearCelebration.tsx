"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ⚙️ TEST MODE CONFIGURATION
// Set to true to test the celebration effect immediately (5 second countdown)
// Set to false for automatic date-based activation (Dec 31, 2025 11:55 PM)
const TEST_MODE = false;

interface Firework {
    id: number;
    x: number;
    y: number;
    color: string;
    particles: Particle[];
}

interface Particle {
    angle: number;
    velocity: number;
}

export default function NewYearCelebration() {
    const [timeLeft, setTimeLeft] = useState<string>("");
    const [showCountdown, setShowCountdown] = useState(false);
    const [celebrate, setCelebrate] = useState(false);
    const [fireworks, setFireworks] = useState<Firework[]>([]);
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        // TEST MODE: Simulate countdown and celebration immediately
        if (TEST_MODE) {
            setShowComponent(true);
            setShowCountdown(true);
            setCelebrate(false);

            let countdown = 5; // 5 second countdown for testing
            setTimeLeft(`0:0${countdown}`);

            const testInterval = setInterval(() => {
                countdown--;
                if (countdown > 0) {
                    setTimeLeft(`0:0${countdown}`);
                } else {
                    setShowCountdown(false);
                    setCelebrate(true);
                    clearInterval(testInterval);

                    // Auto-end celebration after 30 seconds in test mode
                    setTimeout(() => {
                        setCelebrate(false);
                        setShowComponent(false);
                    }, 30000); // 30 seconds of celebration
                }
            }, 1000);

            return () => clearInterval(testInterval);
        }

        // PRODUCTION MODE: Automatic date-based activation
        const checkTime = () => {
            const now = new Date();

            // New Year's Eve 2025: Dec 31, 2025 11:55 PM IST
            const countdownStart = new Date('2025-12-31T23:55:00+05:30');
            // New Year 2026: Jan 1, 2026 12:00 AM IST
            const newYear = new Date('2026-01-01T00:00:00+05:30');
            // End celebration: Jan 1, 2026 12:10 AM IST (10 minutes of celebration)
            const celebrationEnd = new Date('2026-01-01T00:10:00+05:30');

            // Check if we're in the active period
            if (now >= countdownStart && now < celebrationEnd) {
                setShowComponent(true);

                if (now < newYear) {
                    // Countdown phase (11:55 PM - 11:59:59 PM)
                    setShowCountdown(true);
                    setCelebrate(false);

                    const diff = newYear.getTime() - now.getTime();
                    const minutes = Math.floor(diff / 60000);
                    const seconds = Math.floor((diff % 60000) / 1000);
                    setTimeLeft(`${minutes}:${seconds.toString().padStart(2, '0')}`);
                } else if (now >= newYear && now < celebrationEnd) {
                    // Celebration phase (12:00 AM - 12:10 AM)
                    setShowCountdown(false);
                    setCelebrate(true);
                }
            } else {
                // Outside the active period
                setShowComponent(false);
                setShowCountdown(false);
                setCelebrate(false);
            }
        };

        checkTime();
        const interval = setInterval(checkTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Generate fireworks during celebration
    useEffect(() => {
        if (!celebrate) {
            setFireworks([]);
            return;
        }

        const createFirework = () => {
            const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#ff1493'];
            const particles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
                angle: (i * 360) / 30,
                velocity: Math.random() * 3 + 2,
            }));

            const newFirework: Firework = {
                id: Date.now() + Math.random(),
                x: Math.random() * 80 + 10, // 10-90% of screen width
                y: Math.random() * 40 + 10, // 10-50% of screen height
                color: colors[Math.floor(Math.random() * colors.length)],
                particles,
            };

            setFireworks(prev => [...prev, newFirework]);

            // Remove firework after animation
            setTimeout(() => {
                setFireworks(prev => prev.filter(fw => fw.id !== newFirework.id));
            }, 1500);
        };

        // Create fireworks every 300ms
        const fireworkInterval = setInterval(createFirework, 300);
        return () => clearInterval(fireworkInterval);
    }, [celebrate]);

    if (!showComponent) return null;

    return (
        <>
            {/* Dark Overlay for Countdown */}
            <AnimatePresence>
                {showCountdown && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] pointer-events-none"
                    />
                )}
            </AnimatePresence>

            {/* Simple Floating Countdown Timer */}
            <AnimatePresence>
                {showCountdown && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[101] pointer-events-none"
                    >
                        <div className="text-center">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 tabular-nums drop-shadow-2xl"
                            >
                                {timeLeft}
                            </motion.div>
                            <p className="text-white text-2xl md:text-3xl mt-6 font-light tracking-wider">
                                New Year Countdown
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Celebration Effects */}
            <AnimatePresence>
                {celebrate && (
                    <>
                        {/* Dark Overlay for Celebration */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[97] pointer-events-none"
                        />

                        {/* Floating Happy New Year Message */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{ opacity: 0 }}
                            className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] pointer-events-none text-center"
                        >
                            <motion.h1
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 mb-6 drop-shadow-2xl"
                            >
                                Happy New Year 2026! 🎊
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-2xl md:text-4xl text-white font-light italic drop-shadow-lg"
                            >
                                &quot;Code with passion, debug with patience&quot;
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="text-xl md:text-2xl text-green-400 font-semibold mt-4 drop-shadow-lg"
                            >
                                Happy Coding! 💻✨
                            </motion.p>
                        </motion.div>

                        {/* Fireworks Container */}
                        <div className="fixed inset-0 pointer-events-none z-[99] overflow-hidden">
                            {fireworks.map((firework) => (
                                <div
                                    key={firework.id}
                                    style={{
                                        position: 'absolute',
                                        left: `${firework.x}%`,
                                        top: `${firework.y}%`,
                                    }}
                                >
                                    {firework.particles.map((particle, idx) => {
                                        const radians = (particle.angle * Math.PI) / 180;
                                        const distance = particle.velocity * 100;
                                        const x = Math.cos(radians) * distance;
                                        const y = Math.sin(radians) * distance;

                                        return (
                                            <motion.div
                                                key={idx}
                                                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                                                animate={{
                                                    x: x,
                                                    y: y,
                                                    opacity: 0,
                                                    scale: 0,
                                                }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                style={{
                                                    position: 'absolute',
                                                    width: '8px',
                                                    height: '8px',
                                                    borderRadius: '50%',
                                                    backgroundColor: firework.color,
                                                    boxShadow: `0 0 10px ${firework.color}`,
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                            ))}
                        </div>

                        {/* Confetti */}
                        <div className="fixed inset-0 pointer-events-none z-[98] overflow-hidden">
                            {Array.from({ length: 50 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{
                                        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                                        y: -20,
                                        rotate: 0,
                                    }}
                                    animate={{
                                        y: (typeof window !== 'undefined' ? window.innerHeight : 1000) + 100,
                                        rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
                                    }}
                                    transition={{
                                        duration: Math.random() * 3 + 3,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                        ease: "linear",
                                    }}
                                    style={{
                                        position: 'absolute',
                                        width: '10px',
                                        height: '10px',
                                        backgroundColor: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'][i % 5],
                                    }}
                                />
                            ))}
                        </div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
