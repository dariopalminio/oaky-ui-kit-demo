import { useState } from "react";
import {CheckBoxSlide} from "oaky-ui-kit";


function CheckboxSlideDemo() {

    const [check, setCheck] = useState<boolean>(false);

    const toggle = () => {
        console.log("check:", check);
        setCheck(!check)
    }

    return (

        <div>
            <h2>CheckBoxSlide</h2>
            <CheckBoxSlide id={"ExampleId"} label={"Label Example"} toggle={()=>{toggle()}} />
        </div>

    )
}

export default CheckboxSlideDemo