import './App.css';
import Heading from "./Component/Heading";
import List from "./Component/post/List";
import Upload from "./Component/post/Upload";
import Detail from "./Component/post/Detail";
import Edit from "./Component/post/Edit";
import {Routes, Route} from "react-router-dom";

import React from "react";

function App() {

  return (
     <>
         <Heading/>
         <Routes>
             <Route path="/" element={<List/>} />
             <Route path="/Upload" element={<Upload/>} />
             <Route path="/post/:postNum" element={<Detail/>} />
             <Route path="/edit/:postNum" element={<Edit/>} />
         </Routes>
     </>
  );
}

export default App;
