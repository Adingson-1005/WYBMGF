import '../css/Gallery.css'

export default function Empty({ title, message }) {
  return (
    <div style={{
      minHeight: 'calc(100vh - 48px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fce8f0',
      gap: '12px',
      padding: '2rem',
    }}>
      <p style={{
        fontFamily: "'Dancing Script', cursive",
        fontSize: '48px',
        color: '#e8b4c8',
      }}>✦</p>
      <h2 style={{
        fontFamily: "'Dancing Script', cursive",
        fontSize: '36px',
        color: '#7a5c2e',
      }}>{title}</h2>
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '16px',
        color: '#b09070',
        fontStyle: 'italic',
      }}>{message}</p>
    </div>
  )
}