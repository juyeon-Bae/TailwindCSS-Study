import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TailwindBasic from './pages/Tailwind_Basic';
import Container from './02_layout/container';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<TailwindBasic />} /> */}
          <Route path="/" element={<Container />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
