import DropDownMenuItem from "../../../components/dropDownMenu/DropDownMenuItem.jsx";
import DropDownMenu from "../../../components/dropDownMenu/DropDownMenu.jsx";
import { MemoryRouter } from "react-router-dom";

export default {
    title: "Components/DropDown/dropDownMenu",
    component: DropDownMenu,
}

const DropDownMenuItems = [
]

const Template = (args) =>
    <MemoryRouter>
        <DropDownMenu {...args}>
            <DropDownMenuItem optionText="Option 1" optionUrl="#" />
            <DropDownMenuItem optionText="Option 2" optionUrl="#" />
            <DropDownMenuItem optionText="Option 3" optionUrl="#" />
            <DropDownMenuItem optionText="Option 4" optionUrl="#" />
            <DropDownMenuItem optionText="Option 5" optionUrl="#" />
        </DropDownMenu>
    </MemoryRouter>


export const Default = Template.bind({});
Default.args = {
    menuTitle: "placeHolder Title",
};