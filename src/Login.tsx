import { Button } from "./components/base/ui/button"
import { ChevronRight, Sliders } from "lucide-react"
import { Input } from "@/components/base/ui/input"
import { Label } from "@/components/base/ui/label"
import { Card, CardContent } from "@/components/base/ui/card"
/*import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/base/ui/carousel"*/
import { Link } from "react-router-dom"
import DemoCarousel from "./components/base/ui/carouselnew"
import  { ImageSlider } from "./components/base/ui/caro"


function Login(){
    return(
        <>
        <div className="grid grid-cols-2">
            <div className="flex items-center justify-center h-screen bg-white">
            <ImageSlider images={[{url: 'src/assets/th (1).jpeg', alt: 'image1'},
                                {url: 'src/assets/th.jpeg', alt: 'image2'},
                                 {url: 'src/assets/trace-3157431_1920.jpg', alt: 'image3'}]}/>
            </div>
            
            <div className="flex flex-col items-center justify-center flex-1 bg-white">
                <div className="w-full max-w-md p-6 py-10" >
                
                
                <h1 className="mt-2.5 text-3xl font-bold ">LogIn</h1>
                <p className="mt-2.5 mb-8 text-gray-600">login to account to see more</p>

                <div className="mt-5">
                 <form>   
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</Label>
                <Input type="email" id="email" placeholder="team@Gmail.com" className="block w-full px-3 py-2 mt-1 border rounded-md "/>
                <Label htmlFor="text" className="block text-sm font-medium text-gray-700">Password</Label>
                <Input type="text" id="password" placeholder="password" className="block w-full px-3 py-2 mt-1 border rounded-md " />
                <Link to='/home'><Button className="w-full px-4 py-2 mt-10 font-medium text-white bg-black">login</Button></Link>
                </form>
                </div>

                <div className="text-sm text-right">
                <Link to='/register'>Sign up</Link>
                </div>
                <p className="mt-6 text-xs text-center text-gray-600 ">or login with</p>
                <div className="flex justify-center mt-4 space-x-3">
                <Button variant="outline" size="icon">
                <ChevronRight className="w-4 h-4" />
                </Button>
                <Button  variant="outline" size="icon" >
                <ChevronRight className="w-4 h-4 " />
                </Button>
                <Button variant="outline" size="icon">                                                                                    
                <ChevronRight className="w-4 h-4" />
                </Button>
                
                </div>
                </div>
            </div>
            
        </div>
        
        </>
    )
}
export default Login










