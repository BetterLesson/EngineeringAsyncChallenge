import "./App.css";
import Table from "./components/table/table.js";
import Contact from "./components/contact/contact.js";
import coachingImg from "./coaching.png"

const tableData = [{
    "name": "Jessica D.",
    "available": "11/6/22",
    "industry": "Professional Services"
},
{
    "name": "David F.",
    "available": "8/5/21",
    "industry": "Sports/Fitness"
},
{
    "name": "Keir Y.",
    "available": "4/12/22",
    "industry": "E-Sports"
}
]

function App() {
  const columns = [
    { field: "name", header: "Coach Name" },
    { field: "available", header: "Available Starting" },
    { field: "industry", header: "Industry" },
  ];

  return (
  <div>
      <div className="page">
        <div className="div_img">
            <img src={coachingImg} alt="Coaching"></img>
        </div>
        <div className="div_table">
            <h4>Current Coaches</h4>
          <Table data={tableData} columns={columns} />
        </div>
      </div>
      <div className="page">
          <Contact></Contact>
      </div>
  </div>
  );
}

export default App;