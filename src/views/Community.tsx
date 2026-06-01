export function CommunityView() {
  const friends = [
    { name: "Alex Rivera", status: "Em jogo: Apex", img: "https://lh3.googleusercontent.com/aida/ADBb0uhlXdHuNkFKYs5UVejCKNAD3Sj6xLzq5j5Jby0594U57FjM-SRaBEUW3qJcEgjXqlCjYN0Cm68yOweC-WdGLSlqYKNsqC5-fE0sr51RxwVIVfHeoMVonvwSCTPWxbD1YIX7wjbeNF3IzEdTa8P6Aejog5R141OdKNyUFa-YmkytsOeFjIyKD7Usdr-ZCbKXPBUhEdUpZ269O82rDMAquZUUZFq8-KIQcy8UHUpcio_Iq2cPRsoPePCuLyxF-lhjW1F4TuFJld7Lru8" },
    { name: "Beatriz Silva", status: "Menu Principal", img: "https://lh3.googleusercontent.com/aida/ADBb0ugBjJ9Z4d0Z7rhinBAMBD63qKesTzubtNwqqkphIDBSM1Eo0UAsQ9LQYH0KwZJsfuOxsMfw8LEIe3fIvRoTazxO8yKtBKSxm-kntgA75qb4z8bNhXR14XsRm8Mz3cdcS-6Ye3PRShc8YhOdYnkY_m2ZznHPQiq1GCPoNmiu-WN8zv8wPxu5BBiP0D5elBAya8FF3Jv7UAy8UllfVx1HIHWNHiLbe4pLuG2i7MnU68PaEzUGEJ4jDs9RIR9uVNxxksjM1bJ506tUyIQ" },
    { name: "Carlos Mendes", status: "Em jogo: Valorant", img: "https://lh3.googleusercontent.com/aida/ADBb0uidjQ6SNDysXFePUTv4mOT9WE0GBWJFV6L6xw9Qu0HJgG99m0YI4w0JTvHdyfzgc29xrjpuXwHD37rzw5qc4UGOQfbjB8T62uUcugyynCYJ7-LkAzn3s5LjxS5PNTFLJ4gNm6K6sBml-5aXu3pNlv5rGnYCUN3KuQzTxmhTeKPT2ZE9z8Nv1HtBskiP7TM4WQNrv9sVyUVW8YS0HSYf_8YnI0ptaMrdf_vxWMxOD1B_86OjfBjzt9jskXCDl2dJ_p1XZ-Mf9VVGkQ" },
    { name: "Daniela Costa", status: "Em jogo: CS2", img: "https://lh3.googleusercontent.com/aida/ADBb0uhlXdHuNkFKYs5UVejCKNAD3Sj6xLzq5j5Jby0594U57FjM-SRaBEUW3qJcEgjXqlCjYN0Cm68yOweC-WdGLSlqYKNsqC5-fE0sr51RxwVIVfHeoMVonvwSCTPWxbD1YIX7wjbeNF3IzEdTa8P6Aejog5R141OdKNyUFa-YmkytsOeFjIyKD7Usdr-ZCbKXPBUhEdUpZ269O82rDMAquZUUZFq8-KIQcy8UHUpcio_Iq2cPRsoPePCuLyxF-lhjW1F4TuFJld7Lru8" },
    { name: "Eduardo Lima", status: "Assistindo Live", img: "https://lh3.googleusercontent.com/aida/ADBb0ugBjJ9Z4d0Z7rhinBAMBD63qKesTzubtNwqqkphIDBSM1Eo0UAsQ9LQYH0KwZJsfuOxsMfw8LEIe3fIvRoTazxO8yKtBKSxm-kntgA75qb4z8bNhXR14XsRm8Mz3cdcS-6Ye3PRShc8YhOdYnkY_m2ZznHPQiq1GCPoNmiu-WN8zv8wPxu5BBiP0D5elBAya8FF3Jv7UAy8UllfVx1HIHWNHiLbe4pLuG2i7MnU68PaEzUGEJ4jDs9RIR9uVNxxksjM1bJ506tUyIQ" },
    { name: "Fernanda", status: "Em jogo: Dota 2", img: "https://lh3.googleusercontent.com/aida/ADBb0uidjQ6SNDysXFePUTv4mOT9WE0GBWJFV6L6xw9Qu0HJgG99m0YI4w0JTvHdyfzgc29xrjpuXwHD37rzw5qc4UGOQfbjB8T62uUcugyynCYJ7-LkAzn3s5LjxS5PNTFLJ4gNm6K6sBml-5aXu3pNlv5rGnYCUN3KuQzTxmhTeKPT2ZE9z8Nv1HtBskiP7TM4WQNrv9sVyUVW8YS0HSYf_8YnI0ptaMrdf_vxWMxOD1B_86OjfBjzt9jskXCDl2dJ_p1XZ-Mf9VVGkQ" },
  ];

  return (
    <div className="max-w-[1440px] w-full mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-black font-inter tracking-tight text-white mb-2">Comunidade</h1>
          <p className="text-zinc-400 font-inter">Conecte-se com jogadores de todo o mundo.</p>
        </div>
        <div className="w-full md:w-96 relative">
          <input 
            type="text" 
            placeholder="Adicionar novos amigos..." 
            className="w-full bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-full py-3.5 px-6 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black font-inter text-white flex items-center gap-3">
            Online
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          </h2>
          <span className="text-[10px] text-zinc-500 font-inter tracking-[0.2em] uppercase font-bold">6 Disponíveis</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {friends.map((f, i) => (
            <div key={i} className="flex flex-col items-center group cursor-pointer">
              <div className="relative mb-3">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-cyan-400">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-zinc-950 bg-zinc-800">
                    <img src={f.img} alt={f.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                <span className="absolute bottom-1 right-1 w-4 h-4 md:w-5 md:h-5 bg-emerald-500 border-4 border-zinc-950 rounded-full"></span>
              </div>
              <span className="font-manrope font-bold text-white group-hover:text-indigo-400 transition-colors truncate w-full text-center">{f.name}</span>
              <span className="text-[9px] md:text-[10px] text-indigo-400 uppercase tracking-tight mt-1 text-center line-clamp-1">{f.status}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Offline Friends Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[1.875rem] font-black font-inter text-zinc-500">Offline</h2>
          <span className="text-[10px] font-inter uppercase tracking-[0.2em] font-bold text-zinc-600">34 AMIGOS DESCONECTADOS</span>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-y-10 gap-x-4">
          {[
            "Gabriel", "Heloisa", "Igor", "Julia", "Kleber", "Leticia", "Marcos", "Natalia", "Otavio", "Paula", "Quiteria", "Rafael",
            "Sabrina", "Thiago", "Ursula", "Vitor", "Wanessa", "Xavier", "Yara", "Zuleica", "Arthur", "Bruna", "Caio", "Debora",
            "Erick", "Flavia", "Gustavo", "Hilda", "Ivan", "Joana", "Kevin", "Lara", "Murilo", "Nicole"
          ].map((name, i) => {
            const genericImgs = [
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDNEUiL7ImdyuBA7H0L3Gn2XcuRX0wDBNKMCKisiPNm94s9Xuwmtpjv4AXSvw-0aDXRtH8lBmUn_BMSxQ47dgjLthTT_g4dhFLPHBJBm817OV14bmJy15z4iL8uLYrQShCaoev3hHQOePujdLeo4xQCAY5Rlf633rET4ttn_F96tEJMOcVqJrqbIGtwv0mBL9LlyRvR7ik_-1VdU2-4nswztgILQ3IsN8gvOVU16uXy4Zw89CWVv98W90A595tz1EBu8UFS_gClplly",
              "https://lh3.googleusercontent.com/aida/ADBb0uhlXdHuNkFKYs5UVejCKNAD3Sj6xLzq5j5Jby0594U57FjM-SRaBEUW3qJcEgjXqlCjYN0Cm68yOweC-WdGLSlqYKNsqC5-fE0sr51RxwVIVfHeoMVonvwSCTPWxbD1YIX7wjbeNF3IzEdTa8P6Aejog5R141OdKNyUFa-YmkytsOeFjIyKD7Usdr-ZCbKXPBUhEdUpZ269O82rDMAquZUUZFq8-KIQcy8UHUpcio_Iq2cPRsoPePCuLyxF-lhjW1F4TuFJld7Lru8",
              "https://lh3.googleusercontent.com/aida/ADBb0uidjQ6SNDysXFePUTv4mOT9WE0GBWJFV6L6xw9Qu0HJgG99m0YI4w0JTvHdyfzgc29xrjpuXwHD37rzw5qc4UGOQfbjB8T62uUcugyynCYJ7-LkAzn3s5LjxS5PNTFLJ4gNm6K6sBml-5aXu3pNlv5rGnYCUN3KuQzTxmhTeKPT2ZE9z8Nv1HtBskiP7TM4WQNrv9sVyUVW8YS0HSYf_8YnI0ptaMrdf_vxWMxOD1B_86OjfBjzt9jskXCDl2dJ_p1XZ-Mf9VVGkQ",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCivyZr2V-4AEIbGM__E5NZpPlYiL0guySX3gy8_0ky1W8ww-sbb5zpqxla1lVPlvp4sxvIDoeBio8bl8pDvS6mbIou4vDE_dK2hM-inVpls14qdhr2NMM3YYP-fe-FvscztX-53vT1M7KWNafrIlbyoZyJuoILSzY2B-V5_83kXLIZWeUat-_Wddw25lgLqdni6BTfI740KU7gp-oPKnS9A4mDGzv_z7CCoqeFCxa2rpcqMhUaoIBELlL2JI6N9rjF5WVU4p6uWn1S",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAuyyGqFZz6Hrdb-H4P4a2w2gdCtwv6zoQPni56Q9xdGUmyv7r91xKS50S4_iQ_-bMhQwzQbO_XrMRomjZoINhJjSOexmEPlBpLrFLbudf8zF-sBdBr6ZygVJVr-QkSLakA3Kw8Kz8w9xKczvVGt3E6JFshI1AVh2q-XNPQNPsSmStE6ZbZxXkdJqkjGP-g7-DZXEKqua1Y_yGtua_r-u5Iem2WQeyHnXtvGimfWHrOaHx4wDYCQJaYAGGmd-PGgEEC83oNPWmd34F_"
            ];
            return (
              <div key={i} className="flex flex-col items-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 group cursor-pointer">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/10 mb-3 group-hover:border-indigo-500/50 transition-colors bg-zinc-800">
                  <img src={genericImgs[i % 5]} alt={name} className="w-full h-full object-cover" />
                </div>
                <span className="text-[12px] font-manrope font-bold text-zinc-500 group-hover:text-white transition-colors text-center truncate w-full">{name}</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
