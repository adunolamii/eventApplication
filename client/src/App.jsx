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
import Admin2 from './Admin/Admin2';
import AdminEvent from './Admin/AdminEvent';
import AdminServices from './Admin/AdminServices';
import AdminUpcoming from './Admin/AdminUpcoming';
import UpcomingRoutes from './Components/UpcomingRoutes';
import AdminDiscover from './Admin/AdminDiscover';
import DiscoverRoutes from './Components/Pages/DiscoverRoutes';



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
                  <Route path="/admin2" element={<Admin2/>}/>
                  <Route path="/adminEvent" element={<AdminEvent/>}/>
                  <Route path="/adminServices" element={<AdminServices/>}/>
                  <Route path="/event" element={<Event/>}/>
                  <Route path="/service" element={<Service/>}/>
                  <Route path="/profile" element={<Profile/>}/>

                  <Route path="/adminUpcoming" element={<AdminUpcoming/>}/>   
                  <Route path="/upcomingRoutes" element={<UpcomingRoutes/>}/>

                  <Route path="/admindiscover" element={<AdminDiscover/>}/>   
                  <Route path="/discoverRoutes" element={<DiscoverRoutes/>}/>



                  <Route path="/signUp" element={<SignUp/>}/>
                  <Route path="/signIn" element={<SignIn/>}/>
            </Routes>

     </Router>
       
    </>
  )
}

export default App
