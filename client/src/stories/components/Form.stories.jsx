import Form from "../../components/form/Form.jsx";
import {MemoryRouter} from "react-router-dom";

export default {
    title: "Components/Form/Form",
    component: Form,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story/>
            </MemoryRouter>
        ),
    ],
};

const Template = (args) => <Form {...args} />;
export const Default = Template.bind({});

Default.args = {
    title: "Form Title",
    fields: [
        {
            fieldName: "Field Test 1",
        }
    ],
    commonButton: {
        text: "commonButton",
        action: () => alert("commonButton clicked"),
    },
    textButton: {
        text: "textButton",
        url: "placeHolder"
    }
};