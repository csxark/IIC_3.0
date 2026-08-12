
import React from 'react';
import { Code, Lightbulb, Users, Trophy, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-pink-400" />,
      title: "Code with Purpose",
      description:
        "Build innovative solutions that address real-world challenges across various domains."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-cyan-400" />,
      title: "Learn & Grow",
      description:
        "Expand your skills through workshops, mentorship sessions, and hands-on experience."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "Connect & Collaborate",
      description:
        "Network with fellow developers, designers, and industry professionals."
    },
    {
      icon: <Trophy className="h-8 w-8 text-yellow-400" />,
      title: "Win Big",
      description:
        "Compete for substantial prizes and recognition for your innovative solutions."
    }
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-24 space-bg w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* About Heading */}
        <div className="text-center mb-14 sm:mb-16">

          {/* Sparkle Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block p-3 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full mb-4"
          >
            <Sparkles className="h-8 w-8 text-pink-400" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
          >
            About <span className="gradient-text">IIC 3.0</span>
          </motion.h2>

          {/* Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto mb-6 rounded-full"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-[18px] text-gray-200 max-w-4xl mx-auto leading-[1.7] font-normal tracking-wide"
          >
            The International Innovation Challenge (IIC) is an empowering
            platform for young minds to address real-world challenges. The
            event brings together exceptional talents in a 36-hour hackathon,
            allowing participants to brainstorm and devise impactful solutions
            under the mentorship of industry leaders. We will also feature a
            startup carnival and international conference to foster innovation
            and collaboration.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.215, 0.610, 0.355, 1.000]
              }}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              className="group relative glass-card rounded-2xl p-5 sm:p-6 min-h-[300px] w-full border border-white/10 bg-white/[0.03] backdrop-blur-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]"
            >

              {/* Hover Gradient */}
              <div className="absolute -inset-px bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl z-0 pointer-events-none blur-[1px]" />

              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-36 bg-pink-500/25 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full justify-between">

                <div>

                  {/* Icon */}
                  <div className="bg-gradient-to-br from-pink-500/15 to-purple-600/15 inline-flex p-3 rounded-xl mb-5 border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-pink-500/40 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3 transition-colors duration-300 group-hover:text-pink-400 tracking-wide">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-[15px] leading-relaxed transition-colors duration-300 group-hover:text-white font-normal">
                    {feature.description}
                  </p>

                </div>

                {/* Explore Module */}
                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">

                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-pink-400">
                    Explore Module
                  </span>

                  <svg
                    className="w-4 h-4 text-pink-400 transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default About;