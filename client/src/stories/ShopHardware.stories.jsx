import React from "react";
import {BrowserRouter} from "react-router-dom";
import ShopPcHardware from "../../src/pages/ShopPcHardware.jsx";

export default {
    title: "Pages/ShopPcHardware",
    component: ShopPcHardware,
    parameters: {
        layout: "fullscreen",
    }
}
const Template = (args) => (
    <BrowserRouter>
        <ShopPcHardware {...args} />
    </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {}