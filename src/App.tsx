import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Global/Header/Header";
import Courses from "./Pages/Courses/Courses";
import Footer from "./Components/Global/Footer/Footer";
import Course from "./Pages/Course/Course";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/courses" element={<Courses />} />
                <Route path="/course/:id" element={<Course />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
