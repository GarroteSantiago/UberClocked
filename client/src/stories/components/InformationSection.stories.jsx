import InformationSection from '../../components/profile/InformationSection.jsx'
import InfoCard from "../../components/profile/InfoCard.jsx";

export default {
    title: 'Components/Profile/InformationSection',
    component: InformationSection,
}

const Template = (args) =>
    <InformationSection {...args}>
        <InfoCard title="Test" data="" popUpText="" popUpContent="" />
        <InfoCard title="Test" data="" popUpText="" popUpContent="" />

    </InformationSection>;
export const Default = Template.bind({});

Default.args = {
    title: "Test",
    addMethodPopUp: "",
    addPopUpText: "Test"
};