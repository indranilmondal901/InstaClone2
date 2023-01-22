import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import{BrowserRouter,Routes,Route} from "react-router-dom"

import Landingpage from "./component/landingpage/landingPage";
// import Navbar from './component/navbar/navbar';
import PostPage from './component/postPage/postPage';
import ViewPage from './component/viewPage/viewPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/post' element={<PostPage/>}/>
      <Route path='/view' element={<ViewPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
