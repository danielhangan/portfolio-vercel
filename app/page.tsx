'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

// Typing animation component
function TypingText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text, started]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[2px] h-[1em] bg-emerald-400 ml-1 align-middle"
      />
    </span>
  );
}

// Staggered text reveal
function StaggeredText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.08,
            ease: 'easeOut'
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// Animated link with underline effect
function HoverLink({ href, children, delay = 0 }: { href: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative inline-flex items-center text-neutral-300 hover:text-emerald-400 transition-colors duration-300"
    >
      <span className="relative">
        {children}
        <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-emerald-400 transition-all duration-300 group-hover:w-full" />
      </span>
      <motion.svg
        className="ml-1.5 w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
        fill="none"
        viewBox="0 0 10 10"
      >
        <path
          d="M1 9L9 1m0 0H1m8 0v8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.a>
  );
}

// Website preview tooltip
function PreviewTooltip({ url, isVisible }: { url: string; isVisible: boolean }) {
  const domain = url.replace('https://', '').replace('http://', '').replace('www.', '');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute left-0 top-full mt-3 z-50 pointer-events-none"
        >
          <div className="relative">
            {/* Arrow */}
            <div className="absolute -top-1.5 left-6 w-3 h-3 bg-neutral-900 border-l border-t border-neutral-700 rotate-45" />

            {/* Preview card */}
            <div className="relative bg-neutral-900 border border-neutral-700 rounded-lg overflow-hidden shadow-2xl shadow-black/50 w-64">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-800 border-b border-neutral-700">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <div className="ml-2 flex-1 bg-neutral-700 rounded px-2 py-0.5 text-[10px] text-neutral-400 font-mono truncate">
                  {domain}
                </div>
              </div>

              {/* Preview content - stylized placeholder */}
              <div className="p-4 h-32 bg-gradient-to-br from-neutral-800 to-neutral-900">
                <div className="space-y-2">
                  <div className="h-3 w-20 bg-emerald-400/20 rounded" />
                  <div className="h-2 w-full bg-neutral-700/50 rounded" />
                  <div className="h-2 w-3/4 bg-neutral-700/50 rounded" />
                  <div className="h-2 w-1/2 bg-neutral-700/50 rounded" />
                  <div className="mt-4 flex gap-2">
                    <div className="h-6 w-16 bg-emerald-400/30 rounded" />
                    <div className="h-6 w-16 bg-neutral-700/50 rounded" />
                  </div>
                </div>
              </div>

              {/* Domain label */}
              <div className="px-3 py-2 bg-neutral-800/50 border-t border-neutral-700/50">
                <p className="text-[10px] text-neutral-500 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {domain}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Project card with hover effect and preview
function ProjectCard({
  href,
  name,
  description,
  delay = 0,
  featured = false
}: {
  href: string;
  name: string;
  description: string;
  delay?: number;
  featured?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => setIsHovered(true), 300);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(false);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ x: 4 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative block py-3 border-b transition-colors duration-300 ${
        featured
          ? 'border-emerald-400/30 hover:border-emerald-400'
          : 'border-neutral-800 hover:border-emerald-400/50'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className={`font-mono text-sm ${featured ? 'text-emerald-400' : 'text-emerald-400/70'}`}>
            {featured ? '◆' : '$'}
          </span>
          <span className={`font-medium group-hover:text-emerald-400 transition-colors duration-300 ${
            featured ? 'text-emerald-400' : 'text-neutral-200'
          }`}>
            {name}
          </span>
          {featured && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 bg-emerald-400/10 text-emerald-400 rounded">
              MAIN
            </span>
          )}
        </div>
        <motion.span
          className="text-neutral-600 group-hover:text-emerald-400 transition-colors duration-300"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
        >
          →
        </motion.span>
      </div>
      <p className={`text-sm mt-1 pl-6 group-hover:text-neutral-400 transition-colors duration-300 ${
        featured ? 'text-neutral-400' : 'text-neutral-500'
      }`}>
        {description}
      </p>

      <PreviewTooltip url={href} isVisible={isHovered} />
    </motion.a>
  );
}

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-emerald-400/20 selection:text-emerald-400">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative max-w-xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          {/* Avatar with glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute inset-0 w-16 h-16 bg-emerald-400/20 rounded-full blur-xl" />
            <Image
              src="/images/avatar.jpg"
              alt="Daniel Hangan"
              width={64}
              height={64}
              className="relative rounded-full ring-2 ring-neutral-800 hover:ring-emerald-400/50 transition-all duration-500"
              priority
              unoptimized
            />
          </motion.div>

          {/* Name with typing effect */}
          <div className="space-y-4">
            <h1 className="text-2xl font-medium text-neutral-100 font-mono">
              <TypingText text="Daniel Hangan" delay={0.3} />
            </h1>

            <div className="text-neutral-400 leading-relaxed">
              <StaggeredText
                text="Social Growth Engineer & Founder. Building stuff while having fun."
                delay={1.2}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="text-neutral-500 text-sm font-mono"
            >
              <span className="text-emerald-400">location:</span> Lisbon, Portugal
            </motion.p>
          </div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.5 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-emerald-400 font-mono text-xs">~/projects</span>
              <span className="flex-1 h-px bg-neutral-800" />
            </div>

            <ProjectCard
              href="https://dansugc.com"
              name="DansUGC"
              description="Real human UGC reactions to help creators go viral on TikTok"
              delay={3}
              featured={true}
            />
            <ProjectCard
              href="https://dansvpn.com"
              name="dansvpn.com"
              description="VPN for US audience targeting"
              delay={3.15}
            />
            <ProjectCard
              href="https://clippersdb.com"
              name="clippersdb.com"
              description="Trusted clippers database"
              delay={3.3}
            />
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6, duration: 0.5 }}
            className="flex gap-6 text-sm font-mono"
          >
            <HoverLink href="mailto:hangandaniel1@gmail.com" delay={3.7}>
              email
            </HoverLink>
            <HoverLink href="https://x.com/danielhangan_" delay={3.8}>
              x.com
            </HoverLink>
            <HoverLink href="https://linkedin.com/in/danielhangan" delay={3.9}>
              linkedin
            </HoverLink>
          </motion.div>

          {/* Connect message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.2, duration: 0.5 }}
            className="pt-8 font-mono text-sm text-neutral-600"
          >
            <span className="text-emerald-400">→</span> always open to connect
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block w-2 h-4 bg-emerald-400/50 ml-1 align-middle"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
