import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import {PageWrapper} from './utils/style/atoms'
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Error from './pages/Error/error404';
import Home from './pages/Home/home';
import reportWebVitals from './reportWebVitals';
import Annonce from './pages/Annonce/annonce';
import About from './pages/About/about';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PageWrapper>
        <Header />
        <Routes>
          {/* <Route exact path="/kasa" element={<Home/>}></Route>
          <Route path="/kasa/annonce/:annonceId" element={<Annonce/>}></Route>
          <Route path="/kasa/about" element={<About/>}></Route>
          <Route path="/kasa/404" element={<Error/>}/>
          <Route path="*" element={<Navigate replace to="/kasa/404" />} /> */}
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/annonce/:annonceId" element={<Annonce/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/404" element={<Error/>}/>
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      
        <Footer />
        
      </PageWrapper>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
