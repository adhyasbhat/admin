import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from "./Admin/Admin"
import Register from "./Register/Register"
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
<Routes>
 <Route path = "/" element = {<Admin/>}/>  
 <Route path = "/myregister" element = {<Register/>}/> 
  </Routes>
  </BrowserRouter>
 
  </div>
);
}

export default App;
