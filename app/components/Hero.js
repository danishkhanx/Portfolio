import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[15%] w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px]"></div>
      </div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Content - takes 3 columns on large screens */}
          <motion.div 
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 py-1 px-3 rounded-full bg-zinc-900/60 border border-zinc-800">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                <span className="text-xs uppercase tracking-wider text-zinc-400">Developer</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter"
            >
              <span className="block text-white">
                I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">Danish</span>
              </span>
              <span className="block text-white mt-2">
                Young <span className="relative">
                  Developer
                  <span className="absolute bottom-2 left-0 w-full h-[6px] bg-gradient-to-r from-purple-500/40 to-indigo-500/40 -z-10 transform skew-x-12"></span>
                </span>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-zinc-400 max-w-xl leading-relaxed mt-6"
            >
              14-year-old developer from India crafting elegant digital experiences 
              through clean code and creative solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-5 pt-4"
            >
              <a 
                href="#projects" 
                className="relative overflow-hidden group px-8 py-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-100 group-hover:opacity-0 transition-opacity duration-300 rounded-md"></span>
                <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md"></span>
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></span>
                
                <span className="absolute inset-0 border-2 border-white/20 opacity-0 group-hover:opacity-100 rounded-md"></span>
                <span className="absolute -inset-px bg-gradient-to-r from-purple-600/50 to-indigo-600/50 opacity-0 group-hover:opacity-100 blur-lg group-hover:animate-pulse rounded-md"></span>
                
                <span className="relative z-10 flex items-center justify-center">
                  <span>Explore Projects</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 -mr-1 opacity-70 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              
              <a 
                href="#contact" 
                className="relative overflow-hidden group px-8 py-3 rounded-md bg-transparent border border-zinc-700/50 text-white font-medium transition-all duration-300"
              >
                <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 bg-zinc-800"></span>
                <span className="absolute inset-0 border border-zinc-700/50 group-hover:border-purple-500/30 rounded-md transition-colors duration-500"></span>
                <span className="relative z-10 group-hover:text-purple-200 transition-colors duration-300 flex items-center">
                  Get in Touch
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 opacity-70 group-hover:opacity-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex items-center gap-8 pt-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                  ].map((src, idx) => (
                    <div key={idx} className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 shadow-md">
                      <Image src={src} alt="Tech skill" width={16} height={16} />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-zinc-500">Main tech stack</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image/Graphic - takes 2 columns on large screens */}
          <motion.div 
            className="lg:col-span-2 hidden lg:flex justify-center items-center" 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl"></div>
              <div className="relative w-80 h-80 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 flex items-center justify-center overflow-hidden">
                <div className="text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-white/10 via-purple-500/20 to-transparent">D</div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
                
                {/* Tech stack floating elements */}
                <motion.div 
                  className="absolute top-5 right-10 bg-zinc-900 p-2 rounded-lg border border-zinc-800 shadow-lg"
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    ease: "easeInOut" 
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L1 21h22L12 2zm0 4.6L5.04 18h13.92L12 6.6z" />
                  </svg>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-12 left-6 bg-zinc-900 p-2 rounded-lg border border-zinc-800 shadow-lg"
                  animate={{ 
                    y: [0, 8, 0] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2.5,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <motion.div 
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest text-zinc-600">Scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
      
      {/* Add CSS for shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.2) 25%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
} 