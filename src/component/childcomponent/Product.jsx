import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'


const Product = () => {

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <div className='h-100vh w-[100%] bg-slate-500'>
      <h1 className='text-[red]'>Loading...</h1>
    </div>
  }

  const Showproducts = () => {
    return (
      <>
        <div className=' min-h-[400px] grid sm:grid-cols-2'>
          
          <div className='h-[200]    flex justify-center p-2'>
          <img src={product.image} height={200}   width={200}  alt=''></img>
          
          </div>
       
       <div className='flex justify-center justify-items-center mb-4'>

        <div className=' sm:m-4 rounded-lg bg-slate-100 px-2 justify-center justify-items-center  mx-0  mb-2  '>
          <div className='  p-2 sm:text-3xl font-semibold text-gray-600 px-2'>${product.title}</div> 
          <div className=' p-3'> {product.description}</div>
          {/* <p className='px-2 text-blue-500'> Rating  : {product.rating.rate} <span> reviw : {product.rating.count}</span></p> */}
           <div className=' px-2 font-semibold sm:text-lg text-red-500 mb-5'>Price  ${product.price} </div>
           </div>
          </div>

        </div>
      </>
    )
  }

  return (
    <div>
      <div className=''>
        { loading ? <Loading /> : <Showproducts />}

      </div>
    </div>
  )
}

export default Product
