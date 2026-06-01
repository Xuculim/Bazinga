import { useState, useRef, useEffect } from 'react';
import { Menu, Search, ShoppingCart, Bell, Settings, PersonStanding, Users, BookOpen, Trash2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useCart } from '../context/CartContext';

// Simple utility for Tailwind classes
export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface HeaderProps {
  onToggleSidebar: () => void;
  onSetView: (view: string) => void;
}

export function Header({ onToggleSidebar, onSetView }: HeaderProps) {
  const [activePopup, setActivePopup] = useState<'cart' | 'notifications' | 'search' | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const { cart, removeFromCart, total, discountTotal } = useCart();
  const finalTotal = total - discountTotal;

  // Handle click outside to close popups
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        if (activePopup === 'cart' || activePopup === 'notifications') {
          setActivePopup(null);
        }
      }
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        if (activePopup === 'search') {
          setActivePopup(null);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activePopup]);

  const togglePopup = (popup: 'cart' | 'notifications' | 'search') => {
    setActivePopup(prev => prev === popup ? null : popup);
  };

  const handleSearchResultClick = (viewName: string) => {
    onSetView(viewName);
    setActivePopup(null);
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl shadow-2xl shadow-indigo-500/10 h-[80px] flex items-center justify-between px-6 transition-all">
      <div className="flex items-center gap-4">
        <button 
          onClick={onToggleSidebar}
          className="p-2 text-zinc-400 hover:text-indigo-400 transition-colors active:scale-95 rounded-full hover:bg-zinc-800/50"
        >
          <Menu className="w-6 h-6" />
        </button>
        <span 
          onClick={() => onSetView('store')}
          className="text-2xl font-black italic text-indigo-500 tracking-tighter cursor-pointer"
        >
          Bazinga
        </span>
      </div>

      <div className="hidden lg:flex flex-1 max-w-xl mx-8 relative" ref={searchContainerRef}>
        <div className="relative w-full group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Buscar jogos, amigos..." 
            onFocus={() => setActivePopup('search')}
            className="w-full bg-zinc-900/50 border-none rounded-full py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary-container transition-all placeholder:text-zinc-500 outline-none text-white"
          />
        </div>

        {/* Search Results Dropdown */}
        {activePopup === 'search' && (
          <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden z-[60] popup-panel py-2 animate-in fade-in duration-200">
            <h4 className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest px-4 py-2 border-b border-white/5 mb-2">Jogos em alta</h4>
            <div 
              onClick={() => handleSearchResultClick('game-detail')}
              className="flex items-center gap-4 px-4 py-2 hover:bg-white/5 cursor-pointer transition-colors"
            >
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHHAuZgBRlHk04r7aw5a1KTWK97-TnS62uSJhEsMmKztdJZf9NdsMZkd9qcDx0vQhdsth9W5kYhLOL55D996BDYMWPhu_aAVtplaofwH4dx5hpitOallmMXiPdJuyNZbx8w_Xn6vjlA0OSjItPWxYMAo7zKrOMu318-rh3qZgayO-vAYGSGZVdduoLwlFt75qx7R9qOFouJNULW4SspGOORpdm7Cau84t7A_UC8yWgtiEkceXhgY8PIghUqh2l286QCGsqaPzWarLf" alt="Eldritch Horizons" className="w-10 h-10 rounded object-cover" />
              <div>
                <p className="text-sm font-bold text-white leading-none">Eldritch Horizons</p>
                <p className="text-[10px] text-indigo-400 uppercase tracking-widest mt-1">RPG de Ação</p>
              </div>
            </div>
            <div 
              onClick={() => handleSearchResultClick('store')}
              className="flex items-center gap-4 px-4 py-2 hover:bg-white/5 cursor-pointer transition-colors"
            >
              <img src="https://store-images.s-microsoft.com/image/apps.47379.63407868131364914.bcaa868c-407e-42c2-baeb-48a3c9f29b54.89bb995b-b066-4a53-9fe4-0260ce07e894" alt="Cyberpunk" className="w-10 h-10 rounded object-cover" />
              <div>
                <p className="text-sm font-bold text-white leading-none">Cyberpunk 2077</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Ação</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 relative" ref={popupRef}>
        <button 
          onClick={() => togglePopup('cart')}
          className="p-2 hover:bg-zinc-800/50 transition-all duration-300 rounded-full text-zinc-400 active:scale-95 relative"
        >
          <ShoppingCart className="w-5 h-5" />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 w-4 h-4 bg-indigo-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold">
              {cart.length}
            </span>
          )}
        </button>
        
        <button 
          onClick={() => togglePopup('notifications')}
          className="p-2 hover:bg-zinc-800/50 transition-all duration-300 rounded-full text-zinc-400 active:scale-95 relative"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full"></span>
        </button>

        {/* Cart Popup */}
        {activePopup === 'cart' && (
          <div className="absolute top-full right-0 mt-4 w-[384px] rounded-2xl overflow-hidden z-[60] animate-in fade-in zoom-in duration-200 popup-panel">
            <div className="p-4 border-b border-white/5 flex justify-between items-center bg-zinc-900/50">
              <h3 className="font-bold text-sm text-indigo-400">Meu Carrinho</h3>
              <span className="text-[10px] text-zinc-500 font-manrope font-bold uppercase tracking-widest">{cart.length} Itens</span>
            </div>
            <div className="max-h-[400px] overflow-y-auto hide-scrollbar">
              {cart.length === 0 ? (
                 <div className="p-8 text-center text-zinc-500">Seu carrinho está vazio</div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors flex gap-4 items-center">
                    <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-zinc-200 line-clamp-1">{item.title}</p>
                      <p className="text-xs text-zinc-400 mt-1">{item.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="p-2 text-zinc-500 hover:text-red-400 hover:bg-white/5 rounded-full transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className="p-4 bg-zinc-900/80 border-t border-white/5">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-zinc-400 font-manrope font-semibold">Total</span>
                <span className="text-lg font-bold text-indigo-400">R$ {finalTotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <button 
                onClick={() => { onSetView('cart'); setActivePopup(null); }} 
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 active:scale-95 transition-transform text-sm disabled:opacity-50"
                disabled={cart.length === 0}
              >
                Ir para o carrinho
              </button>
            </div>
          </div>
        )}

        {/* Notifications Popup */}
        {activePopup === 'notifications' && (
          <div className="absolute top-full right-0 mt-4 w-[320px] rounded-2xl overflow-hidden z-[60] animate-in fade-in zoom-in duration-200 popup-panel">
            <div className="p-4 border-b border-white/5 flex justify-between items-center bg-zinc-900/50">
              <h3 className="font-bold text-sm text-indigo-400">Notificações</h3>
              <span className="text-[10px] text-zinc-500 font-manrope font-bold uppercase tracking-widest">4 Novas</span>
            </div>
            <div className="max-h-[400px] overflow-y-auto hide-scrollbar">
              <div className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center text-zinc-950 text-[10px]">✓</div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-200">Instalação Concluída</p>
                    <p className="text-xs text-zinc-400 mt-1">Eldritch Horizons está pronto para jogar.</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-200">Novo Pedido de Amizade</p>
                    <p className="text-xs text-zinc-400 mt-1">Beatriz Silva enviou uma solicitação.</p>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setActivePopup(null)}
              className="w-full py-3 bg-zinc-900/80 text-zinc-400 text-xs font-bold hover:text-indigo-400 transition-colors"
            >
              Ver Todas
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
