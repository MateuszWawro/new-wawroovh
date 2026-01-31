'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeHero() {
  const cardRef = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glareX = useTransform(rotateY, [-20, 20], ["0%", "100%"]);
  const glareY = useTransform(rotateX, [-20, 20], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;

    rotateY.set(((x / width) - 0.5) * 40);
    rotateX.set(-((y / height) - 0.5) * 40);

    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">

      {/* Reactive cursor gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(circle at ${x}px ${y}px, rgba(99,102,241,0.25), transparent 40%)`
          ),
        }}
      />

      {/* Floating particles */}
{[...Array(18)].map((_, i) => (
  <motion.div
    key={i}
    className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
    initial={{
      left: `${(i * 5.5) % 100}%`,
      bottom: -20,
    }}
    animate={{ 
      y: [0, -200], 
      opacity: [0, 1, 0] 
    }}
    transition={{
      duration: 3 + (i % 3),
      repeat: Infinity,
      delay: i * 0.2,
    }}
  />
))}

      <div className="relative z-10 text-center px-4">

        {/* 3D Avatar */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={reset}
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          className="w-48 h-48 mx-auto mb-10 relative cursor-pointer"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl opacity-70" />

          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-900">
            <Image
              src="/me.jpg"
              alt="Mateusz Wawro"
              fill
              sizes="192px"
              className="object-cover"
              priority
            />

            <motion.div
              style={{
                background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.35), transparent 60%)`,
              }}
              className="absolute inset-0"
            />

            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
            />
          </div>
        </motion.div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Mateusz Wawro
        </h1>

        {/* 🔥 TYPEWRITER WRACA */}
        <div className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 mb-6 font-semibold h-12">
          <TypeWriter
            texts={[
              "DevOps Engineer",
              "Automation Enthusiast",
              "CI/CD Builder",
              "Homelab Architect",
              "ISTQB Certified Tester",
              "Websites Creator",
            ]}
          />
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Buduję infrastrukturę, która działa szybciej niż deadline’y się zbliżają ⚙️
        </p>

        <div className="flex gap-4 justify-center">
          <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
            Skontaktuj się
          </Link>
          <Link href="/about" className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:scale-105 transition shadow-lg">
            O mnie
          </Link>
        </div>
      </div>
    </section>
  );
}

/* 🧠 TYPEWRITER */
function TypeWriter({ texts }: { texts: string[] }) {
  const [currentText, setCurrentText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const fullText = texts[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <span>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-blue-600 dark:text-blue-400"
      >
        |
      </motion.span>
    </span>
  );
}
