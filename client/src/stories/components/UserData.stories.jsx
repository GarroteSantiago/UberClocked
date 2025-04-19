import UserData from '../../components/profile/UserData.jsx';

export default {
    title: "Components/Profile/UserData",
    component: UserData,
}

const Template = (args) => <UserData {...args} />;
export const Default = Template.bind({});

Default.args = {
    userName: "Username placeholder",
    userEmail: "useremail placeholder",
};