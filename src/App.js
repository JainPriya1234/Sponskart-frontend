import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Register from './Register';
import Signin from './Signin';
function App() {
  return (
       <Router>
        <Routes>
          <Route exact path = '/' Component={Register}/>
          <Route exact path = '/signin' Component={Signin}/>
        </Routes>
       </Router>
  );
}

export default App;

