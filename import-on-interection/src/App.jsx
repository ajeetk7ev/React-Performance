import { useState, lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Message from './components/Message'
const Emoji  = lazy(() => import ('./components/Emoji'))


function App() {
  const [emoji, toggleEmoji] = useState(false)

  return (
    <>
      <Message/>
      <button onClick={() => toggleEmoji((prev)=> !prev)}>Show Emoji</button>
      {emoji && <Suspense fallback={<h1>Loading...</h1>}> <Emoji/></Suspense>}
    </>
  )
}

export default App
