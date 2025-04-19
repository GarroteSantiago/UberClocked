import React from 'react';
import styles from './UserProfile.module.css';
import UserData from "../components/profile/UserData.jsx";
import InformationSection from "../components/profile/InformationSection.jsx";
import InfoCard from "../components/profile/InfoCard.jsx";
import DataField from "../components/form/DataField.jsx";
import DeletableInfoCard from "../components/profile/DeletableInfoCard.jsx";
import DeleteAccountButton from "../components/profile/DeleteAccountButton.jsx";

function UserProfile({user, paymentMethods, authenticationMethods, deleteAccountFunc}) {
    const fullNamePopUpContent =
        <>
            <DataField fieldType="text" fieldName="New Name" id="name"/>
        </>
    const emailPopUpContent =
        <>
            <DataField fieldType="email" fieldName="New Email" id="email"/>
        </>
    const cellphonePopUpContent =
        <>
            <DataField fieldType="tel" fieldName="New Cellphone" id="cellphone"/>
        </>

    const countryPopUpContent =
        <>
            <DataField fieldType="text" fieldName="Country" id="country"/>
        </>
    const provincePopUpContent =
        <>
            <DataField fieldType="text" fieldName="Province" id="province"/>
        </>
    const locationPopUpContent =
        <>
            <DataField fieldType="text" fieldName="Location" id="location"/>
        </>
    const postcodePopUpContent =
        <>
            <DataField fieldType="text" fieldName="Postcode" id="postcode"/>
        </>

    const addPaymentMethodPopUpContent =
        <>
        </>
    const modifyPaymentMethodPopUpContent =
        <>
        </>

    const addAuthenticationMethodPopUpContent =
        <>
        </>
    const modifyAuthenticationMethodPopUpContent =
        <>
        </>

    return (
        <>
            <UserData userName={user.FullName} userEmail={user.Email}/>
            <div className={styles.sectionsContainer}>
                <InformationSection title="Personal Information"  >
                    <InfoCard title="Full name" data={user.FullName} popUpContent={fullNamePopUpContent}
                              popUpText="Are you sure you want to change your name?"/>
                    <InfoCard title="Cellphone" data={user.Cellphone} popUpContent={emailPopUpContent}
                              popUpText="Are you sure you want to change your cellphone?"/>
                    <InfoCard title="Email" data={user.Email} popUpContent={cellphonePopUpContent}
                              popUpText="Are you sure you want to change your email?"/>
                </InformationSection>
                <InformationSection title="Ubication" >
                    <InfoCard title="Country" data={user.Country} popUpContent={countryPopUpContent}
                              popUpText="Are you sure you want to change your country?"/>
                    <InfoCard title="Province" data={user.Province} popUpContent={provincePopUpContent}
                              popUpText="Are you sure you want to change your province?"/>
                    <InfoCard title="Location" data={user.Location} popUpContent={locationPopUpContent}
                              popUpText="Are you sure you want to change your location?"/>
                    <InfoCard title="Postcode" data={user.PostCode} popUpContent={postcodePopUpContent}
                              popUpText="Are you sure you want to change your postcode?"/>
                </InformationSection>
                <InformationSection title="Payment methods" addMethodPopUp={addPaymentMethodPopUpContent} addMethodText="Add new payment method">
                    {paymentMethods.map((method, index) => (
                        <DeletableInfoCard title={method.Name} popUpContent={modifyPaymentMethodPopUpContent}
                        popUpText="Are you sure you want to modify this method?"/>
                    ))}
                </InformationSection>
                <InformationSection  title="Payment methods" addMethodPopUp={addAuthenticationMethodPopUpContent} addMethodText="Add new authentication method" >
                    {authenticationMethods.map((method, index) => (
                        <DeletableInfoCard title={method.Name} popUpContent={modifyAuthenticationMethodPopUpContent}
                                           popUpText="Are you sure you want to add this method?"/>
                    ))}
                </InformationSection>
            </div>
            <DeleteAccountButton onclick={deleteAccountFunc}/>
        </>
    );
}
export default UserProfile;