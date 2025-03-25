import styled from "styled-components";

export const Content = styled.div`
  margin: 0 auto;
  max-width: 80vw;
  padding: 20px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);


  
  th {
      background-color: #ccc;
      color: white;
      padding: 12px;
      text-align: center;
      font-weight: bold;
  }
  
  th:first-child {
      border-radius: 8px 0 0 0;
  }
  
  th:last-child {
      border-radius: 0 8px 0 0;
  }


      
  tr {
        border-bottom: 1px solid #e6f4ff;
    }

    tr, td {
        min-height: 40px;
        height: 40px;
    }

    tr:hover > td {
        background-color: #e6f4ff;
    }

    td {
        padding: 0 0 0 10px;
        text-align: center;
    }

    .btn-pdf {
      cursor: pointer;
    }
`;

export const Th = styled.th`

`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: left;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background: #f2f2f2;
  }
  &:hover {
    background: #e9ecef;
  }
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 15vh;
    border: 1px dashed #C1C1C1;
    border-radius: 8px;
    color: #C1C1C1;
    text-align: center;

`;

export const ButtonSettings = styled.button`
    display: flex;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    padding: 15px;
    color: #FFF;
    border-radius: 15px;
    background-color: #000;

    &:hover {
        background-color: rgba(237, 237, 237, 0.734);
        color: #333;
    }
`;

export const Input = styled.input`
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export const FilterRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 10px;
  
  border-radius: 8px;
  background: #f8f9fa;

  td {
    padding: 8px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  background: white;
`;