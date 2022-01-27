import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';
import TrevelerExpDetails from './Components/TravelerExpDetails/TrevelerExpDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home></Home>}></Route>
          <Route path={'/home'} element={<Home></Home>}></Route>
          <Route path={'/blogs'} element={<Blogs></Blogs>}></Route>
          <Route path={'/travelerExpDetails/:Id'} element={<TrevelerExpDetails></TrevelerExpDetails>}></Route>
          <Route path={'/login'} element={<Login></Login>}></Route>
          <Route path={'/register'} element={<Register></Register>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
