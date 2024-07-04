import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate,Outlet } from 'react-router-dom';
const Updateproduct = () => {
  const navigate=useNavigate();
  const [product,setproduct]=useState([]);
  useEffect(()=>{
axios.get('http://192.168.12.103:8002/crafters/products/').then((res)=>{
  console.log(res.data);
  setproduct(res.data)
})
  },[])

  const upd=(id)=>{
    sessionStorage.setItem('uproduct',JSON.stringify(id));
navigate('editproduct');
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
    <th scope="col">price</th>
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
  <td><img src={item.product_picture} width="50" alt='hi'></img></td>
    <td >{item.price}</td>
  <td><button className='btn btn-danger' onClick={()=>upd(item)}>Update</button></td>
  </tr>
      </>)
    })
  }
  
</tbody>
</table>
   <Outlet />
  </>
  )
}

export default Updateproduct