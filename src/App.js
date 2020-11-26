import React from "react";
import { Router } from "@reach/router";
import {Route,Switch} from 'react-router-dom'
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./Components/Landing/Landing";
import Head from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dash";
import Requests from "./Components/Request/Request";
import Donation from "./Components/Donate/Donate";
import UserProfile from "./Components/Profile/Profile";
import AllReq from "./Components/AllRequest/AllRequest";
import MoreButton from "./Components/More/More";
import MoMo from "./Components/MoreMore/MoreMore";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import NavbarPage from './Components/Header1/Header1'
// import BuMe from './Components/BurgerMenu/App'
import Axios from 'axios'
import ProtectedRoute from './Components/ProtectedRoute/protectedRoute'
import NotSecureRoute from './Components/ProtectedRoute/noSecureRoute'

Axios.defaults.baseURL='https://online-blood-bank-sys.herokuapp.com'


function App() {
  return (
    <div>
      {/* <HeaderPage></HeaderPage> */}
      <Head2 style={{position:"fixed"}}></Head2>
      <Router>
        <HeaderPage path="/header"></HeaderPage>
        <RQ path="/request"></RQ>
        <DonateBlood path="/donate"></DonateBlood>
        <UProfile path="/profile"></UProfile>
        <AR path="/allrequest"></AR>
        <MB path="/more"></MB>
        <MM path="/moremore"></MM>
        <Head2 path='/mHeader'></Head2>
        {/* <Burger path='/mHeader'></Burger> */}
      </Router>
      {/* <FooterPage></FooterPage> */}
      <Switch>
        <Route path='/'  component={LandingPage} exact/>
        <NotSecureRoute path='/login' component={Login} exact pathname='/dashboard' />
        <NotSecureRoute path='/signup' component={Signup} exact pathname='/dashboard' />
        <ProtectedRoute path='/dashboard' component={Dashboard} exact pathname='/login'/>
      </Switch>
    </div>
  );
}

// function FooterPage(){
//   return <Foot></Foot>
// }
function HeaderPage() {
  return <Head></Head>;
}

function RQ() {
  return <Requests></Requests>;
}
function DonateBlood() {
  return <Donation></Donation>;
}
function UProfile() {
  return <UserProfile></UserProfile>;
}
function AR() {
  return <AllReq></AllReq>;
}
function MB() {
  return <MoreButton></MoreButton>;
}
function MM() {
  return <MoMo></MoMo>;
}

function Head2(){
  return <NavbarPage></NavbarPage>
}
// function Burger(){
//   return <BuMe></BuMe>
// }

export default App;
