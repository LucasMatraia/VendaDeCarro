import { useState } from 'react'
import './App.css'

function App() {
  const [index, setIndex] = useState(0);

  const estoque = [
    { nome: "Porsche 911 Carrera", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600" },
    { nome: "Ferrari F8 Tributo", img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1600" },
    { nome: "Lamborghini Aventador", img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600" }
  ];

  const mover = (dir) => {
    if (dir === 'next') setIndex((prev) => (prev + 1) % estoque.length);
    else setIndex((prev) => (prev - 1 + estoque.length) % estoque.length);
  };

  return (
    <div className="landing-page" style={{ backgroundImage: `url(${estoque[index].img})` }}>
      
      {/* Menu Superior Estilo Transparente */}
      <header className="top-bar">
        <div className="brand">FP <span>SELLECTION</span></div>
        <nav className="menu">
          <a href="#">Home</a>
          <a href="#">Estoque</a>
          <a href="#">Contato</a>
          <button className="btn-verde" onClick={() => window.open('https://wa.me/5519971446032')}>Saiba Mais</button>
        </nav>
      </header>

      {/* Nome do Carro no Meio/Baixo igual à imagem */}
      <div className="main-info">
        <h1 className="car-title">{estoque[index].nome}</h1>
        <div className="pagination">
          {estoque.map((_, i) => (
            <span key={i} className={i === index ? "dot active" : "dot"}></span>
          ))}
        </div>
      </div>

      {/* Setas de navegação flutuantes */}
      <button className="nav-arrow left" onClick={() => mover('prev')}>❮</button>
      <button className="nav-arrow right" onClick={() => mover('next')}>❯</button>

    </div>
  )
}

export default App