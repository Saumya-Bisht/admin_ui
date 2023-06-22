import React, { useEffect, useState } from 'react'
import { FaEdit} from 'react-icons/fa';
import {RiDeleteBack2Fill,RiDeleteBin5Line} from 'react-icons/ri';



function Users(props) {
    
    const [rowsSelected, setRowsSelected] = useState([]);
   
    const [data, setData] = useState(props.modaldata);
    const handleChange = (dataToBeChanged, value) => {
        setData({
          ...data,
          [dataToBeChanged]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        props.editModalRow(data);
      };

  // Delete User data onClick
  const delUser = (selectedind) => {
    let finalUser = props.profile.filter((ele) => {
      return ele.id!== selectedind;
    });
    props.setProfile(finalUser);
    // return finalUser
    console.log(finalUser)
  };


  
    
  const handleCheckbox = (checked, id) => {
    if (checked) {
      setRowsSelected([...rowsSelected, id]);
    } else {
      setRowsSelected(rowsSelected.filter((rowId) => rowId !== id));
    }
  };

  const handlecheckChange= (event) => {
    const checked = event.target.checked;
    if (checked) {
      setRowsSelected(props.profile.map((ele) => ele.id));
    } else {
      setRowsSelected([]);
    }
  };

  const deleteSelected=()=>{
    props.setProfile(props.profile.filter((ele)=>{
      return !rowsSelected.includes(ele.id)
    }))
  }

    // useEffect(()=>{
    //     fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json").then((res)=>res.json()).then((data)=>{setProfile(data)})
    // })
  return (
    <div>
        <button id='delall' className="btn btn-danger" onClick={deleteSelected}>
         <RiDeleteBin5Line/> Delete Selected
         </button>
         <table className='table'>
          <thead className='table header'>
            <tr className='table'>
                <th><input type='checkbox' name='checked' onChange={handlecheckChange}/> <label>  Select All</label></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody className='tbody'>
            {props.profile.slice(props.currentPage*10-10,props.currentPage*10).map((ele)=>{
               const isSelected = rowsSelected.includes(ele.id);
               return(
            <tr key={ele.id} className={isSelected? `selected`:``}>
                <th><input type='checkbox' checked={isSelected} onChange={(e)=>{ handleCheckbox(e.target.checked, ele.id)}}/></th>
              <td id='name'>{ele.name}</td>
              <td id='email'>{ele.email}</td>
              <td id='role'>{ele.role.toUpperCase()}</td>
              <td ><button id='edit' onClick={()=> props.editUser(ele)}>
                    <FaEdit/>
                </button>
                <button id='delete' onClick={()=>delUser(ele.id)}>
                    <RiDeleteBack2Fill/>
                    </button></td>
            </tr>
)})}
            </tbody>
          </table>
          {/* Modal Starts Here--- */}
          {
            props.editU && (
              <div
              className="modal fade"
              tabIndex="-1"
              role="dialog"
              aria-hidden="true"
          
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLabel">
                      {`Edit ${props.modaldata.name}'s data`}
                    </h1>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={props.closeModal}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div  className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        name="name"
                        className="form-control"
                        onChange={(e) => handleChange(`name`, e.target.value)}
                        value={data.name}
                      />
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          name="email"
                          className="form-control"
                          onChange={(e) => handleChange(`email`, e.target.value)}
                          value={data.email}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <input
                          name="role"
                          className="form-control"
                          onChange={(e) => handleChange(`role`, e.target.value)}
                          value={data.role}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      onClick={handleSubmit}
                      type="button"
                      className="btn btn-primary"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            )
          }
          
    </div>
  )
}

export default Users