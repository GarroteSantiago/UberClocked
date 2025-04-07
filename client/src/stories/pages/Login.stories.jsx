import React from "react";
import Login from "../../pages/Login.jsx";
import { BrowserRouter } from "react-router-dom"; // Import Router

export default {
    title: "Pages/Login",
    component: Login,
    parameters: {
        layout: "fullscreen",
    }
};

const Template = (args) => (
    <BrowserRouter>
        <Login {...args} />
    </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};