import {
    Calendar, ChevronRight, Activity, Filter,
    ArrowUpRight, History
} from 'lucide-react';
import { AppLayout } from '../components/AppLayout';
import type { Sesion } from '../types';
import styles from './Record.module.css';

const sesionesPasadas: Sesion[] = [
    { id: 1, fecha: "Hoy, 27 Abr", rutina: "Push Day", duracion: "55 min", volumen: "2,450 kg", intensidad: "85%" },
    { id: 2, fecha: "25 Abr", rutina: "Leg Day", duracion: "72 min", volumen: "4,100 kg", intensidad: "92%" },
    { id: 3, fecha: "24 Abr", rutina: "Pull Day", duracion: "48 min", volumen: "1,850 kg", intensidad: "78%" },
    { id: 4, fecha: "22 Abr", rutina: "Full Body", duracion: "65 min", volumen: "3,200 kg", intensidad: "80%" },
];

const Record = () => {
    return (
        <AppLayout>
            <header className={styles.header}>
                <div className={styles.headerTop}>
                    <div>
                        <h1 className={styles.title}>Historial de <br className={styles.titleBr} /> <span className={styles.titleAccent}>Carga</span></h1>
                        <p className={styles.subtitle}>Registro de rendimiento mensual</p>
                    </div>
                    <button className={styles.filterBtn}>
                        <Filter size={16} /> Filtrar por mes
                    </button>
                </div>

                <div className={styles.grid}>
                    {/* TIMELINE DE SESIONES */}
                    <div className={styles.col8}>
                        {sesionesPasadas.map((sesion) => (
                            <div key={sesion.id} className={styles.sessionCard}>
                                <div className={styles.sessionHoverLine} />
                                <div className={styles.sessionInfo}>
                                    <div className={styles.sessionIconWrapper}>
                                        <Calendar size={24} />
                                    </div>
                                    <div>
                                        <p className={styles.sessionDate}>{sesion.fecha}</p>
                                        <h3 className={styles.sessionName}>{sesion.rutina}</h3>
                                    </div>
                                </div>
                                <div className={styles.sessionStats}>
                                    <div>
                                        <p className={styles.statLabel}>Tiempo</p>
                                        <p className={styles.statValue}>{sesion.duracion}</p>
                                    </div>
                                    <div>
                                        <p className={styles.statLabel}>Volumen</p>
                                        <p className={styles.statValue}>{sesion.volumen}</p>
                                    </div>
                                    <div className={styles.intensityWrapper}>
                                        <div className={styles.intensityIcon}><ArrowUpRight size={12} /></div>
                                        <p className={styles.intensityValue}>{sesion.intensidad}</p>
                                    </div>
                                </div>
                                <button className={styles.chevronBtn}>
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* RESUMEN LATERAL */}
                    <div className={styles.col4}>
                        <div className={styles.summaryCard}>
                            <div className={styles.summaryIconWrapper}>
                                <Activity size={24} />
                            </div>
                            <h3 className={styles.summaryTitle}>Resumen de Abril</h3>
                            <div className={styles.summaryList}>
                                <div className={styles.summaryRow}>
                                    <span className={styles.summaryLabel}>Sesiones</span>
                                    <span className={styles.summaryValue}>22</span>
                                </div>
                                <div className={styles.summaryRow}>
                                    <span className={styles.summaryLabel}>Tiempo Total</span>
                                    <span className={styles.summaryValue}>24.5 hrs</span>
                                </div>
                                <div className={styles.summaryRowBorder}>
                                    <span className={styles.summaryLabel}>Volumen Total</span>
                                    <span className={styles.summaryValueAccent}>84,200 KG</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.suggestionCard}>
                            <h3 className={styles.suggestionTitle}>¡Nivel Superior!</h3>
                            <p className={styles.suggestionDesc}>Has entrenado un 15% más que el mes pasado. Mantén esa racha.</p>
                        </div>
                    </div>
                </div>
            </header>
        </AppLayout>
    );
};

export default Record;