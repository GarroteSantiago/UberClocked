import React, { useEffect, useState } from 'react';
import styles from './UserProfile.module.css';
import UserData from "../../components/profile/UserData.jsx";
import InformationSection from "../../components/profile/InformationSection.jsx";
import InfoCard from "../../components/profile/InfoCard.jsx";
import DataField from "../../components/form/DataField.jsx";
import DeletableInfoCard from "../../components/profile/DeletableInfoCard.jsx";
import DeleteAccountButton from "../../components/Buttons_and_others/DeleteAccountButton.jsx";
import axios from "axios";
import Navbar from "../../components/navBar/Navbar.jsx";

function UserProfile() {
    const [user, setUser] = useState({});
    const [form, setForm] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    const paymentMethods = [];
    const authenticationMethods = [];

    const userId = localStorage.getItem('user_id');

    const getUserData = async () => {
        if (!userId) {
            console.error('No id found');
            return;
        }
        try {
            const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
            setUser(response.data);
            setForm({
                FullName: response.data.FullName || '',
                Email: response.data.Email || '',
                Cellphone: response.data.Cellphone || '',
                Country: response.data.Country || '',
                Province: response.data.Province || '',
                Location: response.data.Location || '',
                PostCode: response.data.PostCode || ''
            });
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            await axios.patch(`http://localhost:5000/api/users/${userId}`, form);
            alert('Profile updated successfully');
            setIsEditing(false);
            getUserData();
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Error updating profile');
        }
    };

    const fullNamePopUpContent = <DataField fieldType="text" fieldName="New Name" id="name" />;
    const emailPopUpContent = <DataField fieldType="email" fieldName="New Email" id="email" />;
    const cellphonePopUpContent = <DataField fieldType="tel" fieldName="New Cellphone" id="cellphone" />;
    const countryPopUpContent = <DataField fieldType="text" fieldName="Country" id="country" />;
    const provincePopUpContent = <DataField fieldType="text" fieldName="Province" id="province" />;
    const locationPopUpContent = <DataField fieldType="text" fieldName="Location" id="location" />;
    const postcodePopUpContent = <DataField fieldType="text" fieldName="Postcode" id="postcode" />;

    const addPaymentMethodPopUpContent = <DataField fieldType="text" fieldName="New Payment Method" id="newPayment" />;
    const modifyPaymentMethodPopUpContent = <DataField fieldType="text" fieldName="Modify Method" id="modPayment" />;

    const addAuthenticationMethodPopUpContent = <DataField fieldType="text" fieldName="New Auth Method" id="newAuth" />;
    const modifyAuthenticationMethodPopUpContent = <DataField fieldType="text" fieldName="Modify Auth Method" id="modAuth" />;

    return (
        <>
            <div className={styles.screen}>
                <Navbar onScreenUrl={""} />
                <UserData userName={user.FullName} userEmail={user.Email} />

                <div className={styles.sectionsContainer}>
                    <InformationSection title="Personal Information">
                        {isEditing ? (
                            <>
                                <DataField fieldType="text" fieldName="Full Name" id="FullName" value={form.FullName} onChange={handleChange} />
                                <DataField fieldType="tel" fieldName="Cellphone" id="Cellphone" value={form.Cellphone} onChange={handleChange} />
                                <DataField fieldType="email" fieldName="Email" id="Email" value={form.Email} onChange={handleChange} />
                            </>
                        ) : (
                            <>
                                <InfoCard title="Full name" data={user.FullName} popUpContent={fullNamePopUpContent} popUpText="Are you sure you want to change your name?" />
                                <InfoCard title="Cellphone" data={user.Cellphone} popUpContent={cellphonePopUpContent} popUpText="Are you sure you want to change your cellphone?" />
                                <InfoCard title="Email" data={user.Email} popUpContent={emailPopUpContent} popUpText="Are you sure you want to change your email?" />
                            </>
                        )}
                    </InformationSection>

                    <InformationSection title="Ubication">
                        {isEditing ? (
                            <>
                                <DataField fieldType="text" fieldName="Country" id="Country" value={form.Country} onChange={handleChange} />
                                <DataField fieldType="text" fieldName="Province" id="Province" value={form.Province} onChange={handleChange} />
                                <DataField fieldType="text" fieldName="Location" id="Location" value={form.Location} onChange={handleChange} />
                                <DataField fieldType="text" fieldName="Postcode" id="PostCode" value={form.PostCode} onChange={handleChange} />
                            </>
                        ) : (
                            <>
                                <InfoCard title="Country" data={user.Country} popUpContent={countryPopUpContent} popUpText="Are you sure you want to change your country?" />
                                <InfoCard title="Province" data={user.Province} popUpContent={provincePopUpContent} popUpText="Are you sure you want to change your province?" />
                                <InfoCard title="Location" data={user.Location} popUpContent={locationPopUpContent} popUpText="Are you sure you want to change your location?" />
                                <InfoCard title="Postcode" data={user.PostCode} popUpContent={postcodePopUpContent} popUpText="Are you sure you want to change your postcode?" />
                            </>
                        )}
                    </InformationSection>

                    <InformationSection title="Payment methods" addMethodPopUp={addPaymentMethodPopUpContent} addMethodText="Add new payment method">
                        {paymentMethods.map((method, index) => (
                            <DeletableInfoCard
                                key={`payment-${index}`}
                                title={method.Name}
                                popUpContent={modifyPaymentMethodPopUpContent}
                                popUpText="Are you sure you want to modify this method?"
                            />
                        ))}
                    </InformationSection>

                    <InformationSection title="Authentication methods" addMethodPopUp={addAuthenticationMethodPopUpContent} addMethodText="Add new authentication method">
                        {authenticationMethods.map((method, index) => (
                            <DeletableInfoCard
                                key={`auth-${index}`}
                                title={method.Name}
                                popUpContent={modifyAuthenticationMethodPopUpContent}
                                popUpText="Are you sure you want to modify this method?"
                            />
                        ))}
                    </InformationSection>
                </div>
                <DeleteAccountButton />
            </div>
        </>
    );
}

export default UserProfile;
