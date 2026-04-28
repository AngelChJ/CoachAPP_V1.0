import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Heart, 
  Zap, 
  Dumbbell, 
  MessageCircle 
} from 'lucide-react';
import { TarjetaPrograma, TarjetaPrecio } from '../components/Tarjetas';
import { getWhatsAppLink, SOCIAL_LINKS } from '../config';
import type { Programa, Plan } from '../types';
import styles from './Home.module.css';

const programas: Programa[] = [
  { titulo: "Fuerza Cardio", desc: "Mejora tu potencia y resistencia con circuitos de alta intensidad.", icono: <Zap size={24} /> },
  { titulo: "Pérdida de Grasa", desc: "Protocolos enfocados en maximizar la quema calórica y definición.", icono: <Activity size={24} /> },
  { titulo: "Ganancia Muscular", desc: "Planes de hipertrofia con técnicas de sobrecarga progresiva.", icono: <Dumbbell size={24} /> },
  { titulo: "Nutrición", desc: "Guías alimenticias para potenciar tu recuperación y energía.", icono: <Heart size={24} /> }
];

const planes: Plan[] = [
  { id: 0, nombre: "Plan Estándar", precio: "800", beneficios: ["Acceso al gym", "Rutina base", "Seguimiento quincenal"] },
  { id: 1, nombre: "Plan Premium", precio: "1200", beneficios: ["Acceso 24/7", "Dieta personalizada", "Coach por WhatsApp", "App de seguimiento"] },
  { id: 2, nombre: "Plan Avanzado", precio: "1800", beneficios: ["Todo lo anterior", "Análisis biométrico", "Suplementación", "Sesión 1 a 1"] }
];

const Home = () => {
  // --- ESTADOS DE INTERACTIVIDAD ---
  const [progActivo, setProgActivo] = useState(0);
  const [planSeleccionado, setPlanSeleccionado] = useState(1);

  return (
    <div className={styles.container}>
      
      {/* NAVBAR */}
      <nav className={styles.nav}>
        <div className={styles.logo}>FIT<span className={styles.logoAccent}>TRIBE</span></div>
        <div className={styles.navLinks}>
          <a href="#programas" className={styles.navLink}>Programas</a>
          <a href="#coach" className={styles.navLink}>El Coach</a>
          <a href="#planes" className={styles.navLink}>Membresías</a>
        </div>
        <Link to="/login" className={styles.loginBtn}>
          ENTRAR
        </Link>
      </nav>

      {/* HERO SECTION */}
      <header className={styles.hero}>
        <span className={styles.heroTagline}>Legacy of Strength</span>
        <h1 className={styles.heroTitle}>
          DOMINA <br /> <span className={styles.heroTitleAccent}>TU CUERPO</span>
        </h1>
        <p className={styles.heroDesc}>
          Entrenamiento de élite y nutrición inteligente. Resultados reales para personas reales.
        </p>
        <div className={styles.heroActions}>
          <a
            href={getWhatsAppLink('Hola Coach, vi tu página y quiero comenzar mi proceso 💪')}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroBtn}
          >
            Escríbeme por WhatsApp 💬
          </a>
        </div>
      </header>

      {/* SECCIÓN PROGRAMAS */}
      <section id="programas" className={styles.programs}>
        <h2 className={styles.sectionTitle}>
          Explora el <span className={styles.sectionTitleAccent}>Sistema</span>
        </h2>
        <div className={styles.programsGrid}>
          {programas.map((prog, i) => (
            <TarjetaPrograma 
              key={i}
              {...prog}
              activo={progActivo === i}
              onClick={() => setProgActivo(i)}
            />
          ))}
        </div>
      </section>

      {/* SECCIÓN MEMBRESÍAS */}
      <section id="planes" className={styles.plansSection}>
        <div className={styles.plansContainer}>
          <h2 className={styles.plansTitle}>Nuestros Planes</h2>
          <p className={styles.plansSubtitle}>Inversión en tu rendimiento</p>
          
          <div className={styles.plansGrid}>
            {planes.map((p) => (
              <div key={p.id} onClick={() => setPlanSeleccionado(p.id)} className={styles.planCardWrapper}>
                <TarjetaPrecio 
                  nombre={p.nombre}
                  precio={p.precio}
                  beneficios={p.beneficios}
                  popular={planSeleccionado === p.id}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COACH SECTION */}
      <section id="coach" className={styles.coachSection}>
        <div className={styles.coachGrid}>
          <div className={styles.coachImageWrapper}>
            <div className={styles.coachImageBg}>
               <span className={styles.coachImageText}>CHARLY</span>
               <div className={styles.coachImageOverlay}></div>
            </div>
          </div>
          <div>
            <span className={styles.coachTag}>Head Coach</span>
            <h2 className={styles.coachName}>Charly Coach</h2>
            <p className={styles.coachQuote}>
              "No busco clientes, busco resultados. Si estás dispuesto a trabajar duro, yo te daré el camino exacto hacia tu mejor versión."
            </p>
            <div className={styles.coachSocials}>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <div className={styles.instagramIcon} />
              </a>
              <a href={getWhatsAppLink('Hola Coach, quiero más información sobre tus planes 💪')} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <MessageCircle size={24}/>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>FIT<span className={styles.logoAccent}>TRIBE</span></div>
        <p className={styles.footerCopyright}>© 2026 Charly Coach System • All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;