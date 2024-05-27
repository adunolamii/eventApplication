import './App.css'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Admin from './Admin/Admin'
import GatherEM from './Components/GatherEM'
import GatherPW from './Components/GatherPW'
import GatherNP from './Components/GatherNP'
import Home from './Components/Pages/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Navbar from './Components/Navbar';

function App() {
   return (
    <>
     {/* <Admin/> */}
     <Router>

            <Routes>
                   <Route path="/" element={<Navbar/>}/>
                  <Route path="/gatherPW" element={<GatherPW/>}/>
                  <Route path="/gatherEM" element={<GatherEM/>}/>
                  <Route path="/gatherNP" element={<GatherNP/>}/>
                  <Route path="/admin" element={<Admin/>}/>


                  <Route path="/signUp" element={<SignUp/>}/>
                  <Route path="/signIn" element={<SignIn/>}/>
            </Routes>

     </Router>
       
    </>
  )
}

export default App
