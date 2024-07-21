
export const addTocart =(product)=>{

    return{
        type:'ADDITEM',
        payload:product
    }

}
// export const removeTocart =(product)=>{

//     return{
//         type:'DELITEM',
//         payload:product
//         // payload: itemId,
//     }

// }

// actions.js
// actions.js
export const removeTocart = (product) => {
    return {
      type: 'DELETEITEM',
      payload: product,
    };
  };
  
  
// export const removeTocart = (product) => ({
//     type: 'DELETEITEM',
//     payload: { id: product },
//   }):