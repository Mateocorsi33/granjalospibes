import './App.css';
import PaginaPrincipal from './Components/PaginaPrincipal';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <PaginaPrincipal>
      <Analytics />
    </PaginaPrincipal>
  );
}

export default App;
