import React, { Dispatch, forwardRef, RefObject, SetStateAction, useEffect, useRef } from "react";
import Button from "../../components/Button";
import Menu from "../../containers/Menu";

interface IHomePageProps {
    setMenuRef: Dispatch<SetStateAction<any>>
}

const HomePage = (props: React.PropsWithChildren<IHomePageProps>) => {
    let menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        props.setMenuRef(menuRef);
        setTimeout(()=>{
            console.log("RF", menuRef);   
        },1000) 
    }, [])
    
    return (
        <Menu ref={menuRef}>
        <Button onClick={() => alert("A")} title="K"></Button>
            <Button onClick={() => alert("A")} title="s"></Button>
            <Button onClick={() => alert("A")} title="f"></Button>
        </Menu>
    )
}




export default HomePage;