import { Gamepad2, LibraryBig, Users, User } from 'lucide-react';
import { cn } from './Header';

interface MobileNavProps {
  activeView: string;
  onSetView: (view: string) => void;
}

export function MobileNav({ activeView, onSetView }: MobileNavProps) {
  const tabs = [
    { id: 'store', label: 'Store', icon: Gamepad2 },
    { id: 'library', label: 'Library', icon: LibraryBig },
    { id: 'community', label: 'Social', icon: Users },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-zinc-950/70 backdrop-blur-lg flex justify-around items-center px-4 py-3 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.5)] rounded-t-3xl font-manrope text-[10px] uppercase tracking-widest border-t border-white/5">
      {tabs.map((tab) => {
        const isActive = activeView === tab.id;
        const Icon = tab.icon;
        
        return (
          <button
            key={tab.id}
            onClick={() => onSetView(tab.id)}
            className={cn(
              "flex flex-col items-center justify-center px-6 py-2 transition-colors active:scale-90 duration-300",
              isActive ? "bg-indigo-600/20 text-indigo-400 rounded-2xl shadow-inner" : "text-zinc-500 hover:text-indigo-300"
            )}
          >
            <Icon className="w-6 h-6 mb-1!" /> {/* Force margin if needed, but flex gap is better. Added mb-1 inline in design */}
            <span className="mt-1 font-bold">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
