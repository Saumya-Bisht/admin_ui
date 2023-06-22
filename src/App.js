import logo from './logo.svg';
import './App.css';
import Users from './Components/Users';
import { useState,useEffect } from 'react';
import Pagination from './Components/Pagination';
import {RiDeleteBin5Line} from 'react-icons/ri';

function App() {
  
  let[currPage,setCurrPage]=useState(1)
  let[profile,setProfile]=useState([])
  let [initialD, setInitialD] = useState([]);
  let [search, SetSearch] = useState("");
  let [noOfPages, setPages] = useState(1);
  let [editU, SetEditU] = useState(false);
  let [modaldata, setModalData] = useState({});
  const searchFunction= (value) => {
    SetSearch(value);
    const list = initialD.filter((ele) => {
      return value.toLowerCase() === ""
        ? ele
        : ele.name.toLowerCase().includes(value) ||
            ele.email.toLowerCase().includes(value) ||
            ele.role.toLowerCase().includes(value);
    });
    setProfile(list);
  };
  
  const closeModal = () => {
    SetEditU(false);
  };
  
  const editUser = (ele) => {
    SetEditU(true);
    setModalData(ele)
    // alert(`${modaldata.id}`)
    // console.log(modaldata)
  };
// console.log(modaldata)
  const editModalRow= (finalRow) => {
    const res = profile.map((ele) => {
      if (ele.id === finalRow.id) {
        return finalRow;
      }
      return ele;
    });
    const result = initialD.map((ele) => {
      if (ele.id === finalRow.id) {
        return finalRow;
      }
      return ele;
    });
    setProfile(res);
    setInitialD(result);
    SetEditU(false);
  };

  useEffect(()=>{
    fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json").then((res)=>res.json()).then((data)=>{setProfile(data);setInitialD(data)})
},[])
useEffect(() => {
  setPages(Math.ceil(profile.length / 10));
}, [profile]);
  return (
    <div className="App">
      <h1 id='heading'>Admin UI 👁</h1>
      <input
        onChange={(e) => searchFunction(e.target.value)}
        type="text"
        className="form-control searchbar"
        placeholder="Search by any means..."
      />
      
      <Users currentPage={currPage} profile={profile} setProfile={setProfile} editU={editU} SetEditU={SetEditU} editUser={editUser}  closeModal={closeModal} editModalRow={editModalRow} modaldata={modaldata}/>

      <Pagination currentPage={currPage} setCurrPage={setCurrPage} noOfPages={noOfPages}/>
      
      
    </div>
  );
}

export default App;
