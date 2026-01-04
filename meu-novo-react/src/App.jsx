import { useState } from 'react'

function App() {
  const [corDeFundo, setCorDeFundo] = useState('white')

  return (
    <div style={{ backgroundColor: corDeFundo, height: '100vh', textAlign: 'center', paddingTop: '50px' }}>
      <h1>A cor atual é: {corDeFundo}</h1>
      
      <button onClick={() => setCorDeFundo('yellow')}>Amarelo</button>
      <button onClick={() => setCorDeFundo('lightgreen')}>Verde</button>
      <button onClick={() => setCorDeFundo('#ff4757')}>Vermelho</button>
      
      <br /><br />
      <button onClick={() => setCorDeFundo('white')}>Resetar</button>
    </div>
  )
}

export default App