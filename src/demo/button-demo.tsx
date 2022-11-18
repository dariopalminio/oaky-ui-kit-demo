
import { CenteringContainer } from "daro-ui-kit"
import { Button, ButtonNeon } from "daro-ui-kit"
import { PreviousNextButtons } from "daro-ui-kit"

function ButtonDemo() {

    const handleClickOpen = () => {
        alert("OK!");
    };

    const handlePrevious = () => {
        //previous
    };

    const handleNext = (): void => {
        //next
    };

    return (

        <div>
            <h2>Button</h2>
            <CenteringContainer>

                <Button type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"primary"}>
                    primary
                </Button>
                &nbsp;&nbsp;
                <Button type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"secondary"}>
                    secondary
                </Button>
                &nbsp;&nbsp;
                <Button type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"danger"}>
                    danger
                </Button>
                &nbsp;&nbsp;
                <Button type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"neutral"}>
                    neutral
                </Button>
                &nbsp;&nbsp;
                <Button type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"success"}>
                    success
                </Button>
                &nbsp;&nbsp;
                <Button type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"info"}>
                    info
                </Button>
                &nbsp;&nbsp;
                <Button type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"warning"}>
                    warning
                </Button>
                &nbsp;&nbsp;
                <Button type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"disabled"}  disabled={true}>
                    disabled
                </Button>
            </CenteringContainer>

            <h2>ButtonNeon</h2>
            <CenteringContainer>
                <ButtonNeon type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"primary"}>
                    primary
                </ButtonNeon>
                &nbsp;&nbsp;
                <ButtonNeon type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"secondary"}>
                    secondary
                </ButtonNeon>
                &nbsp;&nbsp;
                <ButtonNeon type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"danger"}>
                    danger
                </ButtonNeon>
                &nbsp;&nbsp;
                <ButtonNeon type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"neutral"}>
                neutral
                </ButtonNeon>
                &nbsp;&nbsp;
                <ButtonNeon type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"success"}>
                    success
                </ButtonNeon>
                &nbsp;&nbsp;
                <ButtonNeon type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"info"}>
                    info
                </ButtonNeon>
                &nbsp;&nbsp;
                <ButtonNeon type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"warning"}>
                    warning
                </ButtonNeon>
                &nbsp;&nbsp;
                <ButtonNeon type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"disabled"} disabled={true}>
                    disabled
                </ButtonNeon>
            </CenteringContainer>


            <h2>PreviousNextButtons</h2>

            <PreviousNextButtons labelPrevious={'Previous'} labelNext={'Next'}
                handlePrevious={() => handlePrevious()} handleNext={() => handleNext()} />

        </div>

    )
}

export default ButtonDemo