import PopUpTextButton from "../../components/profile/PopUpTextButton.jsx";
import DataField from "../../components/form/DataField.jsx";

export default {
    title: "Components/Profile/PopUpTextButton",
    component: PopUpTextButton,
}

const Template = (args) => <PopUpTextButton {...args}>Test pop up button</PopUpTextButton>;
export const Default = Template.bind({});

const tempPopUpContent =
    <>
        <DataField fieldType="text"/>
    </>

Default.args = {
    popUpText: "Placeholder question?",
    popUpContent: tempPopUpContent,
};