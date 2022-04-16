import React, { memo } from "react";

function HeaderRow() {
    return (
        <thead>
            <tr className="table-warning" style={{ color: "black" }}>
                <th>Name</th>
                <th>Gender</th>
                <th>Home world</th>
                <th>Details</th>
            </tr>
        </thead>
    );
}

export default memo(HeaderRow);
