import React, { useEffect, useRef } from "react";
import { Container, Content, Option, SelectChevron } from "./styles";
import { BsChevronDown } from "react-icons/bs";

interface SelectProps {
    options: {
        value: string;
        label: string;
    }[];
}

const Select = ({ options }: SelectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);
    useEffect(() => {
        if (containerRef.current && selectRef.current) {
            containerRef.current.style.width = `${
                selectRef.current.clientWidth + 18
            }px`;
        }
    }, []);
    return (
        <Container ref={containerRef}>
            <Content ref={selectRef}>
                {options.map(({ value, label }, index) => (
                    <Option value={value} key={index}>
                        {label}
                    </Option>
                ))}
            </Content>
            <SelectChevron>
                <BsChevronDown />
            </SelectChevron>
        </Container>
    );
};

export default Select;
