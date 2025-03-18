import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import pages from './routes';
import './App.css';
import { useEffect, useState } from "react";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(
      localStorage.getItem("isAuthenticated") === "true"
    );
    
    return (
        <div className="App font-body">
            <Router>
                <Routes>
                    {pages.map((Page, index) => (
                        <Route key={index} path={Page.path} element={<Page.Component isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>} />
                    ))}
                </Routes>
            </Router>
        </div>
    );
}

export default App;