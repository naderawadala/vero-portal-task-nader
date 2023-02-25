import React, { useEffect, useState } from 'react'
import cloneDeep from "lodash/cloneDeep";
import { tableHeaders, sampleData, countPerPage } from '../constants';
import { MDBDataTable } from "mdbreact";

const DataTable = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:8000/data').then(res=>res.json()).then((data) => {
    //         setData(data)
    //     })
    // }, [])}

    const data = {
        rows: sampleData,
        columns: tableHeaders
    }

    return (
        <>
            <MDBDataTable striped bordered hover data={data} />;
        </>
    )
}

export default DataTable
