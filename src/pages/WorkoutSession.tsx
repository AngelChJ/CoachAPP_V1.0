import { useState } from 'react';
import {
  ChevronLeft,
  CheckCircle,
  Clock,
  LayoutDashboard,
  Dumbbell,
  User,
  Timer
} from 'lucide-react';
import { ExerciseCard } from '../components/ExerciseCard';
import { Link } from 'react-router-dom';
import styles from './WorkoutSession.module.css';

const rutinaHoy = [
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
    <div className={styles.container}>

      {/* --- SIDEBAR PARA PC --- */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          FIT<span className={styles.logoAccent}>TRIBE</span>
        </div>

        <nav className={styles.nav}>
          <Link to="/dashboard" className={styles.navLink}>
            <LayoutDashboard size={20} /> Panel
          </Link>
          <Link to="/session" className={styles.navLinkActive}>
            <Dumbbell size={20} /> Sesión Activa
          </Link>
          <Link to="/record" className={styles.navLink}>
            <Clock size={20} /> Historial
          </Link>
          {/* ENLACE AL PERFIL */}
          <Link to="/perfil" className={styles.navLink}>
            <User size={20} /> Perfil
          </Link>
        </nav>

        {/* Widget de Progreso en Sidebar */}
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
      </aside>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className={styles.main}>

        {/* HEADER DE SESIÓN */}
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <div className={styles.headerTitleWrapper}>
              {/* Botón Volver al Dashboard */}
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

            {/* PANEL LATERAL DE STATS (Desktop) */}
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
      </main>

      {/* --- TAB BAR MÓVIL --- */}
      <nav className={styles.mobileNav}>
        <Link to="/dashboard" className={styles.mobileNavLink}>
          <LayoutDashboard size={24} />
        </Link>
        <Link to="/session" className={styles.mobileNavActive}>
          <Dumbbell size={24} />
        </Link>

        {/* Botón Central - Finalizar si está al 100% */}
        <button
          className={`${styles.mobileFinishBtnBase} ${progreso === 100 ? styles.mobileFinishBtnActive : styles.mobileFinishBtnDisabled}`}
        >
          <CheckCircle size={24} />
        </button>

        <Link to="/record" className={styles.mobileNavLink}>
          <Timer size={24} />
        </Link>

        {/* LINK AL PERFIL EN MÓVIL */}
        <Link to="/perfil" className={styles.mobileNavLink}>
          <User size={24} />
        </Link>
      </nav>

    </div>
  );
};

export default WorkoutSession;