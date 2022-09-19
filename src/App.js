import logo from './logo.svg';
import './App.css';

import LeftDrawer from './components/LeftDrawer';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

import Login from './pages/Login.js';
import Layout from './pages/Layout.js';
import Home from './pages/Home.js';
import New from './pages/New.js';
import DataTable from './pages/DataTable.js';
import MonthlyReport from './pages/MonthlyReport.js';
import YearlyReport from './pages/YearlyReport.js';
import Simulate from './pages/Simulate.js';


export default function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="index" element={<Home />} />
            <Route path="new" element={<New />} />
            <Route path="all" element={<DataTable />} />
            <Route path="report">
              <Route path="month" element={<MonthlyReport />} />
              <Route path="year" element={<YearlyReport />} />
            </Route>
            <Route path="simulate" element={<Simulate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

