import logo from './logo.svg';
import './App.css';
import '/node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css';
import Table from './components/DataTable/Table'
import ContactForm from './components/ContactForm/ContactForm'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import '/node_modules/primereact/resources/themes/vela-blue/theme.css'
const dataFile = require('./datastore.json')

function App() {

  const headers ={
    name: 'Name',
    field: 'Field',
    years: 'Years of Experience',
    colleges: 'Higher Education'
  }

  const educatorList = [
    {
      name: 'Charles Jones',
      field: 'Computer Science',
      years: 30,
      colleges: 'Stanford'
    },
    {
      name: 'Neil Armstrong',
      field: 'Space',
      years: 35,
      colleges: 'Purdue'
    },
    {
      name: 'Lefty McLefterson',
      field: 'Left Handed Items',
      years: 50,
      colleges: 'Texas A&M'
    },
    {
      name: 'Bob Dale',
      field: 'Mirco Biology',
      years: 33,
      colleges: 'Carnegie Mellon'
    }
  ]


  return (
    <div className="App ">
      <Card>
        <header>
            <h1>CoachPro Stream</h1>
        </header>
      </Card>
      
    
      <Table className='' data={educatorList} headers={headers} />
      
      <ContactForm tableData={educatorList} headers={headers}/>
    
     
    </div>
  );
}

export default App;
