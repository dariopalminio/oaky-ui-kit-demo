
import { useState } from 'react';
import { CenteringContainer } from "oaky-ui-kit"
import { RadioButtonList } from "oaky-ui-kit"




function RadioButtonListDemo() {
    const listToSelect = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    const listToSelect2 = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    const [selectedOption, SetSelectedOption] = useState(0);


    const handleSelectOption = async (item: string, index: number) => {
        alert(`You select item ${item} with index ${index}`);
    };

    return (

        <div>
            <h2>RadioButtonListDemo</h2>
            <form>
                <CenteringContainer>

                    <RadioButtonList
                        id="mySelectListAddress"
                        label={'Select any option (circular=true):'}
                        currentSelected={selectedOption}
                        list={listToSelect}
                        onClickSelect={(item: string, index: number) => handleSelectOption(item, index)}
                        styleType={"secondary"}
                    />


                </CenteringContainer>
            </form>
            <form>
                <CenteringContainer>
                    <RadioButtonList
                        id="mySelectListAddress"
                        label={'Select any option (circular=false):'}
                        currentSelected={selectedOption}
                        list={listToSelect2}
                        circular={false}
                        onClickSelect={(item: string, index: number) => handleSelectOption(item, index)}

                    />
                </CenteringContainer>
            </form>

        </div>

    )
}

export default RadioButtonListDemo

