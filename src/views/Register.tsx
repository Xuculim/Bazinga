import { Mail, Lock, User, Calendar, CreditCard, ArrowRight } from 'lucide-react';
import { InteractiveBackground } from '../components/InteractiveBackground';

interface AuthProps {
  onSetView: (view: string) => void;
}

export function RegisterView({ onSetView }: AuthProps) {
  return (
    <>
      <InteractiveBackground />
      <div className="min-h-screen w-full flex flex-col items-center justify-center py-6 px-6 relative z-10">
      <div className="w-full max-w-2xl px-4 flex justify-center items-center mb-8 mt-12 md:mt-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR1zw88iOpoR-nmFhWCgm58EHL1aNIrOiNxdKnU0gUDubbFypc_ZjCylN6FJ5oO6Mzp7ViZn2wFdn4duzPLSlDnPTOI1q-Kj5d12OgFNlZ4_N__VGzL43IWRkI85wx8-lAsyKiX0uOuopZylXmOXGLpQL7VtMP4HbBv9t2VCu9kv8MhGo9CVs8i6rUCRSagrbpt6Wun5g7dAZTW2DDMugp2tNoPLIQJbIMJ_4OPdY5-q3v2ZxAqIjGE1l8QM2uUU4nIWoxf8k205PH" 
          alt="Bazinga Logo" 
          className="w-full max-w-[250px] h-auto drop-shadow-[0_0_30px_rgba(73,75,214,0.6)] hover:scale-105 transition-transform duration-700 ease-out" 
        />
      </div>

      <div className="w-full max-w-md glass-panel rounded-lg p-8 sm:p-10 shadow-[0_0_40px_-10px_rgba(73,75,214,0.5)]">
        <div className="mb-8 text-center">
          <h1 className="font-inter text-3xl font-black tracking-tight text-white mb-2">Criar Conta</h1>
          <p className="font-inter text-zinc-400 text-sm">Junte-se à comunidade hardcore.</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onSetView('store'); }} className="space-y-6">
          <div className="space-y-2">
            <label className="font-manrope text-xs font-semibold text-zinc-400 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-indigo-400" />
              CPF
            </label>
            <input 
              type="text" 
              placeholder="000.000.000-00" 
              required
              className="w-full bg-zinc-900/50 border border-white/10 rounded-full py-3 px-5 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-400 focus:shadow-[0_0_15px_-3px_rgba(192,193,255,0.3)] transition-all ease-in-out font-manrope text-sm" 
            />
          </div>

          <div className="space-y-2">
            <label className="font-manrope text-xs font-semibold text-zinc-400 flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-400" />
              Email
            </label>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              required
              className="w-full bg-zinc-900/50 border border-white/10 rounded-full py-3 px-5 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-400 focus:shadow-[0_0_15px_-3px_rgba(192,193,255,0.3)] transition-all ease-in-out font-manrope text-sm" 
            />
          </div>

          <div className="space-y-2">
            <label className="font-manrope text-xs font-semibold text-zinc-400 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-400" />
              Data de Nascimento
            </label>
            <input 
              type="date" 
              required
              className="w-full bg-zinc-900/50 border border-white/10 rounded-full py-3 px-5 text-zinc-400 focus:outline-none focus:border-indigo-400 focus:shadow-[0_0_15px_-3px_rgba(192,193,255,0.3)] transition-all ease-in-out [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert font-manrope text-sm" 
            />
          </div>

          <div className="space-y-2">
            <label className="font-manrope text-xs font-semibold text-zinc-400 flex items-center gap-2">
              <User className="w-4 h-4 text-indigo-400" />
              Nickname
            </label>
            <input 
              type="text" 
              placeholder="Seu apelido gamer" 
              required
              className="w-full bg-zinc-900/50 border border-white/10 rounded-full py-3 px-5 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-400 focus:shadow-[0_0_15px_-3px_rgba(192,193,255,0.3)] transition-all ease-in-out font-manrope text-sm" 
            />
          </div>

          <div className="space-y-2">
            <label className="font-manrope text-xs font-semibold text-zinc-400 flex items-center gap-2">
              <Lock className="w-4 h-4 text-indigo-400" />
              Senha
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required
              className="w-full bg-zinc-900/50 border border-white/10 rounded-full py-3 px-5 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-400 focus:shadow-[0_0_15px_-3px_rgba(192,193,255,0.3)] transition-all ease-in-out font-manrope text-sm" 
            />
          </div>

          <div className="pt-4 space-y-4">
            <button type="submit" className="w-full bg-gradient-to-r from-[#494bd6] to-[#8083ff] text-white font-manrope font-bold text-sm rounded-full py-4 px-6 hover:shadow-[0_0_20px_rgba(73,75,214,0.6)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex justify-center items-center gap-2">
              Criar Conta
              <ArrowRight className="w-4 h-4" />
            </button>
            <button type="button" onClick={() => onSetView('login')} className="w-full flex justify-center items-center py-3 px-6 rounded-full bg-white/5 hover:bg-white/10 text-white font-manrope font-semibold text-sm transition-all duration-300 border border-white/5 active:scale-95">
              Voltar para o Login
            </button>
          </div>
        </form>
      </div>
      <div className="h-16 w-full"></div>
    </div>
    </>
  );
}
