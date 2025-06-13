import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TailwindBasic from './pages/Tailwind_Basic';
import Layout from './pages/Layout';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<TailwindBasic />} /> */}
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
