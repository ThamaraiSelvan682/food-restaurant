import './App.css';
import Contact from './sections/contact';
import Features from './sections/features';
import Home from './sections/home';
import Menu from './sections/menu';

import Navbar from './sections/navbar';
import Pricing from './sections/pricing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Menu />
      <Features />
      <Pricing />
      <Contact />

      
      
     
       
    </div>
  );
}

export default App;
