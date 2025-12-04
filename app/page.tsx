'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Page() {
  return (
    <div className="min-h-screen text-gray-900 bg-white py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="w-1/2 space-y-16"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        {/* Header Section with Avatar and Intro */}
        <div className="space-y-16">
          <motion.div>
            <div className="relative w-12 h-12">
              <Image
                src="/images/avatar.png"
                alt="Dan Hangan"
                fill
                className="rounded-full object-cover"
                priority
                unoptimized
              />
            </div>
          </motion.div>
          <div className="space-y-4">
            <motion.p 
              className="font-bold"
              variants={fadeIn}
            >
              Hi, I'm Dan. <span className="text-gray-600">Growth Engineer & Founder</span>
            </motion.p>
            <motion.p 
              className="text-gray-700"
              variants={fadeIn}
            >
              Hacking virality for consumer apps with UGC. 
              Building tools that help creators break through the noise and scale their reach.
            </motion.p>
            <motion.div 
              className="flex space-x-4 text-sm"
              variants={fadeIn}
            >
              <a href="mailto:hangandaniel1@gmail.com" className="text-gray-600 hover:text-black">Email</a>
              <a href="https://x.com/danielhangan_" className="text-gray-600 hover:text-black">X</a>
              <a href="https://linkedin.com/in/danielhangan" className="text-gray-600 hover:text-black">LinkedIn</a>
            </motion.div>
          </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <span className="text-gray-500">•</span>
            <p className="text-gray-700">
              Building <a href="https://dansugc.com" className="text-black hover:text-gray-600">dansugc.com</a> - 
              Real Human UGC reactions to help creators go viral on TikTok
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-gray-500">•</span>
            <p className="text-gray-700">
              Launching <a href="https://ugchumans.com" className="text-black hover:text-gray-600">ugchumans.com</a> - 
              Library of 1000+ authentic UGC reactions from real humans
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-gray-500">•</span>
            <p className="text-gray-700">
              Scaling <a href="https://dansvpn.com" className="text-black hover:text-gray-600">dansvpn.com</a> - 
              VPN solution for targeting US audiences
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-gray-500">•</span>
            <p className="text-gray-700">
              Growing <a href="https://clippersdb.com" className="text-black hover:text-gray-600">clippersdb.com</a> - 
              Trusted clippers database and reviews
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-gray-500">•</span>
            <p className="text-gray-700">
              Based in Lisbon. Into surfing, jiu-jitsu, and building products people love.
            </p>
          </div>
        </div>
        </div>

        <motion.div 
          variants={fadeIn}
          className="pt-8 border-t border-gray-200"
        >
          <p className="text-gray-500 italic">
            writings to be continued....
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}