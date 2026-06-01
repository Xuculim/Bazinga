import { Clock, Star, Play, ShoppingCart, Heart, Download } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface GameDetailProps {
  onSetView: (view: string) => void;
}

export function GameDetailView({ onSetView }: GameDetailProps) {
  const { addToCart, cart } = useCart();
  const inCart = cart.some(item => item.id === 'eldritch');

  const handleAddToCart = () => {
    addToCart({
      id: 'eldritch',
      title: "Eldritch Horizons",
      desc: "Jogo Base • Digital",
      priceNum: 160,
      price: "$59.99",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHHAuZgBRlHk04r7aw5a1KTWK97-TnS62uSJhEsMmKztdJZf9NdsMZkd9qcDx0vQhdsth9W5kYhLOL55D996BDYMWPhu_aAVtplaofwH4dx5hpitOallmMXiPdJuyNZbx8w_Xn6vjlA0OSjItPWxYMAo7zKrOMu318-rh3qZgayO-vAYGSGZVdduoLwlFt75qx7R9qOFouJNULW4SspGOORpdm7Cau84t7A_UC8yWgtiEkceXhgY8PIghUqh2l286QCGsqaPzWarLf"
    });
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto px-6 py-8">
      {/* Game Hero Branding Area */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <nav className="flex gap-2 text-zinc-500 mb-4 font-inter text-[10px] uppercase tracking-widest font-black">
            <span className="cursor-pointer hover:text-white" onClick={() => onSetView('store')}>Loja</span>
            <span>/</span>
            <span>RPG</span>
            <span>/</span>
            <span className="text-indigo-400">Eldritch Horizons</span>
          </nav>
          <h1 className="text-5xl md:text-[3.75rem] font-black font-inter tracking-tighter text-white leading-none">
            Eldritch Horizons
          </h1>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={inCart ? () => onSetView('cart') : handleAddToCart}
            className={`px-8 py-4 text-white rounded-full font-manrope font-bold text-sm transition-all flex items-center gap-2
              ${inCart ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_20px_rgba(73,75,214,0.4)]'}
            `}
          >
            <ShoppingCart className="w-5 h-5 fill-current" />
            {inCart ? 'Ver no Carrinho' : 'Comprar agora — $59.99'}
          </button>
          <button className="p-4 glass-panel rounded-full hover:bg-white/10 transition-all text-white">
            <Heart className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (Main Area) */}
        <div className="lg:col-span-8 space-y-12">
          {/* Media Gallery Section */}
          <section>
            <div className="relative group rounded-2xl overflow-hidden glass-panel mb-4 aspect-video">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHHAuZgBRlHk04r7aw5a1KTWK97-TnS62uSJhEsMmKztdJZf9NdsMZkd9qcDx0vQhdsth9W5kYhLOL55D996BDYMWPhu_aAVtplaofwH4dx5hpitOallmMXiPdJuyNZbx8w_Xn6vjlA0OSjItPWxYMAo7zKrOMu318-rh3qZgayO-vAYGSGZVdduoLwlFt75qx7R9qOFouJNULW4SspGOORpdm7Cau84t7A_UC8yWgtiEkceXhgY8PIghUqh2l286QCGsqaPzWarLf" 
                alt="Eldritch Horizons Main" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-20 h-20 bg-indigo-500 text-white rounded-full flex items-center justify-center shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-xl overflow-hidden border border-white/10 glass-panel aspect-video">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNEUiL7ImdyuBA7H0L3Gn2XcuRX0wDBNKMCKisiPNm94s9Xuwmtpjv4AXSvw-0aDXRtH8lBmUn_BMSxQ47dgjLthTT_g4dhFLPHBJBm817OV14bmJy15z4iL8uLYrQShCaoev3hHQOePujdLeo4xQCAY5Rlf633rET4ttn_F96tEJMOcVqJrqbIGtwv0mBL9LlyRvR7ik_-1VdU2-4nswztgILQ3IsN8gvOVU16uXy4Zw89CWVv98W90A595tz1EBu8UFS_gClplly" alt="Thumb" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 glass-panel aspect-video">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW7ARGnZSS2DaclrB1AQB5hFfFRGH2CLv49Nqt0lX9QpMudSd7EBzpZUvgOZGga_DaFM8qDj_p0UZ6ngPtkMxBWc6BqLB6qefcnQ_BSDb8YOybE4BNPtNZS7hTcTKcpIOCpUTjfy8FoPYw6sXLd2kX9l07-aU_-DzXLjQx0rwsp_2aeGWsbBjQ9OmyTC__9yOsjehPz8s-BS-LpJxr_IXH4nowK3xdoAFhpM6gaCBwFfjEGEf92r0VtoRh44vpqxTWn2q0ZZlBzeQl" alt="Thumb" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 glass-panel aspect-video">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjG55hReVJbZNJMq0I578P362P-ocM8XB9dCGKRzSv0iFDBE-Wy9RSk30nCGLHg5ckLl0i575CMpUCK0ygcHqSt1Fslu7Zg_iddne6dEbWAMjGSkl2zNAY_8udhy3FxL3UMBPVswdlftmvty5M0CEK_mA1uVkg59kuv74lSrrlOQoTA1swuRIr1nSfnkaSeQGAUKH6C21RP8kWidBjwhudB35iiGcLO60mQByG0IKyGLpHoBXT2d1Yh9kJcoRWpwlxkBVzLd2Yob3A" alt="Thumb" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 glass-panel aspect-video relative group cursor-pointer">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa-yJ-_RIFsLec7O9Xpt0gQZ8dtWo_AFy430Jo5mQ1Czk34lFfMTOH5huXV6N9Bte-XUmhejGd0fcRiGtVij4PMTY7ioHPK8ITxy9jJPoheu5UYtPLGf5Fdqai-3Co45lz0_8EStMgmo-OaRe4KxzBTXVobU0SBgX6VH0umr1YMYYNumCjzisopEVUnG3u76lZ04F51T0iW5Tb-IfSd7YEPUeRTs8SOmVHtVOoqeZrb-g9-h5DU5WjPvnxOxkndnieQRTYRqmQHl_5" alt="Thumb" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-zinc-950/60 flex items-center justify-center">
                  <span className="font-manrope font-bold text-white">+12</span>
                </div>
              </div>
            </div>
          </section>

          {/* User Ratings */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-[1.875rem] font-black font-inter tracking-tight text-white">Avaliações de Usuários</h2>
              <button className="text-indigo-400 font-manrope font-semibold text-sm hover:underline">Escrever uma Avaliação</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                <span className="text-6xl font-black font-inter text-indigo-400 mb-2">4.8</span>
                <div className="flex text-indigo-400 mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 opacity-50" />
                </div>
                <span className="text-[10px] text-zinc-500 font-inter font-black uppercase tracking-widest mt-2">Baseado em 2.450 Avaliações</span>
              </div>
              
              <div className="md:col-span-2 glass-panel p-6 rounded-2xl space-y-4">
                {[
                  { stars: 5, fill: 85 },
                  { stars: 4, fill: 10 },
                  { stars: 3, fill: 3 },
                  { stars: 2, fill: 1 },
                  { stars: 1, fill: 1 }
                ].map((row) => (
                  <div key={row.stars} className="flex items-center gap-4">
                    <span className="font-manrope font-bold text-zinc-400 text-sm w-4">{row.stars}</span>
                    <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500" style={{ width: `${row.fill}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Card */}
            <div className="glass-panel p-6 rounded-2xl mt-4">
              <div className="flex justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCivyZr2V-4AEIbGM__E5NZpPlYiL0guySX3gy8_0ky1W8ww-sbb5zpqxla1lVPlvp4sxvIDoeBio8bl8pDvS6mbIou4vDE_dK2hM-inVpls14qdhr2NMM3YYP-fe-FvscztX-53vT1M7KWNafrIlbyoZyJuoILSzY2B-V5_83kXLIZWeUat-_Wddw25lgLqdni6BTfI740KU7gp-oPKnS9A4mDGzv_z7CCoqeFCxa2rpcqMhUaoIBELlL2JI6N9rjF5WVU4p6uWn1S" alt="Reviewer" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-manrope font-bold text-white text-sm">CyberValkyrie</p>
                    <p className="text-xs text-zinc-500">Tempo de jogo: 124,5 horas</p>
                  </div>
                </div>
                <div className="flex text-indigo-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed text-balance">
                Obra-prima absoluta de construção de mundo e horror cósmico. A transição entre dimensões parece fluida e a interface estilo vidro no jogo é linda. Recomendo fortemente para qualquer fã de RPG.
              </p>
            </div>
          </section>

          {/* Expansions */}
          <section className="space-y-6">
            <h2 className="text-[1.875rem] font-black font-inter tracking-tight text-white">Expansões e DLCs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel p-4 rounded-2xl flex gap-4 group cursor-pointer hover:bg-zinc-800/30 transition-all">
                <div className="w-32 h-20 rounded-xl overflow-hidden bg-zinc-800 shrink-0">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO_Y2MKRP5JCrYMorduMvtT3XXdIlQWfosJLKubRSnFyLv1Cj95MGO-oIUXqTplMZggXUS5PcT82ggYCw-TJDZm-xEEolze9eZ75MiNoHWO-XZGryP9njohTGJN_bFZ0o4POWluATgWeCD4_tZRz--QUxOS5ajMkpoJdaw86ht06i0fK9yCTqhHVozwKXsfMokGG_eytAImDZCFRO_oxh6mtlVpEJyxCtK1mEwEDFEXhBdZ-HLNK3Ezoh2-lDsyjmxpH0vuranZuRT" alt="DLC" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-manrope font-bold text-white text-sm line-clamp-1">Pacote Void Walker</h3>
                  <p className="text-xs text-zinc-500 mb-2">Novas missões e equipamentos</p>
                  <span className="text-indigo-400 font-bold">$9.99</span>
                </div>
              </div>
              <div className="glass-panel p-4 rounded-2xl flex gap-4 group cursor-pointer hover:bg-zinc-800/30 transition-all">
                <div className="w-32 h-20 rounded-xl overflow-hidden bg-zinc-800 shrink-0">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTsqVxVetNVtkp7OtUPBk07BptbcOOMwb6TBo8_zXjDaZoHmTc-y-ZIHP7A0ZtMIvX9fb7DtKIZmYqJ7XTqohIExkR-7JElwL8EHgNWJepjt1cWmx-jMnO6rOXyNGWKC2w6Rxls4Q1dVwhEQlU_CxrZxwhXAjPKeL2FcOVh-eLEu-kVjBifbcKDeamfAWT6bPdivDdr4QXkgcVTjuegV43yjefL5p0KJ6mrM_e6j2UDKj9kR9sxjaVw4xQvWF_plzmbXTL4dTt0TpD" alt="DLC" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-manrope font-bold text-white text-sm line-clamp-1">Upgrade Edição Digital Deluxe</h3>
                  <p className="text-xs text-zinc-500 mb-2">Trilha Sonora e Artbook</p>
                  <span className="text-indigo-400 font-bold">$14.99</span>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Right Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="glass-panel rounded-2xl overflow-hidden sticky top-24">
            <div className="p-6 border-b border-white/5 bg-white/5">
              <h3 className="font-bold text-xl font-inter text-white">Especificações Técnicas</h3>
            </div>
            <div className="p-6 space-y-0.5">
              {[
                { label: 'Quantidade de Jogadores', val: '1 - 4 Jogadores' },
                { label: 'Status', val: 'Singleplayer / Co-op' },
                { label: 'Gênero', val: 'RPG de Ação, Aventura' },
                { label: 'Desenvolvedor', val: 'Nebula Studios' },
                { label: 'Distribuidora', val: 'Bazinga Games' },
                { label: 'Data de Lançamento', val: '24 de Out de 2024' },
              ].map((spec) => (
                <div key={spec.label} className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0">
                  <span className="text-sm text-zinc-500">{spec.label}</span>
                  <span className="text-sm text-zinc-200 font-medium text-right max-w-[50%] leading-tight">{spec.val}</span>
                </div>
              ))}
              <div className="flex justify-between items-start py-2.5 mt-2">
                <span className="text-sm text-zinc-500 shrink-0">Idiomas</span>
                <span className="text-sm text-zinc-200 font-medium text-right leading-tight">EN, FR, DE, ES, JP</span>
              </div>
            </div>
            
            <div className="p-6 bg-indigo-500/5 mt-4">
              <div className="flex items-center gap-2 text-indigo-400 mb-4">
                <span className="text-lg">✓</span>
                <span className="font-manrope font-bold text-sm">Verificado pela Bazinga</span>
              </div>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">Este jogo foi otimizado para os hardwares mais recentes e suporta tecnologias de ray-tracing e DLSS 3.0.</p>
              <button className="w-full py-3 glass-panel hover:bg-white/10 rounded-xl font-manrope font-bold text-white text-sm transition-all flex items-center justify-center gap-2 active:scale-95">
                <Download className="w-4 h-4" />
                Requisitos do Sistema
              </button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
