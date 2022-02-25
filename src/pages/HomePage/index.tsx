import Button from "../../components/Button";
import Menu from "../../containers/Menu";

interface IHomePageProps {

}

const HomePage = (props: IHomePageProps) => {


    return (
        <Menu>
        <Button onClick={() => alert("A")} title="K"></Button>
            <Button onClick={() => alert("A")} title="s"></Button>
            <Button onClick={() => alert("A")} title="f"></Button>
        </Menu>
    )
}



export default HomePage;