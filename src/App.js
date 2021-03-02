import React,{useState} from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Basket from "./components/Basket";
import store from "./store";
import "./App.css";
import LoginForm from "./components/LoginForm";
import {BrowserRouter } from 'react-router-dom';
// import Route from 'react-dom/route';

function App(){
  const adminUser = {
    email:"admin@test.com",
    password:"admin123"
  }

  const [user, setUser]= useState({name:"", email:""});
  const [error, ]= useState("");

  const Login = details => {
    console.log(details);

    if(details.email=== adminUser.email && details.password ===adminUser.password){
      console.log('logged in');
      setUser(
        {
          name: details.name,
          email: details.email
        }
      )
    }else{
      console.log('details do not match');
    }
  }

  const Logout = () =>{
    setUser(
      {
        name: "",
        email: ""
      }
    );
  }

    return (
      <>
      {(user.email !=="") ? (
         <Provider store={store}>
         <div className="container">
          <div className="row">
            <div className="col-md-9">
            <h1>Shopping Cart Application with ReactJS</h1>
            </div>
            <div className="col-md-3">
            <button className="btn btn-danger" style={{marginTop:"2rem"}} onClick={Logout}>lOGOUT</button>
            </div>
          </div>
           <hr />
           <div className="row">
             <div className="col-md-9">
               {/* <Filter /> */}
               <Products />
             </div>
             <div className="col-md-3">
               <BrowserRouter>
               {
                 (user.email !=="")?(<Basket />):(
                  <LoginForm Login={Login} error={error}/>
                 )
               }
               
               </BrowserRouter>
             </div>
           </div>
         </div>
       </Provider>
      ): (
       <LoginForm Login={Login} error={error}/>
      )}
     
      </>
    );
}

export default App;
