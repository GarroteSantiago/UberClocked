import React from 'react';
import ProductCarousel from '../../components/store/ProductCarousel.jsx';
import ProductCard from "../../components/store/ProductCard.jsx";

export default {
    title: 'Components/Store/ProductCarousel',
    component: ProductCarousel,
};

const products = [
    {
        id: 1,
        image: "/nonFile",
        alt: "Template",
        name: "Placeholder product",
        description: "Lorem ipsum dolor sit amet consectetur sadipscing elit, sed do eiusmod consetetur. Lorem ipsum dolor sit amet consectetur sadipscing elit, sed do eiusmod consetetur.",
        rating: 5,
        price: "0000.00",
    },
    {
        id: 2,
        image: "/nonFile",
        alt: "Template",
        name: "Placeholder product",
        description: "Lorem ipsum dolor sit amet consectetur sadipscing elit, sed do eiusmod consetetur. Lorem ipsum dolor sit amet consectetur sadipscing elit, sed do eiusmod consetetur.",
        rating: 5,
        price: "0000.00",
    },
    {
        id: 3,
        image: "/nonFile",
        alt: "Template",
        name: "Placeholder product",
        description: "Lorem ipsum dolor sit amet consectetur sadipscing elit, sed do eiusmod consetetur. Lorem ipsum dolor sit amet consectetur sadipscing elit, sed do eiusmod consetetur.",
        rating: 5,
        price: "0000.00",
    },
    {},{},{},{},{},{},{},{},{}
]



const Template = (args) =>
    <ProductCarousel {...args} >
        {products.map((product) => (
            <ProductCard product={product} />
        ))}
    </ProductCarousel>;
export const Default = Template.bind({});
Default.args = {}