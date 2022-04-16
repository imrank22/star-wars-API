import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";

export default function Top({ handleSearch }) {
    return (
        <div>
            <header className="App-header">
                <Header />
            </header>
            <SearchBar handleSearch={handleSearch} />
        </div>
    );
}
