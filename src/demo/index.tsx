
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
import logo from './assets/oaky-ui-kit-logo.png';
import SplitableContainerDemo from './splitable-container-demo';

interface Props {
    layoutStyle: string;
    onLayoutChange: (layoutStyle: string) => void;
}

const Demo: React.FC<Props> = ({ layoutStyle, onLayoutChange }) => {

    const textStyle = {
        fontSize: "11px", 
    };

    return (
        <div>
            <img src={logo} alt="Oaky-ui-kit"  width="20%"/>
            <p>UI Kit con React, Typescript, styled-components and CSS</p>

            <h2>Sistema de layout</h2>
            <p style={textStyle}>El layout por defecto es el clásico barra superior (topbar), con barra lateral (leftbar, generalmente izquierda) con el contenedor principal de páginas (MainContainer) y un pié de página (footer).</p>

            <h2>Estilo de Layout</h2>
            <p style={textStyle}>El layout es configurable con “layoutStyle” y puede tener los valores de: core, bullet, sensitive. </p>
            <p style={textStyle}>El tipo “core” es la opción en que el sidebar (barra lateral de menú) se encuentra oculto y se desoculta (se abre) haciendo clic en el ícono de menú superior (generalmente en la izquierda), y para cerrarlo se hace clic en una cruz de cierre. </p>
            <p style={textStyle}>El tipo “sensitive” es la opción en que el sidebar está oculto y se abre cuando se pasa el mouse por arriba. </p>
            <p style={textStyle}>Y la opción “bullet” consiste en abrir o cerrar el sidebar con un “bullet” (ícono circular) sobre el borde de la barra lateral.</p>

            <SelectOptsDemo
                layoutStyle={layoutStyle}
                onLayoutChange={(newLayoutStyle) => onLayoutChange(newLayoutStyle)} />
            <ModalDialogDemo />

            <h2>MenuIconButton</h2>
            <p style={textStyle}>Los íconos botones de menú despliegan un menú emergente de opciones cuando se hace clic sobre ellos. El ejemplo es el ícono en la esquina superior derecha, en la barra superior.</p>
            
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
            <SplitableContainerDemo />
        </div>
    )
}

export default Demo