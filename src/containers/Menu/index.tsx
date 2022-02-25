import React from "react"
import classes from "./Menu.module.scss";

interface IMenuProps {

}
const Menu = (props: React.PropsWithChildren<IMenuProps>) => {

    return (
        <div className={classes["menu-card-wrapper"]}>
            <div className={classes["menu-wrapper"]}>
                {props.children}
            </div>

        </div>
    )
}

export default Menu;