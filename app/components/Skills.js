import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Tailwind CSS', level: 85, icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
];

const otherSkills = [
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-[30%] left-[5%] w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-indigo-600/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-zinc-800"></div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Expertise</h2>
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-zinc-800"></div>
          </div>
          <p className="text-zinc-400 max-w-2xl">
            Proficient in various programming languages and technologies, constantly expanding my knowledge base through hands-on projects and continuous learning.
          </p>
        </motion.div>

        {/* Main skills */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-lg font-medium text-white/90 uppercase tracking-wider mb-2">Core Technologies</h3>
            <div className="h-px w-20 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800/50 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm"
              >
                <div className="flex items-start mb-6">
                  <div className="rounded-lg p-2.5 bg-zinc-800/50 flex items-center justify-center mr-4">
                    <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{skill.name}</h4>
                    <p className="text-xs text-zinc-500 mt-1">Proficiency: {skill.level}%</p>
                  </div>
                </div>
                
                <div className="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-600"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other skills showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 p-8"
        >
          <h3 className="text-lg font-medium text-white/90 mb-8">Additional Technologies</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {otherSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-xl bg-zinc-800/70 flex items-center justify-center mb-3 backdrop-blur-sm">
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                </div>
                <span className="text-sm text-zinc-400">{skill.name}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 pt-6 border-t border-zinc-800/50"
          >
            <h4 className="text-sm uppercase tracking-wider text-zinc-500 mb-4">Other Skills</h4>
            <div className="flex flex-wrap gap-3">
              {['UI/UX Design', 'Responsive Web', 'SEO', 'Firebase', 'Vercel', 'GitHub', 'VS Code', 'Problem Solving'].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="px-4 py-2 rounded-full bg-zinc-800/30 text-xs text-zinc-400 border border-zinc-700/30"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 