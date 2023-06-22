// import React,{useState} from 'react'

// function Modal(props) {
//     const [data, setData] = useState(props.modaldata);
//     const handleChange = (dataToBeChanged, value) => {
//         setData({
//           ...data,
//           [dataToBeChanged]: value,
//         });
//       };

//       const handleSubmit = (e) => {
//         e.preventDefault();
//         props.editModalRow(data);
//       };
// console.log(props.modaldata)
//   return (
//     <div
//     className="modal fade"
//     tabIndex="-1"
//     role="dialog"
//     aria-hidden="true"

//   >
//     <div className="modal-dialog" role="document">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h1 className="modal-title" id="exampleModalLabel">
//             {`Edit ${props.modaldata.name}'s data`}
//           </h1>
//           <button
//             type="button"
//             className="close"
            
//             aria-label="Close"
//             onClick={props.closeModal}
//           >
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div className="modal-body">
//           <div  className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               name="name"
//               className="form-control"
//               onChange={(e) => handleChange(`name`, e.target.value)}
//               value={data.name}
//             />
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 name="email"
//                 className="form-control"
//                 onChange={(e) => handleChange(`email`, e.target.value)}
//                 value={data.email}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="role">Role</label>
//               <input
//                 name="role"
//                 className="form-control"
//                 onChange={(e) => handleChange(`role`, e.target.value)}
//                 value={data.role}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="modal-footer">
//           <button
//             onClick={handleSubmit}
//             type="button"
//             className="btn btn-primary"
//           >
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Modal