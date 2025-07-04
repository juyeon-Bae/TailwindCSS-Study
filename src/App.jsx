import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import TailwindBasic from './pages/Tailwind_Basic';
import Layout from './pages/Layout';
import Transition from './pages/Transition';
import Responsive from './pages/Responsive';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<TailwindBasic />} /> */}
          {/* <Route path="/" element={<Layout />} /> */}
          <Route path="/" element={<Transition />} />
          {/* <Route path="/" element={<Responsive />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
