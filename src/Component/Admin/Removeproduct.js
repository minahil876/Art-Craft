import React,{useState,useEffect} from 'react'
import axios from 'axios';
const Removeproduct = () => {
  const [product,setproduct]=useState([]);
  useEffect(()=>{
axios.get('http://192.168.12.106:8000/crafters/products/').then((res)=>{
  console.log(res.data);
  setproduct(res.data)
})
  },[])

  const del=(id)=>{
 axios.delete(`http://192.168.12.106:8000/crafters/products/${id}/`).then((res)=>{
  alert("Product Deleted Successfuly")
  window.location.reload();
 })
  }
  return (
    <>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Color</th>
      <th scope="col">Size</th>
      <th scope="col">Image</th>
      <th scope="col">Price</th>

      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
    {
      product.map((item,ind)=>{
        return(<>
          <tr key={ind}>
      <th scope="row">{ind+1}</th>
      <td >{item.name}</td>
      <td >{item.color}</td>
      <td >{item.size}</td>
    <td><img src={item.product_picture} width="50" alt='hello'></img></td>
      <td >{item.price}</td>
    <td><button className='btn btn-danger' onClick={()=>del(item.id)}>Delete</button></td>
    </tr>
        </>)
      })
    }
    
  </tbody>
</table>
    </>
  )
}

export default Removeproduct