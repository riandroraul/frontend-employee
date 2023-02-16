import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Input from "./Input";
// import ErrorInput from "./validator/ErrorInput";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  // defaultDate.setDate(defaultDate.getDate() + 3);

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = {
      Name: name,
      Email: email,
      Mobile: mobile,
      Birthdate: birthdate,
      Address: address,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(
        "http://localhost:5000/employee/add",
        requestOptions
      );

      const users = await response.json();
      console.log(users.errors);
      setErrors(users.errors);
      // if (users.errors.length > 0) {
      //   users.errors.find((e) => {
      //     switch (e.param) {
      //       case "Name":
      //         console.log(e.msg);
      //         break;
      //       case "Email":
      //         console.log(e.msg);
      //         break;
      //       case "Mobile":
      //         console.log(e.msg);
      //         break;
      //       case "Birthdate":
      //         console.log(e.msg);
      //         break;
      //       default:
      //         console.log(e.msg);
      //         break;
      //     }
      //   });
      // }
      console.log(errors);
      //   if (response.status === 200) {
      //     navigate("/");
      //     Swal.fire({
      //       icon: "success",
      //       type: "success",
      //       title: users.message,
      //     });
      //   } else {
      //     navigate("/add");
      //     Swal.fire({
      //       icon: "warning",
      //       type: "success",
      //       title: users.message,
      //     });
      //   }
    } catch (error) {
      console.log(error);
      // setErrors(error);
    }
  };

  return (
    <div>
      <div className="min-vh-100 bg-secondary bg-opacity-50">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col col-md-6">
              <div className="card p-3 my-5">
                <h2 className="text-center">Add Employee</h2>
                <form onSubmit={onSubmit}>
                  <Input
                    label="Name"
                    type="text"
                    className="form-control"
                    name="Name"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="enter your name..."
                  />
                  <Input
                    label="Email"
                    type="email"
                    className="form-control"
                    name="Email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="enter your email..."
                  />
                  <Input
                    label="Mobile"
                    type="number"
                    className={`form-control ${errors} ? 'is-invalid' : '' `}
                    name="Mobile"
                    id="mobile"
                    value={mobile}
                    onChange={(event) => setMobile(event.target.value)}
                    placeholder="enter your phone number..."
                  />
                  <Input
                    label="Birthdate"
                    type="date"
                    className="form-control"
                    name="Birthdate"
                    id="birthdate"
                    value={birthdate}
                    onChange={(event) => setBirthdate(event.target.value)}
                  />
                  <Input
                    label="Address"
                    type="text"
                    className="form-control"
                    name="Address"
                    id="address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    placeholder="Enter your address"
                  />
                  <div className="mb-3">
                    <button
                      type="submit"
                      disabled={
                        !name || !email || !mobile || !birthdate || !address
                      }
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
