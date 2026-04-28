import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Agregamos useNavigate
import { ShieldCheck, Mail, Lock, ArrowLeft, AlertCircle } from 'lucide-react';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Para mostrar mensajes de error
  const [isLoading, setIsLoading] = useState(false); // Simular carga

  const navigate = useNavigate();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup the timeout if the component unmounts mid-loading
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validaciones básicas que ya teníamos...
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    setIsLoading(true);

    timerRef.current = setTimeout(() => {
      setIsLoading(false);

      // Credenciales de prueba
      if (email === "atleta@fit-tribe.com" && password === "password123") {
        navigate('/dashboard');
      } else {
        setError('Credenciales incorrectas. Intenta de nuevo.');
      }
    }, 1500);
  };

  const inputStyle = (hasError: boolean) => `
    ${styles.inputBase} 
    ${hasError ? styles.inputError : styles.inputNormal}
  `; //Si hasError es verdad, le pone el borde rojo; si no, el normal. Es puro "maquillaje dinámico"

  return (
    <div className={styles.container}> {/* Fondo negro con centrado */}

      <Link to="/" className={styles.backLink}> {/* Boton de ir hacia atras */}
        <ArrowLeft size={20} />
        <span>Volver al inicio</span>
      </Link>

      <div className={styles.card}> {/* 
        Este es el rectángulo blanco que contiene todo el formulario. 
        Tiene bordes redondeados tipo píldora y un ligero sombreado que lo hace flotar sobre el fondo negro.
      */}

        {/* Barra de carga superior */}
        {isLoading && <div className={styles.progressBar} />} {/* Si la variable de estado isLoading es verdadera, muestra esta barra azul que se mueve. Si es falsa, no muestra nada. */}

        <div className={styles.header}> {/* Encabezado con el icono y el título */}
          <div className={styles.iconWrapper}> {/* Círculo azul de fondo para el icono */}
            <ShieldCheck size={40} />
          </div>
          <h2 className={styles.title}>Acceso de <span className={styles.titleAccent}>Atletas</span></h2>
        </div>

        {/* Mensaje de Error Visual */}
        {error && (
          <div className={styles.errorBox}> {/* Si la variable de estado error tiene contenido, muestra esta caja roja con el mensaje de error. Si está vacía, no muestra nada. */}
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email</label>
            <div className={styles.inputWrapper}>
              <Mail className={`${styles.inputIcon} ${error ? styles.inputIconError : styles.inputIconNormal}`} size={20} />
              <input
                type="text" // Cambiamos a text para que nuestra validación personalizada tome el control
                className={inputStyle(!!error)}
                placeholder="atleta@fit-tribe.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Contraseña</label>
            <div className={styles.inputWrapper}>
              <Lock className={`${styles.inputIcon} ${error ? styles.inputIconError : styles.inputIconNormal}`} size={20} />
              <input
                type="password"
                className={inputStyle(!!error)}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`${styles.submitBtnBase} ${isLoading ? styles.submitBtnLoading : styles.submitBtnActive}`}
          >
            {isLoading ? 'VERIFICANDO...' : 'ENTRAR AL PANEL'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;