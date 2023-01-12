import React from "react";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Signin from "./signin/Signin.js";
import Signup from "./signup/Signup.js";
import Profile from "./profile/Profile.js";
import Chat from "./chat/Chat.js";
import "./App.css";
import 'antd/dist/reset.css';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

export const AppContext = React.createContext();
const App = (props) => {
  return (
      <RecoilRoot>
          <div className="App">
              <Routes>
                  <Route path='/' element={<Profile {...props} />}></Route>
                  <Route path='/login' element={<Signin {...props} />}></Route>
                  <Route path='/signup' element={<Signup {...props} />}></Route>
                  <Route path='/chat' element={<Chat/>}></Route>
              </Routes>
          </div>
      </RecoilRoot>
  );
};

export default App;