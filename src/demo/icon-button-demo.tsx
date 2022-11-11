import {IconButton} from "daro-ui-kit"
import { RiShoppingCart2Fill } from "react-icons/ri";
import { RiFunctionFill } from "react-icons/ri";
import { RiMailSendFill } from "react-icons/ri";
import { CenteringContainer } from "daro-ui-kit"


function IconButtonDemo() {

    const handleClick = () => {
        alert("OK!");
    };

    return (

        <div>
            <h2>IconButton with react-icons</h2>
            <CenteringContainer>
                <IconButton
                    onClick={() => handleClick()}>
                    <RiShoppingCart2Fill />
                </IconButton>

                <IconButton
                    onClick={() => handleClick()}>
                    <RiFunctionFill />
                </IconButton>

                <IconButton
                    onClick={() => handleClick()}>
                    <RiMailSendFill />
                </IconButton>
            </CenteringContainer>
        </div>

    )
}

export default IconButtonDemo