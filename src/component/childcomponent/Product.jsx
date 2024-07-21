import React, { useEffect, useState } from 'react'

import { NavLink, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { addTocart } from '../../redux/action';

const Product = () => {

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispath = useDispatch();
  
  const addProduct = (product)=>{
    dispath(addTocart(product));
  }

  let componentMounted = true;
  
  useEffect(() => {

    try {
      
   
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  
      if(componentMounted){
        setProduct(await response.json());
       
        setLoading(false);
      }
      return () => {
        componentMounted = false;
    }
  

    }
    getProduct()
  } catch (error) {
    console.error('Error fetching product', error);
    setLoading(true);
      
  }
 
  }, []);


  console.log(product)
  
  const Loading = () => {
 return(
  <>
     <div className='flex  p-5 items-center justify-center h-screen '>
     <span class="loader"></span>
    </div>
  </>
 )
  }

  const Showproducts = () => {
    return (
      <>
      <div className='mx-10 mt-2 '>
       <button className='border-2 bg-slate-100 px-3'>
       <NavLink to='/product'> Back</NavLink>
        </button>
       </div>

          
        <div className=' min-h-[500px] grid sm:grid-cols-2 p-2'>
         
          <div className='h-[200]    flex justify-center p-2'>
          <img src={product.image} height={200}   width={200}  alt=''></img>
          
          </div>
       
       <div className='flex justify-center justify-items-center mb-4 py-4'>

        <div className=' sm:m-4 rounded-lg bg-slate-100 px-2  py-6 justify-center justify-items-center  mx-0  mb-2  '>
          <div className='  p-2 sm:text-3xl font-semibold text-gray-600 px-2'>${product.title}</div> 
          
         <div className='px-2 font-thin'>{product.category}</div>
         <div className=' p-1 sm:p-2'> {product.description}</div>
           <div className='px-2 font-bold text-blue-600'>Rating: {product.rating && product.rating.rate}<i className='star'></i></div>
           <div className=' px-2 font-semibold sm:text-2xl text-blue-900 mb-5 '>Price  ${product.price} </div>
          
          <div className='mx-2 mb-7 mt-5'>    
                  <button   className='sm:px-4 px-2 devide-x-2 divide-slate-50 bg-yellow-600 py-1  text-black font-semibold'
                  onClick={()=>addProduct(product)} >
           
           Add to cart
            
            </button>

            <button className='sm:px-4 px-2 mx-3  bg-gray-950 py-1 text-white font-semibold'>
            <NavLink to='/youritem'>
                   Go to cart
             </NavLink>
            </button>
            

            </div>

          
           </div>
          </div>

        </div>
      </>
    )
  }

  return (
    <div>
      <div className=''>
        {loading ? <Loading /> : <Showproducts />}

      </div>
    </div>
  )
}

export default Product
