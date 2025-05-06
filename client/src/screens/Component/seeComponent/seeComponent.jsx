import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import PopUp from '../../../components/profile/PopUp.jsx';
import PopUpModifyComponent from "../../../components/profile/PopUpModifyComponent.jsx";

function SeeComponent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [component, setComponent] = useState(null);
    const [showPopUp, setShowPopUp] = useState(false);
    const [error, setError] = useState('');
    const [actionType, setActionType] = useState('');
    const [modifiedComponent, setModifiedComponent] = useState(null);
    const [showModifyPopUp, setShowModifyPopUp] = useState(false);


    const getComponent = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/components/${id}`);
            setComponent(response.data);
        } catch (error) {
            console.error(error);
            setError('Error fetching component');
        }
    };

    const deleteComponent = async () => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/components/${id}`);
            console.log(response);
            setShowPopUp(false);
            navigate("/home");
        } catch (error) {
            console.error(error);
            setError('Error deleting component');
        }
    };

    const modifyComponent = async (updatedData) => {
        try {
            const response = await axios.patch(`http://localhost:5000/api/components/${id}`, updatedData);
            console.log(response);
            setShowPopUp(false);
            navigate("/home");
        } catch (error) {
            console.error(error);
            setError('Error modifying component');
        }
    };

    const handleCancel = () => {
        setShowPopUp(false);
        setShowModifyPopUp(false);
    };

    const handleConfirm = () => {
        if (actionType === 'delete') {
            deleteComponent();
        }
    };

    const handleModifyClick = () => {
        setActionType('modify');
        setModifiedComponent({ ...component });
        setShowModifyPopUp(true);
    };

    const handleDeleteClick = () => {
        setActionType('delete');
        setShowPopUp(true);
    };

    useEffect(() => {
        getComponent();
    }, [id]);

    if (!component) {
        return <p>Cargando componente...</p>;
    }

    return (
        <div>
            <p>{component.name}</p>
            <img src={component.img} alt="Component image" />
            <p>{component.type}</p>
            <p>ID: {component.component_id}</p>

            <button onClick={handleDeleteClick}>Eliminar componente</button>
            <button onClick={handleModifyClick}>Modificar Componente</button>

            {showPopUp && actionType === 'delete' && (
                <PopUp
                    text="¿Estás seguro de que quieres eliminar este componente?"
                    onClose={handleCancel}
                    onConfirm={handleConfirm}
                />
            )}

            {showModifyPopUp && (
                <PopUpModifyComponent
                    onClose={handleCancel}
                    onConfirm={(updatedData) => {
                        modifyComponent(updatedData);
                    }}
                    component={modifiedComponent}
                />
            )}


            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default SeeComponent;
