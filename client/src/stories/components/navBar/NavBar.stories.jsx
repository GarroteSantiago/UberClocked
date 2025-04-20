import Navbar from '../../../components/navBar/Navbar.jsx';
import { MemoryRouter } from "react-router-dom";

export default {
    title: 'Components/Navbar/Navbar',
    component: Navbar,
};

const Template = (args) =>
    <MemoryRouter>
        <Navbar {...args} />
    </MemoryRouter>

export const Default = Template.bind({});

Default.args = {
    loggedIn: true,
    onScreenUrl: "/build/pc"
}