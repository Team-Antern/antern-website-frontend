import React, { useContext, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Global/Header/Header";
import Courses from "./Pages/Courses/Courses";
import Footer from "./Components/Global/Footer/Footer";
import Course from "./Pages/Course/Course";
import AboutUs from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import SectionProgressTrackContextProvider from "./Context/SectionProgressTrackContext";
import Loading from "./Components/Global/Loading/Loading";
import { LoadingContext } from "./Context/LoadingContext";
import CourseContextProvider, { CourseContext } from "./Context/CourseContext";

function App() {
    const { pathname } = useLocation();
    const [loading] = useContext(LoadingContext);
    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth",
    //     });
    // }, [pathname]);
    return (
        <div className="App">
            {loading && <Loading />}
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
                <Route
                    path="/courses/:id"
                    element={
                        <CourseContextProvider>
                            <Course />
                        </CourseContextProvider>
                    }
                />
                <Route path="/about-us" element={<AboutUs />} />
                <Route
                    path="/terms-and-conditions"
                    element={<TermsAndConditions />}
                />
            </Routes>
            {pathname !== "/" && <Footer />}
        </div>
    );
}

export default App;
