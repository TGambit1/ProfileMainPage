import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Calendar, Landmark, TrendingUp, Cloud, Shield, ChevronDown, Plus } from 'lucide-react';
import { useState } from 'react';

interface ConnectionsPageProps {
  onBack?: () => void;
  theme?: 'light' | 'dark' | 'auto';
  accentColor?: string;
}

interface ConnectedAccount {
  name: string;
  email?: string;
  status: 'connected' | 'disconnected';
}

interface ConnectionItem {
  icon: any;
  label: string;
  description: string;
  accounts: ConnectedAccount[];
}

export default function ConnectionsPage({ onBack, theme = 'light', accentColor = '#7eb6eb' }: ConnectionsPageProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const isDark = theme === 'dark';

  const connectionItems: ConnectionItem[] = [
    { 
      icon: Calendar, 
      label: 'Calendar & Email', 
      description: 'Google, Outlook, iCloud', 
      accounts: [
        { name: 'Google Calendar', email: 'you@gmail.com', status: 'connected' },
        { name: 'Outlook', email: 'you@outlook.com', status: 'disconnected' },
        { name: 'iCloud', status: 'disconnected' },
      ]
    },
    { 
      icon: Landmark, 
      label: 'Bank Accounts', 
      description: 'Link your banking', 
      accounts: [
        { name: 'Chase Bank', status: 'connected' },
        { name: 'Bank of America', status: 'disconnected' },
        { name: 'Wells Fargo', status: 'disconnected' },
      ]
    },
    { 
      icon: TrendingUp, 
      label: 'Brokerage Accounts', 
      description: 'Investment portfolios', 
      accounts: [
        { name: 'Fidelity', status: 'connected' },
        { name: 'Vanguard', status: 'disconnected' },
        { name: 'Robinhood', status: 'disconnected' },
        { name: 'Charles Schwab', status: 'disconnected' },
      ]
    },
    { 
      icon: Cloud, 
      label: 'Cloud Storage', 
      description: 'Drive, Dropbox, iCloud', 
      accounts: [
        { name: 'Google Drive', status: 'disconnected' },
        { name: 'Dropbox', status: 'disconnected' },
        { name: 'iCloud Drive', status: 'disconnected' },
      ]
    },
    { 
      icon: Shield, 
      label: 'Security Keys', 
      description: 'Two-factor authentication', 
      accounts: [
        { name: 'Authenticator App', status: 'connected' },
        { name: 'SMS Verification', status: 'disconnected' },
        { name: 'Hardware Key', status: 'disconnected' },
      ]
    },
  ];

  const toggleExpand = (label: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedItems(newExpanded);
  };

  const hasConnections = (item: ConnectionItem) => 
    item.accounts.some(acc => acc.status === 'connected');

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
            Connections
          </motion.h1>
          
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>

        {/* Connections List */}
        <div className="max-w-md mx-auto space-y-3">
          {connectionItems.map((item, index) => {
            const isExpanded = expandedItems.has(item.label);
            const connected = hasConnections(item);
            
            return (
              <motion.div
                key={item.label}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`backdrop-blur-sm rounded-2xl overflow-hidden ${
                  isDark ? 'bg-slate-700/40' : 'bg-white/40'
                }`}
              >
                <button
                  onClick={() => toggleExpand(item.label)}
                  className={`w-full p-5 flex items-center gap-4 transition-all active:scale-98 ${
                    isDark ? 'hover:bg-slate-700/60' : 'hover:bg-white/60'
                  }`}
                >
                  <div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${accentColor}20` }}
                  >
                    <item.icon size={22} style={{ color: accentColor }} />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <h3 className={`text-base font-medium ${
                      isDark ? 'text-slate-100' : 'text-blue-900/90'
                    }`}>
                      {item.label}
                    </h3>
                    <p className={`text-sm ${
                      isDark ? 'text-slate-400' : 'text-blue-800/50'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                  
                  {connected && (
                    <div className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      {item.accounts.filter(a => a.status === 'connected').length} Connected
                    </div>
                  )}
                  
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className={isDark ? 'text-slate-400' : 'text-blue-900/40'} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 space-y-2">
                        {item.accounts.map((account) => (
                          <div
                            key={account.name}
                            className={`flex items-center justify-between p-3 rounded-xl ${
                              isDark ? 'bg-slate-600/50' : 'bg-white/50'
                            }`}
                          >
                            <div className="flex-1">
                              <p className={`text-sm font-medium ${
                                isDark ? 'text-slate-100' : 'text-blue-900/80'
                              }`}>
                                {account.name}
                              </p>
                              {account.email && (
                                <p className={`text-xs mt-0.5 ${
                                  isDark ? 'text-slate-400' : 'text-blue-800/50'
                                }`}>
                                  {account.email}
                                </p>
                              )}
                            </div>
                            
                            {account.status === 'connected' ? (
                              <button className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                Connected
                              </button>
                            ) : (
                              <button 
                                className="px-3 py-1 rounded-full text-xs font-medium text-white"
                                style={{ backgroundColor: accentColor }}
                              >
                                Connect
                              </button>
                            )}
                          </div>
                        ))}
                        
                        {/* Connect Another Button */}
                        <button 
                          className={`w-full p-3 rounded-xl border-2 border-dashed flex items-center justify-center gap-2 transition-colors mt-3 ${
                            isDark ? 'hover:bg-slate-700/30' : 'hover:bg-white/30'
                          }`}
                          style={{ borderColor: `${accentColor}40`, color: accentColor }}
                        >
                          <Plus size={18} />
                          <span className="text-sm font-medium">Connect Another</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Info Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className={`text-center mt-16 text-sm px-8 ${
            isDark ? 'text-slate-500' : 'text-blue-800/40'
          }`}
        >
          Your data is encrypted and secure
        </motion.div>
      </div>
    </div>
  );
}