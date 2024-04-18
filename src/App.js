import './App.css';
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Home from './Components/Home';
import AddBenificiary from './Components/AddBnificiary';
import EditBenificiary from './Components/EditBenificiary';
import NotFound from './Components/NotFound';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <Router>  
       <Routes>
       <Route  path="/" element={<Home/>}/>
          <Route  path="/add" element={<AddBenificiary/>}/>
          <Route  path="/edit/:Id" element={<EditBenificiary/>}/>
          <Route  path="*" element={<NotFound/>}/>
       </Routes>  
      </Router>

      <ToastContainer/>
    </div>
  );
}

export default App;
