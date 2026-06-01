import { Shield, MonitorSmartphone, HeadphonesIcon } from 'lucide-react';

export function SettingsView() {
  return (
    <div className="max-w-[1280px] w-full mx-auto px-6 py-12">
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-black font-inter tracking-tight text-white mb-2">Configurações</h1>
        <p className="text-zinc-400 font-inter">Gerencie suas preferências de conta e segurança.</p>
      </header>

      <nav className="flex space-x-1 border-b border-zinc-800 mb-10 overflow-x-auto whitespace-nowrap pb-1 hide-scrollbar">
        <button className="px-4 py-4 text-indigo-400 border-b-2 border-indigo-400 font-bold font-manrope text-sm transition-all whitespace-nowrap">
          Informações de Login
        </button>
        <button className="px-4 py-4 text-zinc-500 hover:text-zinc-200 transition-all font-semibold font-manrope text-sm whitespace-nowrap">
          Configurações do Aplicativo
        </button>
      </nav>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
        <div className="xl:col-span-2 space-y-6">
          <section className="glass-panel rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold font-inter text-white mb-6 flex items-center gap-3">
              <Shield className="w-5 h-5 text-indigo-400" />
              Credenciais de Acesso
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-black">Endereço de E-mail</label>
                <input 
                  type="email" 
                  defaultValue="jogador.one@bazinga.com" 
                  className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 text-white font-manrope" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-black">Nome de Usuário</label>
                <input 
                  type="text" 
                  defaultValue="JogadorOne_42" 
                  disabled 
                  className="w-full bg-zinc-950/50 border border-white/5 rounded-xl px-4 py-3 text-zinc-500 cursor-not-allowed font-manrope" 
                />
              </div>
            </div>

            <hr className="border-zinc-800 mb-6" />

            <h3 className="font-bold text-white mb-6">Alterar Senha</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-black">Senha Atual</label>
                <input 
                  type="password" 
                  placeholder="••••••••••••" 
                  className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 text-white font-manrope" 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-black">Nova Senha</label>
                  <input 
                    type="password" 
                    placeholder="Mínimo 8 caracteres" 
                    className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 text-white font-manrope" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-black">Confirmar Nova Senha</label>
                  <input 
                    type="password" 
                    placeholder="Repita a nova senha" 
                    className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 text-white font-manrope" 
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] active:scale-95 text-sm font-manrope">
                Salvar Alterações
              </button>
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="font-bold text-white mb-4">Sessões Ativas</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MonitorSmartphone className="w-5 h-5 text-zinc-500 mt-0.5" />
                <div className="text-sm">
                  <p className="text-white font-bold">Windows PC • São Paulo</p>
                  <p className="text-zinc-500 text-xs mt-1">Esta sessão (Ativo agora)</p>
                </div>
              </li>
            </ul>
            <button className="w-full mt-6 py-2.5 border border-zinc-800 hover:bg-zinc-800/40 rounded-xl text-xs font-bold text-zinc-400 transition-all">
              Encerrar outras sessões
            </button>
          </div>

          <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-2xl p-6 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-bold text-indigo-300 mb-2">Precisa de Ajuda?</h3>
              <p className="text-xs text-indigo-400/80 mb-6 leading-relaxed">Nossa equipe de suporte está disponível 24/7 para proteger sua conta do Bazinga.</p>
              <a href="#" className="font-manrope text-xs font-black uppercase tracking-widest text-white hover:underline">
                Falar com Suporte
              </a>
            </div>
            <HeadphonesIcon className="absolute -bottom-4 -right-4 w-24 h-24 text-indigo-500/10" />
          </div>
        </aside>
      </div>
    </div>
  );
}
