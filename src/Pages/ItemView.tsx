import React, { useState } from "react";
import { FaCopy, FaUpload } from 'react-icons/fa';
import { IoEllipsisVertical } from 'react-icons/io5';
import { Card, CardContent } from "@/components/base/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/base/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/base/ui/dropdown-menu";
import { Button } from "@/components/base/ui/button";
import { Dialog, DialogOverlay } from '@/components/base/ui/dialog';
import AddItem from './UpdateForm';

const Item = {
  data: { column1: "John", column2: "Doe", column3: "Developer", column6: "****" }
};

export function IView() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState(Item.data);

  const handleUpdateClick = () => {
    setFormData(Item.data);
    setIsDialogOpen(true);
  };

  const handleDeleteClick = () => {
    setFormData({ column1: "", column2: "", column3: "", column6: "" });
  };

  const handleFormSubmit = (updatedData) => {
    console.log("Updated data:", updatedData);
    setFormData(updatedData);
    setIsDialogOpen(false);
  };

  return (
    <div className="container p-4 px-4 mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex flex-row">
          <div>
          <p className="mr-4 text-3xl font-bold">Item Num</p></div>

          
           {/* <label className="text-xs">copy URL</label>
            <Button variant="ghost"><FaCopy className="ml-2 text-xs cursor-pointer" /></Button>*/}
    
        </div>

        
        <div className="flex items-center gap-4">
          <Button><FaUpload className="" />Create URL</Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button><IoEllipsisVertical className="text-white" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute right-0 px-4 py-2 mt-2 text-black bg-white rounded shadow-lg">
              <DropdownMenuItem
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={handleUpdateClick}
              >
                Update
              </DropdownMenuItem>
              <DropdownMenuItem
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={handleDeleteClick}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

          
      <label className="text-xs">copy URL</label>
      <Button variant="ghost"><FaCopy className="ml-2 text-xs cursor-pointer" /></Button>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card className="col-span-1 p-6 border-none md:col-span-2">
          <CardContent>
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center justify-center p-6 aspect-square">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        <Card className="col-span-1 p-6 border-none md:col-span-3">
          <CardContent>
            <form className="space-y-6">
              {Object.entries(formData).map(([key, value], index) => (
                <div className="flex items-center w-full" key={index}>
                  <label htmlFor={`add-item-${index + 1}`} className="text-sm font-medium text-gray-700 w-60">{key}</label>
                  <input
                    id={`add-item-${index + 1}`}
                    type="text"
                    placeholder={`Add Item ${index + 1}`}
                    className="flex-grow w-full p-2 ml-0 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={value}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    disabled
                  />
                </div>
              ))}
            </form>
          </CardContent>
        </Card>
      </div>

      {isDialogOpen && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogOverlay className="fixed inset-0 bg-black bg-opacity-30" />
          <AddItem itemData={formData} onSubmit={handleFormSubmit} />
        </Dialog>
      )}
    </div>
  );
}

export default IView;
