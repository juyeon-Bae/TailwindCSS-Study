import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TailwindBasic from './pages/Tailwind_Basic';
import Layout from './pages/Layout';
import Responsive from './pages/Responsive';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<TailwindBasic />} /> */}
          <Route path="/" element={<Layout />} />
          {/* <Route path="/" element={<Responsive />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
