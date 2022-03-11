import React from 'react';
import Button from './components/Button';
import AppStateManager from './containers/AppStateManager';
import Menu from './containers/Menu';
import { BrowserRouter } from "react-router-dom";
function App() {
    return (
        <div className="">
            <BrowserRouter>
                <AppStateManager />
            </BrowserRouter>
        </div>
    );
}

export default App;
