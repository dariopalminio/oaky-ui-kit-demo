
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

    return (

        <div>
            <h2>SelectOptions</h2>
            <CenteringContainer>
            <SelectOptions
                label={('Select core, sensitive or leftButton Layout style type:')}
                list={listToSelect}
                selectedOption={layoutStyle}
                setSelectedOption={(selectedOption) => handleSelect(selectedOption)} 
                placeholder={('field.placeholder.select.option')}/>
                
            </CenteringContainer>


        </div>

    )
}

export default SelectOptsDemo
