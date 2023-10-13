
import { HelloWorld } from './Components/HelloWorld';
import Layout from './Components/Layout';
import './index.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout><HelloWorld/></Layout>}/> 
  </Routes>
  );
}

export default App;
