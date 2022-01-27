import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home></Home>}></Route>
          <Route path={'/home'} element={<Home></Home>}></Route>
          <Route path={'/login'} element={<Login></Login>}></Route>
          <Route path={'/register'} element={<Register></Register>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
