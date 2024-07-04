import React,{useState,useEffect} from 'react'
import './Ahome.css'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus,faUsers,faListAlt, faCheckCircle,faSpinner, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { NavLink } from 'react-router-dom';
import { faPlus, faUsers, faListAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
function Ahome() {
  const token = JSON.parse(sessionStorage.getItem('atoken'));
const [order,totallength]=useState();
const [price,setprice]=useState(0);
const [product,setproduct]=useState(0);
const [user,setuser]=useState(0);
const [norder,setorder]=useState(0);
const [deliver, setDeliver] = useState([]);
const [setFeedback] = useState({ total: 0, positive: 0, negative: 0 });
  const [setMessages] = useState({ read: 0, unread: 0 });
  // const [pendingOrders, setPendingOrders] = useState({ pending: 0, processed: 0, completed: 0 });

  // Sample data for feedback and messages
  useEffect(() => {
    // setFeedback({ total: 385749, positive: 355689, negative: 30060 });
    // setMessages({ read: 450, unread: 120 });
  }, [setFeedback, setMessages]);

  // const feedbackData = {
  //   labels: ['Positive', 'Negative'],
  //   datasets: [
  //     {
  //       data: [(feedback.positive / feedback.total) * 100, (feedback.negative / feedback.total) * 100],
  //       backgroundColor: ['#4CAF50', '#FF5252'],
  //     },
  //   ],
  // };

  // const messagesData = {
  //   labels: ['Read', 'Unread'],
  //   datasets: [
  //     {
  //       data: [messages.read, messages.unread],
  //       backgroundColor: ['#4CAF50', '#FF5252'],
  //     },
  //   ],
  // };

  // const pendingOrdersData = {
  //   labels: ['Pending', 'Processed', 'Completed'],
  //   datasets: [
  //     {
  //       data: [pendingOrders.pending, pendingOrders.processed, pendingOrders.completed],
  //       backgroundColor: ['#FF5252', '#FFC107', '#4CAF50'],
  //     },
  //   ],
  // };
useEffect(()=>{
  axios.get('http://192.168.12.103:8002/crafters/admin-checkout/',{
    headers:{
      'Authorization': `Bearer ${token}`
    }
  }).then((res)=>{
   
    totallength(res.data.order_items.length);
    const total=res.data.order_items.reduce((acc,item)=>acc +item.price,0);
    setprice(total);
  })
})
useEffect(()=>{
  axios.get('http://192.168.12.103:8002/crafters/products/').then((res)=>{
    console.log(res.data.length)
    setproduct(res.data.length)
  })
})
// console.log(price)

useEffect(()=>{
  axios.get('http://192.168.12.103:8002/crafters/users/').then((res)=>{
    console.log(res.data.length)
    setuser(res.data.length)
  })
})

useEffect(() => {
  axios.get('http://192.168.12.103:8002/crafters/admin-checkout/',).then((res)=>{
    setorder(res.data.order_items.length)
  })
}, [])

useEffect(() => {
  axios.get('http://192.168.12.103:8002/crafters/admin-checkout/')
    .then((res) => {
      const deliveredOrders = res.data.order_items.filter((item) => item.status === 'DELIVERED');
      setDeliver(deliveredOrders);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []);

// const currentDay = new Date().getDate();
// const monthlyTarget = 30; // Assuming 30 days in a month
// const targetPercentage = ((order / (monthlyTarget / 30)) * currentDay).toFixed(2);

  return (
    <>
    <div className="cards">
        <div className="card1"  style={{height: 'auto', width: '30%'}}>
          <FontAwesomeIcon icon={faPlus} className="card-icon"/>
          <h2>No Of Product</h2>
          <h3 style={{color: 'white'}}>{product}</h3>
          {/* <NavLink to='/admin/adashboard' className='btn btn-danger'>View</NavLink> */}
        </div>
        <div className="card1"  style={{height: 'auto'}}>
          <FontAwesomeIcon icon={faUsers} className="card-icon" />
          <h2>No Of Users</h2>
          <h3 style={{color: 'white'}}>{user}</h3>
          {/* <NavLink to='/admin/users' className='btn btn-danger'>View</NavLink> */}
        </div>
        <div className="card1" style={{height: 'auto'}}>
          <FontAwesomeIcon icon={faListAlt} className="card-icon" />
          <h2>View Orders</h2>
        <h3 className='text-white'>{norder}</h3>
        {/* <NavLink to='/admin/orderpayment' className="btn btn-danger">View</NavLink> */}
        </div>
        <div className="card1" style={{height: 'auto'}}>
          <FontAwesomeIcon icon={faCheckCircle} className="card-icon" />
          <h2>Order Delivered</h2>
          {/* <h3>{deliver}</h3> */}
          <h3 className='text-white'> {deliver.length}</h3>
          {/* <NavLink to='/admin/orderpayment' className="btn btn-danger">View</NavLink> */}
        </div>
      </div>
    <div className="target" style={{marginTop: '10%'}}>
        <h3>Target Sales</h3>
        <p>Total performance for this month</p>
        <div className="cards" style={{width:'65rem'}}>
          <div className="card order">
            <div className="card-header">
              <span>Orders</span>
              <span className="card-value">{order}</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar order-progress" style={{backgroundColor: '#D2DE32'}}></div>
            </div>
            <div className="card-footer">
              <span>Monthly Target</span>
              <span>100%</span>
              {/* <span>{targetPercentage}%</span> */}
            </div>
          </div>
          <div className="card income">
            <div className="card-header">
              <span>Income</span>
              <span className="card-value">{price} Rs</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar income-progress" style={{backgroundColor: '#016A70'}}></div>
            </div>
            <div className="card-footer">
              <span>Monthly Target</span>
              <span>100%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ahome
