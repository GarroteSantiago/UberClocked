import TextButtonForm from "../../../components/form/TextButtonForm.jsx"
import { MemoryRouter } from "react-router-dom";

export default {
    title: "Components/Button/TextButtonForm",
    component: TextButtonForm,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story/>
            </MemoryRouter>
        ),
    ],
};

const Template = (args) => <TextButtonForm {...args} />;
export const Default = Template.bind({});

Default.args = {
    text: "action",
    url: "placeHolder"
};