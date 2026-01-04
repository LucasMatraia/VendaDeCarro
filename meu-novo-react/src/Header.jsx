function Header() {
  return (
    <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white' }}>
      <h1>Meu Site em React 💻</h1>
      <nav>
        <ul style={{ display: 'flex', gap: '15px', listStyle: 'none', justifyContent: 'center' }}>
          <li>Home</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;