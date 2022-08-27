import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import About from './components/About';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Layout />}/>
          <Route index element={<Home />} />
          <Route path="sobre" element={<About />} >  
        </Route>

      </Routes>
    </>
  );
}

export default App;
