import { motion } from 'framer-motion';

export default function Contact() {
  const contacts = [
    {
      type: 'Email',
      value: 'mail2danish@proton.me',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-indigo-500',
      hoverGradient: 'group-hover:from-purple-600 group-hover:to-indigo-600'
    },
    {
      type: 'Discord',
      value: '@dan0x_x',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
        </svg>
      ),
      gradient: 'from-blue-500 to-indigo-500',
      hoverGradient: 'group-hover:from-blue-600 group-hover:to-indigo-600'
    }
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[15%] w-72 h-72 bg-indigo-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-zinc-800"></div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get in Touch</h2>
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-zinc-800"></div>
          </div>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-px rounded-xl overflow-hidden">
                {/* Gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative bg-zinc-900/90 p-6 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.gradient} ${contact.hoverGradient}`}>
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">{contact.type}</h3>
                      <p className="text-zinc-400 font-mono text-sm">{contact.value}</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => navigator.clipboard.writeText(contact.value)}
                    className="w-full py-3 px-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 text-sm text-zinc-300 flex items-center justify-center gap-2 transition-all duration-300 group/btn"
                  >
                    <span>Copy {contact.type}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70 group-hover/btn:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500 text-sm">
            Response time: Usually within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
} 