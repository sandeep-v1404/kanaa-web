import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Navigationbar from './components/Navbar';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import Admission from './pages/Admission';
import ScrollToTop from './utils/ScrollToTop';
import Activities from './pages/Activities';
import Activity from './pages/Activity';
import About from './components/About';
import JoinUs from './components/JoinUs';

function App() {
  return (
    <Router>
      <Navigationbar />
      <ScrollToTop />
      <Route path="/" component={Home} exact />
      <Route path="/admission" component={Admission} exact />
      <Route path="/activities" component={Activities} exact />
      <Route path="/activities/:id" component={Activity} exact />
      <Route path="/about" component={About} exact />
      <Route path="/join-now" component={JoinUs} exact />
      <Footer />
    </Router>
  );
}

export default App;
