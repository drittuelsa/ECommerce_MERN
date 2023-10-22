import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {BsSearch, BsCartFill,BsTrash, BsTrashFill} from "react-icons/bs" 
import Logo from './logo1.png';
import {GrClose} from "react-icons/gr";
import { useSelector,useDispatch } from "react-redux";
import { SignIn } from "../SignIn";
import { DeleteCart } from "./Redux/action";


export function Header(){

    const dispatch = useDispatch();
    const location = useLocation();
    
    const getcarts = useSelector((state) =>{
      return state.carts
  })

  const handleDel =(id)=>{
    dispatch(DeleteCart(id))
}

    return(
        <div>
           <header className="header-top">
            <div className="container">
                <div className="row justify-content-between row1">
                    <div className="col-3 d-flex ">
                  <NavLink to="/"> <img src={Logo} alt="" width={50} height={50} /> <span className="logo">SkinCare</span> </NavLink>     
                    </div>


                    <div className="col-lg-6 d-flex">
                    <div className="input-group box1">
                        <input type="text" className="form-control" placeholder="Search Product"/>
                        <span className="input-group-text"><BsSearch/></span>
                     </div>
                    </div>

                    <div className="col-lg-3 d-flex">
                    <div className="cart">
                        <div className="dropdown">
                      <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                         <BsCartFill style={{fontSize:25, cursor:"pointer"}}/>
                             <span className="badge">{getcarts.length}</span> 
                        </button>
                        {
              getcarts.length ?
              <div className="dropdown-menu">
                <table className="table">
                  <tr className="text-center">
                    <th>Photo</th>
                    <th>Details</th>
                  </tr>
                  {
                      getcarts.map((item) =>{
                        return(
                          <>
                        <tr>
                          <td>
                            <NavLink to={`Buy/${item.id}`}><img src={item.imagesURL} style={{width:50,height:70}} alt="product"/></NavLink></td>
                          <td>{item.category}<br/>
                          <p>Price : {item.price}</p>
                          {/* <p style={{fontSize:20, color:"red"}}><BsTrash/></p> */}
                          </td>
                          <td onClick={()=>handleDel(item.id)}><p style={{fontSize:20, color:"red"}}><BsTrashFill/></p></td>
                        </tr>
                        </>
                        )
                      })
                  }
                  {/* <p className="m-3">Total : ${price} </p> */}
                </table>
              </div>:
              <div className="dropdown-menu">
              <GrClose style={{position:"absolute",right:8}}/>
               <p className="m-2">Your cart is empty</p>
            </div>
            }
                        </div>
                        </div> 
                    <div className="login">
                    <NavLink to= "SignUp" ><button className="login btn btn-light head2"><b>SIGNUP</b></button></NavLink>
                    </div> 
                    <div className="Account">
                    <button  style={{cursor:"pointer"}} className="btn btn-white text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     <b>Account</b>  </button>
                    <div className="dropdown-menu" >
                    <p class="dropdown-item">Home</p>
                    <p class="dropdown-item">My Order</p>
                    <p class="dropdown-item">Logout</p>
                    </div> 
                    </div>  
                    </div>  
                    {/* <div><SignIn/></div>     */}
                </div>
                
            </div>
           </header>


        </div>
    )
}