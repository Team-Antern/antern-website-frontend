import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingContext } from "./LoadingContext";

export const CourseContext = createContext<CourseDetailsSchema | null>(null);

interface CourseContextProviderProps {
    children: React.ReactNode;
}

interface Instructors {
    profilePic: string;
    name: string;
    about: string;
}

interface Lecture {
    name: string;
    totalLength: number;
}

interface Section {
    name: string;
    totalLength: number;
    lectures: Lecture[];
}

export interface Review {
    author: {
        profilePic: string;
        name: string;
        position: string;
    };
    review: string;
}

interface CourseDetailsSchema {
    title: string;
    coverImage: string;
    rating: {
        stars: number;
        total: number;
    };
    instructors: Instructors[];
    price: number;
    starts: string;
    financialAidAvail: boolean;
    totalEnrolled: number;
    about: string[];
    totalLength: string;
    language: string;
    skillsYouWillGain: string[];
    requirements: string[];
    sections: Section[];
    reviews: Review[];
}

const CourseContextProvider = ({ children }: CourseContextProviderProps) => {
    const { id } = useParams();
    const [courseDetails, setCourseDetails] =
        useState<CourseDetailsSchema | null>(null);
    const [, startApiCall, finishApiCall] = useContext(LoadingContext);
    console.log(courseDetails);
    useEffect(() => {
        startApiCall && startApiCall();
        fetch(`https://api.npoint.io/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setCourseDetails(data);
                finishApiCall && finishApiCall();
            });
    }, []);

    if (!courseDetails) return null;
    return (
        <CourseContext.Provider value={courseDetails}>
            {children}
        </CourseContext.Provider>
    );
};

export default CourseContextProvider;
