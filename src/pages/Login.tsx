import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Agregamos useNavigate
import { ShieldCheck, Mail, Lock, ArrowLeft, AlertCircle } from 'lucide-react';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Para mostrar mensajes de error
  const [isLoading, setIsLoading] = useState(false); // Simular carga
  
  const navigate = useNavigate();

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

    // Simulación de "petición al servidor"
    setTimeout(() => {
      setIsLoading(false);

      // Credenciales de prueba
      if (email === "atleta@fit-tribe.com" && password === "password123") {
        // ¡ESTA ES LA LÍNEA CLAVE QUE FALTABA!
        navigate('/dashboard'); 
      } else {
        setError('Credenciales incorrectas. Intenta de nuevo.');
      }
    }, 1500);
  };

  const inputStyle = (hasError: boolean) => `
    ${styles.inputBase} 
    ${hasError ? styles.inputError : styles.inputNormal}
  `;

  return (
    <div className={styles.container}>
      
      <Link to="/" className={styles.backLink}>
        <ArrowLeft size={20} />
        <span>Volver al inicio</span>
      </Link>

      <div className={styles.card}>
        
        {/* Barra de carga superior */}
        {isLoading && <div className={styles.progressBar} />}

        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <ShieldCheck size={40} />
          </div>
          <h2 className={styles.title}>Acceso de <span className={styles.titleAccent}>Atletas</span></h2>
        </div>

        {/* Mensaje de Error Visual */}
        {error && (
          <div className={styles.errorBox}>
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