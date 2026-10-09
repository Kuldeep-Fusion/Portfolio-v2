import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Home';
import SingleProject from './pages/SingleProject';
import NotFound from './NotFound';




function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='project/:id' element={<SingleProject />} />
          <Route path='*' element={<NotFound />} />
        </Routes>


      </BrowserRouter>

    </>
  );
}

export default App;
