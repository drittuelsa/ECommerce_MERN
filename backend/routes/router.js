const express = require("express");
const router = new express.Router();
const Products = require("../models/productSchema");
const User = require('../models/userSchema');


router.get('/getproducts' , async(req,res) =>{
 try {
    const productsdata = await Products.find()
   //   console.log("console the data" + productsdata)
    res.status(201).json(productsdata)
 } catch (error) {
    console.log("error" + error.message)
 }
});

router.get("/productone/:id", async (req, res) => {

   try {
       const  id  = req.params.id;
       console.log(id);

       const individual = await Products.findOne({ id: id });
      //  console.log(individual + " single product");

       res.status(201).json(individual);
   } catch (error) {
       res.status(400).json(error);
   }
});

router.post("/register", async (req, res) => {
   // console.log(req.body);
   const { email, password,cpassword } = req.body;

   if ( !email || !password || !cpassword ) {
      res.status(422).json({ error: "fill the all details" });
      console.log("NOT FILLED");
  };

  try {

      const preuser = await User.findOne({ email: email });

      if (preuser) {
          res.status(422).json({ error: "This email already exist" });
      } else {

          const finaluser = new User({
              email, password,cpassword
          });


          const storedata = await finaluser.save();
          console.log(storedata + "user successfully added");
          res.status(201).json(storedata);
      }

  } catch (error) {
      console.log("ERROR FOUND" + error.message);
      res.status(422).send(error);
  }
    
})



module.exports = router;
 
