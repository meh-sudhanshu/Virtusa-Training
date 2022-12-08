import Navbar from './components/Navbar/Navbar';

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Resources from './components/Resources';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Navbar/>}/>
            <Route path='/resources' element={<Resources/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
