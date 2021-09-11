import {BrowserRouter as Router} from 'react-router-dom'
import Footer from './components/Footer';

import Header from './components/Header'
import Routing from './components/Routing'

import './styles/App.scss'

function App() {
  return (
    <Router>  
      <Header />
      <Routing />
      <Footer />
    </Router>
  );
}

export default App;
