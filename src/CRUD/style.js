import styled from "styled-components";

export const Wrapper = styled.div`
  width: 500px;
  font-size: 20px;
`;

export const Cont = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

export const Btn = styled.button`
  width: 50px;
  color: white;
  height: 25px;
  background-color: blue;
  border: none;
  margin: 5px;

  :active {
    transform: scale(0.97);
  }
`;
export const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const Input = styled.input`
  width: 50%;
`;

export const Th = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const SaveBtn = styled.button`
  width: 50%;
  height: 35px;
  color: white;
  background-color: blue;
  border: none;
  margin: 5px;
  :active {
    transform: scale(0.97);
  }
`;
