import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Comp from './components/Comp'
import Addperson from './components/Addperson'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Comp/>
        <Addperson/>
      </header>
    </div>
  );
}

export default App;
