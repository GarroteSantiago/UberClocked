import FormTitle from '../../../components/form/FormTitle.jsx';

export default {
    title: "Components/Form/Title",
    component: FormTitle,
}

const Template = (args) => <FormTitle {...args} />;
export const Default = Template.bind({});

Default.args = {
    text: 'placeHolder',
};