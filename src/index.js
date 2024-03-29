import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/component/css/tooplate-kool-form-pack.css';
import Header from '../src/component/pages/Header';
import Home from '../src/component/pages/Home';
import About from '../src/component/pages/About';
import Contact from '../src/component/pages/Contact';
import Skills from '../src/component/pages/Skills';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Skills />
    <Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
