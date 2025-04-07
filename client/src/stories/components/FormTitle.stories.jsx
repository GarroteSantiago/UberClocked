import FormTitle from '../../components/form/FormTitle.jsx';

export default {
    title: "Components/Title",
    component: FormTitle,
}

const Template = (args) => <FormTitle {...args} />;
export const Default = Template.bind({});

Default.args = {
    text: 'placeHolder',
};