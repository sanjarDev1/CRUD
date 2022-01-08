import React, { useState } from "react";

const Crud = () => {
  const [data, setData] = useState([
    { id: 1, name: "Fozilhon" },
    { id: 2, name: "Qobiljon" },
    { id: 3, name: "Sanjarbek" },
    { id: 4, name: "Nodir" },
  ]);

  const [names, setNames] = useState("");
  const [select, setSelect] = useState(null);
  const [title, setTitle] = useState('');

  const getDelete = (item) => {
    const newArray = data.filter((value) => value.id !== item);
    setData(newArray);
    setSelect(null)
  };

  const getSave = () => {
    const newData = [
      ...data,
      {
        id: data.length + 1,
        name: names,
      },
    ];
    setData(newData);
  };

  // Edit

  const getEdit = (value) => {
    setSelect(value.id);
    setTitle(value.name)
  };


  const getEditSave = ()=>{
      const newArraying = data.map((value)=>select === value.id ? {...value, name: title} : value)
      setData(newArraying);
      setSelect(null);

  }

  return (
    <div>
      <h1>{names}</h1>
      <input
        type="text"
        onChange={(e) => setNames(e.target.value)}
        placeholder="write name..."
      />
      <button onClick={getSave} value={null}>Save</button>
      <table border="1px" style={{ width: "250px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>
                {select === value.id ? (
                  <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                ) : (
                  value.name
                )}
              </td>
              <td>
                <button onClick={() => getDelete(value.id)}>delete</button>
                {select === value.id ? (
                  <button onClick={getEditSave}>save</button>
                ) : (
                  <button onClick={() => getEdit(value)}>edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;

/*
Editda 

1)  inputga aylantirish
2)  inputni ichiga eski qiymatni qoysih
3)  inputni iqymatni ozgartirish
4)  inputni save qilish



 */
