import { Link, Route, Routes } from "react-router-dom";
import Main from "./views/Main";
import New from "./views/New";
import Show from "./views/Show";



function App() {
  return (
    <>
      <nav style={{textAlign: "center", margin: "30px"}}>
        <Link style={{margin: "10px"}} to="/">Dashboard</Link>
        <Link style={{margin: "10px"}} to="/pirate/new">Add New Pirate</Link>
      </nav>
      <div style={{textAlign: 'center'}}>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/pirate/new" element={<New />}></Route>
        <Route path="/pirate/:id" element={<Show />}></Route>
      </Routes>
      </div>
    </>
    
  );
}

export default App;
