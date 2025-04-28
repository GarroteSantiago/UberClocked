import ImageButton from '../../../components/Buttons_and_others/ImageButton.jsx'
import {BrowserRouter} from "react-router-dom";

export default {
    title: "Components/Button/ImageButton",
    component: ImageButton,
}

const Template = (args) =>
    <BrowserRouter>
        <ImageButton {...args} />
    </BrowserRouter>
;
export const Default = Template.bind({});

Default.args = {
    img:"/NonFile",
    alt:"Template",
    url:"#"
};