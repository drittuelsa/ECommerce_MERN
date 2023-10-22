export const GetProducts = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://127.0.0.1:8080/getproducts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response)
            const product = await response.json();
            
            dispatch(getProducts(product));
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getProducts = (product) => {
    return {
        type: "ByName",
        payload: product,
    };
};



// export const GetProducts = ()=> async(dispatch)=>{
//     try {
//         const data = await fetch('http://localhost:8080/getproducts',{
//                 mode: 'no-cors',
//                 method:"GET",
//                 headers:{
//                     "Content-Type":"application/json",
//                 },
               
//         } );

//         console.log(data)
//         const product = await data.json();
//         console.log(product);
//         dispatch({type:"ByName",payload:product});
//     } catch (error) {
//         dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response});
//     }
// }
export function AddCart(carts){
    return{
        type : "Add",
        payload : carts
    }
}

export function DeleteCart(id){
    return{
        type : "Delete",
        payload : id
    }
}