
import AlertsDemo from './alert-demo';
import ButtonQuantityDemo from './button-quantity-demo';
import ButtonDemo from './button-demo';
import ModalDialogDemo from './modal-dialog-demo';
import IconButtonDemo from './icon-button-demo';
import ImgCarouselDemo from './img-carousel-demo';
import ProgressDemo from './circular-progress-demo';
import RadioButtonListDemo from './radio-button-list-demo';
import SelectListDemo from './select-list-demo';
import SelectOptsDemo from './select-opts-demo';
import TextFieldDemo from './text-field-demo';
import './normalize.css'
import CheckboxSlideDemo from './check-box-slide-demo';
import { Tooltip } from 'oaky-ui-kit';
import LinksStepperDemo from './link-steppers.-demo';
import AcordeonMenuItemDemo from './acordeon-menu-item-demo';
import TableGridDemo from './table-grid-demo';


interface Props {
    layoutStyle: string;
    onLayoutChange: (layoutStyle: string) => void;
}

const Demo: React.FC<Props> = ({ layoutStyle, onLayoutChange }) => {

    return (
        <div>
            <h1>it-simple-react-ui</h1>

            <p>UI Kit with react, typescript, styled-components and CSS</p>

            <SelectOptsDemo
                layoutStyle={layoutStyle}
                onLayoutChange={(newLayoutStyle) => onLayoutChange(newLayoutStyle)} />
            <ModalDialogDemo />
            <AcordeonMenuItemDemo />
            <AlertsDemo />
            <ButtonDemo />
            <ButtonQuantityDemo />
            <CheckboxSlideDemo />
            <ProgressDemo />
            <IconButtonDemo />
            <ImgCarouselDemo />
            <LinksStepperDemo />
            <RadioButtonListDemo />
            <SelectListDemo />
            <TextFieldDemo />
            <h1>Tooltip</h1>
            <Tooltip helpText={"Example help text!"}>Hover mouse over (on yellow background) to show help text</Tooltip>
            <TableGridDemo/>

        </div>
    )
}

export default Demo