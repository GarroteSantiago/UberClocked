import ToggleDownButton from '../../components/Buttons_and_others/ToggleDownButton.jsx'

export default {
    title: "Components/ToggleDownButton",
    component: ToggleDownButton,
}

const Template = (args) => <ToggleDownButton {...args} />;
export const Default = Template.bind({});
Default.args = {
    text: "action",
    action: () => alert('Button displayed'),
};