import React, { Suspense, useContext, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { LoadingContext } from "./Context/LoadingContext";
import Loading from "./Components/Global/Loading/Loading";
import CourseContextProvider from "./Context/CourseContext";
import Footer from "./Components/Global/Footer/Footer";
const Home = React.lazy(() => import("./Pages/Home/Home"));
const Courses = React.lazy(() => import("./Pages/Courses/Courses"));
const Course = React.lazy(() => import("./Pages/Course/Course"));
const AboutUs = React.lazy(() => import("./Pages/About/About"));
const TermsAndConditions = React.lazy(
    () => import("./Pages/TermsAndConditions/TermsAndConditions")
);
const PrivacyPolicy = React.lazy(
    () => import("./Pages/PrivacyPolicy/PrivacyPolicy")
);
import "swiper/css";
import CancelationPolicy from "./Pages/CancelationPolicy/CancelationPolicy";
import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
    const { pathname } = useLocation();
    const [loading] = useContext(LoadingContext);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [pathname]);
    return (
        <div className="App">
            {loading && <Loading />}
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<Loading />}>
                            <Home />
                        </Suspense>
                    }
                />
                <Route
                    path="/courses"
                    element={
                        <Suspense fallback={<Loading />}>
                            <Courses />
                        </Suspense>
                    }
                />
                <Route
                    path="/courses/:id"
                    element={
                        <Suspense fallback={<Loading />}>
                            <CourseContextProvider>
                                <Course />
                            </CourseContextProvider>
                        </Suspense>
                    }
                />
                <Route
                    path="/about-us"
                    element={
                        <Suspense fallback={<Loading />}>
                            <AboutUs />
                        </Suspense>
                    }
                />
                <Route
                    path="/privacy-policy"
                    element={
                        <Suspense fallback={<Loading />}>
                            <PrivacyPolicy />
                        </Suspense>
                    }
                />
                <Route
                    path="/terms-and-conditions"
                    element={
                        <Suspense fallback={<Loading />}>
                            <TermsAndConditions />
                        </Suspense>
                    }
                />
                <Route
                    path="/cancelation-policy"
                    element={
                        <Suspense fallback={<Loading />}>
                            <CancelationPolicy />
                        </Suspense>
                    }
                />
                <Route
                    path="/contact-us"
                    element={
                        <Suspense fallback={<Loading />}>
                            <ContactUs />
                        </Suspense>
                    }
                />
            </Routes>
            {pathname !== "/" && <Footer />}
        </div>
    );
}

export default App;
