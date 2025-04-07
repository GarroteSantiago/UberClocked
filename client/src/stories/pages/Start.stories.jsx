import React from "react";
import Start from "../../pages/Start.jsx";
import { BrowserRouter } from "react-router-dom"; // Import Router

export default {
    title: "Pages/Start",
    component: Start,
    parameters: {
        layout: "fullscreen",
    }
};

const Template = (args) => (
    <BrowserRouter>
        <Start {...args} />
    </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};