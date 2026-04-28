import type { TarjetaProgramaProps, TarjetaPrecioProps } from '../types';
import { getWhatsAppLink } from '../config';

// --- TARJETA DE PROGRAMA ---
export const TarjetaPrograma = ({ titulo, desc, icono, activo, onClick }: TarjetaProgramaProps) => (
  <div
    onClick={onClick}
    style={activo ? { boxShadow: '0 20px 50px rgba(77, 108, 250, 0.4)' } : undefined}
    className={`p-8 rounded-[35px] transition-all duration-500 cursor-pointer group flex flex-col h-full
    ${activo
      ? 'bg-[#4D6CFA] text-white scale-105 z-10'
      : 'bg-[#151515] text-gray-400 border border-white/5 hover:border-white/20 hover:bg-[#1a1a1a]'}`}
  >
    <div
      style={activo ? { boxShadow: '0 0 20px rgba(255, 255, 255, 0.4)' } : undefined}
      className={`mb-6 p-4 rounded-2xl inline-block w-fit transition-all duration-500
      ${activo ? 'bg-white/20 text-white' : 'bg-[#0D0D0D] text-[#4D6CFA]'}`}
    >
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

// --- TARJETA DE PRECIO ---
export const TarjetaPrecio = ({ nombre, precio, beneficios, popular }: TarjetaPrecioProps) => (
  <div
    style={popular ? { boxShadow: '0 0 50px rgba(255, 255, 255, 0.08)' } : undefined}
    className={`p-10 md:p-12 min-h-[600px] rounded-[50px] border transition-all duration-700 flex flex-col
    ${popular
      ? 'bg-[#111111] border-white/20 scale-105 z-20'
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
      {beneficios.map((b, i) => (
        <li key={i} className={`text-sm flex items-center gap-4 ${popular ? 'text-gray-200' : 'text-gray-600'}`}>
          <div
            style={popular ? { boxShadow: '0 0 10px #4D6CFA' } : undefined}
            className={`w-1.5 h-1.5 rounded-full ${popular ? 'bg-[#4D6CFA]' : 'bg-gray-800'}`}
          />
          {b}
        </li>
      ))}
    </ul>

    <a
      href={getWhatsAppLink(`Hola Coach, me interesa el ${nombre} de $${precio}/mes`)}
      target="_blank"
      rel="noopener noreferrer"
      style={popular ? { boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)' } : undefined}
      className={`w-full py-5 rounded-[25px] font-black uppercase text-[10px] tracking-[0.2em] transition-all text-center block
      ${popular
        ? 'bg-white text-black hover:scale-[1.03]'
        : 'bg-white/5 text-gray-500 hover:bg-white/10 hover:text-white'}`}
    >
      {popular ? 'Lo quiero — Contactar al Coach' : 'Preguntar por este plan'}
    </a>
  </div>
);