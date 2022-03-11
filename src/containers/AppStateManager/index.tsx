import HomePage from "../../pages/HomePage";
import { useNavigate, Routes, Route } from "react-router-dom";
import { RefObject, useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface IAppStateManagerProps {

}
const AppStateManager = (props: IAppStateManagerProps) => {
    let navigate = useNavigate();
    const [menuRef, setMenuRef] = useState<RefObject<HTMLDivElement> | null>(null)
    console.log('menuRef: ', menuRef);
    let w;
    if(menuRef?.current?.clientWidth){
        w = menuRef?.current?.clientWidth;
    }
    if(menuRef && w)
        gsap.to(menuRef.current, { x: (-window.innerWidth-w)/2 });
        console.log('w: ', w);
        console.log('window.innerWidth: ', window.innerWidth);

    useEffect(() => {
        console.log('menuRef2: ', menuRef);
        /**if(menuRef)
            gsap.to(menuRef.current, { rotation: "+=360" });/*/
    
    }, [])
    
    return (
        <>
        <Routes>
            <Route path="" element={<HomePage setMenuRef={setMenuRef}/>} />
        </Routes>
            
        </>
    )
}

export default AppStateManager;