import React, { useState } from 'react';

export default function TeamWorkspace({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState('agents');

  const agentsList = [
    { role: 'CEO', name: 'Agente CEO', status: 'Activo', task: 'Optimizando modelo de ingresos' },
    { role: 'CTO', name: 'Agente CTO', status: 'Activo', task: 'Monitoreando BigQuery & Gemini APIs' },
    { role: 'CMO', name: 'Agente CMO', status: 'Activo', task: 'Revisando métricas del Funnel' },
    { role: 'CPO', name: 'Agente CPO', status: 'Activo', task: 'Mejorando flujo de onboarding' },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>Workspace del Equipo (Team Admin) 🛡️</h1>
          <p style={styles.welcome}>Sesión de Operaciones: {user.email}</p>
        </div>
        <button onClick={onLogout} style={styles.logoutBtn}>Cerrar Sesión</button>
      </header>

      <div style={styles.tabs}>
        <button 
          style={activeTab === 'agents' ? styles.activeTab : styles.tab} 
          onClick={() => setActiveTab('agents')}
        >
          Agentes IA Directivos
        </button>
        <button 
          style={activeTab === 'metrics' ? styles.activeTab : styles.tab} 
          onClick={() => setActiveTab('metrics')}
        >
          Métricas BigQuery
        </button>
        <button 
          style={activeTab === 'funnel' ? styles.activeTab : styles.tab} 
          onClick={() => setActiveTab('funnel')}
        >
          Funnels de Venta
        </button>
      </div>

      {activeTab === 'agents' && (
        <div style={styles.grid}>
          {agentsList.map((agent) => (
            <div key={agent.role} style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.roleBadge}>{agent.role}</span>
                <span style={styles.statusOnline}>● {agent.status}</span>
              </div>
              <h4>{agent.name}</h4>
              <p style={styles.taskText}><strong>Tarea actual:</strong> {agent.task}</p>
              <button style={styles.actionBtn}>Ver Instrucciones (.md)</button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'metrics' && (
        <div style={styles.card}>
          <h3>📊 Integración BigQuery Analytics</h3>
          <p>Conexión directa con las tablas de eventos y conversión.</p>
          <ul style={{ color: '#9ca3af' }}>
            <li>Usuarios registrados activos: 142</li>
            <li>Tasa de retención 30 días: 88.5%</li>
            <li>Consultas procesadas con Google Gemini: 1,280 en las últimas 24h</li>
          </ul>
        </div>
      )}

      {activeTab === 'funnel' && (
        <div style={styles.card}>
          <h3>🎯 Control del Funnel Marketing</h3>
          <p>Supervisión de tráfico desde el sitio web en Astro hasta la aplicación React.</p>
          <p style={{ color: '#9ca3af' }}>Revisa la carpeta <code>/funnel</code> para modificar los parámetros en formato .md.</p>
        </div>
      )}
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
    marginBottom: '20px',
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
  tabs: { display: 'flex', gap: '10px', marginBottom: '24px' },
  tab: {
    background: '#161b26',
    border: '1px solid #374151',
    color: '#9ca3af',
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  activeTab: {
    background: 'linear-gradient(135deg, #6366f1, #a855f7)',
    border: 'none',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    background: '#161b26',
    borderRadius: '10px',
    padding: '20px',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  cardHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' },
  roleBadge: { background: '#374151', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' },
  statusOnline: { color: '#10b981', fontSize: '0.8rem' },
  taskText: { fontSize: '0.85rem', color: '#9ca3af' },
  actionBtn: {
    width: '100%',
    marginTop: '12px',
    background: '#2563eb',
    color: '#fff',
    border: 'none',
    padding: '8px',
    borderRadius: '6px',
    fontSize: '0.85rem',
    cursor: 'pointer',
  }
};
