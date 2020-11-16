import React from 'react';  
import {Router} from '@reach/router';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Lands from './Components/Landing/Landing'
import Head from './Components/Header/Header'
import DashB from './Components/Dashboard/Dash'
import Requests from './Components/Request/Request'
function App() {
  return (
    <div>
      <HeaderPage></HeaderPage>
      <Router>
        <LandingPage path='/'></LandingPage>
        <HeaderPage path='/header'></HeaderPage>
        <DB path='/dashboard'></DB>
        <RQ path='/request'></RQ>
      </Router>
      {/* <FooterPage></FooterPage> */}
    </div>
  );
}
function LandingPage(){
  return <Lands></Lands>
}
// function FooterPage(){
//   return <Foot></Foot>
// }
function HeaderPage(){
  return <Head></Head>
}
function DB(){
  return <DashB></DashB>
}
function RQ(){
  return <Requests></Requests>
}

export default App;
