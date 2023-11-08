import "./App.css"
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/home/profile/Profile";
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className='blur' style={{ top: '-18%', right: '0' }}></div>
      <div className='blur' style={{ top: '36%', left: '-8rem' }}></div>
      {/* <Home /> */}
      {/* <Profile /> */}
      {/* <Auth /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/profile' element={< Profile />}></Route>
          <Route exact path='/auth' element={< Auth />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
