import './App.css';
import Title from './features/Title/Title';
import CurrentCoaches from './features/CurrentCoaches/CurrentCoaches';
import Contact from './features/Contact/Contact';


export default function App() {
  return (
    <div className="app">
      <Title /> 
      <CurrentCoaches />
      <Contact />
    </div>
  );
}