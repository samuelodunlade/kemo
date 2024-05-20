// import logo from './logo.svg';
import './App.css';
import  Header from "./components/Header";
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import {Student} from "./components/Student";
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';

function App() {
  let username = "gentlesammy"
  let age = 18;

  let besties = ["Fried Rice", "Parfait", "Turkey", "jellows"];

  const students = [
    {
      sn : 1,
      name: "Sule Baba",
      phone: "08099",
      email: "sule@ymail.com"
    },
    {
      sn : 2,
      name: "Omosare Omogbagi",
      phone: "09099",
      email: "sare@gmail.com"
    },
    {
      sn : 3,
      name: "Amos Pullah",
      phone: "234543",
      email: "ampu@yahoo.com"
    }
  ];

  let isLoggedIn = false;

    return (
      <div className='App'>
        <Header />
        {
          isLoggedIn ? <Dashboard/> : <Login/>
        }
        <Content xyz={username} age={age} best={besties} />
        <Student students={students} />
        <Footer/>
      </div>
    )
 

}

export default App;
