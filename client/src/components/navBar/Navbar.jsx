import React from "react";
import styles from "./Navbar.module.css";
import SmallLogo from "../logo/SmallLogo.jsx";
import DropDownMenuButton from "../dropDownMenu/DropDownMenuButton.jsx";
import DropDownMenu from "../dropDownMenu/DropDownMenu.jsx";
import DropDownMenuItem from "../dropDownMenu/DropDownMenuItem.jsx";
import DropDownMenuTextButton from "../dropDownMenu/DropDownMenuTextButton.jsx";
import ImageButton from "../Buttons_and_others/ImageButton.jsx";
import TextButton from "../Buttons_and_others/TextButton.jsx";
import {useAuth} from "../authentication/AuthContext.jsx";
import LogoutButton from '../../components/Buttons_and_others/LogoutButton';

function Navbar({onScreenUrl}) {
    const { isAuthenticated } = useAuth();

    let options = <></>

    if (isAuthenticated) {
        options =
            <div className={styles.imageOptions}>
                <ImageButton image="/UserDefaultImage.svg" alt="User Image" url="/profile"/>
                <ImageButton image="/ShoppingCart.svg" alt="Shopping cart" url="/shopping-cart"/>
                <LogoutButton />
            </div>
    } else {
        options =
            <div className={styles.textOptions}>
                <TextButton text="Login" url="/login"></TextButton>
                <TextButton text="Sign up" url="/sign-up"></TextButton>
            </div>
    }

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <SmallLogo/>
                </div>
                <div className={styles.options}>
                    <DropDownMenuTextButton text="Home" url="/home" onScreenUrl={onScreenUrl}/>
                    <DropDownMenuButton menuTitle={"Store"}>
                        <DropDownMenu>
                            <DropDownMenuItem optionText="PC Hardware" optionUrl="/store/pc-hardware" onScreenUrl={onScreenUrl}/>
                            <DropDownMenuItem optionText="Server Hardware" optionUrl="/store/server-hardware" onScreenUrl={onScreenUrl}/>
                        </DropDownMenu>
                    </DropDownMenuButton>
                    <DropDownMenuButton menuTitle={"Build PC"}>
                        <DropDownMenu>
                            <DropDownMenuItem optionText="Build a PC" optionUrl="/build/pc" onScreenUrl={onScreenUrl}/>
                            <DropDownMenuItem optionText="Build a server" optionUrl="/build/server" onScreenUrl={onScreenUrl}/>
                        </DropDownMenu>
                    </DropDownMenuButton>
                    <DropDownMenuTextButton text="Roulette" url="/roulette" onScreenUrl={onScreenUrl}/>
                </div>
                {options}
            </nav>
        </>
    );
}

export default Navbar;
