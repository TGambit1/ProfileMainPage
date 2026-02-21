import { useState } from 'react';
import OptionC from './components/OptionC';
import SettingsPage from './components/SettingsPage';
import ConnectionsPage from './components/ConnectionsPage';
import AccountPage from './components/AccountPage';
import AppearancePage from './components/AppearancePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'settings' | 'connections' | 'account' | 'appearance'>('settings');
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('light');
  const [accentColor, setAccentColor] = useState<string>('#7eb6eb');

  if (currentPage === 'appearance') {
    return <AppearancePage onBack={() => setCurrentPage('settings')} theme={theme} onThemeChange={setTheme} accentColor={accentColor} onAccentColorChange={setAccentColor} />;
  }

  if (currentPage === 'account') {
    return <AccountPage onBack={() => setCurrentPage('settings')} theme={theme} accentColor={accentColor} />;
  }

  if (currentPage === 'connections') {
    return <ConnectionsPage onBack={() => setCurrentPage('settings')} theme={theme} accentColor={accentColor} />;
  }

  if (currentPage === 'settings') {
    return <SettingsPage onBack={() => setCurrentPage('home')} onConnectionsClick={() => setCurrentPage('connections')} onAccountClick={() => setCurrentPage('account')} onAppearanceClick={() => setCurrentPage('appearance')} theme={theme} accentColor={accentColor} />;
  }

  return <OptionC onSettingsClick={() => setCurrentPage('settings')} theme={theme} accentColor={accentColor} />;
}