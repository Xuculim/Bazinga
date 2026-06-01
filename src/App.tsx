import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MobileNav } from './components/MobileNav';

import { StoreView } from './views/Store';
import { LibraryView } from './views/Library';
import { SettingsView } from './views/Settings';
import { CommunityView } from './views/Community';
import { CartView } from './views/Cart';
import { ProfileView } from './views/Profile';
import { GameDetailView } from './views/GameDetail';
import { LoginView } from './views/Login';
import { RegisterView } from './views/Register';
import { CartProvider } from './context/CartContext';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('login');

  const handleMainContentClick = () => {
    // Retract sidebar if clicked outside (on the main canvas)
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  const isAuthView = currentView === 'login' || currentView === 'register';

  const renderView = () => {
    switch (currentView) {
      case 'login': return <LoginView onSetView={setCurrentView} />;
      case 'register': return <RegisterView onSetView={setCurrentView} />;
      case 'library': return <LibraryView />;
      case 'settings': return <SettingsView />;
      case 'community': return <CommunityView />;
      case 'profile': return <ProfileView />;
      case 'cart': return <CartView />;
      case 'game-detail': return <GameDetailView onSetView={setCurrentView} />;
      case 'store':
      default: return <StoreView onSetView={setCurrentView} />;
    }
  };

  return (
    <CartProvider>
      <div className="flex h-screen overflow-hidden bg-background relative">
        
        {/* Background Atmosphere Layers */}
        {!isAuthView && (
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#a690ff]/10 blur-[120px] rounded-full mix-blend-screen"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00cffc]/5 blur-[120px] rounded-full mix-blend-screen"></div>
          </div>
        )}

        {!isAuthView && (
          <Header 
            onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} 
            onSetView={setCurrentView} 
          />
        )}
        
        {!isAuthView && (
          <Sidebar 
            isOpen={isSidebarOpen} 
            activeView={currentView}
            onSetView={setCurrentView}
            onClose={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content Wrapper - Push logic applied here */}
        <div 
          className={`flex flex-col flex-1 h-full w-full absolute top-0 transition-all duration-300 ease-in-out z-10
            ${isSidebarOpen && !isAuthView ? 'ml-[288px]' : 'ml-0'}
          `}
        >
          <main 
            onClick={handleMainContentClick}
            className={`flex-1 overflow-y-auto overflow-x-hidden ${isAuthView ? 'pt-0' : 'pt-[80px]'} pb-24 md:pb-8 w-full relative h-full`}
          >
            {renderView()}
          </main>
        </div>

        {!isAuthView && (
          <MobileNav activeView={currentView} onSetView={setCurrentView} />
        )}
      </div>
    </CartProvider>
  );
}
