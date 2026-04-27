import { useState } from 'react';
import { CheckCircle2, Circle, Trophy, Zap } from 'lucide-react';

interface ExerciseProps {
  nombre: string;
  seriesTotales: number;
  repeticiones: string;
  pesoSugerido?: string;
  imagenUrl?: string;
  onExerciseComplete: () => void;
  onSetComplete: () => void; // Para disparar el cronómetro de descanso
}

export const ExerciseCard = ({ 
  nombre, 
  seriesTotales, 
  repeticiones, 
  pesoSugerido, 
  onExerciseComplete,
  onSetComplete 
}: ExerciseProps) => {
  const [setsDone, setSetsDone] = useState(0);
  const isFinished = setsDone === seriesTotales;

  const handleSetClick = () => {
    if (setsDone < seriesTotales) {
      const newSets = setsDone + 1;
      setSetsDone(newSets);
      onSetComplete(); // Aquí activamos el descanso
      
      if (newSets === seriesTotales) {
        onExerciseComplete();
      }
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-[35px] transition-all duration-500 border
      ${isFinished 
        ? 'bg-[#0D0D0D] border-green-500/30 opacity-60' 
        : 'bg-[#151515] border-white/5 shadow-2xl shadow-blue-500/5'}`}
    >
      {/* Indicador de Progreso Superior */}
      <div className="absolute top-0 left-0 h-1 bg-[#4D6CFA] transition-all duration-700" 
           style={{ width: `${(setsDone / seriesTotales) * 100}%` }} />

      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-[#4D6CFA] font-black uppercase tracking-[0.2em] text-[10px] mb-2 block">
              {isFinished ? 'Completado' : 'En curso'}
            </span>
            <h3 className="text-2xl font-black uppercase italic text-white tracking-tighter">
              {nombre}
            </h3>
          </div>
          <div className={`p-3 rounded-2xl ${isFinished ? 'bg-green-500/20 text-green-500' : 'bg-white/5 text-gray-400'}`}>
            {isFinished ? <Trophy size={20} /> : <Zap size={20} />}
          </div>
        </div>

        {/* Info de Carga */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-[#0D0D0D] p-4 rounded-2xl border border-white/5">
            <p className="text-gray-500 text-[10px] uppercase font-bold mb-1">Repeticiones</p>
            <p className="text-white font-black text-lg">{repeticiones}</p>
          </div>
          <div className="bg-[#0D0D0D] p-4 rounded-2xl border border-white/5">
            <p className="text-gray-500 text-[10px] uppercase font-bold mb-1">Peso Sugerido</p>
            <p className="text-white font-black text-lg">{pesoSugerido || '--'}</p>
          </div>
        </div>

        {/* Visualizador de Series (Cockpit Style) */}
        <div className="flex items-center justify-between gap-2 mb-8">
          <div className="flex gap-2">
            {[...Array(seriesTotales)].map((_, i) => (
              <div 
                key={i}
                className={`h-2 w-8 rounded-full transition-all duration-300 
                  ${i < setsDone ? 'bg-[#4D6CFA] shadow-[0_0_10px_#4D6CFA]' : 'bg-white/10'}`}
              />
            ))}
          </div>
          <span className="text-white font-black italic text-xl">
            {setsDone}<span className="text-gray-600">/{seriesTotales}</span>
          </span>
        </div>

        {/* Botón de Acción Principal */}
        <button 
          onClick={handleSetClick}
          disabled={isFinished}
          className={`w-full py-5 rounded-[25px] font-black uppercase text-xs tracking-[0.2em] transition-all flex items-center justify-center gap-3
            ${isFinished 
              ? 'bg-transparent border border-green-500/50 text-green-500' 
              : 'bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-95'}`}
        >
          {isFinished ? (
            <><CheckCircle2 size={18} /> Ejercicio Terminado</>
          ) : (
            <><Circle size={18} /> Marcar Serie {setsDone + 1}</>
          )}
        </button>
      </div>
    </div>
  );
};