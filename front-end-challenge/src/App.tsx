import './App.css'
import { Hero } from 'src/features/home/components/Hero'
import { CurrentCoaches } from 'src/features/home/components/CurrentCoaches'
function App() {
  return (
    <div className='App'>
      <Hero />
      <CurrentCoaches />
    </div>
  )
}

export default App
