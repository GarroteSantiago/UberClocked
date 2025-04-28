import React from "react";
import {BrowserRouter} from "react-router-dom";
import StoreHardware from "../../screens/StoreHardware.jsx";

export default {
    title: "Pages/StoreHardware",
    component: StoreHardware,
    parameters: {
        layout: "fullscreen",
    }
}
const Template = (args) => (
    <BrowserRouter>
        <StoreHardware {...args} />
    </BrowserRouter>
);

const pcProducts = [
    {
        //example:
        id: 1,
        name: 'AMD Ryzen 7 5800X',
        description: '8-Core, 16-Thread, Unlocked Desktop Processor',
        price: '$299',
        image: './Img/Ryzen7.jpeg',
        rating: 5,
    },
    {
        id: 2,
        name: 'NVIDIA GeForce RTX 3080',
        description: '10GB GDDR6X, Ray Tracing, DLSS, PCIe 4.0',
        price: '$699',
        image: './Img/RTX_3080.jpg',
        rating: 4,
    },{},{},{},{},{},{},{}
]


export const Default = Template.bind({});
Default.args = {
    loggedIn: true,
    products: pcProducts
}