import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TailwindBasic from './pages/Tailwind_Basic';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TailwindBasic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
