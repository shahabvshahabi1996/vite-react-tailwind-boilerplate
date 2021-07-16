import React, { useState } from 'react';
import reactLogo from './assets/logo.png';
import viteLogo from './assets/vite.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <header className="bg-purple-50 min-h-screen flex flex-col items-center justify-center text-white">
        <div className="flex flex-row items-center justify-between space-x-10 mb-8">
          <img src={viteLogo} className="bg-pink-100 ring-4 ring-purple-300 p-5 rounded h-44 pointer-events-none" alt="vite logo" />
          <code className="text-9xl text-purple-500">&</code>
          <img src={reactLogo} className="bg-pink-50 ring-4 ring-purple-300 p-5 rounded h-44 pointer-events-none" alt="react logo" />
        </div>
        <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 mb-8">Vite, React & Tailwind css </h3>
        <p>
          <button type="button" className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-600 focus:ring-opacity-25 rounded px-4 py-2 text-2xl mb-8" onClick={() => setCount((count) => count + 1)}>
            Count: {count}
          </button>
        </p>
        <p className="text-xl text-gray-600 mb-8">
          Edit <code className="bg-purple-300 text-purple-600 px-2 py-1 rounded text-base">App.jsx</code> and save to test HMR updates.
        </p>
        <p className="flex space-x-4 items-center">
          <a
            className="text-purple-600 hover:underline"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          <a
            className="text-purple-600 hover:underline"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
