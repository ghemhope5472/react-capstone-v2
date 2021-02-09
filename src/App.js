import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Topbar from './components/Topbar'

function App() {
  return (
    <Router>
        <Topbar />
        <Navbar />
        <Carousel />
    </Router>
    
  );
}

export default App;
