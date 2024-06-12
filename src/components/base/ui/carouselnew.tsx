
import '@coreui/coreui/dist/css/coreui.min.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
import { CCarousel, CCarouselItem, CImage, } from '@coreui/react';
function DemoCarousel() {
    return(
    <CCarousel controls indicators className='h-screen'>
  <CCarouselItem>
    <CImage className="h-screen d-block w-100" src="src/assets/th (1).jpeg" alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="h-screen d-block w-100" src="src/assets/th.jpeg" alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="h-screen d-block w-100" src="src/assets/trace-3157431_1920.jpg" alt="slide 3" />
  </CCarouselItem>
</CCarousel>
    );
}
export default DemoCarousel;               