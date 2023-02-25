import React from 'react'
import { tableHeaders, sampleData } from '../constants';
import { MDBDataTable } from "mdbreact";

const conditionalRowStyles = [
    {
      when: row => row.colorCode,
      style: {
        backgroundColor: "green",
      }
    }
  ];

const DataTable = () => {
    // const [rowData, setRowData] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:8000/rowData').then(res=>res.json()).then((rowData) => {
    //         setRowData(rowData)
    //     })
    // }, [])}

    const data = {
        rows: sampleData,
        columns: tableHeaders
    }
    return (
        <>
            <MDBDataTable
                striped
                bordered
                small
                hover
                data={data}
                conditionalRowStyles={conditionalRowStyles}/>
        </>
    )
}

export default DataTable
