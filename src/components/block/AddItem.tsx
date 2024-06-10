import React, { useState } from 'react';
import { Button } from "@/components/base/ui/button";
import { Input } from "@/components/base/ui/input";
import { Label } from "@/components/base/ui/label";
import { ScrollArea } from '@/components/base/ui/scroll-area';

const GET = {
    formdata: [{ "Name": "text", "Description": "text",image:"file",  "Hello": "text", "malleh": "text" }],
};

export default function AddItem() {
    const formFields = GET.formdata[0];

    const [previews, setPreviews] = useState<{ [key: string]: string }>({});
    const [fileFields, setFileFields] = useState(
        Object.entries(formFields).filter(([key, value]) => value === 'file').map(([key]) => ({ id: key, type: 'file' }))
    );
    const [fileFieldCount, setFileFieldCount] = useState(fileFields.length);
    const [warning, setWarning] = useState("");

    const handleImageUpload = (event, key) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviews(prev => ({ ...prev, [key]: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const addFileField = () => {
        if (fileFieldCount >= 5) {
            setWarning("You can only add up to 5 files.");
            return;
        }
        const newFieldId = `file-${fileFieldCount}`;
        setFileFields([...fileFields, { id: newFieldId, type: 'file' }]);
        setFileFieldCount(fileFieldCount + 1);
        setWarning("");
    };

    return (
        <ScrollArea className="h-[450px] w-full rounded-md border p-2">
            <div className="mr-2 ml-2">
                <div>
                    <form className="">
                        {Object.entries(formFields).map(([key, value]) => (
                            <>
                                {value !== "file" ? (
                                    <>
                                        <Label htmlFor={key} className="text-right col-span-1">
                                            {key}
                                        </Label>
                                        <Input
                                            id={key}
                                            placeholder={key}
                                            className="col-span-2"
                                            type={value}
                                        />
                                    </>
                                ) : null}
                            </>
                        ))}
                        <div className="grid grid-cols-4">
                            {fileFields.map(field => (
                                <div key={field.id} className="relative p-2 col-span-1">
                                    <input
                                        type={field.type}
                                        id={field.id}
                                        accept="image/*"
                                        name={field.id}
                                        onChange={(event) => handleImageUpload(event, field.id)}
                                        className="absolute inset-0 w-full h-full opacity-0"
                                    />
                                    <label htmlFor={field.id} className="relative block w-full h-full">
                                        <img
                                            src={previews[field.id] || "https://bit.ly/3ubuq5o"}
                                            alt=""
                                            className="w-[90px] h-[70px] object-cover"
                                        />
                                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 text-white font-semibold w-full">
                                            <span>+</span>
                                        </div>
                                    </label>
                                </div>
                            ))}
                        </div>
                        {warning && <div className="text-red-500 mt-2">{warning}</div>}
                        <div className="flex justify-end mt-4">
                            <Button type="button" onClick={addFileField}>
                                Add More Files
                            </Button>
                        </div>
                        

                        <div className="flex justify-end mt-4">
                            <Button type="submit">
                                Add
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </ScrollArea>
    );
}
