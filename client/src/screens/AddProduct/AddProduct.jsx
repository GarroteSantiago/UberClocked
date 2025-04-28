import React, { useEffect, useState } from 'react';
import Form from "../../components/form/Form.jsx";
import CommonButton from "../../components/Buttons_and_others/CommonButton.jsx";
import Navbar from "../../components/navBar/Navbar.jsx";

function AddProduct() {
    const [fields, setFields] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const commonButton = <CommonButton text={"Load"} />;
    const redirectUrl = "/add-product";
    const queryUrl = "/add-product";

    useEffect(() => {
        async function fetchFields() {
            try {
                const response = await fetch('/api/columns');
                if (!response.ok) {
                    throw new Error('Failed to fetch fields');
                }
                const data = await response.json();
                setFields(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchFields();
    }, []);

    if (loading) {
        return <p>Loading form...</p>;
    }

    if (error) {
        return <p>Error loading form: {error}</p>;
    }

    return (
        <>
            <Navbar onScreenUrl={"/add-product"} />
            <Form
                title="Add Product"
                fields={fields}
                commonButton={commonButton}
                queryUrl={queryUrl}
                redirectUrl={redirectUrl}
            />
        </>
    )
}

export default AddProduct;