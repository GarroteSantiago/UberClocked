import React from 'react';
import ProductCard from '../../components/store/ProductCard.jsx';

export default {
    title: 'Components/Store/ProductCard',
    component: ProductCard,
};

const product ={
    id: 1,
    image: "/nonFile",
    alt: "Template",
    name: "Placeholder product",
    description: "Lorem ipsum dolor sit amet consectetur sadipscing elit, sed do eiusmod consetetur. Lorem ipsum dolor sit amet consectetur sadipscing elit, sed do eiusmod consetetur.",
    rating: 5,
    price: "0000.00",
}

const Template = (args) => <ProductCard {...args} />;
export const Default = Template.bind({});
Default.args = {
    product: product,
}