import React, { useRef, useState } from 'react'
import DataTable from 'react-data-table-component';

function Table({ handleDelete, handleUpdate, users }) {
    const searchRef = useRef();
    const [textFilter, setTextFilter] = useState("");

    let usersData = users.filter((user) => {
        return user.email.toLowerCase().includes(textFilter.toLowerCase());
    });

    let columns = [
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: "Password",
            selector: (row) => row.password,
            sortable: true,
        },
        {
            name: "Action",
            selector: (row) => {
                return (
                    <>
                        <button
                            className="btn btn-danger me-3"
                            onClick={() => handleDelete(row.id)}
                        >
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        <button
                            className="btn btn-warning"
                            onClick={() => handleUpdate(row.id)}
                        >
                            <i class="fa-solid fa-pencil"></i>
                        </button>
                    </>
                );
            },
        },
    ];
    return (
        <div className="containerv mt-5">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="d-flex justify-content-end align-items-center gap-2 my-3">
                        <i className="fa-solid fa-magnifying-glass fs-5 text-secondary"></i>
                        <input
                            ref={searchRef}
                            className="form-control w-50"
                            type="text"
                            name="search"
                            placeholder="Search here..."
                            onChange={(e) => setTextFilter(e.target.value)}
                        />
                    </div>

                    <DataTable

                        title="User Data"
                        data={usersData}
                        columns={columns}
                        pagination
                        selectableRows
                        highlightOnHover
                        pointerOnHover
                        responsive
                        fixedHeader
                        fixedHeaderScrollHeight="300px"
                    />
                </div>
            </div>
        </div>
    );
}

export default Table
