import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import Layout from './componets/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Picture from './pages/Picture';
  
function App() {
return (
    <Router>
      <Routes>
        <Route exact path="/picture-web" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About/></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/picture/:id" element={<Layout><Picture /></Layout>} />
      </Routes>
    </Router>
);
}
  
export default App;