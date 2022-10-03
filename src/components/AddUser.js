import React, { useState } from "react";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  // defaultDate.setDate(defaultDate.getDate() + 3);

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      mobile,
      birthdate,
      address,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(
      "http://localhost:5000/employee/add",
      requestOptions
    );
    const users = await response.json();
    // console.log(response.status);
    console.log(users);
    if (response.status === 200) {
      navigate("/");
      Swal.fire({
        icon: "success",
        type: "success",
        title: users.message,
      });
    } else {
      navigate("/add");
      Swal.fire({
        icon: "warning",
        type: "success",
        title: users.message,
      });
    }
  };
  console.log(birthdate);
  return (
    <div>
      <div className="min-vh-100 bg-secondary bg-opacity-50">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col col-md-6">
              <div className="card p-3 my-5">
                <h2 className="text-center">Add Employee</h2>
                <form onSubmit={onSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="enter your name.."
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="enter your email.. "
                      required
                    />
                  </div>
                  <div className="mb-3 ">
                    <label htmlFor="mobile" className="form-label">
                      Mobile
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="mobile"
                      id="mobile"
                      value={mobile}
                      onChange={(event) => setMobile(event.target.value)}
                      placeholder="Enter your phone number.. "
                      required
                    />
                  </div>
                  <div className="mb-3 ">
                    <label htmlFor="birthdate" className="form-label">
                      Birthdate
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="birthdate"
                      id="birthdate"
                      value={<Moment format="YYYY-MM-DD">{birthdate}</Moment>}
                      onChange={(event) =>
                        setBirthdate(
                          <Moment format="YYYY-MM-DD">
                            {event.target.value}
                          </Moment>
                        )
                      }
                      required
                    />
                  </div>
                  <div className="mb-3 ">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      id="address"
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                      placeholder="Enter your address"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="form-control btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
