import './App.css';
import Axios from 'axios'
import { useState, useEffect } from "react"

function App() {

  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });

  }, [])


return (
  <>
    <div>
      <button  >Get Cat Fact</button>
      <p> {catFact}  </p>
    </div>
  </>
);
}

export default App;
