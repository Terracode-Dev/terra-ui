import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/base/ui/card";

import { Overview } from "@/components/blocks/overview";
import DashCard from "@/components/blocks/DashCard";
import DashRecent from "@/components/blocks/DashRecent";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div>
          <DashCard />
        </div>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-5">
          <Card className="col-span-full md:col-span-2 xl:col-span-3 p-4">
            <CardTitle className="mt-5 mb-10">Overview</CardTitle>
            <CardContent className="pl-2 mt-3">
              <Overview />
            </CardContent>
          </Card>

          <Card className="col-span-full md:col-span-2 xl:col-span-2 p-4">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <DashRecent />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}