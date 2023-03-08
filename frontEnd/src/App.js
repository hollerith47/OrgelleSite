import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import NavBarComponent from "./components/header/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/loader/Loader";
function App() {
  
  return (
      <Router>
          <Loader/>
          <NavBarComponent/>
          <Routes>
            {/*<Route path="/" element={<Login/>}/>*/}
              <Route path="/" element={<Home/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>
          {/*<Footer/>*/}
      </Router>
  );
}

export default App;


