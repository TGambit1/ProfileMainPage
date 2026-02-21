import { motion } from 'motion/react';
import { Settings, Home } from 'lucide-react';
import logoImage from 'figma:asset/508fa746b183626a8fca6be4c02b3aa5a88b1f8f.png';

interface OptionCProps {
  onSettingsClick?: () => void;
  theme?: 'light' | 'dark' | 'auto';
  accentColor?: string;
}

export default function OptionC({ onSettingsClick, theme = 'light', accentColor = '#7eb6eb' }: OptionCProps) {
  const isDark = theme === 'dark';
  
  return (
    <div className={`size-full overflow-y-auto overflow-x-hidden ${
      isDark 
        ? 'bg-gradient-to-b from-slate-900 to-slate-800' 
        : 'bg-gradient-to-b from-rose-50 to-orange-50'
    }`}>
      {/* Hero Section - Watercolor Brooklyn Bridge */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Home Button */}
        <motion.button
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-8 left-8 z-20 p-2 rounded-full hover:bg-white/20 transition-colors"
          style={{ color: accentColor }}
        >
          <Home size={24} />
        </motion.button>

        {/* Logo at top center */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-8 left-1/2 -translate-x-1/2 z-20"
        >
          <img 
            src={logoImage} 
            alt="Social Company" 
            className="w-[400px] h-auto"
          />
        </motion.div>

        {/* Settings Button */}
        <motion.button
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onClick={onSettingsClick}
          className="absolute top-8 right-8 z-20 p-2 rounded-full hover:bg-white/20 transition-colors"
          style={{ color: accentColor }}
        >
          <Settings size={24} />
        </motion.button>

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
      </section>
    </div>
  );
}