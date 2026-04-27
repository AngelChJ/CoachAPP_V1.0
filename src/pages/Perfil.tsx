import { 
  LayoutDashboard, Dumbbell, Clock, User, 
  Trophy, TrendingUp, Calendar, Award, 
  ChevronRight, Camera, Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Perfil.module.css';

const Perfil = () => {
  // Datos de ejemplo para los récords personales
  const personalRecords = [
    { ejercicio: "Sentadilla", peso: "140", fecha: "12 Abr", icon: <Award className="text-white" /> },
    { ejercicio: "Press Banca", peso: "100", fecha: "20 Abr", icon: <Award className="text-white" /> },
    { ejercicio: "Peso Muerto", peso: "180", fecha: "05 Mar", icon: <Award className="text-white" /> },
  ];

  return (
    <div className={styles.container}>
      
      {/* --- SIDEBAR PARA PC --- */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>FIT<span className={styles.logoAccent}>TRIBE</span></div>
        <nav className={styles.nav}>
          <Link to="/dashboard" className={styles.navLink}>
            <LayoutDashboard size={20}/> Panel
          </Link>
          <Link to="/session" className={styles.navLink}>
            <Dumbbell size={20}/> Rutinas
          </Link>
          <Link to="/record" className={styles.navLink}><Clock size={20}/> Historial</Link>
          <Link to="/perfil" className={styles.navLinkActive}><User size={20}/> Perfil</Link>
        </nav>
        <button className={styles.settingsBtn}>
            <Settings size={16}/> Ajustes
        </button>
      </aside>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className={styles.main}>
        
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
            
            {/* SECCIÓN PRs (WALL OF FAME) - 7 Columnas */}
            <div className={styles.col7}>
              <div className="flex justify-between items-center">
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

              {/* MAPA DE CALOR (CONSISTENCIA) */}
              <div className={styles.heatmapCard}>
                <div className={styles.heatmapHeader}>
                  <h2 className={styles.heatmapTitle}>Consistencia</h2>
                  <div className={styles.heatmapLegend}>
                    {[1,2,3,4,5].map(i => <div key={i} className={`${styles.heatmapLegendItem} ${i > 2 ? styles.heatmapLegendActive : styles.heatmapLegendInactive}`} />)}
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

            {/* SECCIÓN EVOLUCIÓN - 5 Columnas */}
            <div className={styles.col5}>
              <h2 className={styles.sectionTitle}>
                <TrendingUp size={18} className={styles.sectionTitleIcon} /> Evolución Física
              </h2>

              <div className={styles.evolutionCard}>
                <div className={styles.evolutionContainer}>
                  {/* Widget Peso */}
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

                  {/* Widget Grasa */}
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

                  {/* Logro Desbloqueado */}
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

          </div>
        </header>
      </main>

      {/* --- TAB BAR MÓVIL --- */}
      <nav className={styles.mobileNav}>
        <Link to="/dashboard"><LayoutDashboard size={24} /></Link>
        <Link to="/session"><Dumbbell size={24} /></Link>
        <div className={styles.mobileNavCenter}>
          <Calendar size={24} />
        </div>
        <Link to="/record"><Clock size={24} /></Link>
        <Link to="/perfil" className={styles.mobileNavActive}><User size={24} /></Link>
      </nav>

    </div>
  );
};

export default Perfil;