import Navbar from "../../components/navBar/Navbar.jsx";
import styles from "./AddComponent.module.css";
import Form from "../../components/form/Form.jsx"

function AddComponent() {
    const fields= [
        {
            fieldName: "Name",
            fieldType: "text",
            id: "name",
            name: "name",
        },
        {
            fieldName: "Type",
            fieldType: "text",
            id: "type",
            name: "type",
        },
        {
            fieldName: "img",
            fieldType: "text",
            id: "img",
            name: "img"
        },
    ]
    return (
        <div className={styles.screen}>
            <Navbar onScreenUrl="/add-component" />
            <Form title="Add component" fields ={fields} commonButton={{text: "Add product"}} textButton={{}} queryUrl="/api/components" redirectUrl="/seeComponents" />
        </div>
    );
}export default AddComponent;