import React from "react"
import EmployeeList from "./components/EmployeeList"

const App = () => {
  return (
    <div className=" container-fluid">
      <div className="row mb-4 bg-primary-subtle">
        <div className="container">
          <div className="col-md-12 py-3 ">
            <h1 className="fw-normal text-center">Employee Register</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <EmployeeList />
      </div>
    </div>
  )
}

export default App
