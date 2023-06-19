import React, { useContext } from 'react';
import { StateContext } from "./globalVariable";
import Navbar from './components/Navbar';
import NavbarLoggedIn from './components/NavbarLoggedIn';

export default function NavbarF() {
    const { loggedIn, setLoggedIn} = useContext(StateContext);
    console.log("LoggedStatus :"+loggedIn);
    if(loggedIn==false){
        return Navbar();
    }
    else{

        return NavbarLoggedIn();
    }
}
