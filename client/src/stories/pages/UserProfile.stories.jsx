import React from "react";
import UserProfile from "../../screens/UserProfile.jsx";

export default {
    title: "Pages/UserProfile",
    component: UserProfile,
    parameters: {
        layout: "fullscreen",
    }
};

const Template = (args) => <UserProfile {...args} />;
const user = {
    FullName: "Full Name Placeholder",
    Cellphone: "Cellphone placeholder",
    Email: "Email placeholder",
    Country: "Country placeholder",
    Province: "Province placeholder",
    Locality: "Locality placeholder",
    PostCode: "PostCode placeholder",
}
const paymentMethods = [
    {
        Name: "Payment Method 1",
        Id: "1"
    },
    {
        Name: "Payment Method 2",
        Id: "2"
    },
    {
        Name: "Payment Method 3",
        Id: "3"
    },
    {
        Name: "Payment Method 4",
        Id: "4"
    },
    {
        Name: "Payment Method 5",
        Id: "5"
    },
]

const handleClick = () => {
    alert('Delete Button clicked')
};

const authenticationMethods = [
    {
        Name: "Authentication Method 1",
        Id: "1"
    },
    {
        Name: "Authentication Method 2",
        Id: "2"
    },
    {
        Name: "Authentication Method 3",
        Id: "3"
    },
    {
        Name: "Authentication Method 4",
        Id: "4"
    },
    {
        Name: "Authentication Method 5",
        Id: "5"
    },
]

export const Default = Template.bind({});
Default.args = {
    user: user,
    paymentMethods: paymentMethods,
    authenticationMethods: authenticationMethods,
    deleteAccountFunc: handleClick
};