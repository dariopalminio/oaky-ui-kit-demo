
import {SplitableContainer, SplitLeft, SplitBar, SplitRight} from "oaky-ui-kit";
import styled from 'styled-components';


const ContainerToSplitable = styled.div`
    width: 100%;
    height: 25vh;
    margin: 0;
    padding: 0;
    `;

interface Props {

}

const SplitableContainerDemo: React.FC<Props> = ({ }) => {

    const idSpliter = "Daro";

    return (

        <div>
            <h2>SplitableContainer</h2>
            <ContainerToSplitable>
                <SplitableContainer id={idSpliter}>
                    <SplitLeft id={idSpliter} style={{ background: "#F0D9FA" }}>
                        <p>We are uncovering better ways of developing</p>
                        <p>software by doing it and helping others do it.</p>
                        <p>Through this work we have come to value:</p>
                    </SplitLeft>
                    <SplitBar id={idSpliter}></SplitBar>
                    <SplitRight id={idSpliter} style={{ background: "#F2FFCF" }}>
                        <p>Individuals and interactions over processes and tools</p>
                        <p>Working software over comprehensive documentation</p>
                        <p>Customer collaboration over contract negotiation</p>

                    </SplitRight>
                </SplitableContainer>
            </ContainerToSplitable>

        </div >

    )
}

export default SplitableContainerDemo