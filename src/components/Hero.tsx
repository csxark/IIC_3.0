import React, { useEffect, useState } from 'react';
import { Zap, Calendar, MapPin, Rocket } from 'lucide-react';
import GlowingParticles from './GlowingParticles';
import Pdf from '/problem_statements.pdf';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-20 overflow-hidden space-bg flex items-center"
    >
      {/* Glowing Particles */}
      <GlowingParticles />

      {/* Floating geometric shapes */}
      <div className="floating-shapes"></div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">

          {/* Left Content */}
          <div
            className={`max-w-2xl mb-12 lg:mb-0 transition-all duration-1000 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >

            {/* Submission Badge */}
            <div className="inline-block px-6 py-2 mb-6 rounded-full glass-card">
              <p className="text-white font-medium flex items-center">
                <Rocket size={18} className="mr-2 text-pink-400" />
                <span className="gradient-text">
                  Submissions started!
                </span>
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              <span className="gradient-text">IIC</span>{' '}
              <span className="text-pink-400">3.0</span>

              <br />

              <span className="text-3xl md:text-4xl lg:text-5xl text-cyan-300">
                Innovation Unleashed
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're back with bigger impact and bolder innovation.
              Join the most anticipated hackathon of 2026 where dreams
              become reality.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-8">

              {/* Submit Button */}
              <button
                className="relative group py-4 px-10 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] overflow-hidden cursor-pointer"
                onClick={() =>
                  window.open(
                    'https://docs.google.com/forms/d/1r6umjVOO-wcnGa-XwrCkjcvPk2f8rcAo1msmgnfnCz0/edit',
                    '_blank'
                  )
                }
              >
                {/* Shine Effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out]" />

                <span className="relative z-10">
                  Submit
                </span>
              </button>

              {/* View Problems Button */}
              <button
                className="py-4 px-10 bg-white/[0.03] backdrop-blur-md text-white font-bold text-lg rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/[0.08] hover:border-pink-500/40 hover:text-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] active:scale-95 cursor-pointer text-center"
                onClick={() => window.open(Pdf, '_blank')}
              >
                View Problems
              </button>
            </div>

            {/* Date & Location */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-300">

              <div className="flex items-center">
                <Calendar
                  size={20}
                  className="mr-2 text-pink-400"
                />
                <span>August 21-23, 2026</span>
              </div>

              <div className="flex items-center">
                <MapPin
                  size={20}
                  className="mr-2 text-cyan-400"
                />
                <span>Manipal University Jaipur</span>
              </div>

            </div>
          </div>

          {/* Right Card */}
          <div
            className={`relative w-full max-w-md transition-all duration-1000 delay-300 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative z-10 glass-card p-8 rounded-2xl">

              {/* Glow Effects */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-20 blur-xl -z-10"></div>

              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full opacity-20 blur-xl -z-10"></div>

              {/* Card Header */}
              <div className="text-center mb-6">

                <div className="inline-block p-4 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full mb-4">
                  <Zap className="h-8 w-8 text-pink-400" />
                </div>

                <h3 className="gradient-text text-2xl font-bold mb-2">
                  Get Ready!
                </h3>

                <p className="text-gray-300">
                  The future starts here
                </p>

              </div>

              {/* Features */}
              <div className="space-y-4">
                <ul className="text-left text-gray-300 space-y-3">

                  {[
                    'Open to all innovators',
                    '₹7L+ in goodies and prizes',
                    'Expert mentorship',
                    'Global networking opportunities'
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-cyan-400 mr-3"></div>

                      {item}
                    </li>
                  ))}

                </ul>
              </div>

              {/* Quote */}
              <div className="mt-6 p-4 glass-card rounded-lg">
                <p className="text-pink-300 text-center font-medium">
                  "Where Innovation Meets Opportunity"
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;