import PopUpTextButton from "../../components/profile/PopUpTextButton.jsx";
import DataField from "../../components/form/DataField.jsx";

export default {
    title: "Components/PopUpTextButton",
    component: PopUpTextButton,
}

const Template = (args) => <PopUpTextButton {...args}>Hola</PopUpTextButton>;
export const Default = Template.bind({});

const tempPopUpContent =
    <>
        <DataField fieldType="text"/>
    </>

Default.args = {
    text: "do this test action",
    popUpContent: tempPopUpContent,
};