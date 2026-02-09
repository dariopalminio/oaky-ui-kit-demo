
import { CenteringContainer } from "oaky-ui-kit"
import {ImgCarousel} from "oaky-ui-kit"
import Image1 from './assets/aurora-1197753_960_720.jpg';
import Image2 from './assets/sunset-1373171__340.jpg';

function ImgCarouselDemo() {

    const images: string[] = [Image1,Image2,"","","",""];

    const textStyle = {
        fontSize: "11px", 
    };

    return (

        <div>
            <h2>ImgCarousel</h2>
            
            <p style={textStyle}>Componente de carrusel de imágenes que permite navegar entre varias imágenes. 
                Se puede usar para mostrar una galería de imágenes o una presentación de imágenes.</p>

            <CenteringContainer>

                <ImgCarousel
                    uniqueId={"uniqueIdImageCarouselDemo"}
                    images={images} 
                    width={"100%"}
                    height={"300px"} />

            </CenteringContainer>

        </div>

    )
}

export default ImgCarouselDemo