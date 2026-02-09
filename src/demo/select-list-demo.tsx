import { useState } from 'react';
import { CenteringContainer } from "oaky-ui-kit"
import {SelectList} from "oaky-ui-kit"


function SelectListDemo() {
    const listToSelect = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    const [selectedOption, SetSelectedOption] = useState(-1);

    const handleDelete = async (index: number) => {
        alert('Delete element was clicked to element with index: ' + index);
    };

    const handleClickSelect = async (index: number) => {
        SetSelectedOption(index);
    };

    const textStyle = {
        fontSize: "11px", 
    };

    return (

        <div>
            <h2>SelectList</h2>
            <p style={textStyle}>Los componentes de lista de selección se utilizan para recopilar información proporcionada por el usuario de una lista de opciones. 
                Además permite ejecutar acciones mediante botones de íconos que lanzan las acciones (por ejemplo “borrar” un elemento del listado). Por ejemplo puede servir para mostrar una lista de direcciones, permitir elegir una dirección o borrar una dirección.</p>
            <CenteringContainer>

                <SelectList
                    id="mySelectList"
                    label="Select any option:"
                    currentSelected={selectedOption}
                    list={listToSelect}
                    onClickSelect={(item, index) => handleClickSelect(index)}
                    onClickDelete={(item, index) => handleDelete(index)} 
                    withDelete={true}
                    />
            </CenteringContainer>


        </div>

    )
}

export default SelectListDemo

