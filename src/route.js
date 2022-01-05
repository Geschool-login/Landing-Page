import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import ProvPage from './view/ProvPage';

import HomePage from './view/HomePage'
import KabPage from './view/KabPage'

export default function Index() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/page/kab" element={<KabPage />} />
                <Route exact path="/page/prov" element={<ProvPage />} />
            </Routes>
        </Router>
    )
}
