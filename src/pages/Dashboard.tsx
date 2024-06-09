import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/base/ui/card"

import { Overview } from "@/components/base/overview"
import DashCard from "@/components/base/DashCard"
import DashRecent from "@/components/base/DashRecent"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div>
          <DashCard />
        </div>
        <div className="grid  md:gap-2 lg:grid-cols-2 xl:grid-cols-5">
            
          <Card className="col-span-3 p-2">
            <CardTitle className="mt-5 mb-10">Overview</CardTitle>
            <CardContent className="pl-2 mt-3">
                <Overview/>
            </CardContent>
          </Card> 
            
          <Card  className="col-span-2 ">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8 ">
              <DashRecent/>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
