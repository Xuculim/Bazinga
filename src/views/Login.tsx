import { Mail, Lock, MessageCircle, Apple, Globe } from 'lucide-react';
import { InteractiveBackground } from '../components/InteractiveBackground';

interface AuthProps {
  onSetView: (view: string) => void;
}

export function LoginView({ onSetView }: AuthProps) {
  return (
    <>
      <InteractiveBackground />
      <div className="min-h-screen w-full flex flex-col items-center justify-between py-6 px-6 relative z-10">
      <div className="flex-1 flex flex-col items-center justify-center w-full gap-8 py-8">
        <div className="w-full max-w-[800px] flex justify-center">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR1zw88iOpoR-nmFhWCgm58EHL1aNIrOiNxdKnU0gUDubbFypc_ZjCylN6FJ5oO6Mzp7ViZn2wFdn4duzPLSlDnPTOI1q-Kj5d12OgFNlZ4_N__VGzL43IWRkI85wx8-lAsyKiX0uOuopZylXmOXGLpQL7VtMP4HbBv9t2VCu9kv8MhGo9CVs8i6rUCRSagrbpt6Wun5g7dAZTW2DDMugp2tNoPLIQJbIMJ_4OPdY5-q3v2ZxAqIjGE1l8QM2uUU4nIWoxf8k205PH" 
            alt="Bazinga Logo" 
            className="w-full max-w-[300px] md:max-w-[400px] h-auto drop-shadow-[0_20px_50px_rgba(179,161,255,0.4)] transform transition-all duration-700 hover:scale-105" 
          />
        </div>

        <div className="w-full max-w-[480px] flex flex-col gap-4">
          <div className="glass-panel w-full rounded-[2rem] p-6 md:p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]">
            <header className="mb-6 text-center">
              <h2 className="font-inter text-2xl font-bold tracking-tight mb-1 text-white">Bem Vindo !</h2>
              <p className="font-inter text-zinc-400 text-sm">Entre para acessar a sua biblioteca digital.</p>
            </header>
            
            <form onSubmit={(e) => { e.preventDefault(); onSetView('store'); }} className="space-y-4">
              <div className="space-y-1.5">
                <label className="font-manrope text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Email</label>
                <div className="relative group">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
                  <input 
                    type="email" 
                    placeholder="commander@bazinga.com" 
                    className="w-full bg-zinc-900/50 border-none rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-zinc-600 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-300 outline-none font-manrope" 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center px-1">
                  <label className="font-manrope text-[10px] font-bold uppercase tracking-widest text-zinc-400">Senha</label>
                  <a href="#" className="font-manrope text-[10px] font-bold text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider">Esqueceu ?</a>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
                  <input 
                    type="password" 
                    placeholder="••••••••••••" 
                    className="w-full bg-zinc-900/50 border-none rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-zinc-600 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-300 outline-none font-manrope" 
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-inter font-bold py-3.5 rounded-full shadow-[0_8px_20px_-4px_rgba(99,102,241,0.4)] active:scale-[0.98] transition-all duration-300 mt-4 group">
                <span className="flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                  Entrar <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
                </span>
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-white/5"></div>
              <span className="font-manrope text-[9px] uppercase tracking-[0.2em] text-zinc-500">Ou continue com</span>
              <div className="h-[1px] flex-1 bg-white/5"></div>
            </div>

            <div className="grid gap-3 grid-cols-3">
              <button className="flex flex-col items-center justify-center gap-2 bg-zinc-900/40 hover:bg-zinc-800 py-3 rounded-xl transition-colors group border border-white/5">
                <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span className="font-manrope text-[9px] font-bold uppercase tracking-wider text-zinc-400">Discord</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 bg-zinc-900/40 hover:bg-zinc-800 py-3 rounded-xl transition-colors group border border-white/5">
                <Apple className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span className="font-manrope text-[9px] font-bold uppercase tracking-wider text-zinc-400">Apple</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 bg-zinc-900/40 hover:bg-zinc-800 py-3 rounded-xl transition-colors group border border-white/5">
                <Globe className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span className="font-manrope text-[9px] font-bold uppercase tracking-wider text-zinc-400">Google</span>
              </button>
            </div>
          </div>

          <div className="text-center mt-2">
            <p className="font-inter text-xs text-zinc-400">
              Não tem uma conta ? <button onClick={() => onSetView('register')} className="text-indigo-400 font-bold hover:underline ml-1">Clique aqui e crie uma !</button>
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
