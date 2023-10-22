import React, {useEffect, useState} from "react";
// import { products } from "./Productdata";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import {BiStar } from "react-icons/bi";


export function Product(){

    const {id} = useParams("");
    // console.log(id)

    const [inddata, setIndedata] = useState("");

    const getinddata = async () => {
      const res = await fetch(`http://127.0.0.1:8080/productone/${id}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }      
      })
      const data = await res.json();
      
      console.log(data);
        setIndedata(data);
    
  };

  useEffect(() => {
    getinddata();
}, [id]);

    return(
        <div>
            <div className="container">
            <div className="row">
           
               
                 {/* <img  src={item.imagesURL}  style={{width:200, height:250}} alt="product"/> */}
                 
                 <div className="col image1">
                    <img  src={inddata.imagesURL} style={{width:250, height:300}} alt="product"/>
                    <div className="imageset">
                    <img  src={inddata.thumbnail} style={{width:60, height:80}} alt="product"/>
                    <img  src={inddata.imagesURL} style={{width:60, height:80}} alt="product"/>
                    <img  src={inddata.thumbnail} style={{width:60, height:80}} alt="product"/>
                    <img  src={inddata.imagesURL} style={{width:60, height:80}} alt="product"/>
                    <img  src={inddata.thumbnail} style={{width:60, height:80}} alt="product"/>
                    <img  src={inddata.imagesURL} style={{width:60, height:80}} alt="product"/>
                    </div>
                    </div>
                  <div className="col imagedetail py-4">
                    <h5>{inddata.title}</h5>
                    <p>{inddata.short_title}</p>
                    <p><b>Rs.{inddata.price}</b> <span className="pricedemo">Rs.675</span></p>
                    <p>{inddata.rating} <BiStar/></p>  
                     {/* <button  className="btn btn3"  >Add to cart</button>   */}
                    <NavLink to="/buy/:id"> <button  className="btn btn4 ms-4"  >Buy Now</button> </NavLink>
                  <hr/>
                  <div className="desbox">
                  <button  style={{cursor:"pointer"}} className="btn btn-white text-dark dropdown-toggle btn1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Specification </button>
                  <div className="dropdown-menu describe">
                  <span>{inddata.description}</span>
                  </div>
                  </div>
                  <hr/>
                  <div className="desbox">
                  <button  style={{cursor:"pointer"}} className="btn btn-white text-dark dropdown-toggle btn1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  How to use? </button>
                  <div className="dropdown-menu describe">
                  <span>Apply a small amount of the product around your face before bed</span>
                  </div>
                  </div>
                  <hr/>
                  <div className="rating"> 
                  <span className="star"><BiStar/> </span><span>{inddata.rating} ({inddata.count})<br/></span> 
                  </div>
                  
                    </div> 
             
      
               </div> 
                
            </div>
        </div>
    )
}