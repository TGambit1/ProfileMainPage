import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, Edit2, Eye, EyeOff, Lock } from 'lucide-react';
import { useState } from 'react';

interface AccountPageProps {
  onBack?: () => void;
  theme?: 'light' | 'dark' | 'auto';
  accentColor?: string;
}

export default function AccountPage({ onBack, theme = 'light', accentColor = '#7eb6eb' }: AccountPageProps) {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isDark = theme === 'dark';

  const profileSections = [
    {
      title: 'Personal Information',
      items: [
        { icon: User, label: 'Full Name', value: 'John Anderson' },
        { icon: Mail, label: 'Email', value: 'john.anderson@email.com' },
        { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
        { icon: Calendar, label: 'Date of Birth', value: 'January 15, 1990' },
        { icon: MapPin, label: 'Location', value: 'New York, NY' },
      ]
    },
  ];

  return (
    <div className={`size-full overflow-y-auto overflow-x-hidden ${
      isDark 
        ? 'bg-gradient-to-b from-slate-900 to-slate-800' 
        : 'bg-gradient-to-b from-rose-50 to-orange-50'
    }`}>
      <div className="min-h-screen px-6 py-8 pb-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            onClick={onBack}
            className={`p-2 rounded-full transition-colors ${
              isDark ? 'hover:bg-slate-700/30' : 'hover:bg-white/30'
            }`}
            style={{ color: accentColor }}
          >
            <ArrowLeft size={24} />
          </motion.button>
          
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-2xl font-light ${
              isDark ? 'text-slate-100' : 'text-blue-900/80'
            }`}
          >
            Account
          </motion.h1>
          
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>

        <div className="max-w-md mx-auto">
          {/* Profile Picture Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center mb-8"
          >
            <div 
              className="size-24 rounded-full flex items-center justify-center mb-3"
              style={{ backgroundColor: accentColor }}
            >
              <User size={48} className="text-white" />
            </div>
            <button 
              className={`text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm transition-colors flex items-center gap-2 ${
                isDark ? 'bg-slate-700/40 hover:bg-slate-700/60' : 'bg-white/40 hover:bg-white/60'
              }`}
              style={{ color: accentColor }}
            >
              <Edit2 size={14} />
              Edit Photo
            </button>
          </motion.div>

          {/* Profile Information Sections */}
          {profileSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + sectionIndex * 0.1 }}
              className="mb-6"
            >
              <h2 className={`text-sm font-medium mb-3 px-2 ${
                isDark ? 'text-slate-300' : 'text-blue-900/60'
              }`}>
                {section.title}
              </h2>
              
              <div className={`backdrop-blur-sm rounded-2xl overflow-hidden ${
                isDark ? 'bg-slate-700/40' : 'bg-white/40'
              }`}>
                {section.items.map((item, index) => (
                  <button
                    key={item.label}
                    className={`w-full p-4 flex items-center gap-4 transition-all active:scale-98 ${
                      isDark ? 'hover:bg-slate-700/60' : 'hover:bg-white/60'
                    } ${
                      index !== section.items.length - 1 
                        ? isDark ? 'border-b border-slate-600/50' : 'border-b border-white/50'
                        : ''
                    }`}
                  >
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${accentColor}20` }}
                    >
                      <item.icon size={18} style={{ color: accentColor }} />
                    </div>
                    
                    <div className="flex-1 text-left">
                      <p className={`text-xs mb-0.5 ${
                        isDark ? 'text-slate-400' : 'text-blue-800/50'
                      }`}>
                        {item.label}
                      </p>
                      <p className={`text-sm font-medium ${
                        isDark ? 'text-slate-100' : 'text-blue-900/90'
                      }`}>
                        {item.value}
                      </p>
                    </div>
                    
                    <Edit2 size={16} className={isDark ? 'text-slate-400' : 'text-blue-900/30'} />
                  </button>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Account Actions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-3 mt-8"
          >
            <button 
              onClick={() => setShowChangePassword(!showChangePassword)}
              className={`w-full p-4 rounded-2xl backdrop-blur-sm font-medium transition-colors ${
                isDark 
                  ? 'bg-slate-700/40 text-slate-100 hover:bg-slate-700/60'
                  : 'bg-white/40 text-blue-900/80 hover:bg-white/60'
              }`}
            >
              Change Password
            </button>
            
            {/* Change Password Dropdown */}
            <AnimatePresence>
              {showChangePassword && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className={`backdrop-blur-sm rounded-2xl p-5 space-y-4 ${
                    isDark ? 'bg-slate-600/50' : 'bg-white/50'
                  }`}>
                    {/* Current Password */}
                    <div>
                      <label className={`text-xs mb-2 block px-1 ${
                        isDark ? 'text-slate-300' : 'text-blue-900/60'
                      }`}>
                        Current Password
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2">
                          <Lock size={18} style={{ color: accentColor }} />
                        </div>
                        <input
                          type={showCurrentPassword ? 'text' : 'password'}
                          placeholder="Enter current password"
                          className={`w-full pl-11 pr-11 py-3 rounded-xl border-2 border-transparent outline-none text-sm ${
                            isDark 
                              ? 'bg-slate-700/60 text-slate-100 placeholder:text-slate-400'
                              : 'bg-white/60 text-blue-900/90 placeholder:text-blue-800/30'
                          }`}
                          style={{ borderColor: 'transparent' }}
                          onFocus={(e) => e.currentTarget.style.borderColor = accentColor}
                          onBlur={(e) => e.currentTarget.style.borderColor = 'transparent'}
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className={isDark ? 'absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200' : 'absolute right-3 top-1/2 -translate-y-1/2 text-blue-900/40 hover:text-blue-900/60'}
                        >
                          {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    {/* New Password */}
                    <div>
                      <label className={`text-xs mb-2 block px-1 ${
                        isDark ? 'text-slate-300' : 'text-blue-900/60'
                      }`}>
                        New Password
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2">
                          <Lock size={18} style={{ color: accentColor }} />
                        </div>
                        <input
                          type={showNewPassword ? 'text' : 'password'}
                          placeholder="Enter new password"
                          className={`w-full pl-11 pr-11 py-3 rounded-xl border-2 border-transparent outline-none text-sm ${
                            isDark 
                              ? 'bg-slate-700/60 text-slate-100 placeholder:text-slate-400'
                              : 'bg-white/60 text-blue-900/90 placeholder:text-blue-800/30'
                          }`}
                          style={{ borderColor: 'transparent' }}
                          onFocus={(e) => e.currentTarget.style.borderColor = accentColor}
                          onBlur={(e) => e.currentTarget.style.borderColor = 'transparent'}
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className={isDark ? 'absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200' : 'absolute right-3 top-1/2 -translate-y-1/2 text-blue-900/40 hover:text-blue-900/60'}
                        >
                          {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className={`text-xs mb-2 block px-1 ${
                        isDark ? 'text-slate-300' : 'text-blue-900/60'
                      }`}>
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2">
                          <Lock size={18} style={{ color: accentColor }} />
                        </div>
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Confirm new password"
                          className={`w-full pl-11 pr-11 py-3 rounded-xl border-2 border-transparent outline-none text-sm ${
                            isDark 
                              ? 'bg-slate-700/60 text-slate-100 placeholder:text-slate-400'
                              : 'bg-white/60 text-blue-900/90 placeholder:text-blue-800/30'
                          }`}
                          style={{ borderColor: 'transparent' }}
                          onFocus={(e) => e.currentTarget.style.borderColor = accentColor}
                          onBlur={(e) => e.currentTarget.style.borderColor = 'transparent'}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className={isDark ? 'absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200' : 'absolute right-3 top-1/2 -translate-y-1/2 text-blue-900/40 hover:text-blue-900/60'}
                        >
                          {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => setShowChangePassword(false)}
                        className={`flex-1 py-3 rounded-xl font-medium transition-colors ${
                          isDark 
                            ? 'bg-slate-700/60 text-slate-200 hover:bg-slate-700/80'
                            : 'bg-white/60 text-blue-900/60 hover:bg-white/80'
                        }`}
                      >
                        Cancel
                      </button>
                      <button
                        className="flex-1 py-3 rounded-xl text-white font-medium hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: accentColor }}
                      >
                        Update Password
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <button className={`w-full p-4 rounded-2xl backdrop-blur-sm text-red-600 font-medium transition-colors ${
              isDark ? 'bg-slate-700/40 hover:bg-slate-700/60' : 'bg-white/40 hover:bg-white/60'
            }`}>
              Delete Account
            </button>
          </motion.div>

          {/* Account Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`text-center mt-12 text-xs ${
              isDark ? 'text-slate-500' : 'text-blue-800/40'
            }`}
          >
            Account created on March 15, 2024
          </motion.div>
        </div>
      </div>
    </div>
  );
}