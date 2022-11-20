import { CenteringContainer, LinksStepper } from "oaky-ui-kit"
import { useState } from "react";


function LinksStepperDemo() {
    const [ selectedIndex, setSelectedIndex ] = useState(-1)

    const list = [
        {
            "id": "6338707686b0c1591fc3b14b",
            "name": "Category 1",
            "description": "Category 1 description",
            "__v": 0
        },
        {
            "id": "6338708186b0c1591fc3b14d",
            "name": "Category 2",
            "description": "Category 2 description",
            "__v": 0
        },
        {
            "id": "6338708186b0c1591fc3b123",
            "name": "Category 3",
            "description": "Category 3 description",
            "__v": 0
        }
    ];

    const handleSelect = async (index: number) => {
        setSelectedIndex(index);
    alert(`Selected index: ${index}`);
      }

    return (

        <div>
            <h2>LinksStepper</h2>
            <CenteringContainer>

                <LinksStepper
                    list={list}
                    currentIndex={selectedIndex}
                    onClick={(index: number) => handleSelect(index)} />
            </CenteringContainer>

        </div>

    )
}

export default LinksStepperDemo