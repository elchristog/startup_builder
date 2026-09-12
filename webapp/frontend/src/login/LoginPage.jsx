import React, { useState } from 'react';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer'); // 'customer' | 'team'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      onLogin({ email, role });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Acceso a la Plataforma</h2>
        <p style={styles.subtitle}>Inicia sesión para acceder a tu workspace</p>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>Tipo de Usuario</label>
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)} 
              style={styles.input}
            >
              <option value="customer">Portal de Clientes</option>
              <option value="team">Miembro del Equipo / Operaciones</option>
            </select>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Correo Electrónico</label>
            <input 
              type="email" 
              required
              placeholder="tu@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Contraseña</label>
            <input 
              type="password" 
              required
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            Ingresar como {role === 'customer' ? 'Cliente' : 'Equipo'}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    padding: '20px',
  },
  card: {
    background: '#1a1f2c',
    borderRadius: '12px',
    padding: '40px',
    width: '100%',
    maxWidth: '400px',
    border: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  },
  title: {
    margin: '0 0 8px 0',
    color: '#ffffff',
    textAlign: 'center',
  },
  subtitle: {
    margin: '0 0 24px 0',
    color: '#9ca3af',
    fontSize: '0.9rem',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '0.85rem',
    color: '#d1d5db',
  },
  input: {
    padding: '10px 14px',
    borderRadius: '6px',
    background: '#0f131d',
    border: '1px solid #374151',
    color: '#fff',
    fontSize: '0.95rem',
  },
  button: {
    padding: '12px',
    borderRadius: '6px',
    background: 'linear-gradient(135deg, #6366f1, #a855f7)',
    color: '#fff',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
  }
};
