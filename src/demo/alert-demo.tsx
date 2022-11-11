import { useState } from "react";
import {Alert} from "daro-ui-kit"
import {useAlertPopup} from "daro-ui-kit";
import {AlertPopup} from "daro-ui-kit"
import { CenteringContainer } from "daro-ui-kit";


function AlertsDemo() {
    const { show, toggle } = useAlertPopup();

    return (

        <div>
            <h2>Alert</h2>

            <CenteringContainer>
                <Alert severity="info">{"info"}</Alert>
                <Alert severity="success">{"success"}</Alert>
                <Alert severity="warning">{"warning"}</Alert>
                <Alert severity="error">{"error"}</Alert>
            </CenteringContainer>
            
            <h2>AlertPopup</h2>
            <CenteringContainer>
                <button onClick={() => toggle()}>Show alert popup</button>
                {show && (<AlertPopup severity="info" toggle={() => toggle()}>
                    information
                </AlertPopup>)
                }
            </CenteringContainer>
        </div>

    )
}

export default AlertsDemo