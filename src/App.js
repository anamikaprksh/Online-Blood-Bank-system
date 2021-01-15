import React,{useEffect,useState} from "react";
import { Router } from "@reach/router";
import {Route,Switch} from 'react-router-dom'
import "./App.css";

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
import TemporaryDrawer from './Components/Drawer/Drawer'
import Head3 from './Components/Header3/Header3'
import { createMuiTheme } from "@material-ui/core/styles";
import Axios from 'axios'
import ProtectedRoute from './Components/ProtectedRoute/protectedRoute'
import NotSecureRoute from './Components/ProtectedRoute/noSecureRoute'
import UserUpdate from './Components/Update/Update'
import Mymore from "./Components/myreqmore/myreqmore";
import MyDonation from "./Components/MyDonation/MyDonation";
Axios.defaults.baseURL='https://online-blood-bank-sys.herokuapp.com'

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#364652",
    },
    secondary: {
      main: "#364652",
    },
    action:{
      main:"#00FF00"
    },
  },
});

function App() {
  return (
    <div>
      {/* <HeaderPage></HeaderPage> */}
      {/* <Head2 style={{position:"fixed"}}></Head2> */}
      <NavbarPage/>
      <Router>
        <HeaderPage path="/header"></HeaderPage>
        <MB path="/more"></MB>
        <MM path="/moremore"></MM>
        <Head2 path='/mHeader'></Head2>
        <Draw path='/drawer'></Draw>
        <MyMoreReq path='/myrequestmore'></MyMoreReq>
        {/* <Burger path='/mHeader'></Burger> */}
      </Router>
      {/* <FooterPage></FooterPage> */}
      <Switch>
        <Route path='/'  component={LandingPage} exact/>
        <NotSecureRoute path='/login' component={Login} exact pathname='/dashboard' />
        <NotSecureRoute path='/signup' component={Signup} exact pathname='/dashboard' />
        <ProtectedRoute path='/dashboard' component={Dashboard} exact pathname='/login'/>
        <ProtectedRoute path='/profile' component={UserProfile} exact pathname='/login'/>
        <ProtectedRoute path='/donate' component={Donation} exact pathname='/login'/>
        <ProtectedRoute path='/update' component={UserUpdate} exact pathname='/login'/>
        <ProtectedRoute path='/request' component={Requests} exact pathname='/login'/>
        <ProtectedRoute path='/mydonation' component={MyDonation} exact pathname='/login' />
        <ProtectedRoute path='/allrequest' component={AllReq} exact pathname='/login' />

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

function MB() {
  return <MoreButton></MoreButton>;
}
function MM() {
  return <MoMo></MoMo>;
}

function Head2(){
  return <NavbarPage></NavbarPage>
}
function Draw(){
  return <TemporaryDrawer></TemporaryDrawer>
}
function MyMoreReq(){
  return <Mymore></Mymore>
}


export default App;
