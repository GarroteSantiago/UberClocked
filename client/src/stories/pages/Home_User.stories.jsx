import React from "react";
import {BrowserRouter} from "react-router-dom";
import Home_User from "../../pages/Home_User.jsx";

export default {
    title: "Pages/Home_User",
    component: Home_User,
    parameters: {
        layout: "fullscreen",
    }
}
const Template = (args) => (
    <BrowserRouter>
        <Home_User {...args} />
    </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {}