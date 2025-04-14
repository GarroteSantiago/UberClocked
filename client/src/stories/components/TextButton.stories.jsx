import TextButton from "../../components/Buttons_and_others/TextButton.jsx"
import { MemoryRouter } from "react-router-dom";

export default {
    title: "Components/TextButton",
    component: TextButton,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story/>
            </MemoryRouter>
        ),
    ],
};

const Template = (args) => <TextButton {...args} />;
export const Default = Template.bind({});

Default.args = {
    text: "action",
    url: "placeHolder"
};