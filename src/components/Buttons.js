import React from "react";

export default function Buttons({ changePage }) {
    const pages = 9;
    const components = [];
    for (let i = 1; i <= pages; i++) {
        components.push(
            <button onClick={() => changePage("number", i)} key={i} className="btn btn-warning btn-outline-dark">
                {i}
            </button>
        );
    }

    return (
        <div>
            <button onClick={() => changePage("previous")} className="btn btn-danger" style={{ width: "auto" }}>
                Previous
            </button>
            {components}
            <button onClick={() => changePage("next")} className="btn btn-danger" style={{ width: "auto" }}>
                Next
            </button>
        </div>
    );
}
