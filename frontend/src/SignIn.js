import React from "react";
import {  useLocation } from "react-router";


export function SignIn(){

    const location = useLocation();
    return(
        <div>
         Welcome {location.state.id}
        </div>
    )
}