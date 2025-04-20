import React from "react";
import {BrowserRouter} from "react-router-dom";
import Home from "../../pages/Home.jsx";

export default {
    title: "Pages/Home",
    component: Home,
    parameters: {
        layout: "fullscreen",
    }
}

const Template = (args) => (
    <BrowserRouter>
        <Home {...args} />
    </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
    loggedIn: false,
}