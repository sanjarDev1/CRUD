import { Collapse } from "antd";
import React, { useEffect, useState } from "react";
import { Btn, Table, Cont, Td, Th, Wrapper, Input, SaveBtn } from "./style";

const Crud = () => {
  const hotira = localStorage.getItem("WebCode");

  const [data, setData] = useState(
    hotira
      ? JSON.parse(hotira)
      : [
          { id: 1, name: "Fozilhon" },
          { id: 2, name: "Qobiljon" },
          { id: 3, name: "Sanjarbek" },
          { id: 4, name: "Nodir" },
        ]
  );

  localStorage.setItem("WebCode", JSON.stringify(data));

  const [names, setNames] = useState("");
  const [select, setSelect] = useState(null);
  const [title, setTitle] = useState("");

  //  GET DELETE

  const getDelete = (item) => {
    const newArray = data.filter((value) => value.id !== item);
    setData(newArray);
    console.log(newArray);
    setSelect(null);
  };

  // SAVE
  const getSave = () => {
    const newData = [
      ...data,
      {
        id: data.length + 1,
        name: names,
      },
    ];
    names && setData(newData);
  };

  // Edit

  const getEdit = (value) => {
    setSelect(value.id);
    setTitle(value.name);
  };

  const getEditSave = () => {
    const newArraying = data.map((value) =>
      select === value.id ? { ...value, name: title } : value
    );
    setData(newArraying);
    setSelect(null);
  };

  return (
    <Wrapper>
      <Cont>
        <Input
          type="text"
          onChange={(e) => setNames(e.target.value)}
          placeholder="write name..."
        />
        <SaveBtn onClick={getSave} value={null}>
          Save
        </SaveBtn>
      </Cont>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Action</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => (
            <tr key={value.id}>
              <Td>{value.id}</Td>
              <Td>
                {select === value.id ? (
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                ) : (
                  value.name
                )}
              </Td>
              <Td>
                <Btn onClick={() => getDelete(value.id)}>delete</Btn>
                {select === value.id ? (
                  <Btn onClick={getEditSave}>save</Btn>
                ) : (
                  <Btn onClick={() => getEdit(value)}>edit</Btn>
                )}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
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
