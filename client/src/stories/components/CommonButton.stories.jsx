import CommonButton from '../../components/CommonButton.jsx'

export default {
    title: "Components/CommonButton",
    component: CommonButton,
}

const Template = (args) => <CommonButton {...args} />;
export const Default = Template.bind({});
Default.args = {
    text: "action",
    action: () => alert('Button clicked'),
};