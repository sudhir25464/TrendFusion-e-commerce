import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTocart } from '../../redux/action';

import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const Cardlist = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.handleCart);
  const [cardList, setCardList] = useState(cartItems);
  const prevCartItemsRef = useRef(cartItems);

  const handleRemoveFromCart = (product) => {
    dispatch(removeTocart(product));
  };

  const handleCheckoutFromCart = (product) => {
  }
  useEffect(() => {
    // Get previous cart items from the ref
    const prevCartItems = prevCartItemsRef.current;

    // Update the current cart items in the ref
    prevCartItemsRef.current = cartItems;

    // Update local state
    setCardList(cartItems);

    // Compare previous and current cart items to detect deletion
    if (prevCartItems.length > cartItems.length) {
      toast.success("Item deleted successfully");
    }
  }, [cartItems]);

  const Sketloder =()=>{

    return (
  <div className='mx-10'>

<div  className='grid sm:grid-cols-2 mt-2 sm:mt-6 bg-slate-100 p-5 border-gray-500'>
              {/* <div className='flex justify-center py-2 rounded'> */}
              <Skeleton height={200}/>
              {/* </div> */}
              <div className='p-2'>
             
             <Skeleton height={40}/>
             <Skeleton height={50}/>
             <Skeleton height={100}/>
              </div>
            </div>
  </div>
  
    )
  }
  return (
    <div className='cart bg-white'>
      {cardList.length === 0 ? (
       <Sketloder/>
      ) : (
        <div className='m-2 sm:mx-10 p-2 rounded '>
          {cardList.map((item) => (
            <div key={item.id} className='grid sm:grid-cols-2 mt-2 sm:mt-6 bg-slate-100 p-5 border-gray-500'>
              <div className='flex justify-center py-2'>
                <img className='h-[200px]' src={item.image} alt={item.title} />
              </div>
              <div className='p-2'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <button onClick={() => handleCheckoutFromCart(item)} className='checkout-button mt-4 bg-green-600 px-4 me-5'>check out</button>

                <button onClick={() => handleRemoveFromCart(item)} className='checkout-button bg-orange-600 px-4'>remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cardlist;
