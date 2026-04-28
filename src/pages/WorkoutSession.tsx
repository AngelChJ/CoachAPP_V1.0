import { useState } from 'react';
import { ChevronLeft, CheckCircle, Timer } from 'lucide-react';
import { ExerciseCard } from '../components/ExerciseCard';
import { AppLayout } from '../components/AppLayout';
import { Link } from 'react-router-dom';
import type { Ejercicio } from '../types';
import styles from './WorkoutSession.module.css';

const rutinaHoy: Ejercicio[] = [
  { id: 1, nombre: "Press de Banca Inclinado", series: 4, reps: "10-12", peso: "60kg" },
  { id: 2, nombre: "Aperturas con Mancuernas", series: 3, reps: "15", peso: "15kg" },
  { id: 3, nombre: "Fondos en Paralelas", series: 3, reps: "Fallo", peso: "Cuerpo" },
  { id: 4, nombre: "Press Militar con Barra", series: 4, reps: "8-10", peso: "40kg" },
];

const WorkoutSession = () => {
  const [ejerciciosCompletados, setEjerciciosCompletados] = useState<number[]>([]);

  const handleExerciseFinish = (id: number) => {
    if (!ejerciciosCompletados.includes(id)) {
      setEjerciciosCompletados([...ejerciciosCompletados, id]);
    }
  };

  const progreso = Math.round((ejerciciosCompletados.length / rutinaHoy.length) * 100);

  return (
    <AppLayout
      sidebarFooter={
        <div className={styles.progressWidget}>
          <p className={styles.progressLabel}>Progreso Diario</p>
          <div className={styles.progressHeader}>
            <span className={styles.progressValue}>{progreso}%</span>
            <span className={styles.progressCount}>{ejerciciosCompletados.length}/{rutinaHoy.length} EX</span>
          </div>
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBarFill} style={{ width: `${progreso}%` }} />
          </div>
        </div>
      }
      mobileCenterButton={
        <button
          className={`${styles.mobileFinishBtnBase} ${progreso === 100 ? styles.mobileFinishBtnActive : styles.mobileFinishBtnDisabled}`}
        >
          <CheckCircle size={24} />
        </button>
      }
    >
      {/* HEADER DE SESIÓN */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerTitleWrapper}>
            <Link to="/dashboard" className={styles.backBtn}>
              <ChevronLeft size={20} />
            </Link>
            <div>
              <h1 className={styles.routineTitle}>Push Day</h1>
              <p className={styles.routineSubtitle}>Pecho & Hombros</p>
            </div>
          </div>

          <div className={styles.timerWidget}>
            <Timer size={18} className={styles.timerIcon} />
            <span className={styles.timerValue}>45:12</span>
          </div>
        </div>
      </header>

      <div className={styles.contentArea}>
        <div className={styles.grid}>
          {/* LISTA DE EJERCICIOS */}
          <div className={styles.col8}>
            {rutinaHoy.map((ex) => (
              <ExerciseCard
                key={ex.id}
                nombre={ex.nombre}
                seriesTotales={ex.series}
                repeticiones={ex.reps}
                pesoSugerido={ex.peso}
                onSetComplete={() => console.log("Reiniciar Cronómetro")}
                onExerciseComplete={() => handleExerciseFinish(ex.id)}
              />
            ))}
          </div>

          {/* PANEL LATERAL DE STATS */}
          <div className={styles.col4}>
            <div className={styles.summaryCard}>
              <h3 className={styles.summaryTitle}>Resumen de Carga</h3>
              <div className={styles.summaryList}>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Volumen Total</span>
                  <span className={styles.summaryValueAccent}>2,450 KG</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Intensidad</span>
                  <span className={styles.summaryValue}>85%</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Descanso</span>
                  <span className={styles.summaryValueItalic}>90s</span>
                </div>
              </div>
            </div>

            <button className={`${styles.finishBtnBase} ${progreso === 100 ? styles.finishBtnActive : styles.finishBtnDisabled}`}>
              {progreso === 100 ? "Finalizar Entrenamiento" : `Faltan ${rutinaHoy.length - ejerciciosCompletados.length} Ejercicios`}
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default WorkoutSession;