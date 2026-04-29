import { useNavigate } from 'react-router-dom';
import {
  Trophy, TrendingUp, Calendar, Award,
  ChevronRight, Camera, Settings, User, LogOut
} from 'lucide-react';
import { AppLayout } from '../components/AppLayout';
import type { PersonalRecord } from '../types';
import styles from './Perfil.module.css';

const personalRecords: PersonalRecord[] = [
  { ejercicio: "Sentadilla", peso: "140", fecha: "12 Abr", icon: <Award className="text-white" /> },
  { ejercicio: "Press Banca", peso: "100", fecha: "20 Abr", icon: <Award className="text-white" /> },
  { ejercicio: "Peso Muerto", peso: "180", fecha: "05 Mar", icon: <Award className="text-white" /> },
];

const Perfil = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("¿Seguro que quieres salir, Coach?")) {
      localStorage.removeItem('user');
      navigate('/');
    }
  };

  return (
    <AppLayout
      sidebarFooter={
        <button className={styles.settingsBtn}>
          <Settings size={16} /> Ajustes
        </button>
      }
      mobileCenterButton={
        <div className={styles.mobileNavCenter}>
          <Calendar size={24} />
        </div>
      }
    >
      {/* HEADER DE PERFIL */}
      <header className={styles.header}>
        <div className={styles.profileInfo}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatar}>
              <User size={60} className="text-white" />
            </div>
            <button className={styles.cameraBtn}>
              <Camera size={20} />
            </button>
          </div>

          <div className={styles.userInfo}>
            <div className={styles.nameWrapper}>
              <h1 className={styles.name}>Angel <span className={styles.nameLast}>Reyes</span></h1>
              <span className={styles.badge}>Rango Élite</span>
            </div>
            <p className={styles.bio}>"El dolor es temporal, la gloria es para siempre. Enfocado en el volumen muscular."</p>
            <div className={styles.stats}>
              <div><p className={styles.statValue}>124</p><p className={styles.statLabel}>Entrenos</p></div>
              <div className={styles.divider}></div>
              <div><p className={styles.statValue}>12</p><p className={styles.statLabel}>Racha Días</p></div>
            </div>
          </div>
        </div>

        {/* GRID DE MÓDULOS */}
        <div className={styles.grid}>

          {/* SECCIÓN PRs */}
          <div className={styles.col7}>
            <div className={styles.prCardHeader}>
              <h2 className={styles.sectionTitle}>
                <Trophy size={18} className={styles.sectionTitleIcon} /> Personal Records
              </h2>
              <button className={styles.viewAllBtn}>Ver todos</button>
            </div>

            <div className={styles.prGrid}>
              {personalRecords.map((pr, i) => (
                <div key={i} className={styles.prCard}>
                  <div className={styles.prIconBg}>
                    <Trophy size={100} />
                  </div>
                  <div className={styles.prIconWrapper}>{pr.icon}</div>
                  <p className={styles.prName}>{pr.ejercicio}</p>
                  <p className={styles.prWeight}>{pr.peso}<span className={styles.prUnit}>KG</span></p>
                  <p className={styles.prDate}>{pr.fecha}</p>
                </div>
              ))}
            </div>

            {/* MAPA DE CALOR */}
            <div className={styles.heatmapCard}>
              <div className={styles.heatmapHeader}>
                <h2 className={styles.heatmapTitle}>Consistencia</h2>
                <div className={styles.heatmapLegend}>
                  {[1, 2, 3, 4, 5].map(i => <div key={i} className={`${styles.heatmapLegendItem} ${i > 2 ? styles.heatmapLegendActive : styles.heatmapLegendInactive}`} />)}
                </div>
              </div>
              <div className={styles.heatmapGrid}>
                {Array.from({ length: 28 }).map((_, i) => (
                  <div
                    key={i}
                    className={`${styles.heatmapBox} ${i % 3 === 0 ? styles.heatmapBoxHigh : i % 5 === 0 ? styles.heatmapBoxMed : styles.heatmapBoxLow}`}
                  />
                ))}
              </div>
              <p className={styles.heatmapFooter}>Abril 2026 • 22 Entrenamientos completados</p>
            </div>
          </div>

          {/* SECCIÓN EVOLUCIÓN */}
          <div className={styles.col5}>
            <h2 className={styles.sectionTitle}>
              <TrendingUp size={18} className={styles.sectionTitleIcon} /> Evolución Física
            </h2>

            <div className={styles.evolutionCard}>
              <div className={styles.evolutionContainer}>
                <div className={styles.evolutionRow}>
                  <div>
                    <p className={styles.evolutionLabel}>Peso Corporal</p>
                    <p className={styles.evolutionValue}>84.5<span className={styles.evolutionUnit}>KG</span></p>
                  </div>
                  <div className={styles.trendUp}>
                    <TrendingUp size={20} />
                    <span className={styles.trendValue}>+1.2</span>
                  </div>
                </div>

                <div className={styles.evolutionRow}>
                  <div>
                    <p className={styles.evolutionLabel}>Grasa Corporal</p>
                    <p className={styles.evolutionValue}>12.4<span className={styles.evolutionUnit}>%</span></p>
                  </div>
                  <div className={styles.trendDown}>
                    <ChevronRight size={20} className="rotate-90" />
                    <span className={styles.trendValue}>-0.8</span>
                  </div>
                </div>

                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>
                    <Award size={32} className="text-[#4D6CFA]" />
                  </div>
                  <div>
                    <p className={styles.achievementTitle}>Madrugador Élite</p>
                    <p className={styles.achievementDesc}>10 Entrenos antes de las 7AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MÓVIL: BOTÓN CERRAR SESIÓN */}
          <div className="md:hidden col-span-1 mt-12">
            <button className={styles.mobileLogoutBtn} onClick={handleLogout}>
              <LogOut size={16} /> Cerrar Sesión
            </button>
          </div>

        </div>
      </header>
    </AppLayout>
  );
};

export default Perfil;