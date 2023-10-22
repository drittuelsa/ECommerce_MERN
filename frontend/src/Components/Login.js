import React,{useState} from "react";
import { NavLink } from "react-router-dom";


export function Login(){

    const [udata, setUdata] = useState({
        email :"",
        password :""
    })
    
    const adddata = (e) => {
        const { name, value } = e.target;
        // console.log(name,value);
    
        setUdata((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    };


    return(

        <div>        
                <form className="container" >
                    <h3 className="heading1">Login</h3>
                    <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control"  name = "email" value={udata.email} id="email" onChange={adddata}
                                 />
                </div>
                <div className="mb-3">
                <label  className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={udata.password} id="password" onChange={adddata} />
                </div>
                <div class="mb-3 form-check">
                <label className="form-check-label">Check me out</label>
                </div>
               <NavLink to="/" > <button type="submit" className="btn btn-primary">Continue</button> </NavLink>
                </form>
            
        </div>
    )
}