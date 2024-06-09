import React, { useState, useEffect } from 'react';
import { Button } from "@/components/base/ui/button";
import { Input } from "@/components/base/ui/input";
import { Label } from "@/components/base/ui/label";
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { DialogContent, DialogTitle, DialogDescription } from '@/components/base/ui/dialog';

export default function AddItem({ itemData, onSubmit }: { itemData: any, onSubmit: any }) {
    const [formData, setFormData] = useState(itemData);

    useEffect(() => {
        setFormData(itemData);
    }, [itemData]);

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        onSubmit(formData);
    };

    const handleChange = (event: { target: { id: any; value: unknown; }; }) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value as string });
    };

    return (
        <DialogContent className="fixed max-w-md p-6 bg-white rounded-lg shadow-lg">
            <DialogTitle className="text-lg font-medium">Update Table</DialogTitle>
            <DialogDescription className="mt-2 text-sm text-gray-500">
                Update Your Table Here
            </DialogDescription>
            <ScrollArea className="w-full h-full p-2 border rounded-md">
                <div className="ml-2 mr-2">
                    <form onSubmit={handleSubmit}>
                        {Object.entries(formData).map(([key, value]) => (
                            <div key={key} className="flex items-center w-full mb-4">
                                <Label htmlFor={key} className="col-span-1 text-right">{key}</Label>
                                <Input id={key} placeholder={key} className="col-span-2" type="text" value={value} onChange={handleChange} />
                            </div>
                        ))}
                        <div className="flex justify-end mt-4">
                            <Button type="submit">Update</Button>
                        </div>
                    </form>
                </div>
            </ScrollArea>
        </DialogContent>
    );
}
