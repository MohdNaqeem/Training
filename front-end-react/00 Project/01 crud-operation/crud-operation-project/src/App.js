import { useEffect, useState } from "react";
import { EmployeeData } from "./employeeData";

function App() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setData(EmployeeData);
  }, []);

  // to Edit the item
  const handleEdit = (id) => {
    const updateData = data.filter((item) => item.id === id);
    if (updateData !== undefined) {
      setIsUpdate(true);
      setId(id);
      setFirstName(updateData[0].firstName);
      setLastName(updateData[0].lastName);
      setAge(updateData[0].age);
    }
  };

  // to delete the item
  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are sure to delete this item?")) {
        const filterData = data.filter((item) => item.id !== id);
        setData(filterData);
      }
    }
  };

  // to save to item
  const handleSave = () => {
    console.log(handleSave);
  };

  // to clear the item from input
  const handleClear = () => {
    setId(0);
    setFirstName("");
    setLastName("");
    setAge("");
    setIsUpdate(false);
  };

  // tp update the item 
  const handleUpdate = () =>{
    const index = data.map((item)=>{
      return item.id
    }).indexOf(id)

    const update = [...data]
    update[index].firstName = firstName
    update[index].lastName = lastName
    update[index].age = age

    setData(update)
    handleClear()
  }

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <div>
          <label>First Name :</label>
          <input
            placeholder="Enter your first name"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div>
          <label>Last Name :</label>
          <input
            placeholder="Enter your last name"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div>
          <label>Age :</label>
          <input
            placeholder="Enter your age"
            type="number"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
          &nbsp;
        </div>
        <div>
          {!isUpdate ? (
            <button className="btn btn-primary" onClick={() => handleSave()}>
              Save
            </button>
          ) : (
            <button className="btn btn-primary" onClick={()=> handleUpdate()}>Update</button>
          )}
          <button className="btn btn-danger" onClick={() => handleClear()}>
            Clear
          </button>
        </div>
      </div>
      <table className="table table-hover custom-table">
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
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
  );
}

export default App;
