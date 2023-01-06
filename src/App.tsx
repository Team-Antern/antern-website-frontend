import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Global/Header/Header";
import Courses from "./Pages/Courses/Courses";
import Footer from "./Components/Global/Footer/Footer";
import Course from "./Pages/Course/Course";
import AboutUs from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import SectionProgressTrackContextProvider from "./Context/SectionProgressTrackContext";

function App() {
    const { pathname } = useLocation();
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <SectionProgressTrackContextProvider>
                            <Home />
                        </SectionProgressTrackContextProvider>
                    }
                />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:id" element={<Course />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
            {pathname !== "/" && <Footer />}
        </div>
    );
}

export default App;
