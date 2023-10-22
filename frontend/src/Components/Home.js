import React ,{useEffect} from "react";
// import { products } from "./Productdata";
import {BiStar } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts, AddCart } from "./Redux/action";

export function Home(){

    const productdata = useSelector((state) =>{
        return state.product
    })

    console.log(productdata)
    
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(GetProducts(productdata))
    },[dispatch])

    const send = (e) =>{
    //    console.log(e)

    dispatch(AddCart(e))
    }

    return(
        <div>
            <div className="container home">
                <div className="row d-flex">
               <div className="col-2">
                <div className="left-top-1">
                <button  style={{cursor:"pointer"}} className="btn btn-white text-dark dropdown-toggle btn1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Shop by Concern </button>
                    <div className="dropdown-menu" >
                    <p className="dropdown-item">one</p>
                    <p className="dropdown-item">two</p>
                    <p className="dropdown-item">three</p>
                    </div> 
                    <button  style={{cursor:"pointer"}} className="btn btn-white text-dark dropdown-toggle btn1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Shop by category </button>
                     <button  style={{cursor:"pointer"}} className="btn btn-white text-dark dropdown-toggle btn1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Shop by product </button>
                     <button  style={{cursor:"pointer"}} className="btn btn-white text-dark dropdown-toggle btn1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Shop All </button>
                </div>

                <div className="left-top-2">
                <button  style={{cursor:"pointer"}} className="btn btn-white text-dark dropdown-toggle btn2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Sort </button>
                </div>

                <div className="left-top-3">
               <input type="range" min={0}  max={1000} name="Price" className="btn3 "/>
               <label>Price </label>

               <input type="range" min={0}  max={100} name="Price" className="btn3"/>
               <label>Offers %</label>
                </div>
               </div>

               <div className="col-2 item-list m-auto">
                <div className=" container1" >

                    {productdata.map((item) =>{
                        return(
                            <div className="cards">
                            <div className="image_box ">
                           <NavLink to={`productone/${item.id}`}><img  src={item.imagesURL}  style={{width:200, height:250}} alt="product"/></NavLink> 
                            </div>
                            
                            <div className="details">
                            <span className="text-muted text-capitalize">In {item.category}</span>
                            <h5 className="card-title">{item.title}</h5>
                            <div className="rating"> 
                                <span className="star"><BiStar/> </span><span>{item.rating} ({item.count})<br/></span> 
                            </div>
                                        
                          <big className="display-7"><b>Rs.{item.price} <span className="pricedemo">Rs.675</span> </b></big><br/>  
                          <button  className="btn btn-primary"  onClick={()=> send(item)}>Add to cart</button><br/>   
                            </div>

                        </div>
                                              
                        )
                    })}
                </div>
                </div>
               </div>
            </div>
        </div>
    )
}