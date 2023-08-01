import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Register from './Register';
import Signin from './Signin';
import Forget from './Forget';
function App() {
  return (
       <Router>
        <Routes>
          <Route exact path = '/' Component={Register}/>
          <Route exact path = '/signin' Component={Signin}/>
          <Route exact path = '/forget' Component={Forget}/>
        </Routes>
       </Router>
  );
}

export default App;

