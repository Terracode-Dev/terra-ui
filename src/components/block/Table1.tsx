import React from 'react';
import { useState } from 'react';
import { Button } from "../base/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../base/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../base/ui/dialog";
import { Input } from "../base/ui/input";
import AddItem from './AddItem';

export default function Table1() {

//json object structure
    const Get = {
        tabledata: {
            tablename: "fruits",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem corrupti cumque minima nesciunt delectus dolore deserunt ullam ut consequuntur ratione quos quod nemo, sint corporis ab similique eligendi saepe?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem corrupti cumque minima nesciunt delectus dolore deserunt ullam ut consequuntur ratione quos quod nemo, sint corporis ab similique eligendi saepe?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem corrupti cumque minima nesciunt delectus dolore deserunt ullam ut consequuntur ratione quos quod nemo, sint corporis ab similique eligendi saepe?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem corrupti cumque minima nesciunt delectus dolore deserunt ullam ut consequuntur ratione quos quod nemo, sint corporis ab similique eligendi saepe?",
            lastupdate: "",
            color: "",
            column: ["column1", "column2", "column3", "column6",'column7','column8'],
            data: [
                { column1: "John", column2: "Doe", column3: "Developer",column6:"fuck"},
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

    const tableheading="h-12 px-2  align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"

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
                        <Button variant="ghost" className="h-8 w-8 p-2 items-center shadow-lg rounded-lg focus:border-none">
                            <span className="sr-only">Open menu</span>
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
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={()=> handleview(row)}>
                            Item view
                        </DropdownMenuItem>
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
        // Update the data from the database
    };
    const handleview = (row) => {

    };

    return (
        <div className="h-screen p-10 pt-0 pb-16">
            <div className=" flex flex-col pt-5 ">
                <div className="flex flex-row justify-between">
                    <div >
                        <h1 className="text-4xl font-bold">{Get.tabledata.tablename}</h1>
                        <p className="text-gray-600 mt-5">{Get.tabledata.description}</p>
                    </div>
                    <div className='flex'>
                    <Dialog >
                    <DialogTrigger asChild>
                    <Button className="mr-2"> Add Item</Button>
                    </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] h-[600px]">
                        <DialogHeader className="text-left sm:text-left">
                            <DialogTitle className="text-lg font-bold sm:text-xl">Add Item</DialogTitle>
                            <DialogDescription className="mt-2 text-sm sm:text-base sm:mt-1">
                            Make changes to profile here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <AddItem/>
                        </DialogContent>
                    </Dialog>
                    <Button><FontAwesomeIcon icon={faGear} /></Button>
                    </div>

                    
                </div>
                <div className='flex flex-row justify-between pt-5'>
                <div>
                
                </div>
                <div className="relative">
                    
                    <Button className='mr-2' variant="outline" onClick={() => setDropdownOpen(!dropdownOpen)}>
                         Columns
                    </Button>
                    {dropdownOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
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
            <div className="flex overflow-y-auto shadow-lg rounded-md mt-4">
                <table className="border-2 w-full  rounded-xl">
                    <thead className="border-2 rounded-md">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
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
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit Data</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
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
                        <DialogFooter>
                            <Button type="submit" onClick={handleDialogClose}>Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    )
}
