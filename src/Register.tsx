import { Input } from "@/components/base/ui/input"
import { Label } from "@/components/base/ui/label"
import { Button } from "./components/base/ui/button"
import { Checkbox } from "@/components/base/ui/checkbox"


function Register(){
    return(
        <>
        <div className="flex items-center justify-center min-h-screen bg-orange-50">
            <div className="w-full max-w-md p-6 m-12 bg-white" >
            <h1 className="mt-2.5 text-3xl font-bold"> Register here</h1>
            <div className="mt-5">
                <form>
                <Label htmlFor="UserName" className="block text-sm font-medium text-gray-700">UserName</Label>
                <Input type="UserName" id="UserName" placeholder="Username" className="block w-full px-3 py-2 mt-1 border rounded-md "/>
            
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</Label>
                <Input type="email" id="email" placeholder="team@Gmail.com" className="block w-full px-3 py-2 mt-1 border rounded-md "/>
            
            
                <Label htmlFor="text" className="block text-sm font-medium text-gray-700">Password</Label>
                <Input type="text" id="password" placeholder="password" className="block w-full px-3 py-2 mt-1 border rounded-md " />
           
                <Label htmlFor="text" className="block text-sm font-medium text-gray-700">Re-Enter Password</Label>
                <Input type="text" id="Re-Enter Password" placeholder="password" className="block w-full px-3 py-2 mt-1 border rounded-md " />

                <Checkbox id="terms1" className="flex mt-10 space-x-2 items-top" />
                <label
                        htmlFor="terms1" className="grid gap-0 text-sm font-medium ">Accept terms and conditions </label>
                        <p className="text-sm text-muted-foreground">You agree to our Terms of Service and Privacy Policy. </p>
           
                <Button className="w-full px-4 py-2 mt-10 font-medium text-white bg-black">Register now</Button>
                </form>
                </div>
            </div>
        </div>
         </>
    );
}
export default Register;
 

