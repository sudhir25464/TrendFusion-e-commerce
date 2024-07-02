import React,{useEffect,  useState} from 'react'

 import { useParams } from 'react-router-dom'


const Product = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect (()=>{
   
    const getProduct = async ()=>{
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    }
    getProduct();

    // useEffect(()=>{
    //   if(product){
    //     console.log(product);
    //   }
    // })
  },[]);


  const Loading =()=>{
    <div className='bg-[red] h-[200px]'>
      <h1>Loading...</h1>
    </div>
  }

 const Showproducts =()=>{
  return(
    <>
    <div className=' h-[400px]   flex flex-row'>
  
    {/* <div className=''>
      
    </div>
    <div className=' bg-slate-200'>${product.price}</div> */}
  
      <h2>Hlw</h2>
    </div>
    </>
  )
 }

  return (
    <div>
      <div className=''>
        {loading ? <Loading /> : <Showproducts/> }
        
      </div>
    </div>
  )
}

export default Product
