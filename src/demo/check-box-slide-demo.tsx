import { useState } from "react";
import {CheckBoxSlide} from "oaky-ui-kit";


function CheckboxSlideDemo() {

    const [check, setCheck] = useState<boolean>(false);

    const toggle = () => {
        console.log("check:", check);
        setCheck(!check)
    }
    const textStyle = {
        fontSize: "11px", 
    };
    
    return (

        <div>
            <h2>CheckBoxSlide</h2>
            <p style={textStyle}>Un botón “Checkbox Toggle Slider” (on/off button) que se desplaza de apagado a encendido (selección de verdadero o falso) y viceversa.</p>
            <CheckBoxSlide id={"ExampleId"} label={"Label Example"} toggle={()=>{toggle()}} />
        </div>

    )
}

export default CheckboxSlideDemo