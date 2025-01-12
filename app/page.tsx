'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Section = ({ title, children }) => (
  <motion.section variants={fadeIn} className="space-y-4">
    <h2 className="text-sm font-light">{title}</h2>
    <div className="space-y-4">
      {children}
    </div>
  </motion.section>
);

const ListItem = ({ children }) => (
  <div className="flex items-start space-x-3">
    <span className="text-gray-500">•</span>
    <p className="text-gray-400">{children}</p>
  </div>
);

export default function Page() {
  return (
    <div className="min-h-screen text-gray-200 py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-xl mx-auto space-y-16"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        {/* Header Section with Avatar and Intro */}
        <div className="space-y-16">
          <motion.div>
            <Image
              src="/images/avatar.png"
              alt="Daniel Hangan"
              width={48}
              height={48}
              className="rounded-full"
            />
          </motion.div>
          <div className="space-y-2">
            <motion.p 
              className="font-bold"
              variants={fadeIn}
            >
              Hi, I'm Daniel. <span className="text-gray-400">Founder of Foresthire</span>
            </motion.p>
            <motion.p 
              className="text-gray-400"
              variants={fadeIn}
            >
              Designing and building delightful digital experiences.
            </motion.p>
          </div>
        </div>

        {/* Currently Section */}
        <Section title="CURRENTLY">
          <ListItem>
            Founder at <a href="https://www.foresthire.com" className="text-white hover:text-gray-300">Foresthire</a>, 
            automating early stage recruiting for startups.
          </ListItem>
          <ListItem>
            Lead Software Engineer at <a href="https://auracles.io" className="text-white hover:text-gray-300">Auracles</a>, 
            the digital identity platform for sound artists.
          </ListItem>
          <ListItem>
            Passionate about startups, design, security and the future of work.
          </ListItem>
          <ListItem>
            Based in Lisbon. Into surfing, jiu-jitsu, and coffee.
          </ListItem>
        </Section>

        {/* Background Section */}
        <Section title="BACKGROUND">
          <ListItem>
            Earned a bachelor's degree in business.
          </ListItem>
          <ListItem>
            After working for two years in finance, I transitioned into software engineering.
          </ListItem>
          <ListItem>
            Built 4 startups, sold 1 to <strong>CB Insights</strong>.
          </ListItem>
          <ListItem>
            Founded <a href="https://www.foresthire.com/">Foresthire</a> in 2024, 
            the recruitment automation loved by founders.
          </ListItem>
        </Section>

        {/* Traits Section */}
        <Section title="TRAITS">
          <ListItem>
            Energized by solving real problems. Startups are where I thrive.
          </ListItem>
          <ListItem>
            Hands-on: I move fast on ideas, design tweaks, pitch decks, and feedback.
          </ListItem>
          <ListItem>
            Pragmatic, efficient, and direct. Focused on what truly matters.
          </ListItem>
        </Section>

        {/* <Suspense fallback={<div>Loading work history...</div>}>
          <WorkHistory />
        </Suspense>

        <Suspense fallback={<div>Loading projects...</div>}>
          <ProjectShowcase />
        </Suspense>

        <Suspense fallback={<div>Loading blog posts...</div>}>
          <BlogPosts />
        </Suspense> */}

        {/* Contact Section */}
        <motion.section 
          variants={fadeIn}
          className="border-t border-gray-800 pt-8"
        >
          <p className="text-center text-gray-400">
            Feel free to <a href="mailto:hangandaniel1@gmail.com" className="text-white hover:text-gray-300">email</a> me, 
            connect on <a href="https://x.com/danielhangan_" className="text-white hover:text-gray-300">X</a> or <a href="https://linkedin.com/in/danielhangan" className="text-white hover:text-gray-300">LinkedIn</a>
          </p>
        </motion.section>
      </motion.div>
    </div>
  );
}
