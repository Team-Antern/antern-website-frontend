import React from "react";
import { NavLink } from "react-router-dom";
import { BreadCrumbArrow, BreadCrumbLink, Container } from "./styles";
import { HiOutlineChevronRight } from "react-icons/hi";

interface BreadCrumbsProps {
    path: {
        to: string;
        text: string;
    }[];
}

const BreadCrumbs = ({ path }: BreadCrumbsProps) => {
    return (
        <Container>
            {path.map(({ to, text }, index) => (
                <React.Fragment key={index}>
                    <NavLink to={to}>
                        {({ isActive }) => (
                            <BreadCrumbLink isActive={isActive}>
                                {text}
                            </BreadCrumbLink>
                        )}
                    </NavLink>
                    {index !== path.length - 1 && (
                        <BreadCrumbArrow>
                            <HiOutlineChevronRight />
                        </BreadCrumbArrow>
                    )}
                </React.Fragment>
            ))}
        </Container>
    );
};

export default BreadCrumbs;
