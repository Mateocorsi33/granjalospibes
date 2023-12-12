import './App.css';
import "./index.css";
import 'animate.css';
import Home from './components/pages/Home';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Analytics />
      <Home/>
    </>
  );
}

export default App;
