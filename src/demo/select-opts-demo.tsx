
import { useState } from 'react';
import { CenteringContainer } from "daro-ui-kit"
import {SelectOptions} from "daro-ui-kit"
/**
<SelectOpts
                    label={'Select any option:'}
                    list={listToSelect}
                    selectedOption={selectedOption}
                    setSelectedOption={(selectedOption) => handleChange(selectedOption)} />
 */
function SelectOptsDemo() {
    const listToSelect = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    const [selectedOption, setSelectedOption] = useState('Option 1');

    const handleSelect = (selectedOption: string) => {
        setSelectedOption(selectedOption);
    };

    return (

        <div>
            <h2>SelectOptions</h2>
            <CenteringContainer>

            <SelectOptions
                label={('Select following Options:')}
                list={listToSelect}
                selectedOption={selectedOption}
                setSelectedOption={(selectedOption) => handleSelect(selectedOption)} 
                placeholder={('field.placeholder.select.option')}/>
                
            </CenteringContainer>


        </div>

    )
}

export default SelectOptsDemo
