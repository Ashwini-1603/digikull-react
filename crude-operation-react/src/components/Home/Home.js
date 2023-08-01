import React, { useState } from "react";

export default function Home() {
  const [input, setInput] = useState({ name: "", email: "" });
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  // this function is used to  grab the input data from from
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log("vale", [e.target.name]);
  };
  //this function is used to submit the data;
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (editClick){
      const tempTabledata = tableData;
      Object.assign(tempTabledata[editIndex],input);
      setTableData([...tempTabledata])
      console.log(tableData);
    } else {
      setTableData([...tableData, input]);
      setInput({ name: "", email: "" });
    }
  };
  console.log("tabledata is",tableData);
  // this function is use for delete the items from table;
  const deleteHandle = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  // console.log("tableData", tableData);
  // this function is take value from table and place it in the form
  const handleEdit = (index) => {
    const temData = tableData[index];
    setInput({
      name: temData.name,
      email: temData.email,
    });
    setEditClick(true);
    setEditIndex(index);
    console.log("temData", temData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
        </div>
        <button> {editClick ? "Update" : "Add"}</button>
      </form>
      <div className="table-div">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={()=> handleEdit(i)}>Edit</button>
                  <button onClick={() => deleteHandle(i)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
