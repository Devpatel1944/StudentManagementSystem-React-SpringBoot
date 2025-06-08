import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

function AddStudent () {
	let navigate = useNavigate();
	const [student, setStudent] = useState({
		firstName: "",
		lastName: "",
		email: "",
		department: "",
	});
	const {
		firstName,
		lastName,
		email,
		department,
	} = student;

	const handleInputChange = (e) => {
		setStudent({
			...student,
			[e.target.name]: e.target.value,
		});
	};
	const saveStudent = async (e) => {
		e.preventDefault();
		await axios.post(
			"http://localhost:8080/student",
			student
		);
		navigate("/view-student");
	};
 


  return (
     
  <div className="container">
  <div className="row justify-content-center">
    <div className="col-sm-8 py-4 px-4 border rounded-3 shadow-sm">
      <h2 className="text-center mb-4">Add Student</h2>
      
      <form onSubmit={(e)=>saveStudent(e)}>
        <div className="input-group mb-4">
          <label className="input-group-text" htmlFor="firstName">First Name</label>
          <input 
            className="form-control" 
            type="text" 
            name="firstName" 
            id="firstName" 
            required  
            value={firstName} 
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        
        <div className="input-group mb-4">
          <label className="input-group-text" htmlFor="lastName">Last Name</label>
          <input 
            className="form-control" 
            type="text" 
            name="lastName" 
            id="lastName" 
            required  
            value={lastName} 
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        
        <div className="input-group mb-4">
          <label className="input-group-text" htmlFor="email">Email</label>
          <input 
            className="form-control" 
            type="email" 
            name="email" 
            id="email" 
            required  
            value={email} 
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        
        <div className="input-group mb-4">
          <label className="input-group-text" htmlFor="department">Department</label>
          <input 
            className="form-control" 
            type="text" 
            name="department" 
            id="department" 
            required  
            value={department} 
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        
        <div className="d-flex justify-content-between mt-4">
          <button 
            type="submit" 
            className="btn btn-outline-success btn-lg px-4">
            Submit
          </button>
          
          <Link 
            to ={'/view-student'}
            type="button"
            className="btn btn-outline-warning btn-lg px-4">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default AddStudent
