import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Global/Header/Header";
import Courses from "./Pages/Courses/Courses";
import Footer from "./Components/Global/Footer/Footer";
import Course from "./Pages/Course/Course";
import AboutUs from "./Pages/About/About";
import Home from "./Pages/Home/Home";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/course/:id" element={<Course />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
