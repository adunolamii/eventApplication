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
import AdminEntertainment from './Admin/AdminEntertainment';
import Entertainment from './Components/Entertainment';
import EventVenues from './Components/Pages/EventVenues';
import AdminEventVenues from './Admin/AdminEventVenues';
import MyProfile from './Components/Pages/MyProfile';
import Location from './Components/Location'
import AdminLocation from './Admin/AdminLocation';
import ChangePassword from './Components/ChangePassword';
import AdminDj from './Admin/AdminDj';
import Dj from './Components/Dj';
import Mc from './Components/Mc';
import AdminMc from './Admin/AdminMc';
import Comedian from './Components/Comedian';
import AdminComedian from './Admin/AdminComedian';
import Dancer from './Components/Dancer';
import AdminDancer from './Admin/AdminDancer';
import Music from './Components/Music';
import AdminMusic from './Admin/AdminMusic';
import  Sound  from './Components/Sound';
import  AdminSound  from './Admin/adminSound';

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

                  <Route path="/adminentertainment" element={<AdminEntertainment/>}/>   
                  <Route path="/entertainment" element={<Entertainment/>}/>

                  <Route path="/adminEventVenues" element={<AdminEventVenues/>}/>   
                  <Route path="/eventVenues" element={<EventVenues/>}/>
                  <Route path="/myProfile" element={<MyProfile/>}/>
                  <Route path="/changePassword" element={<ChangePassword/>}/>
                 
                  <Route path="/location" element={<Location/>}/>
                  <Route path="/adminLocation" element={<AdminLocation/>}/>

                  <Route path="/dj" element={<Dj/>}/>
                  <Route path="/adminDj" element={<AdminDj/>}/>

                  <Route path="/mc" element={<Mc/>}/>
                  <Route path="/adminMc" element={<AdminMc/>}/>

                  <Route path="/comedian" element={<Comedian/>}/>
                  <Route path="/admincomedian" element={<AdminComedian/>}/>
                  

                  <Route path="/dancer" element={<Dancer/>}/>
                  <Route path="/admindancer" element={<AdminDancer/>}/>

                  <Route path="/music" element={<Music/>}/>
                  <Route path="/adminmusic" element={<AdminMusic/>}/>

                  <Route path="/sound" element={<Sound/>}/>
                  <Route path="/adminsound" element={<AdminSound/>}/>

       
                  <Route path="/signUp" element={<SignUp/>}/>
                  <Route path="/signIn" element={<SignIn/>}/>
            </Routes>

     </Router>
       
    </>
  )
}

export default App
