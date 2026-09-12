import React, { useState } from 'react';

export default function CustomerDashboard({ user, onLogout }) {
  const [prompt, setPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskGemini = async (e) => {
    e.preventDefault();
    if (!prompt) return;
    setLoading(true);
    try {
      // Simulación de llamada a Backend API (Python + Gemini)
      const res = await fetch('http://localhost:8000/api/v1/gemini/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, user_id: user.email })
      }).catch(() => null);

      if (res && res.ok) {
        const data = await res.json();
        setAiResponse(data.response);
      } else {
        // Fallback demostrativo
        setAiResponse(`[Respuesta Inteligente de Gemini para ${user.email}]: Estrategia generada exitosamente para "${prompt}". Recomendamos ejecutar la prueba de conversión esta semana.`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>Portal del Cliente 🚀</h1>
          <p style={styles.welcome}>Bienvenido, {user.email}</p>
        </div>
        <button onClick={onLogout} style={styles.logoutBtn}>Cerrar Sesión</button>
      </header>

      <div style={styles.grid}>
        {/* Card 1: Estado del Proyecto */}
        <div style={styles.card}>
          <h3>📈 Estado de tu Startup</h3>
          <p style={styles.metricLabel}>Fase Actual:</p>
          <div style={styles.badge}>Onboarding & Aceleración</div>
          <p style={styles.subtext}>Tu funnel de ventas está activo y listo para recibir tráfico.</p>
        </div>

        {/* Card 2: Consultor Gemini AI */}
        <div style={{ ...styles.card, gridColumn: 'span 2' }}>
          <h3>🤖 Consultor de Startup (Google Gemini AI)</h3>
          <p style={styles.subtext}>Solicita análisis de mercado, textos de venta o recomendaciones estratégicas.</p>
          
          <form onSubmit={handleAskGemini} style={styles.aiForm}>
            <input 
              type="text" 
              placeholder="Ej: Escribe un titular persuasivo para mi landing page..." 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              style={styles.aiInput}
            />
            <button type="submit" style={styles.aiBtn} disabled={loading}>
              {loading ? 'Analizando...' : 'Consultar Gemini'}
            </button>
          </form>

          {aiResponse && (
            <div style={styles.responseBox}>
              <strong>Respuesta de la IA:</strong>
              <p>{aiResponse}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
    color: '#fff',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: '20px',
  },
  title: { margin: 0, fontSize: '1.8rem' },
  welcome: { margin: 0, color: '#9ca3af', fontSize: '0.95rem' },
  logoutBtn: {
    background: '#374151',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '20px',
  },
  card: {
    background: '#161b26',
    borderRadius: '10px',
    padding: '24px',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  metricLabel: { color: '#9ca3af', fontSize: '0.85rem', marginBottom: '6px' },
  badge: {
    display: 'inline-block',
    background: 'rgba(99, 102, 241, 0.2)',
    color: '#818cf8',
    padding: '6px 12px',
    borderRadius: '20px',
    fontWeight: 'bold',
    fontSize: '0.85rem',
    marginBottom: '10px',
  },
  subtext: { color: '#9ca3af', fontSize: '0.9rem' },
  aiForm: { display: 'flex', gap: '10px', marginTop: '16px' },
  aiInput: {
    flex: 1,
    padding: '10px 14px',
    borderRadius: '6px',
    background: '#0f131d',
    border: '1px solid #374151',
    color: '#fff',
  },
  aiBtn: {
    background: 'linear-gradient(135deg, #6366f1, #a855f7)',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  responseBox: {
    marginTop: '20px',
    padding: '16px',
    background: '#0f131d',
    borderRadius: '8px',
    borderLeft: '4px solid #818cf8',
  }
};
