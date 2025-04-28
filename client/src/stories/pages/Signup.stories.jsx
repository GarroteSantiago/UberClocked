import React from "react";
import SignUp from "../../screens/SignUp/SignUp.jsx";
import { BrowserRouter } from "react-router-dom"; // Import Router

export default {
    title: "Pages/SignUp",
    component: SignUp,
    parameters: {
        layout: "fullscreen",
    }
};

const Template = (args) => (
    <BrowserRouter>
        <SignUp {...args} />
    </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};