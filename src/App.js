import React from 'react';  
import {Router} from '@reach/router';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Lands from './Components/Landing/Landing'
import Head from './Components/Header/Header'
import DashB from './Components/Dashboard/Dash'
import Requests from './Components/Request/Request'
import Donation from './Components/Donate/Donate'
import UserProfile from './Components/Profile/Profile'
import AllReq from './Components/AllRequest/AllRequest'
import MoreButton from './Components/More/More'
import MoMo from './Components/MoreMore/MoreMore'
import Log from './Components/Login/Login'
function App() {
  return (
    <div>
      <HeaderPage></HeaderPage>
      <Router>
        <LandingPage path='/'></LandingPage>
        <HeaderPage path='/header'></HeaderPage>
        <DB path='/dashboard'></DB>
        <RQ path='/request'></RQ>
        <DonateBlood path='/donate'></DonateBlood>
        <UProfile path='/profile'></UProfile>
        <AR path='/allrequest'></AR>
        <MB path='/more'></MB>
        <MM path="/moremore"></MM>
        <Lgin path='/login'></Lgin>
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
function DonateBlood(){
  return <Donation></Donation>
}
function UProfile(){
  return <UserProfile></UserProfile>
}
function AR(){
  return <AllReq></AllReq>
}
function MB(){
  return <MoreButton></MoreButton>
}
function MM(){
  return <MoMo></MoMo>
}
function Lgin(){
  return <Log></Log>
}

export default App;
