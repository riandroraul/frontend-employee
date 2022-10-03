import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import monthNames from "../helper/month";

const Detail = () => {
  const [user, setUser] = useState("");
  const { id } = useParams();

  const getEmployeeById = async () => {
    const response = await fetch(`http://localhost:5000/employee/id/${id}`);
    const { result } = await response.json();
    setUser(result);
  };

  useEffect(() => {
    getEmployeeById();
  }, []);

  // console.log(new Date(user.Birthdate).toString());

  let date = new Date(user.Birthdate);
  let d = date.getDate();
  let m = date.getMonth() + 1;
  let y = date.getFullYear();
  console.log();
  return (
    <div>
      <div className="min-vh-100 bg-secondary bg-opacity-50">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col col-md-8">
              <div className="card p-3 my-5">
                <h2 className="text-center">Detail Employee</h2>
                <div class="row">
                  <div className="mb-3 col-4">
                    <font size={5}>ID </font>
                  </div>
                  <div className="mb-3 col-4">
                    <font size={5}>{user.ID}</font>
                  </div>
                </div>
                <div class="row">
                  <div className="mb-3 col-4">
                    <font size={5}>Name </font>
                  </div>
                  <div className="mb-3 col-4">
                    <font size={5}>{user.Name}</font>
                  </div>
                </div>
                <div class="row">
                  <div className="mb-3 col-4">
                    <font size={5}>Email </font>
                  </div>
                  <div className="mb-3 col-4">
                    <font size={5}>{user.Email}</font>
                  </div>
                </div>
                <div class="row">
                  <div className="mb-3 col-4">
                    <font size={5}>Mobile </font>
                  </div>
                  <div className="mb-3 col-4">
                    <font size={5}>{user.Mobile}</font>
                  </div>
                </div>
                <div class="row">
                  <div className="mb-3 col-4">
                    <font size={5}>Birthdate </font>
                  </div>
                  <div className="mb-3 col-4">
                    <font size={5}>{`${d} ${monthNames[m - 1]} ${y}`}</font>
                  </div>
                </div>
                <div class="row">
                  <div className="mb-3 col-4">
                    <font size={5}>Address </font>
                  </div>
                  <div className="mb-3 col-4">
                    <font size={5}>{user.Address}</font>
                  </div>
                </div>
                <div className="row mb-3">
                  <div class="col-10"></div>
                  <div class="col-2">
                    <button type="submit" className="btn btn-outline-secondary">
                      <Link to={"/"}>Close</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
