import React, { useEffect, useState } from 'react'
import cloneDeep from "lodash/cloneDeep";
import { tableHeaders, sampleData, countPerPage } from '../constants';

const DataTable = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:8000/data').then(res=>res.json()).then((data) => {
    //         setData(data)
    //     })
    // }, [])}

    const [collection, setCollection] = React.useState(
        cloneDeep(sampleData.slice(0, countPerPage))
      );

      

      const headRow = () => {
        return Object.values(tableHeaders).map((title, index) => (
            <td key={index}>{title}</td>
        ));
    };
    
    const tableRows = rowData => {
        const { key, index } = rowData;
        const tableCell = Object.keys(tableHeaders);
        const columnData = tableCell.map((keyD, i) => {
            return <td key={i}>{key[keyD]}</td>;
        });
    
        return <tr key={index}>{columnData}</tr>;
    };
    
    const tableData = () => {
        return collection.map((key, index) => tableRows({ key, index }));
    };

    const [searchVal, setSearchVal] = useState("")
    const search = (searchVal) => {
        setSearchVal(searchVal)
    }

    return (
        <>
            <table class="table table-hover">
                <thead>
                    <tr>{headRow()}</tr>
                </thead>
                <tbody>{tableData()}</tbody>
            </table>
        </>
    )
}

export default DataTable
