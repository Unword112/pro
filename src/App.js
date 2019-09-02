import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import first from './component/first';
import Body from './component/Body';
import Footer from './component/Footer';
import T1 from './research/T1';
import T2 from './research/T2';
import T3 from './research/T3';
import introduc from './research/introduc';
import res from './component/res';

function App() {
  return (
    <div className="container">
      <Header />
          
        <Route exact path="/" component={Body} />
        <Route path="/first" component={first} />
        <Route path="/t1" component={T1} />
        <Route path="/t2" component={T2} />
        <Route path="/t3" component={T3} />
        <Route path="/introduc" component={introduc} />
        <Route path="/res" component={res} />

      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
