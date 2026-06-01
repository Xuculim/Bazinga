import { Star, Plus, Download } from 'lucide-react';

export function StoreView() {
  const categories = [
    { label: 'Ação', icon: '⚔️' },
    { label: 'Estratégia', icon: '🧠' },
    { label: 'Esportes', icon: '🏁' },
    { label: 'Aventura', icon: '🌍' }
  ];

  return (
    <div className="max-w-[1440px] w-full mx-auto px-6 py-8">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-2xl group cursor-pointer">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: 'url("https://s1.pearlcdn.com/cd/brand/metatag/2025/09/25/78b56ee739920250925065827388.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-10 max-w-2xl">
          <span className="inline-block px-3 py-1 bg-tertiary text-on-tertiary text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4 shadow-[0_0_15px_rgba(255,228,131,0.4)]">
            Destaque da Semana
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-inter mb-4 tracking-tighter leading-none text-white shadow-sm">
            Crimson Desert
          </h1>
          <p className="text-zinc-300 text-sm md:text-lg mb-8 font-inter leading-relaxed line-clamp-3 md:line-clamp-none">
            A história acompanha o mercenário Kliff Macduff, que luta para sobreviver, reunir seus aliados e vingar-se dos traidores "Ursos Negros", enquanto enfrenta facções, criaturas e um destino misterioso.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all shadow-xl shadow-indigo-600/30 active:scale-95 text-sm">
              Comprar Agora
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-full transition-all active:scale-95 text-sm">
              Ver Trailer
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-inter tracking-tight mb-1 text-white">Categorias</h2>
            <p className="text-zinc-500 font-manrope text-sm">Navegue por gêneros</p>
          </div>
          <button className="text-indigo-400 font-bold text-sm hover:underline">Ver todas</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div key={i} className="group relative h-32 md:h-40 rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-white/5">
              <div className="absolute inset-0 group-hover:bg-indigo-900/40 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="text-4xl">{cat.icon}</span>
                <span className="font-bold font-manrope text-white group-hover:text-indigo-300 transition-colors">{cat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Games */}
      <section className="mb-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-inter tracking-tight mb-1 text-white">Mais Populares</h2>
            <p className="text-zinc-500 font-manrope text-sm">O que todo mundo está jogando</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <GameCard 
            title="Cyberpunk: 2077" 
            price="R$ 199,90" 
            img="https://store-images.s-microsoft.com/image/apps.47379.63407868131364914.bcaa868c-407e-42c2-baeb-48a3c9f29b54.89bb995b-b066-4a53-9fe4-0260ce07e894" 
            reviews="2.4k" 
            rating={4} 
          />
          <GameCard 
            title="Resident Evil HD Remaster" 
            price="R$ 89,90" 
            img="https://image.api.playstation.com/cdn/UP0102/CUSA01068_00/YoyizWHNKCpBZuyGPDRolU9a4sg7YZVc.png" 
            reviews="1.8k" 
            rating={5} 
          />
          <GameCard 
            title="Deceit 2" 
            price="Grátis" 
            img="https://i.ytimg.com/vi/5dhoTG6krZs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCfI8SpBkgmrkDLnF1tdCEMf7kBLQ" 
            reviews="850" 
            rating={3}
            isDownload 
          />
        </div>
      </section>
    </div>
  );
}

function GameCard({ title, price, img, reviews, rating, isDownload }: any) {
  return (
    <div className="glass-panel p-4 rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-800/40">
      <div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-zinc-800">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 px-2 py-1 bg-zinc-950/80 backdrop-blur-md rounded-lg text-xs font-bold text-indigo-400">
          {price}
        </div>
      </div>
      <h3 className="text-xl font-bold font-inter mb-1 text-white truncate">{title}</h3>
      <div className="flex items-center gap-2 mb-4">
        <div className="flex text-tertiary">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < rating ? 'fill-current' : 'opacity-40'}`} />
          ))}
        </div>
        <span className="text-xs text-zinc-500 font-manrope">({reviews} reviews)</span>
      </div>
      <button className="w-full py-3 bg-zinc-900 border border-white/5 hover:bg-indigo-600 transition-colors rounded-xl font-bold flex items-center justify-center gap-2 text-white">
        {isDownload ? <Download className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        {isDownload ? 'Baixar' : 'Adicionar'}
      </button>
    </div>
  );
}
