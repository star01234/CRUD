import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const StudentDetail = () => {
  const { id } = useParams();
  const [stdData, setStdData] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/student/" + id)
      .then((res) => res.json())
      .then((data) => {
        setStdData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <div className="container">
          <div className="card row">
            <div className="card-title">
              <h2>Student Detail</h2>
            </div>
            {stdData && (
              <div className="card-body">
                <img src={stdData.photo + "&" + stdData.id} alt="student" />
                <div className="card-text">
                  <h3>
                    {" "}
                    {stdData.name} - ({stdData.id})
                  </h3>
                  <h4>Contact Detail:</h4>
                  <h4>Email: {stdData.email}</h4>
                  <h4>Phone: {stdData.phone}</h4>
                  <h4>Birhday: {stdData.birthday}</h4>
                  <h4>Section: {stdData.section}</h4>
                  <h4>Major: {stdData.major}</h4>
                  <h4>Admission Year: {stdData.admissionYear}</h4>
                </div>
                <Link className="btn btn-danger" to="/">
                  Back to Listing
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
