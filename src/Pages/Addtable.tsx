import { useState } from 'react'; 
import { Button } from "@/components/base/ui/button"
import { Input } from "@/components/base/ui/input"
import { Label } from "@/components/base/ui/label"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/base/ui/dialog"
import { FaPlus, FaTrash } from 'react-icons/fa';
import { ScrollArea } from '@radix-ui/react-scroll-area';


export function DialogDemo() {
  const [rows, setRows] = useState([{ column: '', fieldType: '' }]);

  const addRow = () => {
    setRows([...rows, { column: '', fieldType: '' }]);
  };

  const deleteRow = (index: number) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Table</Button>
      </DialogTrigger>
      <DialogOverlay className="fixed inset-0 bg-black bg-opacity-30" />
      <DialogContent className="fixed max-w-md p-6 bg-white rounded-lg shadow-lg 2 ">
        <DialogTitle className="text-lg font-medium">Add Table</DialogTitle>
        <DialogDescription className="mt-2 text-sm text-gray-500">
          Make changes to your profile here.Click save when you are done.
        </DialogDescription>
        <div className="overflow-y-auto max-h-[500px] p-4">
          <form>
            <div className="grid gap-4 py-4">
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="tableName" className="text-right">
                  Table Name
                </Label>
                <Input
                  id="tableName"
                  placeholder="Table Name"
                  className="col-span-3 border-gray-400"
                />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="creator" className="text-right">
                  Creator
                </Label>
                <Input
                  id="creator"
                  placeholder="Creator"
                  className="col-span-3 border-gray-400"
                />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  placeholder="Description"
                  className="col-span-3 border-gray-400"
                />
              </div>
            </div>

            <div className="p-1">
              <div className="overflow-hidden rounded-lg">
                <ScrollArea className="max-w-full">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="p-2 text-sm text-black border border-gray-400">Column</th>
                        <th className="p-2 text-sm text-black border border-gray-400">Field Type</th>
                        <th className="p-2 text-sm text-black border border-gray-400">Column Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, index) => (
                        <tr key={index}>
                          <td className="p-2 border border-gray-400">
                            <Input
                              type="text"
                              value={row.column}
                              onChange={(e) => {
                                const updatedRows = [...rows];
                                updatedRows[index].column = e.target.value;
                                setRows(updatedRows);
                              }}
                              className="w-full border-none"
                            />
                          </td>
                          <td className="p-2 border border-gray-400">
                            <select
                              value={row.fieldType}
                              onChange={(e) => {
                                const updatedRows = [...rows];
                                updatedRows[index].fieldType = e.target.value;
                                setRows(updatedRows);
                              }}
                              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                            >
                              <option value=""></option>
                              <option value="Numbers">Numbers</option>
                              <option value="Text">Text</option>
                            </select>
                          </td>
                          <td className="flex justify-center p-2 border border-gray-400">
                            <Button variant="outline" type="button" onClick={() => deleteRow(index)}>
                              <FaTrash />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </ScrollArea>
                <div className="flex justify-end gap-4 mt-2">
                  <Button variant="outline" type="button" onClick={addRow} className="w-10 h-10 border border-gray-400 rounded-b-lg">
                    <FaPlus />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-5">
              <Button type="submit">
                Add
              </Button>
            </div>
          </form>
        </div>
        
      </DialogContent>
    </Dialog>
  );
}