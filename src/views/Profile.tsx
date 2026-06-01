import { Edit2, Shield, UploadCloud, Gamepad2, Users, Medal, Activity, ChevronRight, Settings, Crown, Star } from 'lucide-react';

export function ProfileView() {
  const journeys = [
    { title: "Eldritch Chronicles", cat: "RPG de Mundo Aberto", time: "342h", img: "https://lh3.googleusercontent.com/aida/ADBb0uhlXdHuNkFKYs5UVejCKNAD3Sj6xLzq5j5Jby0594U57FjM-SRaBEUW3qJcEgjXqlCjYN0Cm68yOweC-WdGLSlqYKNsqC5-fE0sr51RxwVIVfHeoMVonvwSCTPWxbD1YIX7wjbeNF3IzEdTa8P6Aejog5R141OdKNyUFa-YmkytsOeFjIyKD7Usdr-ZCbKXPBUhEdUpZ269O82rDMAquZUUZFq8-KIQcy8UHUpcio_Iq2cPRsoPePCuLyxF-lhjW1F4TuFJld7Lru8", progress: 85 },
    { title: "Cyber Siege 2077", cat: "Ação e Estratégia", time: "128h", icon: Gamepad2, progress: 45 },
    { title: "Galactic Frontiers", cat: "Simulação Espacial", time: "89h", icon: UploadCloud, progress: 30 },
    { title: "Shadow Blade", cat: "Soulslike", time: "56h", icon: Shield, progress: 20 },
  ];

  return (
    <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 py-12">
      
      {/* Header Section */}
      <section className="glass-panel rounded-2xl p-8 md:p-12 mb-8 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="flex flex-col items-center gap-4 shrink-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-600 to-cyan-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida/ADBb0uidjQ6SNDysXFePUTv4mOT9WE0GBWJFV6L6xw9Qu0HJgG99m0YI4w0JTvHdyfzgc29xrjpuXwHD37rzw5qc4UGOQfbjB8T62uUcugyynCYJ7-LkAzn3s5LjxS5PNTFLJ4gNm6K6sBml-5aXu3pNlv5rGnYCUN3KuQzTxmhTeKPT2ZE9z8Nv1HtBskiP7TM4WQNrv9sVyUVW8YS0HSYf_8YnI0ptaMrdf_vxWMxOD1B_86OjfBjzt9jskXCDl2dJ_p1XZ-Mf9VVGkQ" 
              alt="Player Profile" 
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-zinc-900 shadow-2xl"
            />
          </div>
          <button className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-manrope font-bold text-sm transition-colors mt-2">
            <UploadCloud className="w-4 h-4" />
            Atualizar
          </button>
        </div>

        <div className="flex-1 text-center md:text-left space-y-6 pt-2">
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <h1 className="text-4xl md:text-5xl font-black font-inter tracking-tight text-white mb-2">
                Jogador One
              </h1>
              <button className="p-2 hover:bg-zinc-800/50 rounded-full transition-all text-zinc-500 hover:text-indigo-400">
                <Edit2 className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
              <span className="px-3 py-1 bg-indigo-600/20 text-indigo-400 text-xs font-bold rounded-full border border-indigo-500/20">
                PRO PLAYER
              </span>
              <span className="text-zinc-500 text-sm font-manrope font-semibold">Membro desde Out 2021</span>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl relative group bg-zinc-900/40">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h3 className="text-zinc-400 text-[10px] uppercase tracking-widest font-black">Bio</h3>
                <p className="text-zinc-200 text-sm max-w-xl leading-relaxed">
                  Apaixonado por RPGs e jogos de estratégia. No nível 42 da vida, buscando o platina definitivo em cada aventura digital. Especialista em táticas de flanco e colecionador de lore.
                </p>
              </div>
              <button className="p-2 hover:bg-zinc-800/50 rounded-full transition-all text-zinc-500 hover:text-indigo-400 shrink-0">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-10 pt-2">
            <div>
              <div className="text-3xl font-black text-white">152</div>
              <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-black mt-1">Jogos</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">842</div>
              <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-black mt-1">Amigos</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">42</div>
              <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-black mt-1">Nível</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Journey Summary */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-[1.875rem] font-black font-inter text-white flex items-center gap-3">
              <Activity className="w-7 h-7 text-indigo-500" />
              Resumo da Jornada
            </h2>
            <button className="text-indigo-400 text-sm font-bold hover:underline">Ver tudo</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journeys.map((item, i) => (
              <div key={i} className="glass-panel p-4 rounded-2xl flex gap-4 hover:bg-zinc-800/40 transition-all cursor-pointer group">
                {item.img ? (
                  <img src={item.img} alt={item.title} className="w-20 h-24 rounded-xl object-cover shrink-0 shadow-lg" />
                ) : (
                  <div className="w-20 h-24 bg-zinc-800 rounded-xl flex items-center justify-center shrink-0">
                    {item.icon && <item.icon className="w-8 h-8 text-zinc-600" />}
                  </div>
                )}
                
                <div className="flex flex-col justify-between py-1 flex-1">
                  <div>
                    <h4 className="text-white font-bold text-sm group-hover:text-indigo-400 transition-colors line-clamp-1">{item.title}</h4>
                    <p className="text-zinc-500 text-xs mt-0.5">{item.cat}</p>
                  </div>
                  <div className="space-y-1.5 mt-2">
                    <div className="text-xs text-zinc-400 flex justify-between">
                      <span>Tempo de jogo:</span>
                      <span className="text-indigo-400 font-bold">{item.time}</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" style={{ width: `${item.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Key Achievements */}
        <div className="space-y-6">
          <h2 className="text-[1.875rem] font-black font-inter text-white flex items-center gap-3">
            <Medal className="w-7 h-7 text-tertiary" />
            Conquistas Principais
          </h2>

          <div className="glass-panel rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center border border-tertiary/20 shrink-0">
                <Crown className="w-6 h-6 text-tertiary" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Explorador Lendário</h4>
                <p className="text-zinc-500 text-xs mt-0.5">Descobriu todos os segredos de Eldritch.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shrink-0">
                <Star className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Estrategista Mestre</h4>
                <p className="text-zinc-500 text-xs mt-0.5">Venceu 50 partidas sem perder unidades.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 shrink-0">
                <Activity className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Velocidade da Luz</h4>
                <p className="text-zinc-500 text-xs mt-0.5">Completou a corrida principal em tempo recorde.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors opacity-50">
              <div className="w-12 h-12 rounded-full bg-zinc-700/20 flex items-center justify-center border border-zinc-700/30 shrink-0">
                <Shield className="w-6 h-6 text-zinc-500" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">O Eleito</h4>
                <p className="text-zinc-500 text-xs mt-0.5">Conquista secreta ainda não desbloqueada.</p>
              </div>
            </div>

            <button className="w-full py-3 mt-4 text-zinc-400 hover:text-indigo-400 text-xs font-bold uppercase tracking-widest transition-colors border border-white/10 rounded-xl hover:border-indigo-500/30">
              Ver Galeria Completa
            </button>
          </div>
        </div>
      </section>

      {/* Settings Link Footer */}
      <section className="mt-12">
        <button className="glass-panel w-full p-6 rounded-2xl flex items-center justify-between hover:bg-indigo-600/10 transition-all group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
              <Settings className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
            </div>
            <div className="text-left">
              <h3 className="text-white font-bold">Configurações de Perfil</h3>
              <p className="text-zinc-500 text-sm mt-0.5">Privacidade, conexões sociais e preferências de conta.</p>
            </div>
          </div>
          <ChevronRight className="w-6 h-6 text-zinc-600 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
        </button>
      </section>

    </div>
  );
}
