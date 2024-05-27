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
import Event from './Components/Pages/Event';
import Service from './Components/Pages/Service';
import Profile from './Components/Pages/Profile';

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
                  <Route path="/event" element={<Event/>}/>
                  <Route path="/service" element={<Service/>}/>
                  <Route path="/profile" element={<Profile/>}/>


                  <Route path="/signUp" element={<SignUp/>}/>
                  <Route path="/signIn" element={<SignIn/>}/>
            </Routes>

     </Router>
       
    </>
  )
}

export default App
