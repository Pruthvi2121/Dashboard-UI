
import { Card } from './Components/Card';
import { Dashboard } from './Components/Dashboard';
import { HelloWorld } from './Components/HelloWorld';
import Layout from './Components/Layout';
import './index.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>

      <Route path='/' element={<Layout><Dashboard/></Layout>}/> 
  </Routes>
  );
}

export default App;
