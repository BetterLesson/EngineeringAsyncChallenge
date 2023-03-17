import './App.css'
import { Hero } from 'src/features/home/components/Hero'
import { CurrentCoaches } from 'src/features/home/components/CurrentCoaches'
import { MailingList } from 'src/features/home/components/MailingList'
function App() {
  return (
    <div className='App'>
      <Hero />
      <CurrentCoaches />
      <MailingList />
    </div>
  )
}

export default App
