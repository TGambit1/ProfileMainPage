import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function OptionC() {
  return (
    <div className="size-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-rose-50 to-orange-50">
      {/* Hero Section - Watercolor Brooklyn Bridge */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Painted Background Effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="relative w-[85%] h-[70%]"
          >
            <img
              src="https://images.unsplash.com/photo-1548904228-89fb49c5489f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9va2x5biUyMGJyaWRnZSUyMHN1bnNldCUyMGFydGlzdGljfGVufDF8fHx8MTc3MTcwMjM5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt=""
              className="size-full object-cover rounded-3xl"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
                filter: 'saturate(0.75) brightness(1.15)',
                opacity: 0.55
              }}
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 text-center max-w-md mx-auto">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs uppercase tracking-[0.3em] text-rose-700/70 mb-8"
          >
            Iconic Architecture
          </motion.p>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-6xl mb-6 text-rose-900/80 tracking-tight leading-tight"
          >
            Brooklyn
            <br />
            Bridge
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base text-rose-800/60 mb-12 leading-relaxed"
          >
            Steel cables and stone towers connecting two worlds
          </motion.p>

          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-rose-700/20 backdrop-blur-sm text-rose-900 px-10 py-4 rounded-full text-base inline-flex items-center gap-2 shadow-lg border border-rose-300/30"
          >
            Explore Bridge
            <ArrowRight className="size-5" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}