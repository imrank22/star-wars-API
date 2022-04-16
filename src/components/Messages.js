import React, { useEffect, useState, memo } from "react";

function Messages({ pageNumber }) {
    const [loadingMessage, setLoadingMessage] = useState("I sense much fear in you");
    useEffect(() => {
        setLoadingMessage("Loading...");
    }, [pageNumber]);

    return (
        <div>
            <button style={{ marginTop: 60, padding: 20, fontSize: 30 }} className="btn btn-warning">
                {loadingMessage}
                <span className="spinner-grow spinner-grow-sm"></span>
            </button>
        </div>
    );
}
export default memo(Messages);
