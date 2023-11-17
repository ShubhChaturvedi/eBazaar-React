import './App.css';
import WrapContext from './context/WrapContext';
import Aboutus from './pages/Aboutus';
import Cart from './pages/Cart';
import Contactus from './pages/Contactus';
import Home from './pages/Home';
import Login from './pages/Login';
import Shop from './pages/Shop';
import Signup from './pages/Signup';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <WrapContext>
      <Router>
        <Routes>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </WrapContext>
    
  );
}

export default App;
