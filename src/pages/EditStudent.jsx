import {useState, useEffect} from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'

const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
    photo: "https://source.unsplash.com/random/200x200/?portrait",
    section: "",
    major: "",
    admissionYear: "",
  });
  const navigate = useNavigate();
  useEffect(()=>{
    fetch("http://localhost:8000/student/"+id)
    .then((res)=>res.json())
    .then((data)=>{
      setStudent(data);
    })
    .catch((err)=> {
      console.log(err);
    });
  },[id]);
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {
      name: student.name,
      email: student.email,
      phone: student.phone,
      birthday: student.birthday,
      photo: student.photo,
      section: student.section,
      major: student.major,
      admissionYear: student.admissionYear,
    };
    fetch("http://localhost:8000/student/" + id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(studentData),
    })
      .then((res) => {
        alert("Save sucessFully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
   return (
     <div>
       <div className="row">
         <div className="offset-lg-3 col-lg-6">
           <form className="container" onSubmit={handleSubmit}>
             <div className="card">
               <div className="card-title">
                 <h2>Edit new Student</h2>
               </div>

               <div className="card-body">
                 <div className="row">
                   <div className="col-lg-12">
                     <div className="form-group">
                       <label htmlFor="id">id</label>
                       <input
                         type="id"
                         disabled
                         name="id"
                         id="id"
                         value={id}
                         className="form-control"
                       />
                     </div>
                   </div>
                   <div className="col-lg-12">
                     <div className="form-group">
                       <label htmlFor="name">name</label>
                       <input
                         type="name"
                         required
                         name="name"
                         id="name"
                         onChange={handleChange}
                         value={student.name}
                         className="form-control"
                       />
                     </div>
                   </div>
                   <div className="col-lg-12">
                     <div className="form-group">
                       <label htmlFor="email">email</label>
                       <input
                         type="text"
                         required
                         name="email"
                         id="email"
                         onChange={handleChange}
                         value={student.email}
                         className="form-control"
                       />
                     </div>
                   </div>
                   <div className="col-lg-12">
                     <div className="form-group">
                       <label htmlFor="phone">phone</label>
                       <input
                         type="text"
                         required
                         name="phone"
                         id="phone"
                         onChange={handleChange}
                         value={student.phone}
                         className="form-control"
                       />
                     </div>
                   </div>
                   <div className="col-lg-12">
                     <div className="form-group">
                       <label htmlFor="birthday">birthday</label>
                       <input
                         type="date"
                         required
                         name="birthday"
                         id="birthday"
                         onChange={handleChange}
                         value={student.birthday}
                         className="form-control"
                       />
                     </div>
                   </div>
                   <div className="col-lg-12">
                     <div className="form-group">
                       <label htmlFor="photo">photo</label>
                       <input
                         type="text"
                         required
                         name="photo"
                         id="photo"
                         onChange={handleChange}
                         value={student.photo}
                         className="form-control"
                       />
                     </div>
                   </div>
                   <div className="col-lg-12">
                     <div className="form-group">
                       <label htmlFor="section">section</label>
                       <input
                         type="text"
                         required
                         name="section"
                         id="section"
                         onChange={handleChange}
                         value={student.section}
                         className="form-control"
                       />
                     </div>
                   </div>
                   <div className="col-lg-12">
                     <div className="form-group">
                       <label htmlFor="major">major</label>
                       <input
                         type="text"
                         required
                         name="major"
                         id="major"
                         onChange={handleChange}
                         value={student.major}
                         className="form-control"
                       />
                     </div>
                   </div>
                   <div className="col-lg-12">
                     <div className="form-group">
                       <label htmlFor="admissionYear">admissionYear</label>
                       <input
                         type="number"
                         placeholder="YYYY"
                         min="2000"
                         max="2023"
                         name="admissionYear"
                         id="admissionYear"
                         onChange={handleChange}
                         value={student.admissionYear}
                         className="form-control"
                       />
                     </div>
                   </div>
                   <div className="col-lg-12">
                     <div className="form-group">
                       <button className="btn btn-success" type="sudmit">
                         Save
                       </button>
                       <Link to="/" className="btn btn-danger">
                         Back
                       </Link>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </form>
         </div>
       </div>
     </div>
   );
}

export default EditStudent