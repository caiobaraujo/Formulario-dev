import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FormStep01 } from './pages/FormStep01';
import { FormStep02 } from './pages/FormStep02';
import { FormStep03 } from './pages/FormStep03';
import { Final } from './pages/Final';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormStep01 />} />
        <Route path="/step02" element={<FormStep02 />} />
        <Route path="step03" element={<FormStep03 />} />
        <Route path="final" element={<Final />} />
      </Routes>
    </BrowserRouter>
  );
};
