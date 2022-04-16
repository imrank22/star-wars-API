import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Main from './containers/main'
import CharacterDetail from './containers/characterDetail'

function App() {
    return(
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/detail/:characterName" element={<CharacterDetail />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;