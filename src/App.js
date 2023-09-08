import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
       <Route path='/' element={<Layout/>}>
         <Route index element={<Home/>}></Route>
       </Route>
    </Routes>
  );
}

export default App;
