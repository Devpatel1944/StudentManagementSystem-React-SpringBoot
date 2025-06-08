import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import Search from './Common/Search';


function StudentView() {
    const[student,setStudent] = useState([]);
   const [search, setSearch] = useState("");
  useEffect(() => {

    loadStudent();
  }, []);
  const loadStudent = async () => {
      try {
        const result = await axios.get("http://localhost:8080/student", {
          validateStatus: () => true
        });

        if (result.status === 302) {
          setStudent(result.data);
        } else {
          console.warn("Unexpected status:", result.status);
        }
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/student/delete/${id}`);
      loadStudent(); 
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };
   
  

  return (
    <section className='container mt-5'>
        <Search
				search={search}
				setSearch={setSearch}
			/>

       <table className='table table-bordered table-hover shadow'>
        <thead>
            <tr className='text-center '>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th colSpan="3">Actions</th>
            </tr>
        </thead>
         <tbody className='text-center'>
            {student.filter((st) =>
							st.firstName
								.toLowerCase()
								.includes(search)).map((student,index)=>(

                <tr key = {student.id}>
                    <th scope='row' key={index}>
                        {index+1}
                    </th>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.department}</td>
                <td className='mx-2'>
                    <Link to={`/student-profile/${student.id}`} className='btn btn-info'><FaEye /></Link></td>
                <td className='mx-2'><Link to={`/edit-student/${student.id}`} className='btn btn-warning'> <FaEdit /></Link></td>
                <td className='mx-2'><button className='btn btn-danger' onClick={()=>handleDelete(student.id)}>  <FaTrash /></button></td>
                </tr>


            ) )}
          
         </tbody>
       </table>
    </section>
  )
}

export default StudentView
