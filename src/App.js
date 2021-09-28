import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Navigationbar from './components/Navbar';
import Footer from './components/Footer';

import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <Navigationbar />

      <Route path="/" component={Home} exact />
      <Route path="/about" component={AboutUs} exact />
      <Footer />
    </Router>
  );
}

export default App;
