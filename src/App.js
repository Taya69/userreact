import 'materialize-css'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './router'

function App() {
  const routes = useRoutes()

  return (
    <Router>
      <div className="App" className='container'>
       {routes}
      </div>
    </Router>
  );
}

export default App;
