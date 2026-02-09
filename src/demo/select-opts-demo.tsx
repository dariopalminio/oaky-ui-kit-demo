
import { useState } from 'react';
import { CenteringContainer } from "oaky-ui-kit"
import {SelectOptions} from "oaky-ui-kit"

interface Props {
    layoutStyle: string;
    onLayoutChange: (layoutStyle: string) => void;
}

const SelectOptsDemo: React.FC<Props> = ({ layoutStyle, onLayoutChange }) => {

    const listToSelect = ['core', 'sensitive', 'bullet'];
    //const [selectedOption, setSelectedOption] = useState('primary');

    const handleSelect = (selectedOption: string) => {
        onLayoutChange(selectedOption);
    };

    const textStyle = {
        fontSize: "11px", 
    };
    
    return (

        <div>
            <h2>SelectOptions</h2>
            <p style={textStyle}>Componente de selección de opciones que permite al usuario seleccionar una opción de una lista predefinida.</p>
            <CenteringContainer>
            <SelectOptions
                label={('Seleccione el tipo de layout que da el estilo del menú lateral:')}
                list={listToSelect}
                selectedOption={layoutStyle}
                setSelectedOption={(selectedOption) => handleSelect(selectedOption)} 
                placeholder={('field.placeholder.select.option')}/>
                
            </CenteringContainer>


        </div>

    )
}

export default SelectOptsDemo
