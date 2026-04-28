import type { ReactNode } from 'react';

// --- Props de componentes compartidos ---

export interface TarjetaProgramaProps {
  titulo: string;
  desc: string;
  icono: ReactNode;
  activo: boolean;
  onClick: () => void;
}

export interface TarjetaPrecioProps {
  nombre: string;
  precio: string;
  beneficios: string[];
  popular: boolean;
}

// --- Datos ---

export interface Programa {
  titulo: string;
  desc: string;
  icono: ReactNode;
}

export interface Plan {
  id: number;
  nombre: string;
  precio: string;
  beneficios: string[];
}

export interface Ejercicio {
  id: number;
  nombre: string;
  series: number;
  reps: string;
  peso: string;
}

export interface Sesion {
  id: number;
  fecha: string;
  rutina: string;
  duracion: string;
  volumen: string;
  intensidad: string;
}

export interface PersonalRecord {
  ejercicio: string;
  peso: string;
  fecha: string;
  icon: ReactNode;
}
