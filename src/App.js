import {useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

const App = () => {
  //how you initialize JS from Materialize
  useEffect(() => {
    M.autoInit()
  })
  return (
    <div className="App">
      Into the Abysssssssss
    </div>
  );
}

export default App;
