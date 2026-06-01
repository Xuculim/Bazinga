import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CartView() {
  const { cart, removeFromCart, total, discountTotal } = useCart();
  const finalTotal = total - discountTotal;

  return (
    <div className="max-w-[1280px] w-full mx-auto px-6 py-12">
      <div className="flex items-center gap-2 mb-8 text-zinc-500 text-sm font-manrope font-semibold">
        <span className="hover:text-indigo-400 cursor-pointer transition-colors">Loja</span>
        <span>›</span>
        <span className="text-white">Meu Carrinho</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-black font-inter tracking-tight text-white mb-12">Meu Carrinho</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-4">
          {cart.length === 0 ? (
            <div className="glass-panel p-12 rounded-2xl flex flex-col items-center justify-center text-center">
               <p className="text-zinc-400">Seu carrinho está vazio.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="glass-panel p-4 md:p-6 rounded-2xl flex flex-col md:flex-row gap-6 group hover:border-indigo-500/30 transition-all duration-300">
                <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden shrink-0 bg-zinc-800">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-grow flex flex-col justify-between pt-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-white mb-1">{item.title}</h3>
                      <p className="text-zinc-500 text-xs font-manrope">{item.desc}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-white text-lg">{item.price}</p>
                      {item.discount && (
                        <p className="text-indigo-400 text-[10px] font-black uppercase tracking-widest mt-1">-{item.discount} OFF</p>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-[9px] font-black uppercase tracking-widest bg-zinc-800/80 px-3 py-1.5 rounded text-zinc-400">
                      {item.platforms || 'CROSS-PLATFORM'}
                    </span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-2 text-rose-500 hover:text-rose-400 transition-colors active:scale-95"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="text-xs font-bold font-manrope hidden sm:inline">Remover</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel p-8 rounded-2xl shadow-xl border-t border-indigo-500/10">
            <h2 className="font-black text-2xl text-white mb-6 font-inter">Resumo</h2>
            <div className="space-y-4 font-manrope text-sm font-semibold mb-8">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span>R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between text-cyan-400">
                <span>Descontos</span>
                <span>- R$ {discountTotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="h-px bg-white/5 my-4"></div>
              <div className="flex justify-between text-xl font-bold text-white">
                <span>Total</span>
                <span className="text-indigo-400">R$ {finalTotal.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-3">
                Cupom de Desconto
              </label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Código" 
                  className="bg-zinc-900/50 border border-white/5 rounded-xl py-3 px-4 flex-1 focus:outline-none focus:border-indigo-500 transition-colors text-sm text-white"
                />
                <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-3 rounded-xl transition-colors font-bold font-manrope text-sm shrink-0">
                  Aplicar
                </button>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold py-4 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.4)] active:scale-95 transition-all text-sm uppercase tracking-wider font-manrope">
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
