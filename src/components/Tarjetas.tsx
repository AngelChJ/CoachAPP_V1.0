
// --- TARJETA DE PROGRAMA (Con Glow Azul y Blanco) ---
export const TarjetaPrograma = ({ titulo, desc, icono, activo, onClick }: any) => (
  <div 
    onClick={onClick}
    className={`p-8 rounded-[35px] transition-all duration-500 cursor-pointer group flex flex-col h-full
    ${activo 
      ? 'bg-[#4D6CFA] text-white scale-105 shadow-[0_20px_50px_rgba(77,108,250,0.4)] z-10' 
      : 'bg-[#151515] text-gray-400 border border-white/5 hover:border-white/20 hover:bg-[#1a1a1a]'}`}
  >
    <div className={`mb-6 p-4 rounded-2xl inline-block w-fit transition-all duration-500
      ${activo ? 'bg-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.4)]' : 'bg-[#0D0D0D] text-[#4D6CFA]'}`}>
      {icono}
    </div>
    <h3 className="text-xl font-black mb-3 uppercase italic text-white tracking-tighter">
      {titulo}
    </h3>
    <p className={`text-sm leading-relaxed transition-colors ${activo ? 'text-white/90' : 'text-gray-500'}`}>
      {desc}
    </p>
  </div>
);

// --- TARJETA DE PRECIO (Elongada con Brillo Blanco Premium) ---
export const TarjetaPrecio = ({ nombre, precio, beneficios, popular }: any) => (
  <div className={`p-10 md:p-12 min-h-[600px] rounded-[50px] border transition-all duration-700 flex flex-col
    ${popular 
      ? 'bg-[#111111] border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.08)] scale-105 z-20' 
      : 'bg-[#0D0D0D] border-white/5 opacity-40 grayscale hover:opacity-100 hover:grayscale-0'}`}
  >
    <p className={`font-black mb-4 uppercase tracking-[0.3em] text-[10px] ${popular ? 'text-[#4D6CFA]' : 'text-gray-600'}`}>
      {nombre}
    </p>
    
    <div className="flex items-baseline gap-1 mb-10">
      <span className="text-xl font-bold text-white">$</span>
      <span className="text-6xl font-black tracking-tighter text-white">{precio}</span>
      <span className="text-gray-500 text-[10px] ml-2 uppercase font-black">/ Mes</span>
    </div>

    <ul className="space-y-6 mb-12 flex-1 text-left">
      {beneficios.map((b: string, i: number) => (
        <li key={i} className={`text-sm flex items-center gap-4 ${popular ? 'text-gray-200' : 'text-gray-600'}`}>
          <div className={`w-1.5 h-1.5 rounded-full ${popular ? 'bg-[#4D6CFA] shadow-[0_0_10px_#4D6CFA]' : 'bg-gray-800'}`} />
          {b}
        </li>
      ))}
    </ul>

    <button className={`w-full py-5 rounded-[25px] font-black uppercase text-[10px] tracking-[0.2em] transition-all
      ${popular 
        ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.03]' 
        : 'bg-white/5 text-gray-500 hover:bg-white/10 hover:text-white'}`}>
      {popular ? 'Adquirir Plan' : 'Ver Detalles'}
    </button>
  </div>
);