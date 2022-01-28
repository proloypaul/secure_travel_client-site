import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import AuthProvider from './Components/Contex/AuthProvider';
import PrivateRouter from './Components/Contex/PrivateRouter';
import Dashboard from './Components/Dashboard/Dashboard';
import MakeAnAdmin from './Components/Dashboard/MakeAnAdmin/MakeAnAdmin';
import OwnExperience from './Components/Dashboard/OwnExperience/OwnExperience';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';
import TrevelerExpDetails from './Components/TravelerExpDetails/TrevelerExpDetails';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home></Home>}></Route>
          <Route path={'/home'} element={<Home></Home>}></Route>
          <Route path={'/blogs'} element={<Blogs></Blogs>}></Route>
          <Route path={'/travelerExpDetails/:Id'} element={<PrivateRouter><TrevelerExpDetails></TrevelerExpDetails></PrivateRouter>}></Route>
          <Route path={'/dashboard'} element={<PrivateRouter><Dashboard></Dashboard></PrivateRouter>}></Route>
          <Route path={'/ownExperience'} element={<OwnExperience></OwnExperience>}></Route>
          <Route path={'/makeAnAdmin'} element={<MakeAnAdmin></MakeAnAdmin>}></Route>
          <Route path={'/login'} element={<Login></Login>}></Route>
          <Route path={'/register'} element={<Register></Register>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
