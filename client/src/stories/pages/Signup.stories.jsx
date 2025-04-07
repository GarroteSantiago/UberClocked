import React from "react";
import Signup from "../../pages/Signup.jsx";
import { BrowserRouter } from "react-router-dom"; // Import Router

export default {
    title: "Pages/Signup",
    component: Signup,
    parameters: {
        layout: "fullscreen",
    }
};

const Template = (args) => (
    <BrowserRouter>
        <Signup {...args} />
    </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};