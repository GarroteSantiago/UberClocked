import Stars from "../../components/Buttons_and_others/Stars.jsx";
import React from "react";

export default {
    title: 'Components/StarRating',
    component: Stars,
    argTypes: {
        totalStars: { control: 'number' },
        initialRating: { control: 'number' },
        onRate: { action: 'rated' },
    },
};

// Historia por defecto
const Template = (args) => <Stars {...args} />;

export const Default = Template.bind({});
Default.args = {
    totalStars: 5,
};
