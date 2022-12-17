import React from "react";
import Select from "../../Global/Select/Select";
import { Container, Content, Filters, Sort } from "./styles";

const FilterSorts = () => {
    return (
        <Container>
            <Content>
                <Filters>
                    <Select
                        options={[
                            {
                                value: "Subject",
                                label: "Subject",
                            },
                        ]}
                    />
                    <Select
                        options={[
                            {
                                value: "Skills",
                                label: "Skills",
                            },
                        ]}
                    />
                    <Select
                        options={[
                            {
                                value: "Level",
                                label: "Level",
                            },
                        ]}
                    />
                    <Select
                        options={[
                            {
                                value: "Duration",
                                label: "Duration",
                            },
                        ]}
                    />
                </Filters>
                <Sort>
                    <span>Sort by</span>
                    <Select
                        options={[
                            {
                                value: "Newest to oldest",
                                label: "Newest to oldest",
                            },
                        ]}
                    />
                </Sort>
            </Content>
        </Container>
    );
};

export default FilterSorts;
