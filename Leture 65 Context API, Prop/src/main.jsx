import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx';

export let UserContext = createContext(null);

let username ="Ankit"

createRoot(document.getElementById('root')).render(
  // <>
  //   <UserContext.Provider value={username}>
  //     <App />
  //   </UserContext.Provider>
  // </>,

  <ThemeProvider>
    <App/>
  </ThemeProvider>
)
