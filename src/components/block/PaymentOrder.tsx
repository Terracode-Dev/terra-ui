//parent component of payments and orders
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/base/ui/tabs";
import Payment from "./Payment";
import Order from "./Order";

export default function PaymentOrder() {
    return (
        <div className="pt-5 p-10">
        <Tabs defaultValue="account" className="w-full">
            <TabsList>
                <TabsTrigger value="account">Payment</TabsTrigger>
                <TabsTrigger value="password">Orders</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Payment />
            </TabsContent>
            <TabsContent value="password">
                <Order />
            </TabsContent>
        </Tabs>
        </div>
    );

}
