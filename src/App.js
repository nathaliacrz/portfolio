import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<About />} />  
          <Route path="contato" element={<Contact />} />  
          <Route path="portfolio" element={<Portfolio />} />  
          <Route path="dashboard" element={<Dashboard />} />  
        </Route>

      </Routes>
    </>
  );
}

export default App;
