
import { CenteringContainer } from "daro-ui-kit"
import {ModalDialog} from "daro-ui-kit"
import {useModalDialog} from "daro-ui-kit"


function ModalDialogDemo() {
    const { isDialogOpen, toggle } = useModalDialog()

    return (

        <div>
            <h2>ModalDialog</h2>
            <CenteringContainer>

                <button onClick={toggle}>Show Modal</button>
                <ModalDialog
                    isOpen={isDialogOpen}
                    onClose={toggle}
                >
                    <p>Modal dialog content...</p>
                </ModalDialog>
            </CenteringContainer>

        </div>

    )
}

export default ModalDialogDemo