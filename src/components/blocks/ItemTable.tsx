import React from 'react';
import { useState } from 'react';
import { Button } from "@/components/base/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/base/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/base/ui/dialog";
import { Input } from "@/components/base/ui/input";
import AddItem from '@/components/blocks/AddItems';
import { ScrollArea } from '@/components/base/ui/scroll-area';

export default function ItemTable() {

//json object structure
    const Get = {
        tabledata: {
            tablename: "Table 1",
            description: "The sun dipped below the horizon, painting the sky with hues of orange and pink. Birds chirped their final melodies of the day as the breeze rustled the leaves. Children’s laughter echoed through the park, a perfect symphony of joy. The world seemed at peace, if only for a moment.?",
            lastupdate: "",
            color: "",
            column: ["column1", "column2", "column3", "column4","column5","column8","column9","column10","column5","column8","column9","column10","column5","column8","column9","column10"],
            data: [
                { column1: "John", column2: "Doe", column3: "Developer", column4:"fuck" },
                { column1: "Jane", column2: "Smith", column3: "Designer" },
                { column1: "Mike", column2: "Johnson", column3: "Manager" },
                { column1: "Emily", column2: "Davis", column3: "Developer" },
                { column1: "Chris", column2: "Brown", column3: "Analyst" },
                { column1: "Pat", column2: "Taylor", column3: "Designer" },
                { column1: "Sam", column2: "Williams", column3: "Developer" },
                { column1: "Alex", column2: "Lee", column3: "Manager" },
                { column1: "Jordan", column2: "Clark", column3: "Analyst" },
                { column1: "Taylor", column2: "Walker", column3: "Developer" },
                { column1: "Morgan", column2: "Hall", column3: "Designer" },
                { column1: "Jamie", column2: "Allen", column3: "Manager" },
                { column1: "Cameron", column2: "Young", column3: "Developer" },
                { column1: "Sydney", column2: "Hernandez", column3: "Analyst" },
                { column1: "Casey", column2: "King", column3: "Designer" },
                { column1: "Riley", column2: "Wright", column3: "Developer" },
                { column1: "Skyler", column2: "Lopez", column3: "Manager" },
                { column1: "Avery", column2: "Hill", column3: "Analyst" },
                { column1: "Parker", column2: "Scott", column3: "Developer" },
                { column1: "River", column2: "Green", column3: "Designer" },
              ]
        }
    }
    //state variables
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); 
    const [visibleColumns, setVisibleColumns]
     = useState(Get.tabledata.column.reduce((acc, col) => ({ ...acc, [col]: true }), {}));
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    //pagination logics
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Get.tabledata.data.slice(indexOfFirstItem, indexOfLastItem);

    const tableheading="h-12 px-2  align-middle font-medium text-muted-foreground "

    //data maping 
    const tableheader = Get.tabledata.column.map((col, index) =>(
    visibleColumns[col] && <th className={tableheading} key={index}>{col}</th>));
    const tableRows = currentItems.map((row, rowIndex) => (
        <tr className='border-2' key={rowIndex}>
            {Get.tabledata.column.map((col, colIndex) => (
                visibleColumns[col]&&<td className=" p-1 text-center" key={colIndex}>{row[col]}</td>
                
            ))}
    
            <td className={tableheading}>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost' className="h-8 w-8 p-2 items-center shadow-lg rounded-lg focus:border-none">
                            {/* {/* <span className="sr-only">Open menu</span> */}
                            <DotsHorizontalIcon className="h-4 w-4" /> 
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleDelete(row["Table id"])}>
                            Delete
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleUpdate(row)}>Update</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </td>
        </tr>
    ));
    //paginations            
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(Get.tabledata.data.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    //column hidding
    const toggleColumnVisibility = (column) => {
        setVisibleColumns(prevState => ({ ...prevState, [column]: !prevState[column] }));
    };
    const handleRowClick = (id: string) => {
        // Handle row click 
        // rendering the Table component
    };

    const handleDelete = (id: string) => {
        //delete table row
    };

    const handleUpdate = (row) => {
        setSelectedRow(row);
        setIsDialogOpen(true);
    };
    const handleDialogClose = () => {
        setIsDialogOpen(false);
        setSelectedRow(null);
    };
    return (
        <div className="h-screen tb:w-screen p-4 sm:p-10 pt-0 pb-16 w-[74vw]">
            <div className="flex flex-col pt-5 px-4 sm:px-6 lg:px-8 ">
                <div className="flex flex-col sm:flex-row justify-between">
                    <div className="flex-1">
                        <h1 className="text-2xl sm:text-4xl font-bold">{Get.tabledata.tablename}</h1>
                        <p className="text-gray-600 mt-3 sm:mt-5 text-sm sm:text-base">{Get.tabledata.description}</p>
                    </div>
                    <div className="flex mt-4  sm:mt-0">
                        <Dialog >
                            <DialogTrigger asChild>
                                <Button className="mr-2 text-sm  sm:text-base">Add Item</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] h-[500px]">
                                <DialogHeader className="text-left">
                                    <DialogTitle className="text-lg font-bold sm:text-xl">Add Item</DialogTitle>
                                    <DialogDescription className="mt-2 text-sm sm:text-base sm:mt-1">
                                        Make changes to profile here. Click save when you're done.
                                    </DialogDescription>
                                </DialogHeader>
                                <AddItem />
                            </DialogContent>
                        </Dialog>
                        <Button className="text-sm sm:text-base"><FontAwesomeIcon icon={faGear} /></Button>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between pt-5">
                    <div className="flex-1">
                        {/* Additional content can go here */}
                    </div>
                    <div className="relative">
                        <Button className="mr-2" variant="outline" onClick={() => setDropdownOpen(!dropdownOpen)}>
                            Columns
                        </Button>
                        {dropdownOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1">
                                    {Get.tabledata.column.map((col, index) => (
                                        <div key={index} className="flex items-center px-4 py-2 text-sm text-gray-700">
                                            <input
                                                type="checkbox"
                                                checked={visibleColumns[col]}
                                                onChange={() => toggleColumnVisibility(col)}
                                                className="mr-2"
                                            />
                                            {col}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex rounded-xl mt-4 overflow-x-scroll    ">
                <table className="border-2 min-w-max  rounded-xl ">
                    <thead className="border-2 rounded-md">
                        <tr className="border-b transition-colors hover:bg-muted/50 ">
                            {tableheader}
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-4">
                    <button onClick={prevPage} disabled={currentPage === 1} className="mx-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">Previous</button>
                    {pageNumbers.map((number) => (
                        <button key={number} onClick={() => paginate(number)} className={`mx-1 px-4 py-2 ${currentPage === number ? 'bg-gray-500 text-white' : 'bg-gray-200 hover:bg-gray-300'} rounded`}>{number}</button>
                    ))}
                    <button onClick={nextPage} disabled={currentPage === Math.ceil(Get.tabledata.data.length / itemsPerPage)} className="mx-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">Next</button>
            </div>
            {isDialogOpen && selectedRow && (
                <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
                    <DialogContent className="sm:max-w-[425px] h-[500px]">
                        <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className='h-[300px] w-[350px] rounded-md border p-4'>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                            {Get.tabledata.column.map((column, i) => (
                            <React.Fragment key={i}>
                            <label className="text-right">
                                {column}
                            </label>
                            <Input id="name" defaultValue={selectedRow[column]} className="col-span-3" />
                            </React.Fragment>
                            ))}
                            </div>
                        </div>
                        </ScrollArea>
                        <DialogFooter>
                            <Button type="submit" onClick={handleDialogClose}>Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    )
}