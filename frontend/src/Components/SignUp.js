import React,{useState} from "react";
import { NavLink } from "react-router-dom";

export function SignUp(){

const [udata, setUdata] = useState({
    email :"",
    password :"",
    cpassword :""
})

// const history = useNavigate();
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

const senddata = async (e) => {
    e.preventDefault();

    const { email, password,cpassword } = udata;
    try {
        const res = await fetch("http://localhost:8080/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,  password, cpassword
            })
        });
        const data = await res.json();
            console.log(data);
            // history("/Login/Sign-In", {state: {id:email}})

            
        } catch (error) {
            console.log("Registration error" + error.message);
        }
    }

    return(
        <div>
                <div className="container">
                <form method="POST">
                    
                    <h3 className="heading1">Create Account</h3>
                <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control"  name = "email" value={udata.email} id="email" onChange={adddata}
                                 />
                </div>
                <div className="mb-3">
                <label  className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={udata.password} id="password" onChange={adddata} />
                </div>
                <div className="mb-3">
                <label  className="form-label">Re-Password</label>
                <input type="password" className="form-control" name="cpassword" value={udata.cpassword} id="password" onChange={adddata} />
                </div>
                <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Check me out</label>
                </div>
               <button type="submit" className="btn btn-primary" onClick={senddata}>SIGNUP</button>
               <NavLink to="/"><button type="submit" className="btn btn-primary" >Continue</button></NavLink>

                <p>Already if you have an account</p>
               <NavLink to="/Login"> <button type="submit" className="btn btn-primary">LOGIN</button></NavLink>
               
                </form>
                </div>
        </div>
        
    )
}