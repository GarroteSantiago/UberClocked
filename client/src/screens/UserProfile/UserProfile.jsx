import React, {useEffect, useState} from 'react';
import styles from './UserProfile.module.css';
import UserData from "../../components/profile/UserData.jsx";
import InformationSection from "../../components/profile/InformationSection.jsx";
import InfoCard from "../../components/profile/InfoCard.jsx";
import DataField from "../../components/form/DataField.jsx";
import DeletableInfoCard from "../../components/profile/DeletableInfoCard.jsx";
import DeleteAccountButton from "../../components/Buttons_and_others/DeleteAccountButton.jsx";
import axios from "axios";

function UserProfile() {
    const paymentMethods = [];
    const authenticationMethods = [];

    const [userData, setUserData] = useState(null);

    const getUserData = async () => {
        const id = localStorage.getItem("user_id");
        if (!id) {
            console.error('No token found');
            return;
        }
        try {
            const response = await axios.get(`http://localhost:5000/api/users/${id}`);
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    const fullNamePopUpContent =
        <>
            <DataField fieldType="text" fieldName="New name" id="name" name="" onChange="" value=""/>
        </>
    const emailPopUpContent =
        <>
            <DataField fieldType="email" fieldName="New email" id="email" name="" onChange="" value=""/>
        </>
    const cellphonePopUpContent =
        <>
            <DataField fieldType="tel" fieldName="New Cellphone" id="cellphone" name="" onChange="" value=""/>
        </>

    const countryPopUpContent =
        <>
            <DataField fieldType="text" fieldName="Country" id="country" name="" onChange="" value=""/>
        </>
    const provincePopUpContent =
        <>
            <DataField fieldType="text" fieldName="Province" id="province" name="" onChange="" value=""/>
        </>
    const locationPopUpContent =
        <>
            <DataField fieldType="text" fieldName="Location" id="location" name="" onChange="" value=""/>
        </>
    const postcodePopUpContent =
        <>
            <DataField fieldType="text" fieldName="Postcode" id="postcode" name="" onChange="" value=""/>
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
          {!userData ? (
              <div>Cargando perfil...</div> // Podés reemplazarlo por un spinner si querés
          ) : (
              <>
                  <UserData userName={userData.Username} userEmail={userData.Email} />
                  <div className={styles.sectionsContainer}>
                      <InformationSection title="Personal Information"  >
                          <InfoCard title="Full name" data={userData.FullName} popUpContent={fullNamePopUpContent}
                                    popUpText="Are you sure you want to change your name?"/>
                          <InfoCard title="Cellphone" data={userData.Cellphone} popUpContent={cellphonePopUpContent}
                                    popUpText="Are you sure you want to change your cellphone?"/>
                          <InfoCard title="Email" data={userData.Email} popUpContent={emailPopUpContent}
                                    popUpText="Are you sure you want to change your email?"/>
                      </InformationSection>
                      <InformationSection title="Ubication" >
                          <InfoCard title="Country" data={userData.Country} popUpContent={countryPopUpContent}
                                    popUpText="Are you sure you want to change your country?"/>
                          <InfoCard title="Province" data={userData.Province} popUpContent={provincePopUpContent}
                                    popUpText="Are you sure you want to change your province?"/>
                          <InfoCard title="Location" data={userData.Location} popUpContent={locationPopUpContent}
                                    popUpText="Are you sure you want to change your location?"/>
                          <InfoCard title="Postcode" data={userData.Postcode} popUpContent={postcodePopUpContent}
                                    popUpText="Are you sure you want to change your postcode?"/>
                      </InformationSection>
                      <InformationSection title="Payment methods" addMethodPopUp={addPaymentMethodPopUpContent} addMethodText="Add new payment method">
                          {paymentMethods.map((method, index) => (
                              <DeletableInfoCard key={index} title={method.Name} popUpContent={modifyPaymentMethodPopUpContent}
                                                 popUpText="Are you sure you want to modify this method?"/>
                          ))}
                      </InformationSection>
                      <InformationSection title="Authentication methods" addMethodPopUp={addAuthenticationMethodPopUpContent} addMethodText="Add new authentication method">
                          {authenticationMethods.map((method, index) => (
                              <DeletableInfoCard key={index} title={method.Name} popUpContent={modifyAuthenticationMethodPopUpContent}
                                                 popUpText="Are you sure you want to add this method?"/>
                          ))}
                      </InformationSection>
                  </div>
                  <DeleteAccountButton />
              </>
          )}
        </>
    );
}
export default UserProfile;