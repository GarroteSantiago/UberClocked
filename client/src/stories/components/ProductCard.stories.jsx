import React from 'react';
import ProductCard from '../../components/store/ProductCard.jsx';

export default {
    title: 'Components/Store/ProductCard',
    component: ProductCard,
};

const product ={
    image: "/nonFile",
    alt: "Template",
    title: "Placeholder product",
    description: "This is a placeholder product",
    price: "0000.00",
}

const Template = (args) => <ProductCard {...args} />;
export const Default = Template.bind({});
Default.args = {
    product: product,
}