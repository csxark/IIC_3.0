import React from 'react';
import { Code, Lightbulb, Users, Trophy, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code className="h-12 w-12 text-pink-400" />,
      title: "Code with Purpose",
      description: "Build innovative solutions that address real-world challenges across various domains."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-cyan-400" />,
      title: "Learn & Grow",
      description: "Expand your skills through workshops, mentorship sessions, and hands-on experience."
    },
    {
      icon: <Users className="h-12 w-12 text-purple-400" />,
      title: "Connect & Collaborate",
      description: "Network with fellow developers, designers, and industry professionals."
    },
    {
      icon: <Trophy className="h-12 w-12 text-yellow-400" />,
      title: "Win Big",
      description: "Compete for substantial prizes and recognition for your innovative solutions."
    }
  ];

  return (
    <section id="about" className="py-28 space-bg w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        
        
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block p-5 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full mb-6"
          >
            <Sparkles className="h-12 w-12 text-pink-400" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 tracking-tight"
          >
            About <span className="gradient-text">IIC 2.0</span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "176px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-2 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto mb-10 rounded-full"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-[25px] text-gray-200 max-w-6xl mx-auto leading-[1.8] font-normal tracking-wide"
          >
            The International Innovation Challenge (IIC) is an empowering platform for young minds to address real-world 
            challenges. The event brings together exceptional talents in a 36-hour hackathon, allowing participants to 
            brainstorm and devise impactful solutions under the mentorship of industry leaders. We will also feature a
            startup carnival and international conference to foster innovation and collaboration.
          </motion.p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-[32px] justify-items-center w-full">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.215, 0.610, 0.355, 1.000] }}
              
              
              whileHover={{ 
                y: -16, 
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              
              className="group relative glass-card rounded-[24px] p-12 min-h-[440px] w-full max-w-[400px] xl:max-w-[440px] border-2 border-white/10 bg-white/[0.03] backdrop-blur-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-pink-500/50 hover:shadow-[0_0_50px_rgba(236,72,153,0.35)]"
            >
              
              <div className="absolute -inset-px bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[22px] z-0 pointer-events-none blur-[1px]" />
              
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-56 bg-pink-500/25 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                
                  <div className="bg-gradient-to-br from-pink-500/15 to-purple-600/15 inline-flex p-6 rounded-2xl mb-10 border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-pink-500/40 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]">
                    {feature.icon}
                  </div>
                  
                 
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-5 transition-colors duration-300 group-hover:text-pink-400 tracking-wide">
                    {feature.title}
                  </h3>
                  
                  
                  <p className="text-gray-300 text-base sm:text-lg md:text-[18px] leading-relaxed transition-colors duration-300 group-hover:text-white font-normal">
                    {feature.description}
                  </p>
                </div>
                
               
                <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm sm:text-base font-bold uppercase tracking-widest text-pink-400">Explore Module</span>
                  <svg className="w-6 h-6 text-pink-400 transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
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