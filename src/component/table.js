import React from 'react';

const Table = (props) => {
    const dataTable = props.table;
    var index = 0
    const item = dataTable.map((entry) => {
        index += 1
        return(
            <tr key={entry[0]}>
                <td className="white-text">{index}</td>
                <td className="white-text">{entry[0]}</td>
                <td className="white-text">{entry[1]}</td>
            </tr>
        )
    })
    if(dataTable.length !== 0) {
        return (
            <div className="row margin">
                <div className="col s12 l6 offset-l3">
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th className="thin white-text"><h5>Sr. no</h5></th>
                                <th className="thin white-text"><h5>Word</h5></th>
                                <th className="thin white-text"><h5>Frequency</h5></th>
                            </tr>
                        </thead>
                        <tbody>
                            {item}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }     
}

export default Table;