import { Gamepad2, LibraryBig, Users, User, Settings, LogOut } from 'lucide-react';
import { cn } from './Header'; // using the shared util

interface SidebarProps {
  isOpen: boolean;
  activeView: string;
  onSetView: (view: string) => void;
  onClose: () => void;
}

export function Sidebar({ isOpen, activeView, onSetView, onClose }: SidebarProps) {
  
  const navItems = [
    { id: 'store', label: 'Jogos', icon: Gamepad2 },
    { id: 'library', label: 'Minha Biblioteca', icon: LibraryBig },
    { id: 'community', label: 'Amigos', icon: Users },
    { id: 'profile', label: 'Meu Perfil', icon: User },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  const handleNavClick = (id: string) => {
    onSetView(id);
    onClose();
  };

  return (
    <aside className={cn(
      "fixed left-0 top-0 h-full w-[288px] z-40 bg-zinc-950/90 backdrop-blur-2xl shadow-[20px_0_40px_rgba(0,0,0,0.5)] flex flex-col p-6 space-y-2 pt-[104px]",
      "transition-transform duration-300 ease-in-out font-manrope font-medium",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      
      <div className="mb-8 px-4 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500/30 shrink-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuyyGqFZz6Hrdb-H4P4a2w2gdCtwv6zoQPni56Q9xdGUmyv7r91xKS50S4_iQ_-bMhQwzQbO_XrMRomjZoINhJjSOexmEPlBpLrFLbudf8zF-sBdBr6ZygVJVr-QkSLakA3Kw8Kz8w9xKczvVGt3E6JFshI1AVh2q-XNPQNPsSmStE6ZbZxXkdJqkjGP-g7-DZXEKqua1Y_yGtua_r-u5Iem2WQeyHnXtvGimfWHrOaHx4wDYCQJaYAGGmd-PGgEEC83oNPWmd34F_" 
            alt="User Avatar" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div>
          <h2 className="text-indigo-500 font-bold font-inter text-lg leading-tight">Jogador One</h2>
          <p className="text-zinc-500 text-sm font-semibold">Nível 42</p>
        </div>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive = activeView === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "w-full flex items-center gap-4 px-4 py-3 rounded-full transition-all group duration-300 active:scale-95",
                isActive 
                  ? "bg-indigo-600/20 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)] translate-x-1" 
                  : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/40 hover:translate-x-1"
              )}
            >
              <Icon className="w-5 h-5 shrink-0" />
              <span className="font-semibold">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto p-4 bg-zinc-900/50 rounded-2xl border border-white/5 space-y-4">
        <div>
          <p className="text-xs text-zinc-400 mb-3 font-semibold">Acesso premium liberado</p>
          <button className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold rounded-full text-sm shadow-lg shadow-indigo-500/20 active:scale-95 transition-transform font-inter">
            Upgrade Pro
          </button>
        </div>
        <button 
          onClick={() => handleNavClick('login')}
          className="w-full py-3 px-4 bg-zinc-800/30 hover:bg-zinc-800/80 text-zinc-400 hover:text-rose-400 font-bold rounded-full text-sm active:scale-95 transition-all flex items-center justify-center gap-2 border border-white/5"
        >
          <LogOut className="w-4 h-4" />
          Sair da conta
        </button>
      </div>

    </aside>
  );
}
