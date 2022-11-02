import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Employees = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const getAllUsers = async () => {
    const response = await fetch(`http://localhost:5000/employee`);
    const users = await response.json();
    setUsers(users.result);
  };

  const onSearch = async () => {
    const response = await fetch(
      `http://localhost:5000/employee/search?id=${search}&name=${search}&email=${search}`
    );
    const { result } = await response.json();
    setUsers(result);
  };

  useEffect(() => {
    getAllUsers();
  }, [search]);

  console.log(users);
  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <h1>List Employee</h1>
        </div>
        <div className="col-lg-4">
          <input
            className="form-control mt-3"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div class="col-lg-2 ml-3 mt-3">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              onSearch();
            }}
            className="d-inline btn btn-outline-secondary"
          >
            search
          </button>
        </div>
        <div className="col-lg-2 mt-3">
          <Link to={"add"} type="button" className="d-inline btn btn-primary">
            Add
          </Link>
        </div>
        {/* <Employees search={search} setSearch={setSearch} /> */}
      </div>
      <div className="table table-responsive mt-3">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr className="col-md-12">
                  <th scope="row">{user.ID}</th>
                  <td>{user.Name}</td>
                  <td>{user.Email}</td>
                  <td>{user.Mobile}</td>
                  <td>
                    <button
                      type="button"
                      className=" btn btn-outline-info me-md-2 btn-sm"
                    >
                      <Link to={`detail/${user.ID}`}>Detail</Link>
                    </button>
                    <button
                      type="button"
                      className=" btn btn-outline-success me-md-2 btn-sm"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className=" btn btn-outline-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Employees;
