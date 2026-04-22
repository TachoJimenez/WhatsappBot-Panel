import React from 'react';

const TicketTable = ({ tickets, onViewTicket }) => {
  return (
    <div style={{ width: '100%', overflowY: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead style={{ position: 'sticky', top: 0, background: 'var(--bg-dark)', zIndex: 10 }}>
          <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <th style={{ padding: '16px' }}>ID</th>
            <th style={{ padding: '16px' }}>Cliente</th>
            <th style={{ padding: '16px' }}>Asunto</th>
            <th style={{ padding: '16px' }}>Fuente</th>
            <th style={{ padding: '16px' }}>Estado</th>
            <th style={{ padding: '16px' }}>Última Actividad</th>
            <th style={{ padding: '16px', textAlign: 'center' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((t, idx) => (
            <tr 
              key={idx} 
              className="glass-card" 
              style={{ 
                borderBottom: '1px solid var(--glass-border)', 
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              onClick={() => onViewTicket(t)}
            >
              <td style={{ padding: '16px', color: 'var(--text-secondary)' }}>{t.id}</td>
              <td style={{ padding: '16px', fontWeight: 500 }}>{t.customer}</td>
              <td style={{ padding: '16px', color: 'var(--text-secondary)' }}>{t.subject}</td>
              <td style={{ padding: '16px' }}>
                <span style={{ fontSize: '0.8rem', color: t.source === 'MantisBT' ? 'var(--accent-purple)' : 'var(--accent-teal)' }}>
                  {t.source}
                </span>
              </td>
              <td style={{ padding: '16px' }}>
                <span className={`status-badge ${t.status}`}>
                  {t.status === 'process' ? 'En Proceso' : t.status === 'resolved' ? 'Resuelto' : t.status}
                </span>
              </td>
              <td style={{ padding: '16px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{t.lastActivity}</td>
              <td style={{ padding: '16px', textAlign: 'center' }}>
                <button 
                  className="btn-icon" 
                  onClick={(e) => { e.stopPropagation(); onViewTicket(t); }}
                  title="Ver Detalles"
                >
                  👁️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;
