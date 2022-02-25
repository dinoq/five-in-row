import React, { MouseEventHandler} from "react"
import classes from "./Button.module.scss"

interface IButtonProps{
    onClick: MouseEventHandler,
    title: string
}
const Button = (props: IButtonProps) => {


    return (
        <div className={"button-wrapper"}>
            <button className={classes.button} onClick={props.onClick}>{props.title}</button>
        </div>

    )
}

export default Button;