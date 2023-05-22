import React, { createContext, useState } from 'react';
import Home from './Components/Home/Home';
import CreateUser from './Components/CreateUser/CreateUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdedBox from './Components/UpdedBox/UpdedBox';
import NavScrollExample from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import SharchResult from './Components/SharchResult/SharchResult';
import MainPage from './Components/MainPage/MainPage';
import LoginForm from './Components/LoginForm/LoginForm';
import Logout from './Components/Logout/Logout';
import PrivetRouter from './Components/PrivetRouter/PrivetRouter';

export const Catagori = createContext();

const App = () => {
  const [signin, isSignin] = useState(false)
  return (
    <div>
      <Catagori.Provider value={[signin, isSignin]}>
        <BrowserRouter>
          <NavScrollExample></NavScrollExample>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<MainPage></MainPage>}></Route>
            <Route path='/createpage' element={<PrivetRouter isSignin={signin}><CreateUser></CreateUser></PrivetRouter>}></Route>
            <Route path='/upded' element={<UpdedBox></UpdedBox>}></Route>
            <Route path='/show' element={<SharchResult></SharchResult>}></Route>
            <Route path='/login' element={<LoginForm></LoginForm>}></Route>
            <Route path='/logout' element={<Logout></Logout>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </Catagori.Provider>
    </div>
  );
};

export default App;