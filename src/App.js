
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Part12 from './Components/Part12';
import Part11 from './Components/Part11';




function App() {
  
  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/Modues" element={<Part12 />}>
        </Route>  
          <Route path="/Whats_new" element={<Part11 />}>
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;