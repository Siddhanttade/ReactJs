import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  //const [product,error,loading]=customReactQuery('/api/products')
  const [product, setProduct] = useState([]);
  const [error,setError]=useState(false); //we are maintaining an array for the edge cases
  const [loading,setLoading]=useState(false);
  const [search,setSearch]=useState('');

  useEffect(()=>{
    //here we use Immediately Invoked Function Expression which would get executed immediately
    //because in useEffect we cant directly make async await
    const controller=new AbortController();//it is from axios library and automatically cancels the old request
    ;(async()=>{
      try {
        setLoading(true)
        setError(false)
        const response=await axios.get('/api/products?search='+search,{
          signal:controller.signal
        })
        console.log(response.data)
        setProduct(response.data)
        setLoading(false)
      } catch (error) {
        //signa send the old cancelled req here we handle it by this way
        if (axios.isCancel(error)) {
          console.log('req cancelled',error.message);
          return;
        }
        setError(true)
        setLoading(false)
      }

    })();
    //cleanup method
    return()=>{
      controller.abort();
    }
  },[search]);

  // if (error) {
  //   return <h1>something went wrong</h1>
  // }

  // if(loading){
  //   return <h1>Loading...</h1>
  // }

  return (
    <>
      <h1>hello api</h1>
      <input type='text' placeholder='Search'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}      
      />
      {/*conditional rendering of above if conditions */}
      {loading && (<h1>Loading...</h1>)}
      {error &&  (<h1>something went wrong...</h1>)}
      <h2>Num of prod:{product.length}</h2>
    </>
  )
}

export default App

//making a custom function
// const customReactQuery=(urlPath)=>{
//   const [product, setProduct] = useState([]);
//   const [error,setError]=useState(false); //we are maintaining an array for the edge cases
//   const [loading,setLoading]=useState(false);

//   useEffect(()=>{
//     //here we use Immediately Invoked Function Expression which would get executed immediately
//     //because in useEffect we cant directly make async await
//     (async()=>{
//       try {
//         setLoading(true)
//         setError(false)
//         const response=await axios.get(urlPath)
//         console.log(response.data)
//         setProduct(response.data)
//         setLoading(false)
//       } catch (error) {
//         setError(true)
//         setLoading(false)
//       }

//     })();

//   },[]);

//   return [product,error,loading]
  
// }
