import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import New from './components/New';
import View from './components/View';

function App() {
  return (
    <div className="App">
     {/* <Navbar></Navbar> */}
     {/* <Routes>
      <Route path='/' element={<New/>} />
      <Route path='/add' element={<View/>} />
     </Routes> */}
     <View></View>
    </div>
  );
}

export default App;
