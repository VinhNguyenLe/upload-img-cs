import { useState, useEffect } from "react"
import Employee from "./Employee"
import axios from "axios"

const EmployeeList = () => {
  const [employeeList, setEmployeeList] = useState([])

  const employeeAPI = (url = "https://localhost:7241/api/Employee") => {
    return {
      fetchAll: () => axios.get(url),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    }
  }

  const refreshEmployeeList = () => {
    employeeAPI()
      .fetchAll()
      .then((res) => {
        setEmployeeList(res.data)
      })
      .catch((err) => console.log(err))
  }

  const addOrEdit = (formData, onSuccess) => {
    employeeAPI()
      .create(formData)
      .then((res) => {
        onSuccess()
        refreshEmployeeList()
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    refreshEmployeeList()
    console.log(employeeList)
  }, [])
  return (
    <div className="row">
      <div className="col-md-4">
        <Employee addOrEdit={addOrEdit} />
      </div>
      <div className="col-md-8">
        <h3>List of Employee</h3>

        <div className="row">
          {employeeList.map((item) => (
            <div className="col-4" key={item.id}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={item.imageSrc}
                  alt="Card image cap"
                  style={{
                    aspectRatio: "1/1",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <p className="card-text">{item.employeeName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmployeeList
