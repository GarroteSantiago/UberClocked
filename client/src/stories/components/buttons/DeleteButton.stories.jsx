import DeleteAccountButton from '../../../components/Buttons_and_others/DeleteAccountButton.jsx'

export default {
    title: "Components/Button/DeleteAccountButton",
    component: DeleteAccountButton,
}

const Template = (args) => <DeleteAccountButton {...args} />;
export const Default = Template.bind({});
Default.args = {
    onClick: () => alert("Clicked")
};