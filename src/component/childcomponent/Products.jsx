import Carousel from '../Carousel';
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { NavLink,Link } from 'react-router-dom';
import alertProduct1 from '../../assets/images/tv.jpg';
import alertProduct2 from '../../assets/images/smartwatches.jpg';

import alertProduct3 from '../../assets/images/headphones.jpg';


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState();
    let componentMounted = true;

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            // const data = await response.json();
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProduct();

    }, []);


    // Handle alert product

    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
      // Timer to show the alert after 2 seconds
      const showAlertTimer = setTimeout(() => {
        setShowAlert(true);
      }, 1000); // 2 seconds delay
  
      // Timer to hide the alert after 20 seconds
      const hideAlertTimer = setTimeout(() => {
        setShowAlert(false);
      }, 20000); // 20 seconds after alert is shown
  
      // Cleanup timers on component unmount
      return () => {
        clearTimeout(showAlertTimer);
        clearTimeout(hideAlertTimer);
      };
    }, []);
  

    // laert card product

    const Alert = () => (
        <div className="fixed inset-0 flex items-center justify-center md:py-20  z-50 ">
         
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
            <button
              onClick={() => setShowAlert(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <Link >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Selling Product</h2>
            <p className="text-gray-700 mb-4">
              Check out this amazing product! It has all the features you need to enhance your experience.
            </p>
            <div className="flex items-center justify-between">
              <img
                src={alertProduct3} // Replace with actual image URL
                alt="Product"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800">Headphone!</h3>
                <p className="text-sm text-gray-600">$199.99</p>
              </div>
            
            </div>

            <div className="flex items-center justify-between mt-2">
              <img
                src={alertProduct2} // Replace with actual image URL
                alt="Product"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800">Watch</h3>
                <p className="text-sm text-gray-600">$799.99</p>
              </div>
            
            </div>
            <div className="flex items-center justify-between  mt-2">
              <img
                src={alertProduct1} // Replace with actual image URL
                alt="Product"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800">Accer SB2</h3>
                <p className="text-sm text-gray-600">$999.99</p>
              </div>
            
            </div>
            </Link>
          </div>
       
        </div>
      );

    const dummy = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const Loading = () => {
        return (
            <>
                <div className='bg-slate-50 flex justify-center'>


                </div>
                <div className="flex flex-col md:flex-row  mt-2 min-h-[700px] ">



                    <div className="md:w-1/4  sm:h-[100vh]    bg-slate-50 rounded-lg">

                        <div className="flex overflow-x-auto   flex-row sm:flex-col justify-left   mx-7 mt-10 mb-5  gap-2 sm:gap-3">


                            <Skeleton height={60} />
                            <Skeleton height={60} />
                            <Skeleton height={60} />
                            <Skeleton height={60} />
                            <Skeleton height={60} />
                        </div>
                    </div>
                    <div className="md:w-3/4 w-cover  sm:h-[100vh]  overflow-y-scroll hide-scrollbar  md:pt-5 mb-3   mx-2 rounded grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-items-center gap-2  bg-slate-100  py-2">


                        {
                            dummy.map((product) => {
                                return (
                                    <>
                                        <div className='mb-3 border rounded '>

                                            <Skeleton height={200} width={200} />
                                            <div className='p-2 mb-4'>

                                                <Skeleton height={40} />
                                                <Skeleton height={20} />

                                                <Skeleton height={40} />
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }


                    </div>
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }


    // const handleSearch = (e) => {
    //     const value = e.target.value;
    //     setQuery(value);

    //     const filteredData = data.filter((product) =>
    //         product.title.toLowerCase().includes(value.toLowerCase())
    //     );

    //     setFilter(filteredData);
    // };
    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);

        const filteredData = data.filter((product) =>
            product.title.toLowerCase().includes(value.toLowerCase())
        );

        setFilter(filteredData);
    };



    // useEffect(()=>{
    //     const wiat = () =>{
    //         setTimeout(()=>{
    //             alert('hii')
    //         },1000)
    //     }
    //   wiat();
    // },[])


    const ShowProducts = () => {

        return (
            <>
 
                <div className='bg-slate-50 flex justify-center'>
                    <h3 className='text-lg md:text-xl font-semibold text-emerald-900'> Available  products</h3>
                    <hr className='h-5 bg-green-400'></hr>

                </div>
                <div className="flex flex-col md:flex-row  mt-2 min-h-[700px] ">



                    <div className="md:w-1/4  sm:h-[100vh]    bg-slate-50 rounded-lg">

                        <div className="flex overflow-x-auto   flex-row sm:flex-col justify-left   mx-7 mt-10 mb-5  gap-2 sm:gap-3">

                            <button className=' sm:px-5 py-3  rounded hover:bg-slate-200' onClick={() => setFilter(data)}>All</button>
                            <button className='  sm:px-5 py-3  rounded hover:bg-slate-200' onClick={() => filterProduct("men's clothing")}>Men's Cloth</button>
                            <button className=' sm: px-5 py-3  rounded hover:bg-slate-200' onClick={() => filterProduct("women's clothing")}> Women's Cloth</button>
                            <button className='  sm:px-5 py-3  rounded hover:bg-slate-200' onClick={() => filterProduct("jewelery")}> Jewelery</button>
                            <button className=' sm: px-5 py-3  rounded hover:bg-slate-200' onClick={() => filterProduct("electronics")}>Electronic</button>
                        </div>
                    </div>
                    <div className="md:w-3/4 w-cover  sm:h-[100vh]  overflow-y-scroll hide-scrollbar  md:pt-5 mb-3   mx-2 rounded grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-items-center gap-2  bg-slate-100  py-2">
                    {showAlert && <Alert />}

                        {
                            filter.map((product) => {
                                return (
                                    <>
                                        <div className='mb-3 border rounded hover-products'>
                                            <div className='h-[350px]  md:w-[200px]  sm:w-full  justify-items-center  p-3 '>
                                                <img className='h-[200px] justify-center w-full ' src={product.image} />
                                                <div className='p-2 mb-4'>

                                                    <h2 >{product.title.substring(0, 12)}...</h2>
                                                    <p >${product.price}</p>

                                                    <button className='px-3  py-1 rounded mt-3 text-cyan-50 bg-slate-900 font-semibold'>
                                                        <NavLink to={`/products/${product.id}`} >

                                                            Buy now
                                                        </NavLink>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }


                    </div>
                </div>
            </>
        )

    }


    return (
        <>
            <div className='max-w-7xl  mx-auto' >
                {/* SET scroll images */}
                <div className=' bg-white sm:h-[200px]  sm:px-10  sm:mb-10 mx-auto  md:mb-20 justify-center '>
                    <div><Carousel /></div>
                </div>

                {/* <div  className="sm:h-[50px]  bg-slate-500 p-2"></div> */}
                <div>


                    <div>
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>



        </>
    )
}

export default Products
