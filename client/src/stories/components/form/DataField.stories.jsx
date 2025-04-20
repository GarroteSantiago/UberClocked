import DataField from '../../../components/form/DataField.jsx';

export default {
    title: "Components/Form/DataField",
    component: DataField,
}

const Template = (args) => <DataField {...args} />;
export const Default = Template.bind({});

Default.args = {
    fieldName: "fieldName",
};