import React, { RefObject } from "react"
import classes from "./Menu.module.scss";

interface IMenuProps {
}
const Menu = React.forwardRef<HTMLDivElement, React.PropsWithChildren<IMenuProps>>((props: React.PropsWithChildren<IMenuProps>, ref:any) => {

    return (
        <div className={classes["menu-card-wrapper"]}>
            <div ref={ref} className={classes["menu-wrapper"]}>
                {props.children}
            </div>

        </div>
    )
})

export default Menu;