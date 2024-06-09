"use client"
import { Link, NavLink, Outlet } from "react-router-dom"
import {
  Bell,
  CircleUser,
  CreditCard,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Receipt,
  Search,
  Settings,
  User,
} from "lucide-react"
  


import { Button } from "@/components/base/ui/button"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/base/ui/dropdown-menu"
import { Input } from "@/components/base/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/base/ui/sheet"

import { ModeToggle } from "./ui/modeToggle"

export default function Sidebar() {

  const [title, setTitle] = useState('TerraLink')
    
    const itemsStyle= "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary focus:text-black"
    const itemsStyleActive= "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground focus:text-black"
    const topItems = [
        {
            name: 'Dashboard',
            path: '/',
            icon:<Home size={20}/>
        },
        {
            name: 'Database',
            path: '/database',
            icon:<LineChart size={20}/>
        },
        {
            name: 'Payment',
            path: '/payment',
            icon:<CreditCard size={20}/>
        },
        {
            name: 'Vault',
            path: '/vault',
            icon:<Package size={20}/>
        }
    ]
    const bottomItems = [
        {
            name: 'Profile',
            path: '/profile',
            icon:<User size={20}/>
        },
        {
            name: 'Billing',
            path: '/bill',
            icon:<Receipt size={20}/>,
        },
        {
            name: 'Settings',
            path: '/setting',
            icon:<Settings size={20}/>
        },
        {
            name: 'Notification',
            path: '/notification',
            icon:<Package size={20}/>
        }
    ]
  return (


    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">TerraLink</span>
            </Link>

            <Link to="/notification" className="ml-auto" >
            <Button  variant="outline" size="icon" className="ml-auto h-8 w-8" onClick={()=>setTitle("Notification")}>
              <Bell className="h-4 w-4" />
            </Button>
            </Link>
        
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {
                    topItems.map((item, index) => (
                        <NavLink to={item.path} key={index} className={itemsStyle} onClick={()=>setTitle(item.name)} >
                            <div>{item.icon}</div>
                            <div >{item.name}</div>
                        </NavLink>
                    ))
                }   
            </nav>
          </div>
          <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium border-t border-gray-300 lg:px-4">
            {
                    bottomItems.map((item, index) => (
                        <NavLink to={item.path} key={index} className={itemsStyle} onClick={() => setTitle(item.name)}>
                            <div>{item.icon}</div>
                            <div >{item.name}</div>
                        </NavLink>
                    ))
                }   
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
            <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {
                    topItems.map((item, index) => (
                        <NavLink to={item.path} key={index} className={itemsStyle} onClick={()=>setTitle(item.name)} >
                            <div>{item.icon}</div>
                            <div >{item.name}</div>
                        </NavLink>
                    ))
                }   
            </nav>
          </div>
          <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium border-t border-gray-300 lg:px-4">
            {
                    bottomItems.map((item, index) => (
                        <NavLink to={item.path} key={index} className={itemsStyle} onClick={() => setTitle(item.name)}>
                            <div>{item.icon}</div>
                            <div >{item.name}</div>
                        </NavLink>
                    ))
                }   
            </nav>
          </div>
              
            </SheetContent>
          </Sheet>
          <h1 className="text-2xl font-semibold ">{title}</h1>
          <div className="w-full flex-1">
            
            <form>
              <div className="relative ">
                
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <ModeToggle/>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          
            {<Outlet/>}
          
        </main>
      </div>
    </div>
  )
}
