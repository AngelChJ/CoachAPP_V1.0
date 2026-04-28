import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Dumbbell, Clock, User } from 'lucide-react';
import styles from './AppLayout.module.css';

interface AppLayoutProps {
  children: ReactNode;
  sidebarFooter?: ReactNode;
  mobileCenterButton?: ReactNode;
}

const navItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'Panel' },
  { path: '/session', icon: Dumbbell, label: 'Rutinas' },
  { path: '/record', icon: Clock, label: 'Historial' },
  { path: '/perfil', icon: User, label: 'Perfil' },
];

export const AppLayout = ({ children, sidebarFooter, mobileCenterButton }: AppLayoutProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={styles.container}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          FIT<span className={styles.logoAccent}>TRIBE</span>
        </div>
        <nav className={styles.nav}>
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={currentPath === item.path ? styles.navLinkActive : styles.navLink}
              >
                <Icon size={20} /> {item.label}
              </Link>
            );
          })}
        </nav>
        {sidebarFooter}
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.main}>
        {children}
      </main>

      {/* MOBILE NAV */}
      <nav className={styles.mobileNav}>
        <Link to="/dashboard" className={currentPath === '/dashboard' ? styles.mobileNavActive : styles.mobileNavLink}>
          <LayoutDashboard size={24} />
        </Link>
        <Link to="/session" className={currentPath === '/session' ? styles.mobileNavActive : styles.mobileNavLink}>
          <Dumbbell size={24} />
        </Link>
        {mobileCenterButton}
        <Link to="/record" className={currentPath === '/record' ? styles.mobileNavActive : styles.mobileNavLink}>
          <Clock size={24} />
        </Link>
        <Link to="/perfil" className={currentPath === '/perfil' ? styles.mobileNavActive : styles.mobileNavLink}>
          <User size={24} />
        </Link>
      </nav>
    </div>
  );
};
