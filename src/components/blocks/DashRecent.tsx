import { Avatar, AvatarFallback, AvatarImage } from '../base/ui/avatar'

interface clientData {
    avatar:string,
    name:string,
    email:string,
    price:string
}

const data: clientData[]=[
    {
        avatar:"/avatars/01.png",
        name:"Appa",
        email:"appa@gmail.com",
        price:"12000.00"
    },
    {
        avatar:"/avatars/01.png",
        name:"Appa",
        email:"appa@gmail.com",
        price:"12000.00"
    },
    {
        avatar:"/avatars/01.png",
        name:"Appa",
        email:"appa@gmail.com",
        price:"12000.00"
    },
    {
        avatar:"/avatars/01.png",
        name:"Appa",
        email:"appa@gmail.com",
        price:"12000.00"
    },
    {
        avatar:"/avatars/01.png",
        name:"Appa",
        email:"appa@gmail.com",
        price:"12000.00"
    },
    {
        avatar:"/avatars/01.png",
        name:"Appa",
        email:"appa@gmail.com",
        price:"12000.00"
    },
]

export default function DashRecent() {
  return (
    <div>
        {data.map(card=>(
            <>
            <div className="flex items-center  gap-4 space-y-6">
                <Avatar className="hidden h-9 w-9 mt-5 sm:flex">
                    <AvatarImage src={card.avatar} alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 ">
                    <p className="text-sm font-medium leading-none">
                        {card.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {card.email}
                    </p>
                </div>
                <div className="ml-auto font-medium">{card.price}</div>
            </div>
            </>
        ))}
    </div>
  )
}
