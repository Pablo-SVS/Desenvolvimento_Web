import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Sistema de Empréstimos</h1>
      <div className="card">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount((count) => count + 1)}
        >
          Contagem é {count}
        </button>
      </div>
    </div>
  )
}

export default App