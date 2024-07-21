// reducer.js
const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case 'ADDITEM':
      // Check if the product already exists in the cart
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Increase the quantity if the product exists
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        // Add the new product with quantity 1
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case 'DELETEITEM':
      // Check if the product exists in the cart
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        // Remove the product if the quantity is 1
        return state.filter((x) => x.id !== product.id);
      } else {
        // Decrease the quantity if the product exists and has qty > 1
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      // Return the current state for any unknown action types
      return state;
  }
};

export default handleCart;

// const cart = [];

// const handleCart = (state = cart, action) => {

//   const product = action.payload;

//   switch (action.type) {
    
//     case 'ADDITEM':
//       // Check if the product already exists in the cart
//       const exist = state.find((x) => x.id === product.id);
//       if (exist) {
//         // Increase the quantity if the product exists
//         return state.map((x) =>
//           x.id === product.id ? { ...x, qty: x.qty + 1 } : x
//         );
//       } else {
//         // Add the new product with quantity 1
//         return [
//           ...state,
//           {
//             ...product,
//             qty: 1,
//           },
//         ];
//       }

//     // case 'DELETEITEM':
//     //   // Check if the product exists in the cart
//     //   const exist1 = state.find((x) => x.id === product.id);
//     //   if (exist1.qty === 1) {
//     //     // Remove the product if the quantity is 1
//     //     return state.filter((x) => x.id !== product.id);
//     //   } else {
//     //     // Decrease the quantity if the product exists and has qty > 1
//     //     return state.map((x) =>
//     //       x.id === product.id ? { ...x, qty: x.qty - 1 } : x
//     //     );
//     //   }

//     case 'DELETEITEM':
//       // Check if the product exists in the cart
//       const product = action.payload; // Get the product from the payload
//       const exist1 = state.find((x) => x.id === product.id);
//       if (exist1.qty === 1) {
//         // Remove the product if the quantity is 1
//         return state.filter((x) => x.id !== product.id);
//       } else {
//         // Decrease the quantity if the product exists and has qty > 1
//         return state.map((x) =>
//           x.id === product.id ? { ...x, qty: x.qty - 1 } : x
//         );
//       }
   

//     default:
//       // Return the current state for any unknown action types
//       return state;
//   }
// };

// export default handleCart;
