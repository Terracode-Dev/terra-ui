//parent component of payments and orders
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/base/ui/tabs";
import Payment from "@/components/blocks/Payment";
import Order from "@/components/blocks/Order";

export default function PaymentOrder() {
    return (
        <div className="pt-5 p-5 tb:w-screen">
        <Tabs defaultValue="account" className="">
            <TabsList>
                <TabsTrigger value="Payment">Payment</TabsTrigger>
                <TabsTrigger value="Orders">Orders</TabsTrigger>
            </TabsList>
            <TabsContent value="Payment" className="">
                <Payment />
            </TabsContent>
            <TabsContent value="Orders">
                <Order />
            </TabsContent>
        </Tabs>
        </div>
    );

}


