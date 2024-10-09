import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Fronted/Layout';
import Home from './Fronted/Home';
import Cricketers from './Fronted/GetAllCricketers';
import AddCricketer from './Fronted/AddCricketer';
import DeleteCricketer from './Fronted/DeleteCricketer';
import EditCricketer from './Fronted/EditCricketer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/cricketers' element={<Cricketers />}></Route>
          <Route path='/cricketers/add' element={<AddCricketer />}></Route>
          <Route path='/cricketers/delete/:_id' element={<DeleteCricketer />}></Route>
          <Route path='/cricketers/edit/:_id' element={<EditCricketer />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
