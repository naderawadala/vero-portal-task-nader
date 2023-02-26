import React, { useState, useEffect } from 'react'
import { tableHeaders } from '../../constants';
import { MDBDataTable } from "mdbreact";
import { MDBSpinner } from 'mdb-react-ui-kit';

// const conditionalRowStyles = [
//     {
//         when: row => row.colorCode != null,
//         style: {
//             backgroundColor: "green",
//         }
//     }
// ]


const DataTable = () => {
    const [rowData, setRowData] = useState(null);

    let callApi = async () => {
        try {
            fetch('http://localhost:8000').then(res => res.json()).then((rowData) => {
                setRowData(rowData.data)
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        callApi();

        setInterval(callApi, 1000 * 60 * 60)
    }, [])

    const data = {
        rows: rowData,
        columns: tableHeaders
    }
    return (
        <>{rowData ?
            <MDBDataTable
                striped
                bordered
                small
                hover
                data={data}
                //conditionalRowStyles={conditionalRowStyles} 
            />
            :
            <div className='d-flex justify-content-center'>
                <MDBSpinner role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            </div>
        }
        </>
    )
}

export default DataTable
