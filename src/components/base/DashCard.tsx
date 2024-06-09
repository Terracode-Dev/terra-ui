import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { DollarSign } from 'lucide-react'
import { FaMoneyBill } from 'react-icons/fa'


interface cardData{
    title:string,
    icon:any,
    content:string,
    desc:string
}

const data: cardData []=[
    {
    title:"Pkaya",
    icon:<DollarSign/>,
    content:"$45,231.89",
    desc:"+20.1% from last month"
    },
    {
    title:"Total Revenue",
    icon:<DollarSign/>,
    content:"$45,231.89",
    desc:"+20.1% from last month"
    },
    {
    title:"Total Revenue",
    icon:<DollarSign/>,
    content:"Pakada balanne",
    desc:"+20.1% from last month"
    },
    {
    title:"Total Revenue",
    icon:<FaMoneyBill/>,
    content:"$45,231.89",
    desc:"Palayan Wotto"
    },

]


export default function DashCard() {
    
  return (
    <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
    
    {data.map(card=>(
    < >
      <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {card.title}
                </CardTitle><div className='h-4 w-4 text-muted-foreground'>{card.icon}</div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{card.content}</div>
                <p className="text-xs text-muted-foreground">
                {card.desc}
                </p>
            </CardContent>
        </Card>
    </>
            ))}
    </div>
  )
}
