import InfoCard from "../../../components/profile/InfoCard.jsx";
import DataField from "../../../components/form/DataField.jsx";

export default {
    title: 'Components/Profile/InfoCard',
    component: InfoCard,
}

const popUpContent =
    <>
        <DataField fieldName="New Email" fieldType="email" id="email"/>
    </>

const Template = (args) => <InfoCard {...args} />;
export const Default = Template.bind({});

Default.args = {
    title: "E-mail",
    data: "santiagogarrote2005@gmail.com",
    popUpContent: popUpContent,
    popUpText: "change your E-mail",
}
