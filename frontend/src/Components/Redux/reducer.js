var initialState ={
    product : [],
    carts : []  
}


export function ReducerSet(state = initialState, action){

var newState ={...state}

if(action.type == "ByName"){
    newState.product = action.payload
    return newState
}

if( action.type == "Add"){
    return{...state,
     carts:[...state.carts, action.payload]
    }
 
 }

 if(action.type == "Delete"){
    return{...state,
        carts : state.carts.filter((item) => item.id !== action.payload)

    }
}

return state
}


// const product = [];

// export const ReducerSet = (state = {product},action)=>{
//     switch(action.type){
//         case "ByName":
//             return {product:action.payload}
//         case "FAIL_GET_PRODUCTS":
//             return {error:action.payload}
//         default : return state
//     }
// }