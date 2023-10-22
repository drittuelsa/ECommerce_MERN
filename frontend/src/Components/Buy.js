import React, {useState, useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { DeleteCart } from "./Redux/action";
import { BsTrashFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";


export function Buy(){

    const[price,setPrice] = useState(0);


    const dispatch = useDispatch();

    const getcarts = useSelector((state) =>{
        return state.carts
    })
console.log(getcarts)
        const handleDel =(id)=>{
            dispatch(DeleteCart(id))
        }

    const total =()=>{
        var price = 0;
        getcarts.map((item,k) =>{
            price = item.price + price
        })
      setPrice(price);
      console.log(price);
      }
      
      useEffect(() =>{
      total()
      },[total])

     const  handleClick =(e)=>{
        alert('Payment Success!');
        // if(alert){
        //     setPrice();
        // }
      }

    return(
        <div >
        <div className="buynow container ">               
                        
                            <h1>Shopping Cart</h1>
                            <p>Select all items</p>
                            <hr/>
                            <div className="buynow d-flex ">
                            <div>
                                    {getcarts.map((item)=>{
                                        return(
                                       
                                       <div className="d-flex" >
                                      <div className="col">
                                <p>Product {item.id}</p>
                                <img src={item.imagesURL} style={{width:100, height:150}}alt="imgitem" />
                                </div>
                                <div className="col ">
                                <h4>{item.title}</h4>
                                <h5>{item.short_title}</h5>
                                 <h3 className="diffrentprice">₹ {item.price}.00</h3>
                                <p className="unusuall">Usually dispatched in 8 days.</p>
                                <p>Eligible for FREE Shipping</p>
                                <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" 
                                style={{width:80, height:30}} alt="logo" />
                                <td onClick={()=>handleDel(item.id)}><b>Remove </b><p style={{fontSize:20, color:"red"}} >< BsTrashFill/></p></td> 
                                                
                                </div>
                                           
                                </div>
                                        )
                                    })}
                                     </div>

                                                <div className="col d-flex">
                                                    <div className="rightt0p">
                <div className="desbox">
                  <button  style={{cursor:"pointer"}} className="btn btn-white text-dark dropdown-toggle btn1"
                   type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contact Details </button>
                  <div className="dropdown-menu describe">
                 <form>
                    <label>Phone number</label>
                    <input type="number" />
                 </form>
                  </div>
                  </div>
                  <hr/>
                  <div className="desbox">
                  <button  style={{cursor:"pointer"}} className="btn btn-white text-dark dropdown-toggle btn1"
                   type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shipping Address </button>
                  <div className="dropdown-menu describe">
                  <form>
                    <label>Address</label>
                    <input type="text" />
                    </form>
                  </div>
                  </div>
                  <hr/>
                  <div className="desbox">
                  <button  style={{cursor:"pointer"}} className="btn btn-white text-dark dropdown-toggle btn1"
                   type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shipping Method </button>
                  <div className="dropdown-menu describe">
                  <p>Express Delivery</p>
                  <p>Normal Delivery</p>
                  </div>
                  </div>
                  <hr/>
                  <div className="desbox">
                  <button  style={{cursor:"pointer"}} className="btn btn-white text-dark dropdown-toggle btn1" 
                  type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Payment Method </button>
                  <div className="dropdown-menu describe">
                  <p>Cash on Delivery</p>
                  <p>Online payment</p>
                  </div>
                  </div>
                  <hr/>
                  
    <h5>Subtotal
    <span className="item_price ps-5"><b>₹ {price}.00</b></span>
    </h5>

    <hr/>

      <button className="btn3" onClick={handleClick}>Proceed to pay</button>
      </div>
      
    </div>
                                               
    </div>                                  
    </div>
    </div>
                 
                     
    )
}