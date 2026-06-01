import { Clock, Download } from 'lucide-react';

export function LibraryView() {
  return (
    <div className="max-w-[1440px] w-full mx-auto px-6 py-8">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black font-inter text-white mb-2 tracking-tight">Minha Biblioteca</h1>
        <p className="text-zinc-400 font-inter">Gerencie sua coleção de 248 títulos digitais.</p>
      </header>

      {/* Most Played */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-black font-inter text-white flex items-center gap-3">
            <span className="text-indigo-400">📈</span>
            Mais Jogados
          </h2>
          <button className="text-indigo-400 font-manrope font-semibold hover:underline text-sm">
            Ver estatísticas completas
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MostPlayedCard 
            title="ARC: Raiders" 
            hours="120h jogadas" 
            img="https://cdn1.epicgames.com/spt-assets/9e8b37541e614575b4de303d2c2e44cf/arc-raiders-weavs.jpg"
            badge="EM ALTA" 
          />
          <MostPlayedCard 
            title="Grand Theft Auto V" 
            hours="85h jogadas" 
            img="https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/250px-Grand_Theft_Auto_V.png" 
          />
          <MostPlayedCard 
            title="Fortnite" 
            hours="42h jogadas" 
            img="https://cyberpowergaming.co.uk/w/wp-content/uploads/2025/09/Fortnite.jpg" 
          />
        </div>
      </section>

      {/* All Games */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-black font-inter text-white">Todos os Jogos (A-Z)</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <GridCard title="ARC: Raiders" tag="INSTALADO" cat="Ação" color="bg-emerald-500" img="https://store-images.s-microsoft.com/image/apps.1218.13550041517005289.7f3b0841-0084-4cae-88f4-8996d95d574f.96567331-f46b-4380-96a6-ab86b5c38634" />
            <GridCard title="Cyberpunk: 2077" tag="ATUALIZAÇÃO" cat="Aventura" color="bg-indigo-600" img="https://store-images.s-microsoft.com/image/apps.47379.63407868131364914.bcaa868c-407e-42c2-baeb-48a3c9f29b54.89bb995b-b066-4a53-9fe4-0260ce07e894" />
            <GridCard title="Deceit 2" tag="NUVEM" cat="Sobrevivência" color="bg-zinc-700" img="https://i.ytimg.com/vi/5dhoTG6krZs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCfI8SpBkgmrkDLnF1tdCEMf7kBLQ" />
            <GridCard title="ELITE Dangerous" tag="INSTALADO" cat="MMO" color="bg-emerald-500" img="https://store-images.s-microsoft.com/image/apps.50361.66140674465174653.87b233ab-7e5c-417b-9d55-ad08143ae685.603f7c63-bb75-441a-a2f8-1c17d6744a02" />
            <GridCard title="Fortnite" tag="INSTALADO" cat="Ação" color="bg-emerald-500" img="https://cyberpowergaming.co.uk/w/wp-content/uploads/2025/09/Fortnite.jpg" />
        </div>
      </section>
    </div>
  );
}

function MostPlayedCard({ title, hours, img, badge }: any) {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300 flex flex-col">
      <div className="relative h-56 overflow-hidden bg-zinc-800">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent"></div>
        {badge && (
          <div className="absolute top-4 right-4 bg-indigo-600/90 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[10px] font-bold tracking-wider uppercase">
            {badge}
          </div>
        )}
      </div>
      <div className="p-6 pt-2">
        <h3 className="font-inter text-xl font-bold text-white mb-2">{title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">{hours}</span>
          </div>
          <button className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors text-white">
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}

function GridCard({ title, tag, cat, color, img }: any) {
  return (
    <div className="group flex flex-col gap-3 cursor-pointer">
      <div className="aspect-[3/4] rounded-2xl overflow-hidden glass-panel relative group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] group-hover:scale-[1.03] transition-all duration-300 bg-zinc-800">
        <img src={img} alt={title} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
        <div className="absolute bottom-3 left-3">
          <div className={`${color} text-[9px] text-white font-black tracking-widest uppercase px-2 py-1 rounded shadow-lg`}>
            {tag}
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-inter text-sm font-bold text-zinc-200 group-hover:text-indigo-400 transition-colors truncate">{title}</h4>
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black mt-1">{cat}</p>
      </div>
    </div>
  );
}
