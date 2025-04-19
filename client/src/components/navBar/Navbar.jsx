import React from "react";
import styles from "./Navbar.module.css";
import SmallLogo from "../logo/SmallLogo.jsx";
import DropDownMenuButton from "../dropDownMenu/DropDownMenuButton.jsx";
import DropDownMenu from "../dropDownMenu/DropDownMenu.jsx";
import DropDownMenuItem from "../dropDownMenu/DropDownMenuItem.jsx";
import DropDownMenuTextButton from "../dropDownMenu/DropDownMenuTextButton.jsx";
import ImageButton from "../Buttons_and_others/ImageButton.jsx";

function Navbar({loggedIn}) {

    let options = <></>

    if ({loggedIn}) {
        options =
            <div className={styles.imageOptions}>
                <ImageButton image="/UserDefaultImage.svg" alt="User Image" url="#"/>
                <ImageButton image="/ShoppingCart.svg" alt="Shopping cart" url="#"/>
            </div>
    } else {
        options =
            <div className={styles.textOptions}>
            </div>
    }



    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <SmallLogo/>
                </div>
                <div className={styles.options}>
                    <DropDownMenuTextButton text="Home" url="#" />
                    <DropDownMenuButton menuTitle={"Store"}>
                        <DropDownMenu>
                            <DropDownMenuItem optionText="PC Hardware" optionUrl="#"/>
                            <DropDownMenuItem optionText="Server Hardware" optionUrl="#"/>
                            <DropDownMenuItem optionText="Build a PC" optionUrl="#"/>
                        </DropDownMenu>
                    </DropDownMenuButton>
                    <DropDownMenuButton menuTitle={"Build PC"}>
                        <DropDownMenu>
                            <DropDownMenuItem optionText="Build a PC" optionUrl="#"/>
                            <DropDownMenuItem optionText="Build a server" optionUrl="#"/>
                        </DropDownMenu>
                    </DropDownMenuButton>
                    <DropDownMenuTextButton text="Roulette" url="#" />
                </div>
                {options}
            </nav>
        </>
    );
}

export default Navbar;
