import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingContext } from "./LoadingContext";

export const CourseContext = createContext<CourseDetailsSchema | null>(null);

interface CourseContextProviderProps {
    children: React.ReactNode;
}

interface Instructor {
    profilePic: string;
    name: string;
    about: string;
}

interface Price {
    originalPrice: number;
    discountedPrice: number;
    currency: string;
    couponCode: string;
}

interface WayToGetSuccessfull {
    heading: string;
    desc: string;
}

export interface Review {
    author: {
        profilePic: string;
        name: string;
        position: string;
    };
    review: string;
}

interface Feature {
    heading: string;
    desc: string;
}

interface ThingCovered {
    image: string;
    pdfLink: string;
}

interface Faq {
    question: string;
    answer: string;
}

interface CourseDetailsSchema {
    title: string;
    coverImage: string;
    courseVideo: string;
    rating: {
        stars: number;
        total: number;
    };
    joinCourseLink: string;
    instructor: Instructor;
    price: Price;
    starts: string;
    financialAidAvail: boolean;
    totalEnrolled: number;
    totalLength: string;
    language: string;
    prerequisites: string[];
    wayToGetSuccessfull: WayToGetSuccessfull[];
    reviews: Review[];
    features: Feature[];
    lectureNotes: ThingCovered;
    courseSyllabus: ThingCovered;
    faqs: Faq[];
}

const CourseContextProvider = ({ children }: CourseContextProviderProps) => {
    const { id } = useParams();
    const [courseDetails, setCourseDetails] =
        useState<CourseDetailsSchema | null>(null);
    const [, startApiCall, finishApiCall] = useContext(LoadingContext);
    console.log(courseDetails);
    useEffect(() => {
        startApiCall && startApiCall();
        fetch(`https://api.antern.co/courses/${id}`)
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
