import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import PopUp from '../../../components/profile/PopUp.jsx';
import PopUpModifyComponent from "../../../components/profile/PopUpModifyComponent.jsx";

function OnlySeeComponent() {
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

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default OnlySeeComponent;
