import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Navigationbar from './components/Navbar';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './components/AboutUs';
import Admission from './pages/Admission';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
      <Navigationbar />
      <ScrollToTop />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={AboutUs} exact />
      <Route path="/admission" component={Admission} exact />
      <Footer />
    </Router>
  );
}

export default App;
