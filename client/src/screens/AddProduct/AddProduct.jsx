import Navbar from "../../components/navBar/Navbar.jsx";
import styles from "./AddProduct.module.css";
import Form from "../../components/form/Form.jsx"

function AddProduct() {
    const fields= [
        {
            fieldName: "Name",
            fieldType: "text",
            id: "name",
            name: "name",
        },
        {
            fieldName: "Description",
            fieldType: "text",
            id: "productDescription",
            name: "productDescription"
        },
        {
            fieldName: "Price",
            fieldType: "number",
            id: "price",
            name: "price"
        },
        {
            fieldName: "img",
            fieldType: "text",
            id: "img",
            name: "img"
        },
        {
            fieldName: "Stock",
            fieldType: "checkbox",
            id: "Stock",
            name: "Stock"
        },
        {
            fieldName: "Stock",
            fieldType: "number",
            id: "Stock",
            name: "Stock"
        },
        {
            fieldName: "Component id",
            fieldType: "number",
            id: "Component_id",
            name: "Component_id"
        },
        {
            fieldName: "Rating (1-5)",
            fieldType: "number",
            id: "rating",
            name: "rating"
        },
    ]
    return (
        <div className={styles.screen}>
            <Navbar onScreenUrl="/add-product" />
            <Form title="Add Product" fields ={fields} commonButton={{text: "Add product"}} textButton={{}} queryUrl="/api/products" redirectUrl="/home" />
        </div>
    );
}

export default AddProduct;
