import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Dumbbell,
  User,
  Flame,
  Clock,
  Target,
  Play
} from 'lucide-react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const stats = [
    { label: "Calorías", value: "1,240", unit: "kcal", icon: <Flame size={20} />, color: "text-orange-500" },
    { label: "Tiempo", value: "45", unit: "min", icon: <Clock size={20} />, color: "text-blue-500" },
    { label: "Objetivo", value: "85", unit: "%", icon: <Target size={20} />, color: "text-green-500" },
  ];

  return (
    <div className={styles.container}>

      {/* SIDEBAR PC */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          FIT<span className={styles.logoAccent}>TRIBE</span>
        </div>

        <nav className={styles.nav}>
          <Link to="/dashboard" className={styles.navLinkActive}>
            <LayoutDashboard size={20} /> Panel
          </Link>
          <Link to="/session" className={styles.navLink}>
            <Dumbbell size={20} /> Rutinas
          </Link>
          <Link to="/record" className={styles.navLink}>
            <Clock size={20} /> Historial
          </Link>
          <Link to="/perfil" className={styles.navLink}>
            <User size={20} /> Perfil
          </Link>
        </nav>

        <button className={styles.logoutBtn}>
          Cerrar Sesión
        </button>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <div className={styles.main}>
        <header className={styles.header}>
          <div className={styles.topHeader}>
            <div>
              <p className={styles.welcomeText}>Bienvenido de vuelta</p>
              <h1 className={styles.userName}>
                Atleta <span className={styles.userNameAccent}>Elite</span>
              </h1>
            </div>
            <Link to="/perfil" className={styles.profileAvatar}>
              <User size={28} className={styles.avatarIcon} />
            </Link>
          </div>

          <div className={styles.grid}>
            <div className={styles.col8}>
              <div className={styles.statsGrid}>
                {stats.map((stat, i) => (
                  <div key={i} className={styles.statCard}>
                    <div className={`${stat.color} ${styles.statIcon}`}>{stat.icon}</div>
                    <p className={styles.statLabel}>{stat.label}</p>
                    <p className={styles.statValue}>
                      {stat.value}<span className={styles.statUnit}>{stat.unit}</span>
                    </p>
                  </div>
                ))}
              </div>

              <div className={styles.chartCard}>
                <div className={styles.chartHeader}>
                  <h2 className={styles.chartTitle}>Rendimiento Semanal</h2>
                  <div className={styles.chartLegend}>
                    <div className={styles.chartLegendDot}></div>
                    <span className={styles.chartLegendText}>Entrenado</span>
                  </div>
                </div>
                <div className={styles.chartBars}>
                  {[40, 70, 45, 90, 65, 30, 50].map((h, i) => (
                    <div key={i} className={styles.chartBarContainer}>
                      <div
                        className={`${styles.chartBar} ${i === 3 ? styles.chartBarActive : ''}`}
                        style={{ height: `${h}%` }}
                      />
                      <span className={styles.chartBarLabel}>
                        {['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.col4}>
              <div className={styles.routineCard}>
                <Dumbbell size={150} className={styles.routineIcon} />
                <div>
                  <div className={styles.routineBadge}>Día de Empuje</div>
                  <h3 className={styles.routineTitle}>Empuje <br />Explosivo</h3>
                  <p className={styles.routineDesc}>4 Ejercicios • 55 Min</p>
                </div>
                <Link to="/session" className={styles.startBtn}>
                  <Play size={16} fill="currentColor" /> Comenzar Sesión
                </Link>
              </div>

              <div className={styles.challengeCard}>
                <h3 className={styles.challengeTitle}>Próximo Reto</h3>
                <div className={styles.challengeContent}>
                  <div className={styles.challengeIconWrapper}>
                    <Target size={26} className={styles.challengeIcon} />
                  </div>
                  <div>
                    <p className={styles.challengeName}>120KG Sentadilla</p>
                    <p className={styles.challengeDesc}>A 5kg de la meta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* NAVEGACIÓN MÓVIL */}
      <nav className={styles.mobileNav}>
        <Link to="/dashboard" className={styles.mobileNavActive}>
          <LayoutDashboard size={24} />
        </Link>
        <Link to="/session" className={styles.mobileNavLink}>
          <Dumbbell size={24} />
        </Link>
        <Link to="/session" className={styles.mobileNavCenter}>
          <Play size={24} fill="currentColor" className="ml-1" />
        </Link>
        <Link to="/record" className={styles.mobileNavLink}>
          <Clock size={24} />
        </Link>
        <Link to="/perfil" className={styles.mobileNavLink}>
          <User size={24} />
        </Link>
      </nav>
    </div>
  );
};

export default Dashboard;