import logo from './logo.svg';
import './App.css';

import ClippedDrawer from './components/ClippedDrawer';
import Typography from '@mui/material/Typography';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home.js';
import MonthlyReport from './MonthlyReport.js';



export default function App() {
  return (
    <div className="App">
      <ClippedDrawer>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/report">
                <Route path="monthly" element={<MonthlyReport />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ClippedDrawer>
    </div>
  );
}

